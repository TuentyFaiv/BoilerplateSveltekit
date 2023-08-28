import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			// Assets
			"@images/*": "src/assets/images/*",
			"@icons/*": "src/assets/images/icons/*",
			// Logic
			"@config": "src/logic/config.ts",
			"@stores": "src/logic/stores/index.ts",
			"@actions": "src/logic/actions/index.ts",
			"@schemas/*": "src/logic/schemas/*",
			"@services/*": "src/logic/services/*",
			"@typing/*": "src/logic/typing/*",
			"@utils/*": "src/logic/utils/*",
			// UI Home
			"@home/atoms": "src/ui/home/atoms/index.ts",
			"@home/molecules": "src/ui/home/molecules/index.ts",
			"@home/organisms": "src/ui/home/organisms/index.ts",
			"@home/styles": "src/ui/home/styles/index.ts",
			/* NEXT_ALIAS */
			// UI Sharing
			"@sharing/atoms": "src/ui/sharing/atoms/index.ts",
			"@sharing/molecules": "src/ui/sharing/molecules/index.ts",
			"@sharing/organisms": "src/ui/sharing/organisms/index.ts",
			"@styles": "src/ui/sharing/styles/globals.ts",
			"@mixins": "src/ui/sharing/styles/mixins.ts",
		}
	}
};

export default config;
