const { resolve } = require('path')

module.exports = {
  entry:  {
    mtgDeckBuilder: './src/js/renderMTG.js',
    index: resolve('./src/js/renderIndex.js')
  },
  output: {
    path: resolve('./dist'),
    filename: '[name].min.js'
  },
  watch: true,
  mode: "development",
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
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader"
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  }
}