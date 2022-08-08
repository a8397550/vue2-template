<template>
  <van-tabs 
    v-model="active" 
    @change="change"
    class="c-van-tabs"
    :class="classObj"
  >
    <van-tab 
      v-for="item in columns" :key="item.value" 
      :title="item.text"
      :name="item.value"
      :disabled="item.disabled === true"
    ></van-tab>
  </van-tabs>
</template>
<script> 
import VanTabs from "vant/lib/tabs";
import "vant/lib/tabs/style";
import VanTab from "vant/lib/tab";
import "vant/lib/tabs/style";


export default {
  components: {
    VanTabs,
    VanTab
  },
  name: "c-van-tabs",
   model: {
    prop: "value",
    event: "input"
  },
  props: {
    border: {
      type: Boolean,
      default: true
    },
    value: {
      required: true,
      default: ""
    },
    columns: {
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      active: this.value
    };
  },
  computed: {
    classObj() {
      const obj = {};
      if (!this.border) {
        obj["border-not"] = true;
      }

      return obj;
    }
  },
  methods: {
    change(name) {
      this.$emit("input", name);
    }
  }
};
</script>
<style lang="scss" scoped>
  .c-van-tabs {
    &.border-not {
      ::v-deep .van-tab--active {
        color: rgb(0, 140, 255);
        .van-tab__text {
          border-bottom: none;
        }
      }

      ::v-deep .van-tabs__line {
        display: none;
      }
    }

    ::v-deep .van-tabs__line {
      background-color: rgb(0, 140, 255);
    }
  }
</style>
