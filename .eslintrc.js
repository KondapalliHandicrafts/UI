module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:import/errors'
  ],
  globals: {
    document: true,
    fetch: true,
    jQuery: true,
    localStorage: true,
    React: true,
    window: true
  },
  parser: '@babel/eslint-parser',
  plugins: ['react', 'prettier', 'react-hooks', 'jest-dom'],
  root: true,
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true
      }
    ],
    'react/jsx-no-literals': 0,
    'react/jsx-max-depth': 0,
    'react/no-multi-comp': 0,
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-underscore-dangle': 0,
    'import/no-cycle': [2, { maxDepth: 1 }],
    'react/prefer-stateless-function': 'warn',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state']
      }
    ],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: false
      }
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'no-return-assign': ['error', 'except-parens'],
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'rendering'],
        groups: {
          rendering: ['/^render.+$/', 'render']
        }
      }
    ],
    'react/require-default-props': 0,
    'react/forbid-prop-types': [
      1,
      {
        forbid: ['any']
      }
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref']
      }
    ],
    'react/no-unstable-nested-components': [
      'error',
      {
        allowAsProps: true
      }
    ],
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-closing-bracket-location': ['warn'],
    'react/jsx-curly-spacing': ['warn', 'never'],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-fragments': [1, 'element'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-indent': ['warn', 2],
    'comma-dangle': ['error', 'never'],
    'react/jsx-key': 'error',
    'react/jsx-indent-props': 0,
    'no-trailing-spaces': [
      2,
      {
        skipBlankLines: true
      }
    ],
    'prefer-template': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'babel/object-curly-spacing': 0,
    'import/no-named-as-default': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function'
      }
    ],
    'react/jsx-no-bind': 'error'
  }
};
