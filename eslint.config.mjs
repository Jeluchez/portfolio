import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/jsx-fragments': ['error', 'syntax'],
      'indent': ['error', 2],
      'eol-last': ['error', 'always'],
      'no-duplicate-imports': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      'comma-dangle': ['error', 'never'],
      'no-unreachable': 'error',
      'eqeqeq': 'error',
      'no-else-return': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'error',
      'prefer-template': 'error',
      'key-spacing': 'error',
      'keyword-spacing': 'error',
      'no-trailing-spaces': 'error',
      'quotes': ['error', 'single'],
      'semi': 'error',
      'object-curly-spacing': ['error', 'always']
    }
  }
];

export default eslintConfig;
