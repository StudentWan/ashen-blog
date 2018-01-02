<template>
    <div class="login-container">
        <header class="login-head">
            <span>无火的余灰</span>
            <img class="logo" src="../assets/img/logo.png" alt="营火">
        </header>
        <section class="form">
            <span class="slogan">登登登登...录!
                <span>/ Login</span>
            </span>
            <input type="text" id="user" placeholder="Username" v-model="username">
            <input type="password" id="password" placeholder="Password" v-model="password">
            <button id="login" @click="login">登录</button>
        </section>
        <footer>Always.</footer>
    </div>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file admin端登录页
 */

import md5 from 'md5'

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            axios.post(
                '/api/v1/tokens',
                {
                    username: this.username,
                    password: md5(this.password)
                })
                .then(res => {
                    const data = res.data
                    localStorage.setItem('ashenToken', data)
                    this.$router.push('/lists')
                })
                .catch(err => {
                    const errorMsg = err.response.data.error
                    alert(errorMsg)
                })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login-container {
    height: 100%;
    @include flex($flow: column wrap);
    font-family: "KaiShu", "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    .login-head {
        @include flex;
        width: 100%;
        height: 3em;
        font-size: 2rem;
    }

    .form {
        @include flex($flow: column wrap);
        width: 400px;
        height: 250px;
        border-top: 20px solid $base;
        border-radius: 5px;
        // box-shadow: 4px 4px 5px -3px rgba(0, 0, 0, .3);
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
        .slogan {
            font-size: 1.6rem;
            margin-bottom: 1em;
            //color: $quote;
            span {
                color: $base;
            }
        }
        input {
            font: {
                size: 1rem;
                family: Dosis, Arial, sans-serif;
            }
            margin-bottom: 2em;
            width: 20em;
            height: 2.5em;
            outline-color: $base;
            border-radius: 3px;
            border: 1px solid #ccc;
        }
        button {
            color: $white;
            font: {
                size: 1.6rem;
                family: KaiShu, Arial, sans-serif;
            }
            width: 6em;
            height: 2em;
            border: none;
            background: $base;
            outline: none;
            cursor: pointer;
        }
    }

    footer {
        height: 4em;
        @include flex;
        justify-self: flex-end;
    }
}
</style>

