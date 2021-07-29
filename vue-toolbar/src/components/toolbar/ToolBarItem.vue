<template>
  <div id="toolbar-item-container" @click="clickBtn">
    <div v-if="!isActive" class="item-icon">
      <slot name="item-icon">
      </slot>
    </div>
    <div v-else class="item-icon">
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-text" :style="itemTextStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolBarItem",
  props: {
    path: {
      type: String,
      default: '/home'
    },
    itemTextColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    itemTextStyle() {
      return !this.isActive ? '' : {color: this.itemTextColor};
    }
  },
  methods: {
    clickBtn() {
      this.$router.push({path: this.path})
    }
  }
}
</script>

<style scoped>
  #toolbar-item-container {
    flex: 1;
    height: 49px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item-icon img {
    height: 24px;
    justify-content: center;
  }
  .item-text {
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
    font-size: 14px;
  }
</style>
