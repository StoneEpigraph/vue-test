<template>
  <div id="app">
    <router-view/>
    <main-tool-bar></main-tool-bar>
  </div>
</template>

<script>
import MainToolBar from "./view/MainToolBar";

export default {
  name: 'App',
  components: {
    MainToolBar
  }
}
</script>

<style>

@import url('assets/base');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
