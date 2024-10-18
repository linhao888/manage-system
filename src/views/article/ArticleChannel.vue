<script setup>
import { ref } from 'vue'
import {
  articleGetChannelsService,
  articleDeleteChannelsService
} from '@/api/article'
import { Edit, Delete } from '@element-plus/icons-vue'
import DialogVisible from './components/DialogVisible.vue'

const articleChannels = ref([])
const loading = ref(false)
const dialog = ref()

// 文章的分类列表
const getChannelList = async () => {
  loading.value = true
  const res = await articleGetChannelsService()
  articleChannels.value = res.data
  loading.value = false
}
getChannelList()
// 文章编辑事件
const onEditChannel = (row) => {
  console.log(row)
  dialog.value.open(row)
}
// 文章删除事件
const onDelChannel = (row) => {
  ElMessageBox.confirm('确认删除该分类吗', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
    .then(async () => {
      await articleDeleteChannelsService(row.id)
      getChannelList()
      ElMessage.success('删除成功')
    })
    .catch(() => {})
}
// 文章添加事件
const onAddChannel = () => {
  dialog.value.open({})
}
const onsuccess = () => {
  getChannelList()
}
</script>

<template>
  <ContentBox title="文章分类">
    <template #extra>
      <el-button type="primary" @click="onAddChannel">添加分类</el-button>
    </template>
    <!-- 主体部分 -->
    <el-table v-loading="loading" :data="articleChannels" style="width: 100%">
      <el-table-column label="序号" width="100" type="index"></el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="添加分类" width="100">
        <template #default="{ row }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEditChannel(row)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDelChannel(row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
  </ContentBox>
  <DialogVisible ref="dialog" @success="onsuccess"></DialogVisible>
</template>

<style lang="scss" scoped>
.main {
  .main-head {
    display: flex;
    justify-content: space-between;
  }
}
</style>
