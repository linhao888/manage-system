<script setup>
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import ChannelSelect from './components/ChannelSelect.vue'
import { articleGetListService, articleDeleteService } from '@/api/article'
import { formatTime } from '@/utils/format'
import ArticleEdit from './components/ArticleEdit.vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const articleList = ref([])
const total = ref(0)
const loading = ref(false)
// 分类列表下拉选项
const params = ref({
  pagenum: 1,
  pagesize: 8,
  cate_id: '',
  state: ''
})
const getArticleList = async () => {
  loading.value = true
  const res = await articleGetListService(params.value)
  articleList.value = res.data
  total.value = res.total
  loading.value = false
}
getArticleList()

// 头部部分
// 点击搜索
const changeParams = () => {
  params.value.pagenum = 1
  getArticleList()
}
// 点击重置
const resetParams = () => {
  params.value.pagenum = 1
  params.value.cate_id = ''
  params.value.state = ''
  getArticleList()
}

// 内容部分
// 点击删除事件
const onDelete = async (row) => {
  await ElMessageBox.confirm('确认删除该文章吗', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
    .then(async () => {
      console.log(row)

      await articleDeleteService(row.id)
      ElMessage.success('删除成功')
      getArticleList()
    })
    .catch(() => {})
}

// 底部分页导航
// 每页的数目设置
const handleSizeChange = (size) => {
  params.value.pagenum = 1
  params.value.pagesize = size
  getArticleList()
}
// 当前页设置
const handleCurrentChange = (page) => {
  params.value.pagenum = page
  getArticleList()
}

// 文本编辑框
const articleEditRef = ref()
// 点击编辑事件
const onEdit = (row) => {
  articleEditRef.value.open(row)
}
// 点击新增事件
const addArticle = (row) => {
  articleEditRef.value.open(row)
}
// 提交事件
const onSuccess = () => {
  getArticleList()
}
</script>

<template>
  <div class="main">
    <ContentBox title="文章管理">
      <template #extra>
        <el-button @click="addArticle" type="primary">添加文章</el-button>
      </template>
      <!-- 主体部分顶部导航 -->
      <el-form inline>
        <el-form-item label="文章分类">
          <ChannelSelect v-model="params.cate_id"></ChannelSelect>
        </el-form-item>
        <el-form-item label="发布状态">
          <el-select style="width: 180px" v-model="params.state">
            <el-option label="已发布" value="已发布"></el-option>
            <el-option label="草稿" value="草稿"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="changeParams" type="primary">搜索</el-button>
          <el-button @click="resetParams">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 主体部分内容 -->
      <el-table :data="articleList" v-loading="loading">
        <el-table-column prop="title" label="文章标题" width="300">
          <template #default="{ row }">
            <el-link type="primary">{{ row.title }}</el-link>
          </template>
        </el-table-column>
        <el-table-column prop="cate_name" label="分类"></el-table-column>
        <el-table-column prop="pub_date" label="发布时间">
          <template #default="{ row }">
            {{ formatTime(row.pub_date) }}
          </template>
        </el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button
              :icon="Edit"
              circle
              plain
              type="primary"
              @click="onEdit(row)"
            ></el-button>
            <el-button
              :icon="Delete"
              circle
              plain
              type="danger"
              @click="onDelete(row)"
            ></el-button>
          </template>
        </el-table-column>
        <template #empty>
          <el-empty description="无数据"></el-empty>
        </template>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        v-model:current-page="params.pagenum"
        v-model:page-size="params.pagesize"
        :page-sizes="[2, 4, 8, 16]"
        layout="total, prev, pager, next, jumper, sizes"
        :total="total"
        style="margin-top: 10px; justify-content: flex-end"
        background
      >
      </el-pagination>
    </ContentBox>
    <!-- 文本编辑框 -->
    <ArticleEdit ref="articleEditRef" @success="onSuccess"></ArticleEdit>
  </div>
</template>
