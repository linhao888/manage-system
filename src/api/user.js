import request from '@/utils/request.js'

export const userRegisterService = ({ username, password, repassword }) => {
  return request.post('/api/reg', { username, password, repassword })
}

export const userLoginService = ({ username, password }) => {
  return request.post('/api/login', { username, password })
}
// 获取用户的信息
export const getUserInfo = () => {
  return request.get('/my/userinfo')
}

// 修改用户基本信息
export const userUpdataInfoService = (data) => {
  return request.put('/my/userinfo', data)
}

// 更改用户头像
export const userUpdataPicService = (url) => {
  return request.patch('/my/update/avatar', { avatar: url })
}

// 更改密码
export const userUpdataPwService = (obj) => {
  return request.patch('/my/updatepwd', obj)
}
