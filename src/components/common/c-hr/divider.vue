<template>
  <van-divider
    :class="className"
    :style="{ 
    color: textColor, 
    borderColor: borderColor, 
    padding: text? '0 16px': ''
    }"
  >{{text}}</van-divider>
</template>
<script>
import VanDivider from "vant/lib/divider";
import "vant/lib/divider/style";

export default {
  name: "c-van-divider",
  components: {
    VanDivider
  },
  props: {
    className: {
      default: ""
    },
    text: String,
    borderColor: {
      default: "#ebedf0"
    },
    textColor: {
      default: "#ebedf0"
    },
    height: {
      default: 1
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
