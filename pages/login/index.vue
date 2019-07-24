<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul class="error-messages">
            <li>That email is already taken</li>
          </ul>

          <form @submit.prevent="handleLogin">
            <fieldset class="form-group">
              <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign in
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// process.client 得到一个布尔值，获取当前运行代码是否是客户端浏览器
// 说白了，只有在客户端才会加载 js-cookie
// process.client 是 Nuxt 提供的
const Cookie = process.client ? require('js-cookie') : undefined

import { login } from '@/api/auth'

export default {
  middleware: 'notAuthenticated',
  name: 'LoginIndex',
  data () {
    return {
      user: {
        email: 'lpzmail@163.com',
        password: '12345678'
      }
    }
  },
  methods: {
    async handleLogin () {
      try {
        const res = await login(this.user)
        
        // 登录成功：
        //  1. 将用户信息存储到 Vuex 中
        this.$store.commit('setAuth', res.data.user) // 存储在vuex中用来进行客户端渲染

        // 2. 将数据保存到 Cookie 中（服务端要使用）
        Cookie.set('auth', res.data.user) // 在cookie中保存token用来进行服务器端渲染

        // 3. 跳转到首页
        this.$router.push('/')
      } catch (err) {
        console.log(err)
        console.log('登录失败')
      }
    }
  }
}
</script>

<style>

</style>
