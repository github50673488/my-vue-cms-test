<template>
  <div>
    <button type="button" class="mui-btn mui-btn-royal">
      紫色
    </button>
    <h3>{{ msg }}</h3>
    <mt-button type="primary" size="large" plain icon="back" @click="showToast">primary</mt-button>
    <router-view/>
  </div>
</template>

<script>
// 按需从 MintUI 中，导出需要的 弹框组件
import {Toast} from 'mint-ui'

export default {
  name: 'HelloSPA',
  data () {
    return {
      msg: 'HelloSPA',
      toastInstanse: null
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.showToast()
      setTimeout(() => {
        this.toastInstanse.close()
      }, 3000)
    },
    showToast () {
      this.toastInstanse = Toast({
        message: 'test toast',
        position: 'top',
        duration: -1,
        iconClass: 'glyphicon glyphicon-heart',
        className: 'mytoast'
      })
    }
  }
}
</script>

<style scoped>

</style>
