<!--下拉框-->
<template>
  <van-cell-group
    :border="border"
  >
    <!-- 只读，编辑态都支持了 -->
    <van-field
      v-if="!readonlyText"
      v-model="currentValue"
      :label="title"
      :placeholder="placeholder"
      :is-link="isLink"
      :rules="required && rules || []"
      :required="required"
      readonly
      input-align="right"
      :border="border"
      @click="togglePicker"
    />
    <!-- 后台能传输name的时候，之间显示name -->
    <van-cell
      v-else
      :title="title"
      :is-link="false"
      :required="required"
      :value="readonlyText"
      :value-class="readonlyText ? 'cell-text' : 'placeholder-text'"
      :border="border"
    />
    <van-popup
      v-model="showPicker"
      position="bottom"
    >
      <van-picker
        :columns="columns"
        show-toolbar
        @cancel="cancel"
        @confirm="select"
      />
    </van-popup>
  </van-cell-group>
</template>
<script>
import VanCell from "vant/lib/cell";
import "vant/lib/cell/style";
import VanCellGroup from "vant/lib/cell-group";
import "vant/lib/cell-group/style";
import VanPopup from "vant/lib/popup";
import "vant/lib/popup/style";
import VanField from "vant/lib/field";
import "vant/lib/field/style";
import VanPicker from "vant/lib/picker";
import "vant/lib/picker/style";


export default {
  name: "commonSelect",
  components: {
    VanCell,
    VanCellGroup,
    VanPopup,
    VanField,
    VanPicker
  },
  model: {
    prop: "value",
    event: "select"
  },
  props: {
    readonlyText: String, // 查看态，直接通过 readonlyText 显示内容
    value: {
      required: true,
      default: ""
    },
    title: {
      default: "标题"
    },
    placeholder: {
      default: "请选择",
    },
    readonly: { // 查看态，是否只读，结合 value，columns 组合只读态
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: true
    },
    isLink: {
      type: Boolean,
      default: false
    },
    border: { // 必填星号展示
      type: Boolean,
      default: false
    },
    columns: {
      default: () => {
        return [{
          text: "测试",
          value: ""
        }];
      }
    },
    rules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: "该选项不能为空" }
        ];
      }
    }
  },
  data() {
    return {
      showPicker: false
    };
  },
  computed: {
    currentValue() {
      const find = (this.columns || []).find(item => item.value === this.value);

      if (find) {
        return find.text;
      }

      return this.value || undefined;
    }
  },
  methods: {
    togglePicker() {
      if (this.readonly) {
        return;
      }
      this.showPicker = true;
    },
    cancel() {
      this.showPicker = false;
    },
    select(item) {
      if (this.columns.length === 0) {
        this.showPicker = false;
        return;
      }
      this.$emit("select", item.value);
      this.showPicker = false;
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
