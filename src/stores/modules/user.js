import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserInfo } from '@/api/user'

export const useUserStore = defineStore(
  'user',
  () => {
    // 用户的token
    const token = ref('')

    // 设置用户token
    const setToken = (newToken) => {
      token.value = newToken
    }
    // 删除用户token
    const removeToken = () => {
      token.value = ''
    }

    // 获取用户的基本信息
    const userInfo = ref({})
    const getUser = async () => {
      const res = await getUserInfo()
      userInfo.value = res.data
    }

    // 消除当前的用户信息
    const clearUserInfo = () => {
      userInfo.value = {}
    }
    // 导出变量方法
    return {
      token,
      setToken,
      removeToken,
      userInfo,
      getUser,
      clearUserInfo
    }
  },
  {
    persist: true
  }
)
