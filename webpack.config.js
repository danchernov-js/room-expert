const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  devtool: "inline-source-map",
};