<template>
  <div class="title-h3">{{title}}</div>
</template>
<script>
export default {
  name: "van-cell",
  props: {
    title: {
      default: "标题"
    },
  },
};
</script>
<style lang="scss" scoped>
.title-h3 {
  padding: 16px;
  font-size: 24px;
  color: #000;
}
</style>
