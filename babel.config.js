module.exports = api => {
  const babelEnv = api.env();
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 Chrome versions',
            'last 2 Firefox versions',
            'last 2 Safari versions',
            'last 2 ChromeAndroid versions',
            'last 2 Edge versions',
            'last 2 iOS versions'
          ]
        },
        useBuiltIns: 'entry',
        corejs: '3.0.0'
      }
    ],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ];
  const plugins = [
    '@babel/transform-react-constant-elements',
    'transform-react-remove-prop-types',
    '@babel/plugin-transform-runtime',

    // Stage 2 https://github.com/babel/babel/tree/master/packages/babel-preset-stage-2
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-throw-expressions'
  ];

  if (babelEnv === 'production') {
    plugins.push(['@babel/plugin-transform-react-inline-elements']);
  }

  return {
    assumptions: {
      setPublicClassFields: true
    },
    presets,
    plugins
  };
};
