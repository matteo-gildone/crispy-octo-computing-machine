import globals from 'globals';
import core from './core.js';

export default [
	...core,
	{
		languageOptions: {
			globals: {...globals.browser}
		},
		rules: {
			// Custom
			// http://eslint.org/docs/rules/
			'accessor-pairs': 'error',
			'array-callback-return': 'error',
			'block-scoped-var': 'error',
			'camelcase': ['error', {
				'properties': 'always'
			}],
			'complexity': 'warn',
			'curly': 'error',
			'default-case': 'error',
			'dot-notation': 'error',
			'eqeqeq': 'error',
			'for-direction': 'error',
			'func-name-matching': 'error',
			'func-names': ['error', 'never'],
			'getter-return': 'error',
			'guard-for-in': 'error',
			'max-depth': 'warn',
			'max-nested-callbacks': ['warn', 4],
			'max-params': ['warn', {
				'max': 4
			}],
			'new-cap': ['error', {
				'newIsCap': true,
				'capIsNew': true
			}],
			'no-alert': 'error',
			'no-array-constructor': 'error',
			'no-caller': 'error',
			'no-div-regex': 'error',
			'no-else-return': ['error', {
				'allowElseIf': false
			}],
			'no-empty': ['error', {
				'allowEmptyCatch': true
			}],
			'no-eq-null': 'error',
			'no-eval': 'error',
			'no-extend-native': 'error',
			'no-extra-bind': 'error',
			'no-extra-label': 'error',
			'no-implicit-coercion': 'error',
			'no-implicit-globals': 'error',
			'no-implied-eval': 'error',
			'no-iterator': 'error',
			'no-label-var': 'error',
			'no-labels': 'error',
			'no-lone-blocks': 'error',
			'no-lonely-if': 'error',
			'no-multi-assign': 'error',
			'no-multi-str': 'error',
			'no-negated-condition': 'error',
			'no-new': 'error',
			'no-new-func': 'error',
			'no-new-wrappers': 'error',
			'no-octal-escape': 'error',
			'no-proto': 'error',
			'no-prototype-builtins': 'error',
			'no-restricted-globals': ['error', 'event'],
			'no-restricted-imports': ['error', 'domain', 'freelist', 'smalloc', 'sys', 'colors'],
			'no-restricted-syntax': ['error', 'WithStatement'],
			'no-return-assign': ['error', 'always'],
			'no-script-url': 'error',
			'no-self-assign': ['error', {
				'props': true
			}],
			'no-self-compare': 'error',
			'no-sequences': 'error',
			'no-shadow-restricted-names': 'error',
			'no-template-curly-in-string': 'error',
			'no-throw-literal': 'error',
			'no-undef': ['error', {
				'typeof': true
			}],
			'no-undef-init': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-unneeded-ternary': 'error',
			'no-unused-expressions': 'error',
			'no-unused-vars': ['error', {
				'ignoreRestSiblings': true,
				'argsIgnorePattern': '^_'
			}],
			'no-use-before-define': ['error', 'nofunc'],
			'no-useless-call': 'error',
			'no-useless-computed-key': 'error',
			'no-useless-concat': 'error',
			'no-useless-constructor': 'error',
			'no-useless-rename': 'error',
			'no-useless-return': 'error',
			'no-void': 'error',
			'no-warning-comments': 'warn',
			'no-with': 'error',
			'one-var': ['error', 'never'],
			'operator-assignment': ['error', 'always'],
			'prefer-promise-reject-errors': ['error', {
				'allowEmptyReject': true
			}],
			'radix': 'error',
			'symbol-description': 'error',
			'unicode-bom': ['error', 'never'],
			'valid-typeof': ['error', {
				'requireStringLiterals': false
			}],
			'yoda': 'error',

			// eslint-plugin-no-use-extend-native
			// https://github.com/dustinspecker/eslint-plugin-no-use-extend-native
			'no-use-extend-native/no-use-extend-native': 'error'
		}
	}
];