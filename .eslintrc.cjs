module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"airbnb-base",
		"airbnb-typescript/base",
		"plugin:@typescript-eslint/recommended",
		"plugin:svelte/recommended",
	],
	plugins: ["@typescript-eslint"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			},
		}
	],
	rules: {
		"import/extensions": 0,
		"import/no-extraneous-dependencies": 0,
		"import/no-unresolved": 0,
		"import/prefer-default-export": 0,
		"linebreak-style": 0,
		"quotes": "off",
		"@typescript-eslint/quotes": [
			"error",
			"double"
		],
		"comma-dangle": "off",
		"@typescript-eslint/comma-dangle": [
			"warning",
			"always-multiline"
		],
		"max-len": [
			"error",
			{
				"code": 130
			}
		],
		"dot-notation": "off",
		"@typescript-eslint/dot-notation": 0,
		"padded-blocks": 0,
		"lines-between-class-members": "off",
		"@typescript-eslint/lines-between-class-members": [
			"error",
			"always",
			{
				"exceptAfterSingleLine": true
			}
		],
		"@typescript-eslint/naming-convention": [
			"error",
			{
				"selector": "variable",
				"format": ["camelCase", "UPPER_CASE", "snake_case"],
			}
		],
		"object-shorthand": 0,
		"object-curly-newline": 0,
		"no-useless-return": 0,
		"no-case-declarations": 0,
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": 1,
		"no-debugger": 0,
		"no-plusplus": 0,
		"no-tabs": ["error", { allowIndentationTabs: true }]
	}
};