<script setup>
import { nextTick, ref } from 'vue'
import axios from 'axios'
import ChannelSelect from './ChannelSelect.vue'
import { Plus } from '@element-plus/icons-vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import {
  articlePublishService,
  articleGetDetailService,
  articleEditService
} from '@/api/article'
import { baseURL } from '@/utils/request'

const drawer = ref(false)
const direction = ref('rtl')

// 发布文章相关数据
// 默认空数据
const defaultArticleData = {
  title: '',
  cate_id: '',
  content: '',
  cover_img: '',
  state: ''
}
const articleData = ref({
  ...defaultArticleData
})
// 图片上传
const imageUrl = ref('')
const onUploadFile = (uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw)
  articleData.value.cover_img = uploadFile.raw
}

// 文章发布
const emit = defineEmits(['success'])
const isEdit = ref(false)
const onPublish = async (state) => {
  articleData.value.state = state
  // 转换 formData 数据
  const fd = new FormData()
  for (let key in articleData.value) {
    fd.append(key, articleData.value[key])
  }
  if (isEdit.value) {
    await articleEditService(fd)
    ElMessage.success('编辑成功')
    drawer.value = false
    emit('success')
  } else {
    await articlePublishService(fd)
    ElMessage.success('添加成功')
    drawer.value = false
    emit('success')
  }
}

// 打开编辑器 open事件
const editorRef = ref()
const open = async (row) => {
  if (row.id) {
    isEdit.value = true
    // 数据回显
    const res = await articleGetDetailService(row.id)
    articleData.value = res.data
    imageUrl.value = baseURL + articleData.value.cover_img
    articleData.value.cover_img = await imageUrlToFile(
      imageUrl.value,
      articleData.value.cover_img
    )
  } else {
    isEdit.value = false
    // 数据清空
    articleData.value = { ...defaultArticleData }
    imageUrl.value = ''
    nextTick(() => {
      if (editorRef.value) {
        editorRef.value.setHTML('')
      }
    })
  }
  // 打开编辑器
  drawer.value = true
}
defineExpose({
  open
})
// 将网络图片地址转换为File对象
async function imageUrlToFile(url, fileName) {
  try {
    // 第一步：使用axios获取网络图片数据
    const response = await axios.get(url, { responseType: 'arraybuffer' })
    const imageData = response.data
    // 第二步：将图片数据转换为Blob对象
    const blob = new Blob([imageData], {
      type: response.headers['content-type']
    })
    // 第三步：创建一个新的File对象
    const file = new File([blob], fileName, { type: blob.type })
    return file
  } catch (error) {
    console.error('将图片转换为File对象时发生错误:', error)
    throw error
  }
}
</script>

<template>
  <el-drawer
    title="我是标题"
    v-model="drawer"
    :direction="direction"
    size="50%"
  >
    <el-form>
      <el-form-item label="文章标题">
        <el-input
          placeholder="请输入标题"
          v-model="articleData.title"
        ></el-input>
      </el-form-item>
      <el-form-item label="所属分类">
        <ChannelSelect
          v-model="articleData.cate_id"
          width="100%"
        ></ChannelSelect>
      </el-form-item>
      <el-form-item label="文章封面">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          :on-change="onUploadFile"
          :auto-upload="false"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus></Plus></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容">
        <div class="editor">
          <quill-editor
            theme="snow"
            v-model:content="articleData.content"
            contentType="html"
            ref="editorRef"
          ></quill-editor>
        </div>
      </el-form-item>
    </el-form>
    <el-form-item>
      <el-button type="primary" @click="onPublish('已发布')">发布</el-button>
      <el-button @click="onPublish('草稿')">草稿</el-button>
    </el-form-item>
  </el-drawer>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }
    .el-upload:hover {
      border-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: gray;
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}
.editor {
  width: 100%;
  :deep(.ql-editor) {
    min-height: 200px;
  }
}
</style>
