import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import pinia from "./store";

setupTailwind();
createApp(App).use(pinia).mount("#app");

// 解决tailwind和naive ui冲突的问题
// see https://www.naiveui.com/zh-CN/light/docs/style-conflict
function setupTailwind() {
  const meta = document.createElement("meta");
  meta.name = "naive-ui-style";
  document.head.appendChild(meta);
}
