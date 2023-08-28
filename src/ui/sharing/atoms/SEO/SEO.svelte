<script lang="ts">
  import config from "@config";
  import { i18n } from "@stores";

  import type { Props } from "./SEO.proptypes";

  export let title: Props["title"] = null;
  export let home: Props["home"] = false;
  export let description: Props["description"] = $i18n.t("description-seo");
  export let metas: Props["metas"] = [];
  export let metaid: Props["metaid"] = "id";

  $: titleSeo =
    home && title === null ? config.brand : `${title} | ${config.brand}`;
</script>

<svelte:head>
  <title>
    {titleSeo}
  </title>
  <meta name="description" content={description} />

  {#each metas as meta (meta[metaid])}
    <meta {...meta} />
  {/each}
</svelte:head>
