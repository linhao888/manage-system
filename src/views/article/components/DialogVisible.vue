<script setup>
import { ref } from 'vue'
import {
  articleAddChannelsService,
  articleEditChannelsService
} from '@/api/article'

const dialogVisible = ref(false)
const formRef = ref()
// 初始化输入框数据
const formModel = ref({
  cate_name: '',
  cate_alias: ''
})
// 校验规则
const rules = {
  cate_name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '分类名必须是1-10位的非空字符',
      trigger: 'blur'
    }
  ],
  cate_alias: [
    { required: true, message: '请输入分类别名', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{1,15}$/,
      message: '分类别名必须是1-15位的字母数字',
      trigger: 'blur'
    }
  ]
}

// 输入框触发时方法
const open = async (row) => {
  dialogVisible.value = true
  // 数据回显
  formModel.value = { ...row }
}
// 提交事件
const emit = defineEmits(['success'])
const onSubmit = async () => {
  // 验证数据有效性
  await formRef.value.validate()
  // 判断添加操作或编辑
  if (formModel.value.id) {
    await articleEditChannelsService(formModel.value)
  } else {
    await articleAddChannelsService(formModel.value)
  }
  dialogVisible.value = false
  ElMessage({
    type: 'success',
    message: formModel.value.id ? '编辑成功' : '添加成功'
  })
  emit('success')
}

defineExpose({
  open
})
</script>

<template>
  <el-dialog
    :title="formModel.id ? '文章分类' : '添加分类'"
    v-model="dialogVisible"
    width="30%"
  >
    <el-form
      ref="formRef"
      :rules="rules"
      :model="formModel"
      label-width="100px"
      style="padding-right: 30px"
    >
      <el-form-item label="分类名称" prop="cate_name">
        <el-input
          placeholder="输入分类名称"
          v-model="formModel.cate_name"
        ></el-input>
      </el-form-item>
      <el-form-item label="分类别称" prop="cate_alias">
        <el-input
          placeholder="输入分类别名"
          v-model="formModel.cate_alias"
        ></el-input>
      </el-form-item>
    </el-form>
    <template v-slot:footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
