<template>
  <div class="book">
    <div class="book_list" v-loading.body="loading">
      <div class="book_item" v-for="(item, index) in list" :key="index">
        <img class="book_item_img" :src="item.image" alt="">
        <p class="book_item_tit">{{item.title}}</p>
        <p class="book_item_addr">{{item.address}}</p>
        <p class="book_item_time">{{item.begin_time}}</p>
        <!-- <p>{{item.alt}}</p> -->
        <p class="book_item_fee"><span>{{formatFee(item.fee_str)}}</span><el-button type="primary" @click="getMusic(index)">查看详情</el-button></p>

        <!-- <p v-html="`${item.content}`"></p> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { Music } from '@/common/music.js'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      list: [],
      loading: true
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      axios.get('/api/getData')
        .then((response) => {
          // console.log(response.data.events)
          this.formatData(response.data.events)
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    formatData(dataList) {
      let dataArr = []
      for (let i in dataList) {
        dataArr.push(new Music(dataList[i]))
      }
      this.list = dataArr
      this.saveMusicList(dataArr)
    },
    formatFee(val) {
      let reg = /\({1}/
      let index = reg.exec(val)
      let flag = index ? index.index : 0
      if (flag > 0) {
        return val.substr(0, flag)
      } else {
        return val
      }
    },
    getMusic(idx) {
      this.setMusicId(idx)
      this.$router.push('/music/detail')
    },
    ...mapActions([
      'saveMusicList',
      'setMusicId'
    ])
  }
}
</script>
<style lang="less" scoped>
.book {
  margin-top: 15px;
}

.book_list {
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: row;
  height: 260px;
  width: 100%;
  flex-wrap: wrap;
}

.book_item {
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, .1);
  box-sizing: border-box; // width: 25%;
  // padding: 5px;
  @media (max-width: 640px) {
    &:not(:nth-child(2n)) {
      margin-right: 10px;
    }
    width: calc(~"(100% - (1 * 10px)) / 2");
  }
  @media (min-width: 641px) and (max-width: 1200px) {
    &:not(:nth-child(3n+0)) {
      margin-right: 10px;
    }
    width: calc(~"(100% - (2 * 10px)) / 3");
  }
  @media (min-width: 1201px) {
    &:not(:nth-child(4n+0)) {
      margin-right: 10px;
    }
    width: calc(~"(100% - (3 * 10px)) / 4");
  }
  .book_item_img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
  .book_item_tit {
    box-sizing: border-box;
    padding: 10px;
    text-align: left;
    font-size: 18px;
    color: #1D8CE0;
  }
  .book_item_addr {
    box-sizing: border-box;
    padding: 10px;
    font-size: 14px;
    color: #13CE66;
  }
  .book_item_time {
    box-sizing: border-box;
    padding: 10px;
    font-size: 14px;
    color: #F7BA2A;
  }
  .book_item_fee {
    color: #FF4949;
    padding: 10px;
    font-size: 14px;
    > button {
      margin-left: 15px;
    }
  }
}
</style>


