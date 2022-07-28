module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/errors'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx', '.json'],
        map: [['@', './src']]
      }
    }
  }
};
