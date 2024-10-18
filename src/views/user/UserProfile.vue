<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/index'
import { userUpdataInfoService } from '@/api/user'

const formRef = ref(null)
const userStore = useUserStore()

// 表单数据
const form = ref({
  username: '已登录用户', // 登录名称，禁用输入
  nickname: '',
  email: ''
})

const setUserInfo = () => {
  form.value = userStore.userInfo
}
setUserInfo()

// 表单input宽度
const width = '300px'

// 表单校验规则
const rules = {
  nickname: [
    { required: true, message: '请输入用户昵称', trigger: 'blur' },
    { min: 2, max: 10, message: '昵称长度在 2 到 10 个字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入正确的邮箱地址',
      trigger: 'blur'
    }
  ]
}

// 提交表单
const onSubmit = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await userUpdataInfoService(form.value)
      ElMessage.success('修改成功')
    } else {
      ElMessage.error('表单校验失败，请检查输入')
      return false
    }
  })
}
</script>

<template>
  <ContentBox title="基本资料">
    <el-form :model="form" :rules="rules" ref="formRef" label-width="100px">
      <!-- 登录名称（禁用状态） -->
      <el-form-item label="登录账号">
        <el-input
          v-model="form.username"
          disabled
          :style="{ width }"
        ></el-input>
      </el-form-item>

      <!-- 用户昵称 -->
      <el-form-item label="用户昵称" prop="nickname">
        <el-input v-model="form.nickname" :style="{ width }"></el-input>
      </el-form-item>

      <!-- 用户邮箱 -->
      <el-form-item label="用户邮箱" prop="email">
        <el-input v-model="form.email" :style="{ width }"></el-input>
      </el-form-item>

      <!-- 提交按钮 -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交修改</el-button>
      </el-form-item>
    </el-form>
  </ContentBox>
</template>
