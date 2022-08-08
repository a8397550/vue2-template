<template>
  <div>
    <c-van-cell
      v-for="(item, index) in inputs"
      :key="index"
      :title="item.title"
      :value="item.value"
      :border="false"
      :required="item.required"
    />
    <c-van-cell
      :title="'任务流程'"
      :border="false"
      class="c-van-cell-auto"
    >
      <template v-slot>
        <c-van-steps></c-van-steps>
      </template>
    </c-van-cell>
  </div>
</template>

<script>
import CVanCell from "@/components/common/c-van-cell";
import CVanSteps from "@/components/common/c-van-steps";

export default {
  components: {
    CVanCell,
    CVanSteps
  },
  props: {
    inputs: {
      default() {
        return [
          {
            title: "任务编号",
            value: "任务编号",
            key: "number"
          },
          {
            title: "任务状态",
            value: "任务状态"
          },
          {
            title: "任务类型",
            value: "任务类型",
            required: true,
          },
          {
            title: "任务标题",
            value: "任务标题",
            required: true,
          },
          {
            title: "开始时间",
            value: "开始时间",
            required: true,
          },
          {
            title: "结束时间",
            value: "结束时间",
            required: true,
          },
          {
            title: "核查对象类型",
            value: "核查对象类型",
            required: true,
          },
          {
            title: "核查对象类型",
            value: "核查对象标签",
            required: true,
          },
          {
            title: "核查字段",
            value: "核查字段",
            required: true,
          },
          {
            title: "核查范围",
            value: "核查范围",
            required: true,
          },
          {
            title: "紧要程度",
            value: "紧要程度",
          },
          {
            title: "任务描述",
            value: "任务描述",
          },
          {
            title: "上传附件",
            value: "上传附件",
          },
          {
            title: "历时",
            value: "历时",
          }
        ];
      }
    }
  }
};
</script>

<style scoped lang="scss">
.c-van-cell-auto {
  ::v-deep .van-cell__title {
    flex: none;
    width: 100px;
  }
  ::v-deep .van-cell__value {
    flex: 1;
  }
}
</style>

