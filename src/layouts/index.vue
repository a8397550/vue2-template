<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Config from "@/config/index.js";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  mounted() {
    console.log(Config, "Config");
  }
};
</script>

<style>
</style>
