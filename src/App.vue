<script setup lang="ts">
import { NConfigProvider, NButton, NGlobalStyle } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
import { lightTheme, darkTheme } from "naive-ui";
import { ref } from "vue";
const theme = ref(lightTheme);
function changeTheme() {
  if (theme.value.name == "light") {
    theme.value = darkTheme;
  } else {
    theme.value = lightTheme;
  }
}
</script>

<template>
  <n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN">
    <n-button type="primary" @click="changeTheme">ChangeTheme</n-button>
    <n-global-style />
  </n-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
