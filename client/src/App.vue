<template>
    <div id="app" @click="sweepMask($event)">
        <header-nav :maskFlag="maskFlag"></header-nav>
        <router-view id="main"/>
        <foot></foot>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file client根组件
     */

    import HeaderNav from '@/components/common/HeaderNav'
    import Foot from '@/components/common/Foot'

    export default {
        name: 'App',
        components: {
            HeaderNav,
            Foot
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
    /* latin-ext */
    @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 200;
        src: local('Roboto Mono Light for Powerline'), url(./assets/font/robotolight.ttf) format('ttf');
        unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
    }

    /* latin-ext */
    @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        src: local('Source Sans Pro'), local('SourceSansPro-Regular'), url(./assets/font/ODelI1aHBYDBqgeIAH2zlIa1YDtoarzwSXxTHggEXMw.woff2) format('woff2');
        unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        src: local('Source Sans Pro'), local('SourceSansPro-Regular'), url(./assets/font/ODelI1aHBYDBqgeIAH2zlJbPFduIYtoLzwST68uhz_Y.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 600;
        src: local('Source Sans Pro Semibold'), local('SourceSansPro-Semibold'), url(./assets/font/toadOcfmlt9b38dHJxOBGKyGJhAh-RE0BxGcd_izyev3rGVtsTkPsbDajuO5ueQw.woff2) format('woff2');
        unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 600;
        src: local('Source Sans Pro Semibold'), local('SourceSansPro-Semibold'), url(./assets/font/toadOcfmlt9b38dHJxOBGMzFoXZ-Kj537nB_-9jJhlA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
    }

    /* latin */
    @font-face {
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 500;
        src: local('Dosis Medium'), local('Dosis-Medium'), url(./assets/font/mAcLJWdPWDNiDJwJvcWKc3YhjbSpvc47ee6xR_80Hnw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
    }


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
        padding: 2em 0 1em 0;
        width: 95%;
        max-width: 850px;
        margin: auto;
    }

    @media screen and (max-width: 715px) {
        #main {
            margin-top: 4em;
        }
    }
</style>
