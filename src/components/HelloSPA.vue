<template>
  <div>
    <h3>{{ msg }}</h3>
    <router-link to="/child1">child1</router-link>
    <router-link to="/child2">child2</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloSPA',
  data () {
    return {
      msg: 'HelloSPA'
    }
  }
}
</script>

<style scoped>

</style>
