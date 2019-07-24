import Vuex from 'vuex'

// 如果是服务端在加载 cookieparser
const cookieparser = process.server ? require('cookieparser') : undefined

/**
 * 服务端渲染中的 Vuex 必须导出一个函数，在函数中返回一个 new 出来的 Vuex 容器
 */
const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      auth: null
    }),
    mutations: {
      setAuth(state, auth) {
        state.auth = auth
      }
    },
    actions: {
      /**
       * nuxtServerInit 是 Nuxt 识别的一个 action 函数。用于服务端渲染初始化 Vuex 数据用的
       * 参考文档：https://zh.nuxtjs.org/guide/vuex-store/#nuxtserverinit-%E6%96%B9%E6%B3%95
       */
      nuxtServerInit({ commit }, { req }) {
        let auth = null

        // 如果请求头中有 cookie
        // 注意：这里拿到的 cookie 是字符串：key=value; ....
        if (req.headers.cookie) {
          // 使用 cookieParser 将 cookie 字符串解析为一个对象
          const parsed = cookieparser.parse(req.headers.cookie)
          
          // 如果 cookie 中没有 auth，则什么都不做
          if (!parsed.auth) {
            return
          }

          // 有 auth，解析出来放到容器中，供服务端使用
          try {
            auth = JSON.parse(parsed.auth)
          } catch (err) {
            // 找不到有效的Cookie
          }
        }

        // 将从 cookie 中拿到的数据数据放到 Vuex 容器中
        commit('setAuth', auth)
      }
    }
  })
}

export default createStore
