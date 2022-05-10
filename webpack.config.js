module.exports = {
  //define entrypoint
  entry: "./src/index.js",

  //define output point
  output: {
    path: "/dist",
    filename: "bundle.js",
  },

  mode: "development",

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"],
        },
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader",
      },
    ],
  },
};
