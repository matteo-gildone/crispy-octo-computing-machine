import globals from 'globals';
import core from './core.js';
import pluginJest from 'eslint-plugin-jest';

const jestConfigs = [
	pluginJest.configs['flat/recommended'], {
		plugins: {jest: pluginJest}
	}];

export default [
	...core,
	...jestConfigs,
	{
		languageOptions: {
			globals: {...globals.node, ...globals.browser, ...pluginJest.environments.globals.globals}
		}
	}
];