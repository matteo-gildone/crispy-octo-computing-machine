import globals from 'globals';
import core from './core.js';
import nodePlugin from 'eslint-plugin-n';
import securityPlugin from 'eslint-plugin-security';

export default [
	...core,
	securityPlugin.configs.recommended,
	{
		languageOptions: {
			globals: {...globals.node}
		},
		plugins: {
			n: nodePlugin,
			security: securityPlugin,
		},
		rules: {
			'n/no-unpublished-bin': 'error',
			'n/process-exit-as-throw': 'error',
			'n/no-deprecated-api': 'error',
			// unicorn overrides
			"unicorn/prefer-module": 0,
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