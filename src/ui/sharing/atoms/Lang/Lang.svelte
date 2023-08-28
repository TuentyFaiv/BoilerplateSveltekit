<script lang="ts">
  import { isLoading } from "svelte-i18next";
  import { i18n } from "@stores";

  import * as styles from "./Lang.styles";

  function onChangeLang() {
    $i18n.changeLanguage($i18n.language === "es" ? "en-US" : "es");
  }
</script>

<button on:click={onChangeLang} disabled={$isLoading} class={styles.lang}>
  {$i18n.language?.split("-")[0]}
</button>
