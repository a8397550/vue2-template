<template>
  <c-scroll 
    ref="cscroll"
    @requestData="requestData"
  >
    <template slot="list">
      <div v-for="item in list" :key="item" class="scroll-item">
        {{item}}
      </div>
    </template>
  </c-scroll>
</template>

<script>
import CScroll from "@/components/common/c-scroll";

export default {
  components: {
    CScroll
  },
  data() {
    return {
      list: [1,2,3,4,5,6,7,8,9, 10]
    };
  },
  methods: {
    requestData() {
      this.$refs.cscroll.setLoading(true);
      setTimeout(() => {
        this.$refs.cscroll.setLoading(false);
        this.$refs.cscroll.setOverflow(true);
      }, 3000);
    }
  }
};
</script>

<style lang="scss" scoped>
  
  .scroll-item {
    height: 200px;
    margin-bottom: 10px;
  }
  
</style>