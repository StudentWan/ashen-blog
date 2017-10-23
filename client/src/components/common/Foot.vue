<template>
    <div id="foot">
        CopyRights滚粗，采用由Daniel Wan手工搭建的<a class="github" href="https://github.com/StudentWan/ashen-blog" target="_blank">Blog系统</a>.
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file client footer
     */
    export default {
        name: 'Foot'
    }
</script>

<style lang="scss" scoped>
    #foot {
        font-weight: 200;
        width: 95%;
        max-width: 850px;
        text-align: center;
        font-size: 1.4rem;
        margin: 0 auto;
        padding: .5em 0 1.2em 0;
        color: $special;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .25);
        .github {
            color: $base;
        }
    }
</style>
