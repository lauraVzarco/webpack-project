var path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  entry: "./dist/index.html",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
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
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "dist/index.html",
      filename: "index.html"
    })
  ],
};