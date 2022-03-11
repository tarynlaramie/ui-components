module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['svelte3', '@typescript-eslint'],
  extends: ['../../.eslintrc.json'],
  ignorePatterns: ['!**/*', 'pre-build.ts'],
  overrides: [
    {
      files: ['*.ts', '*.js', '*.svelte'],
      parserOptions: {
        project: ['libs/web-components/tsconfig.*?.json'],
      },
      rules: {},
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        "@typescript-eslint/naming-convention": ["error", { "selector": "enumMember", "format": ["PascalCase"] }],
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'svelte3/typescript': require('typescript'),
  },
};
