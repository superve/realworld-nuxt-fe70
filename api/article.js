import request from '@/utils/request'

export const getArticles = () => {
  return request({
    method: 'GET',
    url: '/api/articles'
  })
}
