const path = require("path");
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CheckerPlugin } = require("awesome-typescript-loader");
const ESLintPlugin = require("eslint-webpack-plugin");

const PUBLIC = path.resolve(__dirname, "public");

const HTML = new HtmlWebpackPlugin({
  template: path.resolve("./public/index.html"),
});

const globals = () => {
  const environments = {
    development: {
      "process.env.EXAMPLE": "Example dev environment variable",
    },
    staging: {
      "process.env.EXAMPLE": "Example stg environment variable",
    },
    production: {
      "pprocess.env.EXAMPLE": "Example prd environment variable",
    }
  }

  return environments[process.env.BUILD_TARGET];
};

const options = {
  files: "./src/**",
  extensions: ["ts", "tsx"],
  fix: true,
  formatter: "stylish"
};

const config = {
  devServer: {
    compress: true,
    contentBase: PUBLIC,
    overlay: true,
    host: "0.0.0.0",
    port: 3000,
    historyApiFallback: true,
  },
  devtool: "source-map",
  entry: ["./index.ts"],
  module: {
    rules: [
      {
        enforce: "pre",
        include: [path.resolve(__dirname, "src")],
        test: /\.(ts|tsx)?$/,
        use: [
          { loader: "awesome-typescript-loader" },
        ],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: PUBLIC,
    publicPath: "/",
  },
  plugins: [
    new DefinePlugin(globals()),
    new CheckerPlugin(),
    new ESLintPlugin(options),
    HTML,
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/Components"),
      Features: path.resolve(__dirname, "src/Features"),
      Pages: path.resolve(__dirname, "src/Pages"),
      Global: path.resolve(__dirname, "src/Global"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};

module.exports = config;
