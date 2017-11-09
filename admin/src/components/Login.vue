<template>
    <div>
        <header class="login-head">无火的余灰</header>
        <form action="javascript:void(0)" method="post">
            <label for="user">用户名：<input type="text" id="user"></label>
            <label for="password">密码：<input type="password" id="password"></label>
            <button id="login">登录</button>
        </form>
    </div>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file admin端登录页
 */

export default {
    data() {
        return {
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .login-head {
        @include flex;
        height: 3em;
        font-size: 2rem;
    }
</style>

