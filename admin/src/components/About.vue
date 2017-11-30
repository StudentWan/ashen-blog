<template>
    <div class="about-container main">
        <h2>关于我 / <span>ABOUT ME</span></h2>
        <hr>
        <main>
            <form action="javascript:void(0)" method="post">
                <textarea name="about" class="about" id="about" placeholder="Say something about u, Ashen..."></textarea>
                <section class="btn-container">
                    <button class="not-del" id="submit">提交修改</button>
                </section>
            </form>
        </main>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file
     * */

    export default {}
</script>

<style lang="scss" scoped>
    main {
        height: calc(100% - 48px);
        padding: .5em 0;
    }

    .about {
        width: 100%;
        height: 400px;
        resize: none;
        border-radius: 2px;
        border: 1px solid $special;
        outline-color: $base;
        font-size: 1.3rem;
        margin-bottom: 1.5em;
    }

    .btn-container {
        @include flex($justify: flex-end)
    }
</style>
