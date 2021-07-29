<template>
  <div id="toolbar-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "ToolBar"
}
</script>

<style scoped>
  #toolbar-container {
    height: 49px;
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    margin: 0;
  }
</style>
