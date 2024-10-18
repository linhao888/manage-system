<script setup>
import { Plus, Upload } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores/index'
import { userUpdataPicService } from '@/api/user'

const imageUrl = ref('')
const uploadRef = ref()
//获取用户的信息
const userStore = useUserStore()
imageUrl.value = userStore.userInfo.user_pic

// 预览头像
const onUploadFile = (file) => {
  const reader = new FileReader()
  reader.readAsDataURL(file.raw)
  reader.onload = () => {
    imageUrl.value = reader.result
  }
}

// 上传头像
const onUpdata = async () => {
  if (imageUrl.value) {
    await userUpdataPicService(imageUrl.value)
  } else {
    ElMessage.error('请选择一个图片')
    return
  }
  await userStore.getUser()
  ElMessage.success('更换成功')
}
</script>

<template>
  <ContentBox title="更换头像">
    <el-row>
      <el-col :span="12">
        <el-upload
          ref="uploadRef"
          class="avatar-uploader"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="onUploadFile"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <img v-else src="@/assets/avatar.jpg" width="278" />
        </el-upload>
        <div class="submit-arr">
          <el-button
            type="primary"
            :icon="Plus"
            size="large"
            @click="uploadRef.$el.querySelector('input').click()"
          >
            选择图片
          </el-button>
          <el-button
            type="success"
            :icon="Upload"
            size="large"
            @click="onUpdata"
          >
            上传头像
          </el-button>
        </div>
      </el-col>
    </el-row>
  </ContentBox>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 278px;
      height: 278px;
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
      color: #8c939d;
      width: 278px;
      height: 278px;
      text-align: center;
    }
  }
}
.submit-arr {
  margin-top: 10px;
  display: flex;
}
</style>
