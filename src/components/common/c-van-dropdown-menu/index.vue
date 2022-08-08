<template>
  <van-dropdown-menu active-color="#1989fa" class="c-van-dropdown-menu">
    <van-dropdown-item v-if="showSize >= 1" v-model="value.level1Value" :options="columns1Level" @change="change1Level" />
    <van-dropdown-item v-if="showSize >= 2" v-model="value.level1Value" :options="columns2Level" @change="change2Level" />
    <van-dropdown-item v-if="showSize >= 3" v-model="value.level1Value" :options="columns3Level" @change="change3Level" />
    <van-dropdown-item v-if="showSize >= 4" title="更多" ref="item">
      <slot name="more"></slot>
    </van-dropdown-item>
  </van-dropdown-menu>
</template>

<script>
import VanDropdownMenu from "vant/lib/dropdown-menu";
import "vant/lib/dropdown-menu/style";
import VanDropdownItem from "vant/lib/dropdown-item";
import "vant/lib/dropdown-item/style";

export default {
  components: {
    VanDropdownMenu,
    VanDropdownItem
  },
  props: {
    showSize: {
      default: 2,
    },
    columns1Level: {
      default: () => [{text: "XXX类型", value: ""}],
    },
    columns2Level: {
      default: () => [{text: "XXX类型", value: ""}],
    },
    columns3Level: {
      default: () => [{text: "XXX类型", value: ""}],
    },
  },
  data() {
    return {
      value: {
        level1Value: "",
        level2Value: "",
        level3Value: "",
      },
    };
  },
  methods: {
    change1Level() {

    },
    change2Level() {
      
    },
    change3Level() {
      
    }
  }
};
</script>

<style scoped lang="scss">
  .c-van-dropdown-menu {
    ::v-deep .van-dropdown-menu__bar {
      box-shadow: none;
    }
  }
</style>