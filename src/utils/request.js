import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'

export const baseURL = ' http://big-event-vue-api-t.itheima.net'
// 添加实例
const instance = axios.create({
  baseURL,
  timeout: 3000
})
// 添加拦截器
instance.interceptors.request.use(
  (config) => {
    const user = useUserStore()
    if (user.token) {
      config.headers.Authorization = user.token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    if (response.data.code === 0) {
      return response.data
    }
    ElMessage.error(response.data.message || '服务器异常')
    return Promise.reject(response.data)
  },
  (error) => {
    if (error.response?.status === 401) {
      router.push('/login')
    }
    ElMessage.error(error.response.message || '服务器异常')
    return Promise.reject(error)
  }
)

export default instance
