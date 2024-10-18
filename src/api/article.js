import request from '@/utils/request'

// 获取文章分类
export const articleGetChannelsService = () => {
  return request.get('/my/cate/list')
}
// 添加分类
export const articleAddChannelsService = (data) => {
  return request.post('/my/cate/add', data)
}
// 编辑分类
export const articleEditChannelsService = (data) => {
  return request.put('/my/cate/info', data)
}
// 删除分类
export const articleDeleteChannelsService = (id) => {
  return request.delete('/my/cate/del', {
    params: {
      id
    }
  })
}

// 文章管理界面
// 文章获取
export const articleGetListService = (params) => {
  return request.get('/my/article/list', {
    params
  })
}
// 发布文章
export const articlePublishService = (data) => {
  return request.post('/my/article/add', data)
}
// 获取文章详情
export const articleGetDetailService = (id) => {
  return request.get('/my/article/info', { params: { id } })
}
// 编辑文章
export const articleEditService = (data) => {
  return request.put('/my/article/info', data)
}
// 删除文章
export const articleDeleteService = (id) => {
  return request.delete('/my/article/info', { params: { id } })
}
