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
    // ...js.configs.recommended.rules,
    'arrow-parens': ['off'],
    // 'comma-dangle': ['warn', 'never'],
    // "comma-dangle": ["error", "always-multiline"],
    curly: 'off',
    // 'function-paren-newline': ['error', 'consistent'],
    // 'implicit-arrow-linebreak': ['error', 'beside'],
    // 'no-confusing-arrow': [
    //   'error',
    //   {
    //     allowParens: true
    //   }
    // ],
    // 'no-console': [
    //   'error',
    //   {
    //     allow: ['warn', 'error', 'info']
    //   }
    // ],
    // 'no-multiple-empty-lines': [
    //   'error',
    //   {
    //     max: 1
    //   }
    // ],

    // 'no-unused-expressions': [
    //   'error',
    //   {
    //     allowTernary: true
    //   }
    // ],
    // 'object-curly-newline': [
    //   'error',
    //   {
    //     consistent: true,
    //     multiline: true
    //   }
    // ],

    // 'object-curly-spacing': ['error', 'always'],
    // 'quote-props': ['off'],
    // // "quote-props": ["error", "consistent"],
    // quotes: ['off'],
    // // quotes: ["error", "double"],
    // 'require-atomic-updates': ['error'],
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

  // settings: {
  //   react: {
  //     version: "detect" // You can add this if you get a warning about the React version when you lint
  //   }
  // }
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
    // ...nextPlugin.configs.recommended.rules,
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

    ignores: ['.next/*', 'next.config.js', '**/*.js', '**/*.config.js']
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
