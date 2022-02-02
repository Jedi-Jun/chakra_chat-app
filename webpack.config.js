const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/dist'
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    port: 3033,
  },
};
