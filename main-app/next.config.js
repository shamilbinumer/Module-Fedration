const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'main-app',
        remotes: {
          second_app: `second_app@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
      })
    );
    return config;
  },
};

// Set the environment variable
process.env.NEXT_PRIVATE_LOCAL_WEBPACK = 'true';