<template>
  <div
    class="scroll-c"
    @scroll="scrollFn"
  >
    <slot name="list"></slot>
    <div 
      v-for="item in list" 
      :key="item" 
      class="scroll-item">{{item}}</div>
    <van-loading v-if="loading" size="24px">加载中...</van-loading>
    <c-van-divider
      v-if="overflow"
      :className="'hr-top'"
      :text="`我是有底线的`"
    />
  </div>
</template>

<script>
/**
 * 使用此组件须知，scroll-c必须要有滚动条展示，
 * slot=list 里面的元素，必须具备 class="scroll-item"
 * 
 * 注意：this.loading = true的时候是节流的
*/
import VanLoading from "vant/lib/loading";
import "vant/lib/loading/style";
import CVanDivider from "@/components/common/c-hr/divider.vue";
import {debounce} from "@/lib/debounce";
export default {
  components: {
    VanLoading,
    CVanDivider
  },
  data() {
    this.scrollFnDebounce = debounce((top, offsetTop) => {
       if (top > offsetTop) {
          // 滚动条滚动到最后一个元素的出现位置
          this.requestData();
        }
    });
    return {
      overflow: false,
      loading: false,
      list: []
    };
  },
  methods: {
    setLoading(bool) {
      this.loading = bool;
    },
    setOverflow (bool) {
      this.overflow = bool;
    },
    requestData() {
      console.log("aaa");
      this.$emit("requestData");
    },
    scrollFn(e) {
      if (this.loading || this.overflow) { // this.loading 节流
        return;
      }
      // 获取滚动条位置
      const scrollTop = e.currentTarget.scrollTop;
      const clientHeight = e.currentTarget.clientHeight;
      const children = e.currentTarget.querySelectorAll(".scroll-item");
      if (children.length > 0) {
        const lastDom = children[children.length - 1];
        this.scrollFnDebounce(scrollTop + clientHeight, lastDom.offsetTop);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .scroll-c {
    height: 100%;
    overflow-y: auto;
    position: relative;
    .scroll-item {
      // height: 200px;
      // margin-bottom: 10px;
      position: relative;
    }
    ::v-deep .van-loading {
      text-align: center;
      margin: 20px;
    }
  }
</style>