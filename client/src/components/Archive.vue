<template>
        <div class="archive-container">
            <div>
                <h1>文章归档</h1>
                <section v-for="year in years">
                    <h4>{{ year }}</h4>
                    <ul class="list" v-for="intro in introductions[year]">
                        <li>
                            <router-link :to="'/articles/' + intro.id">{{ intro.title }}</router-link>
                            <span class="time"> {{ intro.publishTime }}</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file 归档组件
 */

import moment from 'moment'


moment.locale('zh-CN')
export default {
    data() {
        return {
            introductions: {},
            years: []
        }
    },
    created() {
        axios.get('/api/v1/introductions')
            .then(res => {
                for (let intro of res.data) {
                    const introYear = moment(intro.publishTime).year()
                    if (this.years.indexOf(introYear) === -1) {
                        this.years.push(introYear)
                        this.introductions[introYear] = []
                    }
                    intro.publishTime = moment(intro.publishTime).format('MM-DD')
                    this.introductions[introYear].push(intro)
                }
            })
            .catch(err => alert(err))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.archive-container {
    ul {
        /*padding-left: .2em;*/
        list-style-type: circle;
        li {
            margin: 0.8em 0;
        }
    }

    .date {
        color: $special;
    }

    a {
        color: $base;
    }
}
</style>
