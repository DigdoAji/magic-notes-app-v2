module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2021: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'off',
    'no-alert': 'off',
    'import/extensions': 'off',
    "import/no-extraneous-dependencies": "off",
    'import/no-unresolved': 'off',
    'import/no': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
  },
}