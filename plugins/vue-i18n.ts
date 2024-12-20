import en from "@/locales/en.json";
import ru from "@/locales/ru.json";
import uz from "@/locales/uz.json";
import { createI18n } from "vue-i18n";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    locale: useCookie("locale").value || "uz",
    legacy: false,
    messages: {
      en,
      ru,
      uz,
    },
  });

  nuxtApp.vueApp.use(i18n);
});
