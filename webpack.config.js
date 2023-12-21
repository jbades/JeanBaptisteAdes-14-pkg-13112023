const path = require('path');

module.exports = {
  // Development mode for better readability of the compiled code
  mode: 'development',

  // Entry point of your application
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // Configuration for the development server
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },

  // Configuration of modules and transpilation rules
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Rule for .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Using Babel presets for ES6 and React
          }
        }
      },
      {
        test: /\.css$/, // Rule for CSS files
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  // Configuration for resolving file extensions automatically
  resolve: {
    extensions: ['.js', '.jsx']
  },

  stats: {
    errorDetails: true, // log errors
  }
};
