<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent } from "naive-ui";
</script>

<template>
  <n-layout position="absolute">
    <n-layout-header style="height: 64px; padding: 24px" bordered>
      head
    </n-layout-header>
    <n-layout has-sider position="absolute" bordered style="top: 64px">
      <n-layout-sider content-style="padding: 24px;" bordered>
        sider
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;" bordered>
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
