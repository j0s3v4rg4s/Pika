const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    contentScript: './src/content.ts',
    backgroud: './src/backgroud.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve('src'), path.resolve('node_modules')],
  },
  module: {
    rules: [
      {
        test: [/\.ts(x?)$/, /\.js/],
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        path.resolve(__dirname, 'src', 'manifest.json'),
        {
          from: path.resolve(__dirname, 'src', 'images'),
          to: 'images',
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
