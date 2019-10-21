const [IGNORE, WARN, ERROR] = [0, 1, 2]

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Plain Eslint
    'complexity': [ERROR, 5],
    // Import
    'import/order': [
      ERROR,
      {
        'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'never'
      }
    ],
    // React
    'react/react-in-jsx-scope': IGNORE
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
