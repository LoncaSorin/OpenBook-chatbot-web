module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'eslint-plugin-import-helpers',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['components', './src/components/'],
          ['containers', './src/containers/'],
          ['assets', './src/assets/'],
          ['services', './src/services/'],
          ['constants', './src/constants/'],
          ['utils', './src/utils/'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'max-len': [2, 120, 2, {
      ignoreUrls: true,
      ignoreComments: true,
    }],
    'no-use-before-define': 0,
    'react/jsx-props-no-spreading': 0,
    'linebreak-style': 0,
    'react/no-array-index-key': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'no-nested-ternary': 0,
    'no-throw-literal': 0,
    'react/destructuring-assignment': 0,
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          'module',
          '/^(components|containers|context|routes)/',
          '/^(services|hooks)/',
          '/^(utils|constants|types|config|validation)/',
          '/^(assets)/',
        ],
      },
    ],
  },
  globals: {
    PayEngineWidget: false,
  },
};
