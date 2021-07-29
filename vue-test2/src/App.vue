<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
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
