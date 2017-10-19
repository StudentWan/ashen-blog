<template>
    <div id="app" @click="sweepMask($event)">
        <header-nav :maskFlag="maskFlag"></header-nav>
        <router-view id="main" />
    </div>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file client根组件
 */

import HeaderNav from '@/components/common/HeaderNav'

export default {
    name: 'App',
    components: {
        HeaderNav
    },
    data() {
        return {
            maskFlag: false
        }
    },
    methods: {
        sweepMask(e) {
            if (e.target.id === 'main') {
                this.maskFlag = !this.maskFlag
            }
        }
    }
}
</script>

<style lang="scss">
html {
    font: {
        size: 62.5%;
        family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    }
    color: $word;
}

body {
    margin: 0;
    min-width: 300px;
}

body * {
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: $word;
}

#app {
    // height: 100%;
}

#main {
    font-size: 1.6rem;
}

@media screen and (max-width: 715px) {
    #main {
        margin-top: 4em;
    }
}
</style>
