<template>
  <div class="music-detail">
    <div v-html="musicList[musicId] ? musicList[musicId].content : ''">
    </div>
    <el-button class="music-detail_btn" type="primary" @click="$router.go(-1)">返回上一页</el-button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'musicList',
      'musicId'
    ])
  }
}
</script>
<style lang="less" scoped>
.music-detail {
  width: 100%;
  text-align: center;
  position: relative;
  .music-detail_btn {
    position: absolute;
    right: 10px;
    top: 0;
  }
}
</style>

