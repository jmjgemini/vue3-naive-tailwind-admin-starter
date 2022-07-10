import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import pinia from "./store";
import router from "./router";

setupTailwind();
createApp(App).use(router).use(pinia).mount("#app");

// 解决tailwind和naive ui样式冲突的问题
// check https://www.naiveui.com/zh-CN/light/docs/style-conflict
function setupTailwind() {
  const meta = document.createElement("meta");
  meta.name = "naive-ui-style";
  document.head.appendChild(meta);
}
