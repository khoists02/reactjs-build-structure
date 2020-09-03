const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'public'), 
        filename: "bundle.js",
        publicPath: '/'
    },

    module: {
        rules: [{
            loader: 'babel-loader', 
            test: /\.js$/, 
            exclude: /node_modules/
        },{
            test: /\.scss$/, 
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
          test: /\.(jpe?g|png|gif|svg)$/i, 
          loader: "url-loader?limit=8192"
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    }
}