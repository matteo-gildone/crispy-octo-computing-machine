import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
// import eslintPluginNoUseExtendNative from 'eslint-plugin-no-use-extend-native'; //breaks the config
import pluginPromise from 'eslint-plugin-promise';


export default [
	js.configs.recommended,
	eslintPluginUnicorn.configs['flat/recommended'],
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		plugins: {
			import: importPlugin,
			unicorn: eslintPluginUnicorn,
			promise: pluginPromise,
			// 'no-use-extend-native': eslintPluginNoUseExtendNative,
		},
		rules: {
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
			// eslint-plugin-promise
			// https://github.com/xjamundx/eslint-plugin-promise
			'promise/param-names': 'error',
			'promise/no-return-wrap': ['error', {
				allowReject: true
			}],
			'promise/no-return-in-finally': 'error',
			// eslint-plugin-unicorn
			// https://github.com/sindresorhus/eslint-plugin-unicorn
			'unicorn/prefer-spread': 'off',
			'unicorn/no-new-buffer': 'off',
			'unicorn/prefer-dom-node-dataset': 'off',
			'unicorn/prefer-dom-node-append': 'off',
			'unicorn/prefer-dom-node-remove': 'off',
			// 'no-use-extend-native/no-use-extend-native': 'error'
		},
		ignores: [
			'dist/',
			'build/',
			'node_modules/'
		]
	}
]