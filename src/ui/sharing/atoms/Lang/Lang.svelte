<script lang="ts">
  import { isLoading } from "svelte-i18next";
  import { i18n } from "@stores";

  import "./Lang.postcss";

  function onChangeLang() {
    $i18n.changeLanguage($i18n.language === "es" ? "en-US" : "es");
  }
</script>

<button
  on:click={onChangeLang}
  disabled={$isLoading}
  class="btn-icon variant-ghost-primary lang"
>
  {$i18n.language?.split("-")[0]}
</button>
