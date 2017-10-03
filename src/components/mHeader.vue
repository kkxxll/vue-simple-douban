<template>
  <div class="mheader">
    <el-tabs class="mheader_tab" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="音乐会" name="music"></el-tab-pane>
      <el-tab-pane label="电影" name="movie"></el-tab-pane>
      <el-tab-pane label="读书" name="book"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'music'
    }
  },
  methods: {
    handleClick (tab, event) {
      this.$router.push({name: tab.$options.propsData.name || ''})
    }
  }
}
</script>
<style lang="less" scoped>
</style>

