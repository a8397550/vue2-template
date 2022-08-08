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
    <template v-if="active === '2'">
      <c-hr 
        :height="6" 
        :margin-left="24"
        :margin-right="24"
        :margin-top="5"
        :margin-bottom="16"
        :color="'#f7f8fa'"
      ></c-hr>
      <task-details-list></task-details-list>
    </template>
    <div class="ul-c" v-if="active === '1'">
      <task-pending-list></task-pending-list>
    </div>
  </div>
</template>

<script>
import CVanTabs from "@/components/common/c-van-tabs";
import CVanSearch from "@/components/common/c-van-search";
import CVanDropdownMenu from "@/components/common/c-van-dropdown-menu";
import CVanDivider from "@/components/common/c-hr/divider.vue";
import CHr from "@/components/common/c-hr";
import TaskDetailsList from "@/components/task-details/task-details-list.vue";
import taskPendingList from "@/components/task-details/task-pending-list.vue";

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
    CHr,
    TaskDetailsList,
    taskPendingList
  },
  data() {
    return {
      active: "1",
      search: "",
      columns: [
        {text: "任务待办", value: "1"}, 
        {text: "任务详情", value: "2"},
        {text: "任务记录", value: "3"}
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
