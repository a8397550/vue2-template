<template>
  <div class="main-container" v-if="modeFlag">
    <div class="header-container"></div>
    <div class="layout-container">
      <div
        class="menu-container"
        :class="isCollapse? 'min' : '' "
      >
        <el-menu
          default-active="1-4"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          @select="handleSelect"
        >

          <el-submenu
            v-for="item in menuData"
            :key="item.index"
            :index="item.index"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item-group
              v-for="(sonItem, index) in item.children"
              :key="index"
            >
              <span slot="title">{{sonItem.title}}</span>
              <el-menu-item
                v-for="itemFinal in sonItem.children"
                :key="itemFinal.index"
                :index="itemFinal.index"
              >{{itemFinal.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">PC组件</span>
            </template>
            <el-menu-item-group>
              <span slot="title">列表页</span>
              <el-menu-item index="2-1">例子1</el-menu-item>
              <el-menu-item index="2-2">例子2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="新增or编辑or查看 页面">
              <el-menu-item index="2-3">例子3</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="其他">
              <el-menu-item index="2-4">例子1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="main">
        <div v-if="type === 'h5'" class="h5-container">
          <router-view/>
        </div>
        <div v-else class="pc">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modeFlag: !this.$route.query.mode,
      type: "h5", // "h5" | "pc"
      isCollapse: false,
      menuData: [{
        title: "掌端组件",
        index: "1",
        children: [
          {
            title: "列表页",
            children: [
              {
                title: "数据核查列表",
                index: "/h5-list"
              },
              {
                title: "任务详情-任务待办列表",
                index: "/task-pending-details"
              }
            ]
          },
          {
            title: "新增or编辑or查看 页面",
            children: [
              {
                title: "动态表单以及动态查看展示",
                index: "/h5-add"
              },
              {
                title: "例子2",
                index: "/h5-add-type"
              }
            ]
          },
        ]
      }]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (keyPath[0] === "1") {
        this.type = "h5";
      } else {
        this.type = "pc";
      }

      if (this.$route.path === key) {
        return;
      }

      this.$router.push({
        path: key
      });
    },
    handleOpen(key, keyPath) {
      // eslint-disable-next-line
      console.log("handleOpen", key, keyPath);
    },
    handleClose(key, keyPath) {
      // eslint-disable-next-line
      console.log("handleClose", key, keyPath);
    }
  }
};
</script>

<style scoped lang="scss">
.main-container {
  .header-container {
    height: 49px;
    border-bottom: 1px solid #ccc;
  }
  .layout-container {
    display: flex;
    height: calc(100vh - 50px);
    .menu-container {
      width: 240px;
      min-height: 400px;
      flex: none;
      &.min {
        width: 65px;
      }
    }
    .el-menu-vertical-demo {
      height: 100%;
    }
    .main {
      flex: 1;
      // background-color: aqua;
      display: flex;
      justify-content: center;
      .h5-container {
        width: 750px;
        height: 100%;
        // background-color: red;
        box-shadow: 0px 0px 2px #ccc;
        overflow-y: auto;
      }
    }
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}
</style>
