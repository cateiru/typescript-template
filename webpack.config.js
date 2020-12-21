const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            loader: "ts-loader"
          }
        ]
      },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}
