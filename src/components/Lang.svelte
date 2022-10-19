<script lang="ts">
  import { isLoading } from "svelte-i18next";
  import { i18n } from "../i18n";

  const onChangeLang = () => {
    $i18n.changeLanguage($i18n.language === "es" ? "en-US" : "es");
  };
</script>

{#if $isLoading}
  <p>Loading...</p>
{:else}
  <button on:click={onChangeLang}>{$i18n.language}</button>
{/if}
