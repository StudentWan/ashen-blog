<template>
    <ul class="star">
        <span v-for="(itemClass,index) in itemClasses" :class="itemClass" @mousemove="hovered($event)" :data-index="index" class="star-item" :key="index"></span>
    </ul>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file 评分组件
 */

export default {
    data() {
        return {
            width: ''
        }
    },
    props: ['score'],
    mounted() {
        this.width = parseInt(getComputedStyle(document.getElementsByClassName('star-item')[0]).width, 10)
    },
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
    },
    methods: {
        hovered(evt) {
            this.$emit('choose-star', {evt, width: this.width})
        }
    }
}
</script>

<style lang="scss" scoped>
.star {
    font-size: 1rem;
    padding: 0;
}

.star-item {
    display: inline-block;
    background-repeat: no-repeat;
    width: 2em;
    height: 2em;
    margin-right: 0.5em;
    background-size: 100%;
}

.star-item:last-of-type {
    margin-right: 0;
}

.star-item.on {
    background-image: url(../../assets/img/star-on.png);
}

.star-item.half {
    background-image: url(../../assets/img/star-half.png);
}

.star-item.off {
    background-image: url(../../assets/img/star-off.png);
}
</style>
