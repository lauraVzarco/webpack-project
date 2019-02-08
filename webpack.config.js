var path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: 'cheap-module-eval-source-map', 
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "culo.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer : {
    contentBase: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
};