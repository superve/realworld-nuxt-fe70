import axios from 'axios'

const request = axios.create({
  /**
   * 接口文档：https://github.com/gothinkster/realworld/tree/master/api
   */
  baseURL: 'https://conduit.productionready.io/'
})

export default request
