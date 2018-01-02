<template>
    <div class="tag-container">
        <h1>标签</h1>
        <nav>
            <ul class="tags">
                <li v-for="tag in tags">
                    <a href="javascript:void(0)" @click="goAnchor(tag)">{{ tag }}</a>
                </li>
            </ul>
        </nav>
        <ul class="tag-list">
            <li v-for="tag in tags">
                <span :id="tag" :name="tag">{{ tag }}</span>
                <ul>
                    <li v-for="intro in introductions[tag]">
                        <router-link :to="'/articles/' + intro.id">{{ intro.title }}</router-link>
                        <span class="time"> {{ intro.publishTime }}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file Hello World
 */

import moment from 'moment'

moment.locale('zh-CN')
export default {
    data() {
        return {
            introductions: {},
            tags: []
        }
    },
    created() {
        axios.get('/api/v1/introductions')
            .then(res => {
                for (let intro of res.data) {
                    intro.tags = intro.tags ? intro.tags.split(',') : []
                    intro.publishTime = moment(intro.publishTime).format('MM-DD')
                    for (let tag of intro.tags) {
                        if (this.tags.indexOf(tag) === -1) {
                            this.tags.push(tag)
                            this.introductions[tag] = []
                        }
                        this.introductions[tag].push(intro)
                    }
                }
            })
            .catch(err => alert(err))
    },
    methods: {
        goAnchor(id) {
            const anchor = document.getElementById(id)
            if (window.innerWidth > 480) {
                document.documentElement.scrollTop = anchor.offsetTop
                document.body.scrollTop = anchor.offsetTop
            }
            else {
                document.documentElement.scrollTop = anchor.offsetTop - 64
                document.body.scrollTop = anchor.offsetTop - 64
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tag-container {
    .tags {
        padding: 0;
        list-style: none;
        li {
            display: inline;
            margin-right: 0.3em;
        }
    }

    .tag-list {
        padding: 0;
        list-style: none;
        li {
            margin: 0.8em 0;
        }
    }

    a {
        color: $base;
    }
}
</style>
