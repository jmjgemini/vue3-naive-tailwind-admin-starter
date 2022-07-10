<script setup lang="ts">
import {
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutContent,
  NIcon
} from "naive-ui";
import { NMenu, NButton, NDropdown, NSpace } from "naive-ui";
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

const dropDownOptions = [
  {
    label: "个人设置",
    key: "personal-setting"
  },
  {
    label: "退出登录",
    key: "logout"
  }
];
</script>

<template>
  <n-layout position="absolute">
    <n-layout-header style="height: 64px" bordered>
      <div class="flex flex-row items-center justify-between h-full px-4">
        <div class="text-xl">Naive Admin Pro</div>
        <n-space>
          <n-button size="small" strong secondary type="success">
            切换深色模式
          </n-button>
          <n-button size="small" strong secondary type="success">
            偏好设置
          </n-button>
          <n-dropdown :options="dropDownOptions">
            <div class="cursor-pointer">你好,管理员</div>
          </n-dropdown>
        </n-space>
      </div>
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
      <n-layout-content bordered>
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
