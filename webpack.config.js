const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    popup: path.join(__dirname, "./src/popup.js"),
    background: path.join(__dirname, "./src/background.js"),
    options: path.join(__dirname, "./src/options.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/popup.html"),
      filename: "popup.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/options.html"),
      filename: "options.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "./public/manifest.json"),
          to: path.join(__dirname, "./dist"),
          force: true,
          // generates the manifest file using the package.json informations
          transform: (content, path) =>
            Buffer.from(
              JSON.stringify(
                {
                  description: process.env.npm_package_description,
                  version: process.env.npm_package_version,
                  ...JSON.parse(content.toString()),
                },
                null,
                "\t"
              )
            ),
        },
      ],
    }),
  ],
  devtool: "cheap-module-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../dist"),
      watch: false,
    },
    devMiddleware: {
      publicPath: `http://localhost:${3000}`,
      writeToDisk: true,
    },
  },
};
