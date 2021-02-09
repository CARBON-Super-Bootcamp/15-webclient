const path = require('path');

module.exports = {
  entry: {
    main: './src/assignment/main.js',
    assignment: './src/assignment/main.js',
    task: './src/assignment/task/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './www/assignment',
    port: 5757,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
