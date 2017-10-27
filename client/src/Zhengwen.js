export default {
    text:`
一直对HTML文件中的外部资源解析有一些疑问，最近也没找到时间去详细看spec，所以本来想在国庆抽一天详细学习一下[W3C HTML5 Chapter 4.11 Scripting](https://www.w3.org/TR/html5/scripting-1.html)，看能否学到什么有意义的知识再来谈这个问题，可是昨晚看到一篇很好的文章，解释了一些我长久以来的疑惑，于是我也准备写一篇文章总结该文里提到的知识，目的主要有两点：第一是巩固自己所学的知识；第二是尽量使原文的知识更加结构化，帮助初学者。

还是先贴上原文的链接：

[Building the DOM faster: speculative parsing, async, defer and preload](https://hacks.mozilla.org/2017/09/building-the-dom-faster-speculative-parsing-async-defer-and-preload/)

翻译：

[更快地构建 DOM: 使用预解析, async, defer 以及 preload](http://zcfy.cc/article/4224)

那就让我们开始吧！

## 前言

Web发展至今，优化页面加载速度的手段已经有很多了，比如：压缩和资源优化，缓存，CDN，代码分割以及 tree shaking，但从代码结构来优化页面加载速度依然是一个行之有效且成本更低的方法。

而从代码结构入手来优化页面加载速度，最主要的着眼点还是在于优化外部资源的解析，因此本文的目的就是在于讲解DOM中外部资源的解析方式以及如何更快的解析关键资源。

## 基础知识

### 外部资源的解析过程

首先我们需要明确的一点是，DOM中的什么东西属于外部资源，比较常见的以下这些：

\`\`\` html
<script src="a.js"></script>
<link rel="stylesheet" href="b.css">
<img src="c.png"></img>
...
\`\`\`

当浏览器在解析DOM时遇到这些资源的时候，它会执行两个操作，加载和解析：

    加载：获取资源（从其他的服务器下载、在本机上读取）
    解析：分析并使用资源

也就是说，对一个外部资源来说，解析实际上包括了两个过程：获取资源和解析资源。

### CSSOM

DOM想必读者已经很熟悉了，所以主要讲一下CSSOM。

CSSOM的全称是CSS Object Model，是针对于CSS的对象模型，它与DOM的主要一项区别在于由于CSS是层叠的，所以不可以增量的构建。

![blah](https://raw.githubusercontent.com/StudentWan/studentwan.github.io/master/assets/2017/09/pic-2.png)

CSSOM和DOM一样，作为外部访问CSS资源的接口存在。

## 外部资源的解析

这里主要讲解两种资源的解析，一种是\`<script>\`，另一种是外部CSS样式。

### \`<script>\`解析

DOM中对\`<script>\`标签的解析是依序同步的，并且会造成DOM构建的阻塞，让我们来看看解析的流程：

![blahblah](https://raw.githubusercontent.com/StudentWan/studentwan.github.io/master/assets/2017/09/pic-3.png)


为什么对\`<script>\`会阻塞DOM构建呢？因为JS代码中可以更改DOM的结构，并且JS代码还可能会查询DOM节点，如果放任DOM继续构建的话，可能导致意料之外的结果。

### 外部CSS样式解析

由于CSS样式对DOM结构是没有影响的，那么在我们预想中外部CSS样式的解析可能是这样无阻塞的：

![blahblahblah](https://raw.githubusercontent.com/StudentWan/studentwan.github.io/master/assets/2017/09/pic-4.png)

但事实上，JS的代码可能需要获取CSS中的样式，而在一个CSS外部资源中的CSSOM构建完成之前，JS代码是无法获取CSS中的样式的，于是就会出现以下这种情况：

![blahblahblahblah](https://raw.githubusercontent.com/StudentWan/studentwan.github.io/master/assets/2017/09/pic-5.png)


这样，由于CSSOM的解析和构建过程阻塞了JS代码的执行，就使得外部CSS样式的解析间接阻塞了DOM的构建。

另外有一点值得注意的是，CSS的解析即使不阻塞DOM构建，也会阻塞DOM渲染，否则会出现[FOUC](https://codepen.io/micikato/pen/JroPNm)

这就是为什么样式应该放在顶部，使其更快完成解析。

## 优化外部资源的解析

### 预解析（Speculative Parsing）

对于同步解析的外部资源，在2008年IE实现了一种优化方式，并且逐渐被其他浏览器采纳，这就是预解析。

预解析的概念很好理解：在加载一个外部资源时，虽然继续构建DOM是容易造成问题的，但是可以分析接下来的HTML文档结构并检索出其中的外部资源，在检索到外部资源后以一定的优先级将其添加到下载队列，这样在遇到这一个资源的时候，可能它已经加载完成而直接进入解析流程，还是以图片说明更加直白：

![blahblahblahasfah](https://raw.githubusercontent.com/StudentWan/studentwan.github.io/master/assets/2017/09/pic-6.png)


也就是说，并行下载，依序同步执行。

但预解析存在几个问题：

> 1、 浏览器同时可以下载的文件数量是有限制的。

> 2、 检索出并下载到的外部资源可能是不需要的，因为JS执行的时候可能修改DOM结构。

> 3、 同步的脚本仍然会阻塞解析器，降低DOM的构建速度。

> 4、 预解析过程并不是完全可控的。

第一个问题不是什么大问题，浏览器会以合适的算法排列下载优先级来保证我们预解析的效率，并且我们可以将不需要预解析的、不那么重要的资源用内联JS动态生成。（预解析时不会执行内联JS中的代码）

第二个问题虽然可能造成一些网络资源的损失，但毕竟修改外部资源的情况很少，并且仅仅是下载不需要的资源也不会造成DOM构建出错。

### defer和async

针对预解析存在的第三个问题，我们可以使用\`<script>\`标签中的defer或async属性来指定异步解析脚本，使得一些不重要的脚本异步解析。

defer和async都是告诉浏览器哪些脚本是需要异步解析的，不过这两个属性并不完全一样。

defer是在HTML 4.01标准中为标签\`<script>\`加入的属性。它告诉浏览器：可以在该脚本在“后台”加载时继续构建DOM，在构建DOM完成后，在\`DOMContentLoaded\`事件触发前，执行外部资源中的JS代码，并且是按照标签在文档中的顺序执行的。

async是在HTML5标准中为标签\`<script>\`加入的属性。它告诉浏览器：可以在该脚本在“后台”加载时继续构建DOM，但一旦该脚本加载完成后立即执行（这里的立即执行可以立即阻塞DOM构建，但是不会打断正在执行的脚本，如果当该脚本加载完成时正好在执行另一段JS脚本，则等待这段脚本执行完成后再执行），另外指定了async属性的\\<script\\>标签会在window的load事件触发前执行。

async的标准决定了它以下几个特性：

> 1、async的资源在加载时的优先级比较低，以尽量使得它不阻塞DOM构建。

> 2、同时指定async属性的script标签不一定会按照它们在文档中出现的顺序执行。

另外async和defer属性只能用于外部脚本。

### 预加载（preload）

因为预解析只会预加载少数类型的资源并遵循不同浏览器自己设计的逻辑，所以存在上文提到的第四个问题。

而最新的Web标准中的\`<link rel="preload">\`可以让我们对于外部资源的预加载拥有更加自主的控制。

它的使用方式是这样的：

\`\`\` html
<link rel="preload" href="very_important.js" as="script">
\`\`\`

它几乎可以链接到所有的外部资源上，如：
    
> script

> style

> image

> font

> audio

> video

在加载资源时，这个特性可能会很有用，比如说对于字体资源的预加载。

在从前，字体资源的是隐藏的比较深的。浏览器只有在CSS已经被解析、应用，并且CSS规则匹配到对应的DOM节点后才会加载字体资源，而现在我们可以用preload使字体预先加载：

\`\`\` html
<link rel="preload" href="font.woff" as="font" crossorigin>
\`\`\`

注意，预加载字体必须设置crossorigin属性，即使字体文件在同一个域。

preload特性很好用，不过这个特性目前的支持有限，可以用CAN I USE来确定是否可用。
    `
}
