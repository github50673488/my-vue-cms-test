<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <h3>HomeContainer</h3>

  </div>
</template>

<script>
export default {
  name: 'HomeContainer'
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

  }
}
</style>
