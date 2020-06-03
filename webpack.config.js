module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx|svg)$/,
          exclude: /node_modules/,
          use: [{
            loader: "babel-loader"
          },{
            loader: '@svgr/webpack'
          }
        ]
        }
      ]
    }
  };