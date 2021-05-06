<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="lunbotuItem in lunbotuList" :key="lunbotuItem.id">
        <img :src="lunbotuItem.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <h3>HomeContainer</h3>

  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'HomeContainer',
  data () {
    return {
      lunbotuList: []
    }
  },
  created () {
    this.getLunbotu()
  },
  methods: {
    getLunbotu () {
      this.$http.get('api/getlunbo').then(
        rusult => {
          // console.log('result.body', rusult.body)
          if (rusult.body.status === 0) {
            // Toast('加载轮播图OK')
            this.lunbotuList = rusult.body.message
          } else {
            // 失败的
            Toast('加载轮播图失败。。。')
          }
        }
      )
    }
  }

}
</script>

<style lang="scss" scoped>

.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: #e81616;
    }

    &:nth-child(2) {
      background-color: #b89494;
    }

    &:nth-child(3) {
      background-color: #35328e;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
