<script setup>
defineProps({
  title: {
    type: String,
    default: '请输入标题'
  }
})
</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="clearfix">
        <span>{{ title }}</span>
        <div class="extra">
          <slot name="extra"></slot>
        </div>
      </div>
    </template>
    <slot></slot>
  </el-card>
</template>

<style lang="scss" scoped>
.box-card {
  min-height: 100%;
  .clearfix {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
