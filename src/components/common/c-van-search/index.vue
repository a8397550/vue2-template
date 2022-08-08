<template>
  <van-search 
    v-model="cValue" 
    :placeholder="placeholder" 
    @search="onSearch"
    @input="change"
  />
</template>

<script>
import VanSearch from "vant/lib/search";
import "vant/lib/search/style";

export default {
  name: "c-van-search",
  components: {
    VanSearch
  },
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    value: {
      required: true,
      default: ""
    },
    placeholder: {
      default: "请输入搜索关键词"
    }
  },
  data() {
    return {
      cValue: this.value
    };
  },
  methods: {
    onSearch(val) {
      this.$emit("search", val);
    },
    change(value) {
      this.$emit("input", value);
    }
  }
};
</script>