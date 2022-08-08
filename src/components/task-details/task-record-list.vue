<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  }
};
</script>

<style lang="scss" scoped>
  .scroll-c {
    height: 100%;
    overflow-y: auto;
    .scroll-item {
      height: 200px;
      margin-bottom: 10px;
    }
  }
</style>