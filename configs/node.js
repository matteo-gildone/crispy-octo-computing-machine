import globals from 'globals';
import core from './core.js';
import nodePlugin from 'eslint-plugin-n';
import securityPlugin from 'eslint-plugin-security';

const securityConfigs = [
	securityPlugin.configs.recommended,
	{
		name: 'crispy-octo-computing-machine/security',
		plugins: {
			security: securityPlugin,
		}
	}
];

const cjsConfigs = [
	nodePlugin.configs['flat/recommended-script'],
	{
		name: "eslint-config-eslint/cjs",
		plugins: {
			security: nodePlugin,
		}
	}
];

const esmConfigs = [
	nodePlugin.configs['flat/recommended-module'],
	{
		name: "eslint-config-eslint/esm",
		plugins: {
			security: nodePlugin,
		}
	}
];

export default [
	{
		name: "crispy-octo-computing-machine/node",
		linterOptions: {
			reportUnusedDisableDirectives: "error"
		},
		languageOptions: {
			globals: {...globals.node}
		}
	},
	...core,
	...securityConfigs,
	...cjsConfigs,
	...esmConfigs,
	{
		languageOptions: {
			globals: {...globals.node}
		},
		rules: {
			// unicorn overrides
			'unicorn/prefer-module': 0,
			'unicorn/catch-error-name': [
				'error',
				{
					'ignore': [
						'err'
					]
				}
			],
			'unicorn/prevent-abbreviations': [
				'error',
				{
					'allowList': {
						'err': true,
						'req': true,
						'res': true
					}
				}
			]
		}
	}
];