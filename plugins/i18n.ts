import { createI18n } from "vue-i18n/index";
import Cookies from "js-cookie";
import zhCN from "@/locales/zh-CN.json";
import en from "@/locales/en.json";

const message = {
  zhCN,
  en,
};

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: Cookies.get("lang") || "zhCN",
  warnHtmlMessage: false,
  messages: message,
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n);
});
