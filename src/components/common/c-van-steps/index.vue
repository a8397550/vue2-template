<template>
  <div class="step-c">
    <van-steps
      direction="vertical"
      :active="active"
      :active-color="'#0279fd'"
      :active-icon="'circle'"
    >
      <van-step v-for="(item, index) in stepList" :key="index">
        <h3>{{item.text}}</h3>
        <p class="p">{{item.time}}</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
import VanSteps from "vant/lib/steps";
import "vant/lib/steps/style";
import VanStep from "vant/lib/step";
import "vant/lib/step/style";

export default {
  components: {
    VanStep,
    VanSteps
  },
  props: {
    active: {
      type: Number,
      default: 0
    },
    stepList: {
      default() {
        return [
          {
            text: "xxxx ",
            time: "2016-07-11 10:00"
          },
          {
            text: "xxxx ",
            time: "2016-07-11 10:00"
          },
          {
            text: "xxxx ",
            time: "2016-07-11 10:00"
          },
          {
            text: "完成任务",
            time: ""
          }
        ];
      }
    }
  }
};
</script>

<style scoped lang="scss">
.step-c {
  position: relative;
  top: -6px;

  h3 {
    margin: 0;
    max-width: 200px;
    color: #999 !important;
    font-size: 14px;
    text-align: center;
    position: relative;
    top: -6px;
  }
  .p {
    color: #ccc !important;
    text-align: center;
    position: relative;
    top: -6px;
  }
  ::v-deep .van-step__circle {
    width: 12px;
    height: 12px;
  }
  ::v-deep .van-step--finish {
    .van-step__circle {
      width: 12px;
      height: 12px;
      outline: 5px rgba(2, 121, 253, 0.5) solid;
    }
  }
  ::v-deep .van-step__icon--active {
    background-color: rgb(2, 121, 253);
    border-radius: 100%;
    width: 12px;
    height: 12px;
    outline: 5px rgba(2, 121, 253, 0.5) solid;
  }
  ::v-deep .van-step--vertical:not(:last-child)::after {
    border-bottom-width: 0px;
  }
}
</style>