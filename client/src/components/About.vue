<template>
    <div class="about-container">
        <h1>关于我</h1>
        <ul>
            <li>Ashen One</li>
            <li>UESTCer / BUPTer</li>
            <li>前端空城师</li>
            <li>陆止于此，海始于斯</li>
        </ul>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file About me组件
     */

    export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    h1 {
        padding-bottom: 1em;
        /*margin-bottom: .5em;*/
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
    }

    ul {
        padding-left: 1.2em;
        margin-bottom: 0;
        li {
            margin: 1em auto;
        }
        li:last-of-type {
            margin-bottom: 0;
        }
    }
</style>
