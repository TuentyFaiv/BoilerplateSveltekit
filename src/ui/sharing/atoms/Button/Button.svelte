<script lang="ts">
  import { cx } from "@emotion/css";

  import type { Props } from "./Button.proptypes";

  import * as styles from "./Button.styles";

  export let text: Props["text"];
  export let type: Props["type"] = "button";
  export let config: Props["config"] = {
    style: "normal",
    size: "normal",
    text: "normal",
  };
  export let datas: Props["datas"] = {};

  const stylesOptions = {
    undefined: styles.button,
    normal: styles.button,
    gradient: styles.button_gradient,
    outline: styles.button_outline,
    invert: styles.button_invert,
  };

  const sizesOptions = {
    normal: styles.size_normal,
    undefined: styles.size_normal,
    small: styles.size_small,
    big: styles.size_big,
  };

  const textOptions = {
    undefined: styles.text_normal,
    normal: styles.text_normal,
    upper: styles.text_upper,
    lower: styles.text_lower,
    capital: styles.text_capital,
  };

  $: datasets = Object.keys(datas).reduce(
    (acc, key) => ({ ...acc, [`data-${key}`]: datas[key] }),
    {}
  );

  $: stylesToApply = cx(
    stylesOptions[`${config.style}`],
    textOptions[`${config.text}`],
    sizesOptions[`${config.size}`]
  );
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
