<template>
  <div
    class="hr"
    :style="{
      background: color,
      height: `${height}px`,
      margin: `${margin}px`,
      marginTop: `${marginTop}px`,
      marginBottom: `${marginBottom}px`,
      marginLeft: `${marginLeft}px`,
      marginRight: `${marginRight}px`
    }"
  ></div>
</template>
<script>
export default {
  name: "c-hr",
  props: {
    margin: {
      default: 0
    },
    marginTop: {
      default: 0
    },
    marginBottom: {
      default: 0
    },
    marginLeft: {
      default: 0
    },
    marginRight: {
      default: 0
    },
    color: {
      default: "#e4e4e5"
    },
    height: {
      default: 1
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
