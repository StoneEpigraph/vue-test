<template>
  <tool-bar>
    <tool-bar-item path="/home">
      <img slot="item-icon" src="../assets/toolbar/home.svg" alt="">
      <img slot="item-icon-active" src="../assets/toolbar/home-active.svg" alt="">
      <span slot="item-text" :itemTextColor="itemTextColor">首页</span>
    </tool-bar-item>
    <tool-bar-item path="/category">
      <img slot="item-icon" src="../assets/toolbar/category.svg" alt="">
      <img slot="item-icon-active" src="../assets/toolbar/category-active.svg" alt="">
      <span slot="item-text">分类</span></tool-bar-item>
    <tool-bar-item path="/cart">
      <img slot="item-icon" src="../assets/toolbar/cart.svg" alt="">
      <img slot="item-icon-active" src="../assets/toolbar/cart-active.svg" alt="">
      <span slot="item-text">购物车</span></tool-bar-item>
    <tool-bar-item path="/profile">
      <img slot="item-icon" src="../assets/toolbar/profile.svg" alt="">
      <img slot="item-icon-active" src="../assets/toolbar/profile-active.svg" alt="">
      <span slot="item-text">我的</span></tool-bar-item>
  </tool-bar>
</template>

<script>
import ToolBar from "../components/toolbar/ToolBar";
import ToolBarItem from "../components/toolbar/ToolBarItem";

export default {
  name: "MainToolBar",
  data() {
    return {
      itemTextColor: 'red'
    }
  },
  components: {
    ToolBar,
    ToolBarItem
  }
}
</script>

<style scoped>

</style>
