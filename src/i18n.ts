import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import config from "@config";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    debug: false,
    fallbackLng: config.i18n_fallback_lang,
    supportedLngs: config.i18n_langs,
    ns: [
      // "errors",
      // "footer",
      // "formik",
      // "header",
      // "modal",
      // "swal",
      // "terms",
      "translation"
    ],
    nsSeparator: false,
    load: "currentOnly",
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    }
  });

export const i18n = createI18nStore(i18next);
