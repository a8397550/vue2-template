<template>
  <div class="hello">
    <title-h3 title="基本信息" />
    <c-van-cell
      v-for="(item, index) in baseInfos"
      :key="index"
      :title="item.title"
      :value="item.value"
      :border="false"
    />
    <c-hr
      :margin-top="10"
      :height="20"
    />
    <title-h3 title="核查信息" />
    <van-form
      @submit="onSubmit"
      @failed="onFailed"
      v-if="Object.keys(formValue).length"
    >
      <template v-for="(item, index) in inputs">
        <c-van-field
          v-if="item.type !== 'select'"
          :key="item.key"
          :title="item.title"
          v-model="formValue[item.key]"
          :placeholder="`请输入${item.title}`"
          :required="true"
          :rules="[{ required: item.required, message: '' }]"
          :type="item.type"
        ></c-van-field>
        <c-van-select
          v-else
          :key="index"
          v-model="formValue[item.key]"
          :title="item.title"
          :columns="columns[item.key] || []"
          :placeholder="`请选择${item.title}`"
          :rules="[{ required: item.required, message: '' }]"
        >
        </c-van-select>
      </template>
      <van-button
        class="button-submit"
        block
        type="info"
        native-type="submit"
      >提交</van-button>
    </van-form>
  </div>
</template>

<script>
import TitleH3 from "@/components/common/title-h3";
import CVanCell from "@/components/common/c-van-cell";
import CHr from "@/components/common/c-hr";
import CVanField from "@/components/common/c-van-field";
import CVanSelect from "@/components/common/c-van-select";
import VanForm from "vant/lib/form";
import "vant/lib/form/style";


export default {
  name: "h5-add",
  props: {
  },
  components: {
    CVanCell,
    TitleH3,
    CHr,
    CVanField,
    VanForm,
    CVanSelect
  },
  data() {
    return {
      baseInfos: [{
        title: "姓名",
        value: "姓名"
      }],
      type: "edit", // 区分编辑还是查看 "edit" | "select"
      formValue: {},
      inputs: [],
      columns: {}
    };
  },
  mounted() {
    this.reqeustData();
  },
  methods: {
    reqeustData() {
      new Promise(resolve => {
        resolve({
          msg: "",
          code: 200,
          obj: {
            type: "",
            inputs: [
              {
                title: "名称",
                type: "text",
                key: "name",
                required: true,
                value: "xxx"
              },
              {
                title: "性别",
                type: "select",
                key: "sex",
                required: true,
                value: "0"
              },
              {
                title: "年龄",
                key: "age",
                type: "int",
                required: true,
                value: 18
              },
              {
                title: "金额",
                key: "float",
                type: "float",
                required: true,
                value: 1.2
              }
            ]
          }
        });
      }).then(res => {
        const formValue = {};
        const inputs = res.obj.inputs.map(item => {
          if (item.type === "float") {
            item.type = "number";
          } else if (item.type === "int") {
            item.type = "digit";
          } else if (item.type === "text") {
            item.type = undefined;
          }

          if (item.key === "sex") {
            // 处理columns的逻辑
            this.columns[item.key] = [{text: "男", value: "1"},{text: "女", value: "0"}];
          }

          if (item.key === "age") {
            item.min = 0;
          }

          formValue[item.key] = item.value;

          return Object.assign({}, item);
        });
        this.formValue = formValue;
        this.inputs = inputs;
      });
    },
    onFailed() {
      this.$toast("提交失败");
    },
    onSubmit() {
      // eslint-disable-next-line
      console.log("submit", this.formValue);
    }
  }
};
</script>

<style scoped lang="scss">
.button-submit {
  margin-top: 60px;
}
</style>
