<template>
    <ul class="star">
        <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" key="index"></span>
    </ul>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file 评分组件
     */

    export default {
        props: ['score'],
        computed: {
            itemClasses() {
                const result = []
                const score = Math.floor(this.score * 2) / 2
                const hasDecimal = score % 1 !== 0
                const integer = Math.floor(score)
                for (let i = 0; i < integer; i++) {
                    result.push('on')
                }
                if (hasDecimal) {
                    result.push('half')
                }
                while (result.length < 5) {
                    result.push('off')
                }
                return result
            }
        }
    }
</script>

<style lang="scss" scoped>
    .star{
        font-size: 1rem;
        padding: 0;
    }
    .star-item{
        display: inline-block;
        background-repeat: no-repeat;
        width: 2em;
        height: 2em;
        margin-right: .5em;
        background-size: 100%;
    }
    .star-item:last-of-type {
        margin-right: 0;
    }
    .star-item.on{
        background-image: url(../../assets/img/star-on.png);
    }
    .star-item.half{
        background-image: url(../../assets/img/star-half.png);
    }
    .star-item.off{
        background-image: url(../../assets/img/star-off.png);
    }
</style>
