const path = require('path');

module.exports = {
  entry: path.resolve('./src/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      }
    ]
  },
  mode: 'production',
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    cropperjs: {
      root: 'Cropper',
      commonjs2: 'cropperjs',
      commonjs: 'cropperjs',
      amd: 'cropperjs'
    },
    '@urfri/react-cropper': {
      root: 'ReactCropper',
      commonjs: '@urfri/react-cropper',
      commonjs2: '@urfri/react-cropper',
      amd: '@urfri/react-cropper'
    },
    antd: {
      root: 'antd',
      commonjs: 'antd',
      commonjs2: 'antd',
      amd: 'antd'
    }
  }
}