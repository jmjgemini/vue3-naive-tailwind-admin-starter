<script setup lang="ts">
import { NConfigProvider, NButton, NGlobalStyle } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
import { lightTheme, darkTheme } from "naive-ui";
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent } from "naive-ui";
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
    <n-layout position="absolute">
      <n-layout-header style="height: 64px; padding: 24px" bordered>
        <n-button type="primary" @click="changeTheme">ChangeTheme</n-button>
      </n-layout-header>
      <n-layout has-sider position="absolute" bordered style="top: 64px">
        <n-layout-sider content-style="padding: 24px;" bordered
          >sider</n-layout-sider
        >
        <n-layout-content content-style="padding: 24px;" bordered>
          content
        </n-layout-content>
      </n-layout>
    </n-layout>

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
