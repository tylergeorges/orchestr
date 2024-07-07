import typescriptEslint from '@typescript-eslint/eslint-plugin';

import globals from 'globals';

import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-plugin-prettier';

import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.FlatConfig} */
let jsConfig = {
  languageOptions: {
    globals: globals.browser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },

  rules: {
    'arrow-parens': ['off'],
    curly: 'off',

    'no-console': 'off'
  }
};

/** @type {import('eslint').Linter.FlatConfig} */
let typescriptPlugin = {
  languageOptions: {
    parser: /** @type {import('eslint').Linter.ParserModule} */ (tsParser),
    parserOptions: {
      project: './tsconfig.json'
    }
  },

  plugins: {
    '@typescript-eslint': typescriptEslint
  },

  rules: {
    ...typescriptEslint.configs['recommended'].rules,

    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        allowStaticOnly: true
      }
    ],

    '@typescript-eslint/no-misused-promises': [
      'warn',
      {
        checksVoidReturn: {
          arguments: false
        }
      }
    ]
  }
};

/** @type {import('eslint').Linter.FlatConfig} */
let reactConfig = {
  plugins: {
    react: reactPlugin
  },

  rules: {
    ...reactPlugin.configs['recommended'].rules,

    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],

    'react/react-in-jsx-scope': 'off'
  }
};

/** @type {import('eslint').Linter.FlatConfig} */
let reactHooksConfig = {
  plugins: {
    'react-hooks': hooksPlugin
  },

  rules: hooksPlugin.configs.recommended.rules
};

/** @type {import('eslint').Linter.FlatConfig} */
let nextConfig = {
  plugins: {
    '@next/next': nextPlugin
  },

  rules: {
    ...nextPlugin.configs['core-web-vitals'].rules
  }
};

/** @type {import('eslint').Linter.FlatConfig}[] */
let overridesConfigs = [
  {
    files: ['**/*.ts', '**/*.tsx'],

    plugins: {
      prettier: eslintConfigPrettier
    },

    rules: {
      'import/no-default-export': ['off'],
      'no-undef': 'off'
    },

    ignores: [
      '.next/*',

      // '**/*.js',
      // '**/*.config.js',

      // '**/*.mjs',
      // '**/*.config.mjs',

      // '**/*.cjs',
      // '**/*.config.cjs'
    ]
  }
];

/** @type {import('eslint').Linter.FlatConfig}[]*/
const config = [
  jsConfig,
  reactConfig,
  reactHooksConfig,
  typescriptPlugin,
  nextConfig,
  ...overridesConfigs
];

export default config;
