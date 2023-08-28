<script lang="ts">
	import { page } from "@home/styles";
	import { i18n } from "@stores";

	import welcome from "@images/svelte-welcome.webp";
	import welcome_fallback from "@images/svelte-welcome.png";

	import { SEO } from "@sharing/atoms";
</script>

<SEO title={$i18n.t("home:seo-title")} description="Ditto Svelte" />

<section class={page.section}>
	<h1 class={page.h1}>
		<span class={page.welcome}>
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img class={page.image} src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		{$i18n.t("translation:welcome")}
	</h1>

	<h2>
		{$i18n.t("translation:edit")} <strong>src/routes/+page.svelte</strong>
	</h2>
</section>
