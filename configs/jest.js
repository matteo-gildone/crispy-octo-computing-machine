import globals from 'globals';
import core from './core.js';
import pluginJest from 'eslint-plugin-jest';


export default [
	...core,
	{
		languageOptions: {
			globals: {...globals.node, ...globals.browser, ...pluginJest.environments.globals.globals}
		},
		...pluginJest.configs['flat/recommended'],
		plugins: { jest: pluginJest }
	}
];