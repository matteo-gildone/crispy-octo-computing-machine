import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
// import eslintPluginNoUseExtendNative from 'eslint-plugin-no-use-extend-native'; //breaks the config
import pluginPromise from 'eslint-plugin-promise';

const jsConfigs = [
	js.configs.recommended,
	{
		name: 'crispy-octo-computing-machine/js',
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		ignores: [
			'dist/',
			'build/',
			'node_modules/'
		]
	}
];

const unicornConfigs = [
	{
		name: 'crispy-octo-computing-machine/unicorn',
		plugins: {
			unicorn: eslintPluginUnicorn
		},
		rules: {
			// eslint-plugin-unicorn
			// https://github.com/sindresorhus/eslint-plugin-unicorn
			'unicorn/prefer-spread': 'off',
			'unicorn/no-new-buffer': 'off',
			'unicorn/prefer-dom-node-dataset': 'off',
			'unicorn/prefer-dom-node-append': 'off',
			'unicorn/prefer-dom-node-remove': 'off',
		}
	}
];

const importConfigs = [
	{
		name: 'crispy-octo-computing-machine/import',
		plugins: {
			import: importPlugin
		},
		rules: {
			// eslint-plugin-import
			// https://github.com/benmosher/eslint-plugin-import
			'import/default': 'error',
			'import/export': 'error',
			'import/first': 'error',
			'import/named': 'error',
			'import/namespace': ['error', {
				allowComputed: true
			}],
			'import/no-absolute-path': 'error',
			'import/newline-after-import': 'error',
			'import/no-amd': 'error',
			'import/no-duplicates': 'error',
			'import/no-extraneous-dependencies': 'error',
			'import/no-mutable-exports': 'error',
			'import/no-named-as-default-member': 'error',
			'import/no-named-as-default': 'error',
			'import/no-unresolved': ['error', {
				commonjs: true
			}],
			'import/order': 'error',
			'import/no-unassigned-import': ['error', {
				allow: [
					'babel-polyfill',
					'@babel/polyfill',
					'babel-register',
					'@babel/register'
				]
			}],
		}
	}
];

const promiseConfigs = [
	{
		name: 'crispy-octo-computing-machine/promise',
		plugins: {
			promise: pluginPromise
		},
		rules: {
			// eslint-plugin-promise
			// https://github.com/xjamundx/eslint-plugin-promise
			'promise/param-names': 'error',
			'promise/no-return-wrap': ['error', {
				allowReject: true
			}],
			'promise/no-return-in-finally': 'error',
		}
	}
];

export default [
	{
		name: "crispy-octo-computing-machine/core",
		linterOptions: {
			reportUnusedDisableDirectives: "error"
		}
	},
	...jsConfigs,
	...unicornConfigs,
	...importConfigs,
	...promiseConfigs
]