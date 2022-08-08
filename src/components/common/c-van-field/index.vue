<template>
  <van-field
    v-model="cValue"
    input-align="right"
    :label="title"
    :placeholder="placeholder"
    :error-message="errorMessage"
    :required="required"
    :border="border"
    :rules="rules"
    :type="type"
    :readonly="readonly"
    @input="change"
  />
</template>
<script>
import VanField from "vant/lib/field";
import "vant/lib/field/style";

export default {
  components: {
    VanField
  },
  model: {
    prop: "value",
    event: "input"
  },
  name: "c-van-field",
  props: {
    value: {
      required: true,
      default: ""
    },
    type: {
      default: undefined
    },
    readonly: {
      type: Boolean,
      default: false
    },
    title: {
      default: "标题"
    },
    placeholder: {
      default: "",
    },
    errorMessage: {
      default: ""
    },
    required: { // 必填星号展示
      type: Boolean,
      default: false
    },
    isLink: { // > 箭头展示
      type: Boolean,
      default: false
    },
    border: { // 必填星号展示
      type: Boolean,
      default: false
    },
    rules: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      cValue: this.value
    };
  },
  computed: {

  },
  methods: {
    change(value) {
      this.$emit("input", value);
    }
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
