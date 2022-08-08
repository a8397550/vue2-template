<template>
  <div class="list-container">
    <c-van-tabs :border="false" v-model="active" :columns="columns"></c-van-tabs>
    <template v-if="active === '1' || active === '3'">
      <c-van-search 
        placeholder="对象名称搜索"
        v-model="search" 
        @search="onSearch" 
      />
      <c-van-dropdown-menu 
        :show-size="3"
        :columns1Level="columns1Level"
        :columns2Level="columns2Level"
        :columns3Level="columns3Level"
      />
      <c-van-divider
        :className="'hr-top'"
        :text="`共有${text}个对象`"
      />
    </template>
    <div class="ul-c">
      <task-data-check></task-data-check>
    </div>
  </div>
</template>

<script>
import CVanTabs from "@/components/common/c-van-tabs";
import CVanSearch from "@/components/common/c-van-search";
import CVanDropdownMenu from "@/components/common/c-van-dropdown-menu";
import CVanDivider from "@/components/common/c-hr/divider.vue";
import taskDataCheck from "@/components/task-details/task-data-check.vue";

export default {
  name: "task-pending",
  props: {
    msg: String
  },
  components: {
    CVanTabs,
    CVanSearch,
    CVanDropdownMenu,
    CVanDivider,
    taskDataCheck
  },
  data() {
    return {
      active: "1",
      search: "",
      columns: [
        {text: "未完成任务", value: "1"}, 
        {text: "已完成任务", value: "2"},
      ],
      columns1Level: [{text: "任务类型", value: ""}],
      columns2Level: [{text: "选择社区", value: ""}],
      columns3Level: [{text: "选择网格", value: ""}],
      text: 0,
    };
  },
  methods: {
    onSearch(val) {
      console.log(val, this.search);
    }
  }
};
</script>

<style scoped lang="scss">
  .hr-top {
    position: relative;
    margin: 0;
    margin-bottom: 16px;
  }
  .ul-c {
    height: calc(100vh - 186px);
  }
</style>
