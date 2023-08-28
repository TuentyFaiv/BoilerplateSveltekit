<script lang="ts">
  import "./Header.postcss";

  import logo from "@icons/svelte-logo.svg";

  import { Lang } from "@sharing/atoms";
</script>

<header class="header">
  <a class="header__corner" href="https://kit.svelte.dev/docs/introduction">
    <img src={logo} alt="SvelteKit" />
  </a>
  <div class="header__corner">
    <Lang />
  </div>
</header>
