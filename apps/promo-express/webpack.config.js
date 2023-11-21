const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: [path.join(__dirname, 'src', 'static', 'js', 'app.js'), path.join(__dirname, 'src', 'static', 'scss', 'app.scss')]
  },
  output: {
    path: path.join(__dirname, 'src', 'public'),
    publicPath: '/assets',
    filename: '[name].js',
  },
  devServer: {
    compress: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ]
};
