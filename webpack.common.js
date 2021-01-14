const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "output")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        enforce: 'pre'
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.png$/,
        use: "file-loader"
      }
    ]
  },

  plugins: [new VueLoaderPlugin()]
};



// TODO: dev server
// sourceMap
// eslint
// 开发和生产模式区别
