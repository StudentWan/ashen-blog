# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.6.35)
# Database: ashen_db
# Generation Time: 2017-12-27 09:51:00 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table ABOUT
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ABOUT`;

CREATE TABLE `ABOUT` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `ABOUT` WRITE;
/*!40000 ALTER TABLE `ABOUT` DISABLE KEYS */;

INSERT INTO `ABOUT` (`id`, `content`)
VALUES
	(1,'');

/*!40000 ALTER TABLE `ABOUT` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ARTICLE
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ARTICLE`;

CREATE TABLE `ARTICLE` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `tags` varchar(255) NOT NULL DEFAULT '',
  `createTime` datetime NOT NULL,
  `lastEditTime` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `content` longtext NOT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `ARTICLE` WRITE;
/*!40000 ALTER TABLE `ARTICLE` DISABLE KEYS */;

INSERT INTO `ARTICLE` (`id`, `title`, `tags`, `createTime`, `lastEditTime`, `content`, `isPublished`)
VALUES
	(198,'Dutch National Flag问题 - One Pass算法解读','算法,DNF','2017-12-25 18:51:13','2017-12-27 17:21:07','荷兰三色旗问题（以下简称DNF问题），是Dijkstra提出的一个经典问题，让我们先来看看它的描述：\n\nGiven an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.\n\nHere, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.\n\n<!-- more -->\n\n### 解题思路\n\n乍眼一看，这个问题就是一个简单的排序，我们写一个快排也很简单。\n\n但问题在于数组中只有三种元素，按照排序算法来写肯定会有较大的性能损失。\n\n于是我们可以很直观的想到一个Two Pass算法，即，第一次遍历统计数组得到0，1，2的数目，第二次遍历按序填充0，1，2。\n\n那么有没有One Pass的算法呢？\n\n答案是有的，不过理解起来有一定的难度。\n\n### One Pass算法介绍\n\n让我们先看算法吧。\n\n```java\n    public void sortColors(int[] nums) {\n        int n = nums.length;\n        int left = 0;\n        int right = n - 1;\n        int i = 0;\n        \n        while (i <= right) {\n            if (nums[i] == 0) {\n                nums[i] = nums[left];\n                nums[left] = 0;\n                i++;\n                left++;\n            }\n            else if (nums[i] == 2) {\n                nums[i] = nums[right];\n                nums[right] = 2;\n                right--;\n            }\n            else {\n                i++;\n            }\n        }\n    }\n```\n\n我先大致讲解算法的思路，然后详述算法中tricky的点。\n\n设置一个left和right指针，left的左边是已排好序的0，right右边是已排好序的2，由于遍历开始之前，没有排好序的0和2，所以left指向0，right指向n - 1。\n\n以指针i开始遍历数组\n\n如果遇到0，将nums[i]与nums[left]互换，left++, i++\n\n如果遇到2，将nums[i]与nums[right]互换，right--\n\n如果遇到1，将i++\n\n这样在一次遍历以后，0被划分到了左边，2被划分到了右边，中间自然只有1了。\n\n不细想的话似乎很明了，但要真正的透彻理解，还需要下一番功夫。\n\n### One Pass算法详解\n\n首先对于上述的算法，让我们考虑一个问题。\n\n为什么索引i与left的值互换时，i要自增，与right的值互换时却不能自增？\n\n下面的讲解我就要解释这个问题。\n\n首先在这个算法中，让我们把整个数组分成4个部分：\n\n    1 排好序的0\n    2 排好序的1\n    3 未排序的部分\n    4 排好序的2\n\n如下图所示：\n\n![数组分区](/assets/2017/12/pic-1.png)\n\n在最开始的时候，只有未排好序的部分，即下图：\n\n![初始分区](/assets/2017/12/pic-2.png)\n\n一旦开始遍历\n\n当遇到0时，将left指向的元素与i指向的元素互换\n\n用不用再次比较互换之后i指向的元素呢？答案是不用。\n\n因为互换之后\n\ni不可能指向一个2，因为如果i指向一个2，它在遍历到i之前已经被换到right之后了，而right是不可能小于i的\n\n如果i指向一个1，说明排好序的0之后的第一位刚好是一个1，我们所做的操作扩大了排好序的0的个数，\n\n如果i指向一个0，一定意味着i之前的元素全部是0并且i和start此时相等，因为在遍历到i之前所有的0已经被加入到left之前已排好序的0中，如果此时left仍指向一个未排好序的0，那么这个0只能是i指向的元素\n\n因此，在nums[i]与nums[left]交换后，i和left一样，都可以自增，因为索引i和left元素互换后可能出现的两种情况都不需要对索引i的元素重新进行操作，它已排好序。\n\n当遇到1时，直接将i自增，从上图可以看出这样做时正确的，它缩小了未排序分区，扩大了排好序的1分区\n\n当遇到2时，将i指向的元素与right指向的元素互换，将right自减。\n\n这扩大了已排好序的2分区，但我们不能对i进行自增。\n\n因为我们需要再次判断互换后的i是否仍指向2，如果仍指向2，继续将它与right互换。\n\n如果不这样做的话，就会出现下面这种情况：\n\n![错误分区](/assets/2017/12/pic-3.png)\n\n由于right或者自减，i或者自增，所以他们最后总会相遇，算法结束。\n\n### 总结\n\nDNF问题是一个经典问题，它还是主要使用了快排的分区、交换的思想，注意体会它的思想，把握它的细节。',1),
	(210,'Sass文档总结','CSS预处理,Sass','2017-12-26 15:46:08','2017-12-27 17:47:41','今天学习了Sass的中文文档，决定把一些关键的知识点总结一下。\n\n<!-- more -->\n\n### SCSS与Sass\n\nSCSS: 仅在CSS3语法的基础上进行扩展，CSS3的语法在SCSS中是通用的\n\nSass: 一种简化格式，以缩进代替花括号\n\n它们之间的不同是表达方式上的不同，都兼容Sass的全部功能。\n\n### CSS功能扩展\n\n1、&必须作为选择器的第一个字符，其后可以跟随后缀生成复合选择器\n<pre>\n#main {\n    color: black;\n    &-sidebar {\n        border: 1px solid #000;\n    }\n}\n</pre>\n\n2、在属性嵌套时，命名空间也可以包括自己的属性值：\n<pre>\n.funckey {\n    font: 20px/24px {\n        family: fantasy;\n        weight: 700;\n    }\n}\n</pre>\n编译为：\n<pre>\n.funkey {\n    font: 20/24px;\n    font-family: fantasy;\n    font-weight: 700;\n}\n</pre>\n\n3、占位符选择器，未被@extend调用则不会编译到CSS中\n\n### Sass Script\n\n#### 变量\n\n将局部变量转换为全局变量，可添加!global声明\n\n#### 类型\n\n1、Sass Script支持6种数据类型：数字、字符串、颜色、布尔值、空值: null、数组: 以空格或逗号分隔、maps: (key1: value1, key2: value2)\n\n2、使用#{}插值时，有引号字符串将被编译为无引号字符串\n\n3、数组可以包含子数组：\n<pre>\n1px 2px, 3px 4px\n(1px 2px) (3px 4px)\n</pre>\n用()表示空数组或者空map，空数组编译时会被清除\n\n#### 运算\n\n1、/在CSS中一般会起到分隔的作用，但以下三种情况，视/为除法运算符：\n\n1) 如果值或值得一部分是变量或函数的返回值\n\n2) 如果值被圆括号包裹\n\n3) 如果值是算术表达式的一部分\n<pre>\np {\n    font: 10px/8px; // 分隔符\n    $width: 1000px;\n    width: $width / 2; // 变量，除法\n    width: round(1.5) / 2; // 函数返回值，除法\n    height: (500px / 2); // 圆括号包裹，除法\n    margin-left: 5px + 8px / 2px; //算术表达式的一部分，除法\n}\n</pre>\n如果需要使用变量又要确保/不做除法运算，可用#{}插值语句包裹变量\n\n2、颜色值是分段计算的\n\n颜色值如果包含alpha channel，必须有相等的alpha值才能计算，因为alpha值是不参与计算的\n\n3、+可用于链接字符串\n\n如果有引号的字符串位于+左侧，结果有引号；反之，亦反\n\n4、通过#{}插值语句可以在选择器和属性名中使用变量（我们一般是在属性值使用变量）\n\n5、如果没有父选择器，&为空，所以可以用&来判断父选择器是否存在\n\n6、变量先赋空值将被视为未被赋值，使用!default的值\n\n### @-rule和指令\n\n1、在以下几种情况下，@import仅作为普通CSS语句，不导入Sass文件：\n\n1) 文件扩展名是.css\n\n2) 文件名以http://开头\n\n3) 文件名是url()\n\n4) @import包含media queries\n\n此外导入文件时#{}仅能作用于css的url()导入方式\n\n2、若同时存在添加下划线与未添加下划线的同名文件，添加下划线的文件将被忽略\n\n3、在层级环境内导入的文件不能包含仅允许被定义在文件最外层下的指令，如@mixin、@charset\n\n4、@media允许被嵌套在CSS规则内，@media将被编译到文件的最外层，包含嵌套的父选择器\n\n5、@media和queries允许互相嵌套使用，Sass会自动添加and\n\n6、@extend可以自动避免无谓的重复\n\n7、!optional使得@extend失败时不生成新选择器\n\n8、@at-root指令会导致规则被跳出到文件最外层中\n\n9、通常@at-root只跳出外部的选择器，但@at-root(without:...)可以用来跳出指令\n\n10、@at-root(with:rule)只跳出所有指令，但不跳出选择器，rule指的就是选择器/规则\n\n11、@warn可以被--quiet选项关闭，@error则不行\n\n### 控制指令\n\n1、当 @if 的表达式返回值不是 false 或者 null 时，条件成立，输出 {} 内的代码：\n<pre>\np {\n  @if 1 + 1 == 2 { border: 1px solid; }\n  @if 5 < 3 { border: 2px dotted; }\n  @if null  { border: 3px double; }\n}\n</pre>\n编译为\n<pre>\np {\n  border: 1px solid; }\n</pre>\n\n2、@for 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动。这个指令包含两种格式：@for $var from start through end，或者 @for $var from start to end，区别在于 through 与 to 的含义：当使用 through 时，条件范围包含 start 与 end 的值，而使用 to 时条件范围只包含 start 的值不包含 end 的值。另外，$var 可以是任何变量，比如 $i；start 和 end 必须是整数值。\n<pre>\n@for $i from 1 through 3 {\n  .item-#{$i} { width: 2em * $i; }\n}\n</pre>\n编译为\n<pre>\n.item-1 {\n  width: 2em; }\n.item-2 {\n  width: 4em; }\n.item-3 {\n  width: 6em; }\n</pre>\n\n3、@each 指令的格式是 $var in list, $var 可以是任何变量名，比如 $length 或者 $name，而 list 是一连串的值，也就是值列表。@each 将变量 $var 作用于值列表中的每一个项目，然后输出结果，例如：\n<pre>\n@each $animal in puma, sea-slug, egret, salamander {\n  .#{$animal}-icon {\n    background-image: url(\'/images/#{$animal}.png\');\n  }\n}\n</pre>\n编译为\n<pre>\n.puma-icon {\n  background-image: url(\'/images/puma.png\'); }\n.sea-slug-icon {\n  background-image: url(\'/images/sea-slug.png\'); }\n.egret-icon {\n  background-image: url(\'/images/egret.png\'); }\n.salamander-icon {\n  background-image: url(\'/images/salamander.png\'); }\n</pre>\n\n4、@each指令支持使用多个变量，如果这多个变量对应一个列表中的子列表，那么这个子列表中的所有元素都会被编译到相应的变量上\n<pre>\n@each $animal, $color, $cursor in (puma, black, default),\n                                  (sea-slug, blue, pointer),\n                                  (egret, white, move) {\n  .#{$animal}-icon {\n    background-image: url(\'/images/#{$animal}.png\');\n    border: 2px solid $color;\n    cursor: $cursor;\n  }\n}\n</pre>\n编译为\n<pre>\n.puma-icon {\n  background-image: url(\'/images/puma.png\');\n  border: 2px solid black;\n  cursor: default; }\n.sea-slug-icon {\n  background-image: url(\'/images/sea-slug.png\');\n  border: 2px solid blue;\n  cursor: pointer; }\n.egret-icon {\n  background-image: url(\'/images/egret.png\');\n  border: 2px solid white;\n  cursor: move; }\n</pre>\n\n5、@each也可以用在map上：\n<pre>\n@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {\n  #{$header} {\n    font-size: $size;\n  }\n}\n</pre>\n编译为\n<pre>\nh1 {\n  font-size: 2em; }\nh2 {\n  font-size: 1.5em; }\nh3 {\n  font-size: 1.2em; }\n</pre>\n\n### Mixin（混合指令）\n\n1、混合样式中也可以包含其他混合样式，比如\n<pre>\n@mixin compound {\n  @include highlighted-background;\n  @include header-text;\n}\n@mixin highlighted-background { background-color: #fc0; }\n@mixin header-text { font-size: 20px; }\n</pre>\n\n2、关键词参数给mixin函数提供了更灵活的接口，以及容易调用的参数。关键词参数可以打乱顺序使用，如果使用默认值也可以省缺，另外，参数名被视为变量名，下划线、短横线可以互换使用。\n\n3、不能确定混合指令需要使用多少个参数，比如一个关于 box-shadow 的混合指令不能确定有多少个 \'shadow\' 会被用到。这时，可以使用可变参数 … 声明（写在参数的最后方）告诉 Sass 将这些参数视为值列表处理\n<pre>\n@mixin box-shadow($shadows...) {\n  -moz-box-shadow: $shadows;\n  -webkit-box-shadow: $shadows;\n  box-shadow: $shadows;\n}\n.shadows {\n  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);\n}\n</pre>\n编译为\n<pre>\n.shadowed {\n  -moz-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;\n  -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;\n  box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;\n}\n</pre>\n\n4、可变参数也可以用在引用混合指令的时候 (@include)，与平时用法一样，将一串值列表中的值逐条作为参数引用：\n<pre>\n@mixin colors($text, $background, $border) {\n  color: $text;\n  background-color: $background;\n  border-color: $border;\n}\n$values: #ff0000, #00ff00, #0000ff;\n.primary {\n  @include colors($values...);\n}\n</pre>\n编译为\n<pre>\n.primary {\n  color: #ff0000;\n  background-color: #00ff00;\n  border-color: #0000ff;\n}\n</pre>\n5、在引用混合样式的时候，可以先将一段代码导入到混合指令中，然后再输出混合样式，额外导入的部分将出现在 @content 标志的地方：\n<pre>\n@mixin apply-to-ie6-only {\n  * html {\n    @content;\n  }\n}\n@include apply-to-ie6-only {\n  #logo {\n    background-image: url(/logo.gif);\n  }\n}\n</pre>\n\n6、引用给@content的样式中使用到的变量，查找作用域是在引用处查找，而不是在@mixin中查找\n\n7、为便于书写，@mixin 可以用 = 表示，而 @include 可以用 + 表示\n\n### 函数指令\n\n1、Sass 支持自定义函数，并能在任何属性值或 Sass script 中使用：\n<pre>\n$grid-width: 40px;\n$gutter-width: 10px;\n\n@function grid-width($n) {\n  @return $n * $grid-width + ($n - 1) * $gutter-width;\n}\n\n#sidebar { width: grid-width(5); }\n</pre>\n编译为\n<pre>\n#sidebar {\n  width: 240px; \n}\n</pre>\n一个函数可以含有多条语句，需要调用 @return 输出结果\n\n2、建议在自定义函数前添加前缀避免命名冲突，其他人阅读代码时也会知道这不是 Sass 或者 CSS 的自带功能。',1),
	(211,'你不知道的JS-学习笔记','JavaScript,你不知道的JavaScript','2017-12-26 15:56:05','2017-12-27 17:49:43','我个人觉得翻译的章节名字不太好，所以改了一下。\n\n<!-- more -->\n\n## 第四章 混合对象，以构成类\n\n### 何为类？\n\n首先我们需要清楚明白的一点是恩：\n\n以类为基础而实现的面向对象，只是一种常用的设计模式，在它的基础上我们可以实现如迭代器模式、工厂模式、单例模式等高级的设计模式。\n\n它并不是必须的，软件设计中还可以使用面向过程的设计模式，或者混合使用两种设计模式。\n\n那么类具体是什么呢？\n\n简单地说类描述的是一种代码的组织结构形式，在软件中对真实世界中问题的一种建模方法。\n\n面向对象的思想认为，数据和操作数据的行为本质上是互相关联的，因此优秀的设计应该将数据以及和它相关的行为打包形成一种数据结构，这种数据结构就是类。\n\n举个例子来说，用来表示一个单词或者短语的一串字符通常被称为字符串。这串字符就是数据，而可以应用在这串字符上的行为（如：计算长度、添加数据、搜索等等）被认为是与数据相关的行为。\n\n于是我们将数据 + 与数据相关的行为封装起来，实现一个String类。\n\n所有的字符串都是String类的一个实例，它既包含数据（这个字符串），也包含操作数据的方法（如：计算字符串长度）。\n\n定义了类，我们就要进一步讲一讲类的核心概念是什么，这里继续举例。\n\n假设我们在软件中定义一个Vehicle类、一个Car类和一个Plane类。\n\nVehicle类的定义可能包含引擎、载人能力等等。\n\nCar类的定义可能包含燃油类型（是柴油还是天然气）。\n\nPlane类的定义可能包含螺旋桨数量（直升机可能只有一个，客机可能有两个）。\n\nCar类和Plane类都继承了Vehicle类中对引擎和载人能力的定义。\n\n我们可以用Car类实例化两辆汽车，一台烧天然气的车A，一台烧柴油的车B。\n\n这里我们就可以看出类的作用和几个核心概念了：\n\n1) 分类，将飞机和汽车进行了分类（他们是Vehicle的不同特例，拥有不同的特殊方法）\n\n2) 继承，可以将一个类看做范围更广的某种类的一个特例，它继承了通用的方法（有引擎，可以载人）。。\n\n3) 实例化，这样一个类，我们可以实例化多种不同的实例。（烧天然气的车A和烧柴油的车B）\n\n除此之外，类还有一个核心概念，就是多态，即子类可以重写父类中的通用行为为它的特殊行为，与此同时，它既可以调用自己重写的特殊行为，也可以调用父类的通用行为，这种调用行为的“多种状态”，我们称之为多态。\n\n总结，类的核心概念就是：继承、多态和实例化。它可以用来分类。\n\n而JavaScript中实际上是没有类的，虽然我们可以用一些方法来近似实现类的功能。\n\n### 类的机制\n\n类意味着复制。\n\n传统的类被实例化时，类的行为会被复制到实例中。\n\n请注意，复制的是行为，建造的实例中的数据来源可不一定是复制的。\n\n类被继承时，行为也会被复制到子类中。也正是因为子类会复制一份父类行为的副本，所以在子类重写父类方法的时候，重写的其实是这个副本，所以才让多态成为可能。。a\'\n\n### 在JavaScript中模拟类\n\nJavaScript中没有类，所以也不会像类那样自动创建对象的副本。\n\n通常可以使用混入模式（mixin）来模拟类的复制行为，但是产生的代码难以维护且脆弱，比如显式伪多态（OtherObj.methodName.call(this, ...)）。\n\n此外显式混入实际上无法完全模拟类的复制行为，因为在JS中对象只能复制引用（深复制实现复杂并且容易出错而且兼容性还不好），无法复制被引用的对象本身，忽视这一点，可能造成很多问题（如修改了共同引用的对象属性，影响持有这个对象引用的所有对象）\n\n总之作者认为，在JavaScript中模拟类是得不偿失的。。。\'\'\n',1),
	(213,'你不知道的JS-学习笔记2','JavaScript,你不知道的JavaScript','2017-12-27 16:09:04','2017-12-27 17:50:22','我个人觉得翻译的章节名字不太好，所以改了一下。。\n\n<!-- more -->\n\n## 第四章 混合对象，以构成类\n\n### 何为类？\n\n首先我们需要清楚明白的一点是恩：\n\n以类为基础而实现的面向对象，只是一种常用的设计模式，在它的基础上我们可以实现如迭代器模式、工厂模式、单例模式等高级的设计模式。\n\n它并不是必须的，软件设计中还可以使用面向过程的设计模式，或者混合使用两种设计模式。\n\n那么类具体是什么呢？\n\n简单地说类描述的是一种代码的组织结构形式，在软件中对真实世界中问题的一种建模方法。\n\n面向对象的思想认为，数据和操作数据的行为本质上是互相关联的，因此优秀的设计应该将数据以及和它相关的行为打包形成一种数据结构，这种数据结构就是类。\n\n举个例子来说，用来表示一个单词或者短语的一串字符通常被称为字符串。这串字符就是数据，而可以应用在这串字符上的行为（如：计算长度、添加数据、搜索等等）被认为是与数据相关的行为。\n\n于是我们将数据 + 与数据相关的行为封装起来，实现一个String类。\n\n所有的字符串都是String类的一个实例，它既包含数据（这个字符串），也包含操作数据的方法（如：计算字符串长度）。\n\n定义了类，我们就要进一步讲一讲类的核心概念是什么，这里继续举例。\n\n假设我们在软件中定义一个Vehicle类、一个Car类和一个Plane类。\n\nVehicle类的定义可能包含引擎、载人能力等等。\n\nCar类的定义可能包含燃油类型（是柴油还是天然气）。\n\nPlane类的定义可能包含螺旋桨数量（直升机可能只有一个，客机可能有两个）。\n\nCar类和Plane类都继承了Vehicle类中对引擎和载人能力的定义。\n\n我们可以用Car类实例化两辆汽车，一台烧天然气的车A，一台烧柴油的车B。\n\n这里我们就可以看出类的作用和几个核心概念了：\n\n1) 分类，将飞机和汽车进行了分类（他们是Vehicle的不同特例，拥有不同的特殊方法）\n\n2) 继承，可以将一个类看做范围更广的某种类的一个特例，它继承了通用的方法（有引擎，可以载人）。。\n\n3) 实例化，这样一个类，我们可以实例化多种不同的实例。（烧天然气的车A和烧柴油的车B）\n\n除此之外，类还有一个核心概念，就是多态，即子类可以重写父类中的通用行为为它的特殊行为，与此同时，它既可以调用自己重写的特殊行为，也可以调用父类的通用行为，这种调用行为的“多种状态”，我们称之为多态。\n\n总结，类的核心概念就是：继承、多态和实例化。它可以用来分类。\n\n而JavaScript中实际上是没有类的，虽然我们可以用一些方法来近似实现类的功能。\n\n### 类的机制\n\n类意味着复制。\n\n传统的类被实例化时，类的行为会被复制到实例中。\n\n请注意，复制的是行为，建造的实例中的数据来源可不一定是复制的。\n\n类被继承时，行为也会被复制到子类中。也正是因为子类会复制一份父类行为的副本，所以在子类重写父类方法的时候，重写的其实是这个副本，所以才让多态成为可能。。a\'\n\n### 在JavaScript中模拟类\n\nJavaScript中没有类，所以也不会像类那样自动创建对象的副本。\n\n通常可以使用混入模式（mixin）来模拟类的复制行为，但是产生的代码难以维护且脆弱，比如显式伪多态（OtherObj.methodName.call(this, ...)）。\n\n此外显式混入实际上无法完全模拟类的复制行为，因为在JS中对象只能复制引用（深复制实现复杂并且容易出错而且兼容性还不好），无法复制被引用的对象本身，忽视这一点，可能造成很多问题（如修改了共同引用的对象属性，影响持有这个对象引用的所有对象）\n\n总之作者认为，在JavaScript中模拟类是得不偿失的。。。\'\'\n',1);

/*!40000 ALTER TABLE `ARTICLE` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table RD_LIST
# ------------------------------------------------------------

DROP TABLE IF EXISTS `RD_LIST`;

CREATE TABLE `RD_LIST` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `author` varchar(255) NOT NULL DEFAULT '',
  `score` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table USER
# ------------------------------------------------------------

DROP TABLE IF EXISTS `USER`;

CREATE TABLE `USER` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;

INSERT INTO `USER` (`id`, `user`, `password`)
VALUES
	(1,'admin','e5d2a815230449badccf00bc67436696');

/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
