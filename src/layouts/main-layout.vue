<script setup lang="ts">
import {
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutContent,
  NIcon
} from "naive-ui";
import { NMenu, NButton } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { DotCircle, Book, Bookmark } from "@vicons/fa";
import { h, Component } from "vue";
import { RouterLink } from "vue-router";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: { name: "demo-page1" }
        },
        { default: () => "页面1" }
      ),
    key: "demo-page1",
    icon: renderIcon(Book)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: { name: "demo-page2" }
        },
        { default: () => "页面2" }
      ),
    key: "demo-page2",
    icon: renderIcon(Bookmark)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  },
  {
    label: "test",
    key: "test",
    icon: renderIcon(DotCircle)
  }
];
</script>

<template>
  <n-layout position="absolute">
    <n-layout-header style="height: 64px; padding: 24px" bordered>
      <span class="text-green-600 text-xl">Naive Admin Pro</span>
    </n-layout-header>
    <n-layout has-sider position="absolute" bordered style="top: 64px">
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :show-collapsed-content="false"
        show-trigger="arrow-circle"
        content-style="padding: 4px;"
        bordered
        :native-scrollbar="false"
      >
        <n-menu
          :options="menuOptions"
          :icon-size="20"
          :collapsed-icon-size="20"
        />
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;" bordered>
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
