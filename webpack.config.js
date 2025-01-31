// const path = require('path');

// module.exports = {
//     mode: 'development', 
//     entry: './src/index.js', // 你的入口文件
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'), // 輸出目錄
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/, // 正確處理 .css 檔案
//                 use: [
//                   'style-loader', // 將 CSS 插入到 DOM
//                   'css-loader',   // 解析 CSS
//                 ],
//               },
//             {
//               test: /\.scss$/,
//               use: [
//                 'style-loader', // 將 CSS 插入到 DOM
//                 'css-loader',   // 解析 CSS
//                 'sass-loader'   // 將 Sass 編譯為 CSS
//               ],
//             },
//           ],
//     },
//     devServer: {
//         static: './dist', // 用於服務靜態檔案
//         hot: true, // 啟用熱加載
//     },
// };
'use strict'

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',  // 更新入口路徑
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',  // 設定靜態檔案路徑
    port: 8080,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'vision.html'),
      filename: 'vision.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'solutions.html'),
      filename: 'solutions.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'getstart.html'),
      filename: 'getstart.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'all.css',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, 'public'), to: 'public' }],
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 提取 CSS
          'css-loader',                 // 解析 CSS
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')()]
              }
            }
          },
          'sass-loader' // 編譯 SCSS
        ]
      },
      {
        test: /\.css$/, // 處理純 CSS 文件
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      }
    ]
  },
  devtool: 'source-map',
  stats: 'errors-warnings', // 僅顯示錯誤和警告
};

