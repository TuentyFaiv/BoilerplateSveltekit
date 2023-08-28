import {
  PUBLIC_API_LOCAL,
  PUBLIC_IPREGISTRY_KEY,
  PUBLIC_IPREGISTRY_URL,
  PUBLIC_DEBUG_I18NEXT,
  PUBLIC_API,
} from "$env/static/public";

export default {
  brand: "Ditto Svelte",
  auth_pages: {
    signin: "/auth/signin",
    signup: "/auth/signup",
    forgot: "/auth/forgot",
  },
  i18n_langs: ["es", "en-US"],
  i18n_fallback_lang: "es",
  i18n_debug: PUBLIC_DEBUG_I18NEXT,
  api_local: PUBLIC_API_LOCAL || "http://localhost:5000",
  api: PUBLIC_API || "http://localhost:4000",
  registry_key: PUBLIC_IPREGISTRY_KEY,
  registry_url: PUBLIC_IPREGISTRY_URL,
};
