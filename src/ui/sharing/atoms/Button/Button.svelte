<script lang="ts">
  import type { Props } from "./Button.proptypes";

  import "./Button.postcss";

  export let text: Props["text"];
  export let type: Props["type"] = "button";
  export let config: Props["config"] = {
    style: "normal",
    size: "normal",
    text: "normal",
  };
  export let datas: Props["datas"] = {};

  const stylesOptions = {
    undefined: "variant-filled-primary button-normal",
    normal: "variant-filled-primary button-normal",
    gradient:
      "bg-gradient-to-br variant-gradient-primary-secondary button-gradient",
    outline: "variant-ringed-primary button-outline",
    invert: "variant-filled-surface button-invert",
  };

  const sizesOptions = {
    normal: "size-normal",
    undefined: "size-normal",
    small: "size-small",
    mid: "size-mid",
    big: "size-big",
  };

  const textOptions = {
    undefined: "text-normal",
    normal: "text-normal",
    upper: "text-upper",
    lower: "text-lower",
    capital: "text-capital",
  };

  $: datasets = Object.keys(datas).reduce(
    (acc, key) => ({ ...acc, [`data-${key}`]: datas[key] }),
    {}
  );

  $: style = stylesOptions[`${config.style}`];
  $: styleText = textOptions[`${config.text}`];
  $: styleSize = sizesOptions[`${config.size}`];
  $: stylesToApply = `btn ${style} ${styleText} ${styleSize}`;
</script>

{#if type === "label"}
  <p class={stylesToApply} {...datasets} {...$$restProps}>
    <span>{text}</span>
  </p>
{:else if type === "link"}
  <a
    class={stylesToApply}
    href={$$restProps.href}
    {...datasets}
    {...$$restProps}
  >
    <span>{text}</span>
  </a>
{:else}
  <button {type} on:click class={stylesToApply} {...datasets} {...$$restProps}>
    <span>{text}</span>
  </button>
{/if}
