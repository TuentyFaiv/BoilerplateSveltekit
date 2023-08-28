<script lang="ts">
	import { layout } from "@styles";

	import { Header } from "@sharing/organisms";
</script>

<Header />

<main class={layout.main}>
	<slot />
</main>
