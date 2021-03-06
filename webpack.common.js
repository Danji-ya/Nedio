const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: [
                ["@babel/transform-runtime"]
              ]
            },
          }, 
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            }
          }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|mp3|obj|glb)$/i,
        type: "asset/resource",
        generator: {
          filename: 'static/[hash][name][ext]',
        },
      },
      {
        test: /\.svg$/,
        use: [{
          loader: '@svgr/webpack',
          options: {
            icon: true,
          }
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  plugins: [
    new Dotenv(),
    new ForkTsCheckerWebpackPlugin(),
	  new webpack.ProvidePlugin({
      React: 'react',
    })
  ],
};