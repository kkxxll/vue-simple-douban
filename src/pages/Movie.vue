<template>
  <div class="movie">
    <div class="movie_block">
      <el-tag type="primary" class="movie_block_tag">正在热映</el-tag>
      <el-carousel :autoplay="false" trigger="click" id="el-carousel">
        <el-carousel-item v-for="(outItem, index1) in movieList" :key="index1">
          <div class="movie_block_item" v-for="(item, index) in outItem" :key="index" v-if="item.title">
            <img class="movie_block_item_img" v-lazy="item.image" alt="">
            <span class="movie_block_item_tit">{{item.title}}</span>
            <span class="movie_block_item_rating">
              <el-rate v-model="item.rating" disabled show-text text-color="#ff9900" :text-template="`${item.rating > 0 ? item.rating : '暂无评分'}`">
              </el-rate>
            </span>
            <!-- <span>{{typeof item.rating}}</span> -->
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Movie } from '@/common/movie'
import axios from 'axios'
export default {
  data() {
    return {
      list: []
    }
  },
  computed: {
    ...mapGetters([
      'movieList'
    ])
  },
  mounted() {
    try {
      this.getHotMovie()
        .then(this.getHotMovie(5, 5))
        .then(() => {
          return new Promise(function(resolve, reject) {
            resolve()
          })
            .then(this.getHotMovie(10, 5))
        })
    } catch (error) {

    }
  },
  methods: {
    getHotMovie(start = 0, count = 5) {
      try {
        axios.get('/api/getHotMovie', {
          params: {
            start: start,
            count: count
          }
        }).then((res) => {
          // console.log(res.data.subjects)
          this.formatMovie(res.data.subjects)
        }).catch((e) => {
          console.log(e)
        })
        return new Promise((resolve, reject) => {
          resolve()
        })
      } catch (error) {

      }
    },
    ...mapActions([
      'setMovieList'
    ]),
    formatMovie(val) {
      let movieArr = []
      for (let i in val) {
        // console.log(val[i].rating.average)
        movieArr.push(new Movie(val[i]))
      }
      this.list.push(movieArr)
      this.setMovieList(this.list)
    }
  }
}
</script>
<style lang="less" scoped>
.movie_block {
  box-sizing: border-box;
  padding: 10px;
  .movie_block_tag {
    margin-bottom: 10px;
  }
}

.el-carousel__item {
  display: flex;
  flex-direction: row;
  .movie_block_item {
    box-sizing: border-box;
    width: 20%;
    display: flex;
    flex-direction: column;
    text-align: center;
    .movie_block_item_img {
      display: block;
      margin: 0 auto;
      width: 130px;
      height: 200px;
    }
  }
}

.el-carousel__item {
  background-color: #fff;
}
</style>
<style lang="less">
.el-carousel__button {
  background: #665b5b;
}

.el-rate__icon {
  font-size: 14px !important;
}

.el-carousel__arrow {
  background: rgba(0, 0, 0, .5);
  color: #fff;
  &:hover {
    background: rgba(0, 0, 0, .6);
  }
}
</style>

