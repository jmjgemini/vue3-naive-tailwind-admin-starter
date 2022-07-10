<script setup lang="ts">
import { NConfigProvider, NGlobalStyle } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
import { lightTheme } from "naive-ui";
import { ref } from "vue";
const theme = ref(lightTheme);
</script>

<template>
  <n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN">
    <router-view />
    <n-global-style />
  </n-config-provider>
</template>

<style>
html,
body,
#app {
  height: 100vh;
}
</style>
