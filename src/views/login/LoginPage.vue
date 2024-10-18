<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { userRegisterService, userLoginService } from '@/api/user.js'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'

const isRegister = ref(false)
const form = ref()
// 注册表单区域
// 输入内容
const formData = ref({
  username: '',
  password: '',
  repassword: ''
})
// 校验规则
const rules = {
  // 用户名
  username: [
    { required: true, message: '输入不能为空', trigger: 'blur' },
    {
      pattern: /^[A-Za-z0-9]{1,10}$/,
      message: '请输入1-10位字母或数字',
      trigger: 'blur'
    }
  ],
  // 密码
  password: [
    { required: true, message: '输入不能为空', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '请输入 6-15位非空字符', trigger: 'blur' }
  ],
  // 二次输入密码
  repassword: [
    { required: true, message: '输入不能为空', trigger: 'blur' },
    {
      pattern: /^\S{8,16}$/,
      message: '请输入 8-16位非空字符',
      trigger: 'blur'
    },
    {
      validator: (rule, value, callback) => {
        if (value !== formData.value.password) {
          callback(new Error('再次密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}

// 注册
const register = async () => {
  await form.value.validate()
  const res = await userRegisterService(formData.value)
  ElMessage.success('注册成功')
  isRegister.value = false
  console.log(res)
}

// 登陆
const router = useRouter()
const login = async () => {
  await form.value.validate()
  const res = await userLoginService(formData.value)
  const setToken = useUserStore().setToken
  setToken(res.token)
  ElMessage.success('登陆成功')
  router.push('/')
}

// 监视登录与注册之间的切换
watch(isRegister, () => {
  formData.value = {
    username: '',
    password: '',
    repassword: ''
  }
})
</script>
<template>
  <el-row class="login-page">
    <el-col :span="6" :offset="3" class="form">
      <!-- 注册表单区域 -->
      <el-form
        :model="formData"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        v-if="isRegister"
      >
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="formData.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formData.password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input
            v-model="formData.repassword"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入再次密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="register"
            class="button"
            type="primary"
            auto-insert-space
          >
            注册
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = false">
            ← 已有账号 点击登录
          </el-link>
        </el-form-item>
      </el-form>
      <!-- 登录表单区域 -->
      <el-form
        :model="formData"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        v-else
      >
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="formData.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formData.password"
            name="password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>记住我</el-checkbox>
            <el-link type="primary" :underline="false">忘记密码？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="login"
            class="button"
            type="primary"
            auto-insert-space
            >登录</el-button
          >
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = true">
            没有账号 点击注册 →
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="12" :offset="3" class="bg"></el-col>
  </el-row>
</template>
<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;
  .bg {
    background:
      url('@/assets/logo2.png') no-repeat 60% center / 240px auto,
      url('@/assets/login_bg.jpg') no-repeat center / cover;
    border-radius: 20px 0 0 20px;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    .title {
      margin: 0 auto;
    }
    .button {
      width: 100%;
    }
    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
