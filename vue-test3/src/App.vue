<template>
  <div>
    <router-link to="/home" >Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "App",
  data() {
    return {
      title: "这是App的标题啊",
      message: "Hello Vue"
    }
  }
}
</script>

<style scoped>

</style>
