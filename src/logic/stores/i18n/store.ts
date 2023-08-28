import { createI18nStore } from "svelte-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import config from "@config";
import { enUS, es } from "date-fns/locale";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    debug: false,
    fallbackLng: config.i18n_fallback_lang,
    supportedLngs: config.i18n_langs,
    ns: [
      "auth",
      "forms",
      "footer",
      "header",
      "home",
      "translation",
      /* NEXT_LOCALE */
    ],
    defaultNS: "translation",
    load: "currentOnly",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

const i18n = createI18nStore(i18next);

const locales = {
  "en-US": enUS,
  es,
};

export { i18next, i18n, locales };
