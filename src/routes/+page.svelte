<script lang="ts">
	import { i18n } from "@stores";

	import "@home/styles";

	import welcome from "@images/svelte-welcome.webp";
	import welcome_fallback from "@images/svelte-welcome.png";

	import { Button, Lang, SEO } from "@sharing/atoms";
</script>

<SEO title={$i18n.t("home:seo-title")} description="Ditto Svelte" />

<section class="home">
	<h1 class="home__h1">
		<span class="home__welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img class="home__image" src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		{$i18n.t("translation:welcome")}
	</h1>

	<h2>
		{$i18n.t("translation:edit")} <strong>src/routes/+page.svelte</strong>
	</h2>

	<h3>Built-in components</h3>
	<p>Language button</p>
	<Lang />
	<p>Buttons</p>
	<div>
		<p>Normal</p>
		<Button text="Example text" />
		<p>Gradient</p>
		<Button
			text="Example text"
			config={{
				style: "gradient",
			}}
		/>
		<p>Outline</p>
		<Button
			text="Example text"
			config={{
				style: "outline",
			}}
		/>
		<p>Invert</p>
		<Button
			text="Example text"
			config={{
				style: "invert",
			}}
		/>
	</div>
</section>
