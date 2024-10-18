<script setup>
import { articleGetChannelsService } from '@/api/article'
import { ref } from 'vue'

const ChannelList = ref([])
// 获取后台的分类列表
const getChannelList = async () => {
  const res = await articleGetChannelsService()
  ChannelList.value = res.data
}
getChannelList()

const emit = defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    type: [Number, String]
  },
  width: {
    type: [Number, String],
    default: '180px'
  }
})
</script>

<template>
  <el-select
    :style="{ width }"
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <el-option
      v-for="item in ChannelList"
      :key="item.id"
      :label="item.cate_name"
      :value="item.id"
    ></el-option>
  </el-select>
</template>
