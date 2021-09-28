// production config
// eslint-disable-next-line @typescript-eslint/no-var-requires
const resolve = require('path').resolve;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const merge = require('webpack-merge');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: './index.tsx',
    output: {
        filename: 'js/bundle.[hash].min.js',
        path: resolve(__dirname, '../../dist'),
        publicPath: '/'
    },
    devtool: 'source-map',
    plugins: []
});
