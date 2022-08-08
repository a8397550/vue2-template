<!--下拉框-->
<template>
  <!-- 后台能传输name的时候，之间显示name -->
  <van-cell
    :title="title"
    :is-link="isLink"
    :required="required"
    :value="value || placeholder || ''"
    :value-class="value ? 'cell-text' : 'placeholder-text'"
    :border="border"
  >
    <slot name="default"></slot>
  </van-cell>
</template>
<script>
import VanCell from "vant/lib/cell";
import "vant/lib/cell/style";
// import VanCellGroup from "vant/lib/cell-group";
// import "vant/lib/cell-group/style";

export default {
  components: {
    VanCell
  },
  name: "c-van-cell",
  props: {
    required: { // 必填星号展示
      type: Boolean,
      default: false
    },
    title: {
      default: "标题"
    },
    placeholder: {
      default: "",
    },
    value: {
      default: ""
    },
    isLink: { // > 箭头展示
      type: Boolean,
      default: false
    },
    border: { // 必填星号展示
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    };
  },
  computed: {

  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
.cell-text {
  color: #323233;
}

.placeholder-text {
  ::v-deep .van-field__control {
    color: #969799;
  }
}
</style>
