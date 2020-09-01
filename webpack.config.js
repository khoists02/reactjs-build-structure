const path = require('path');

const ASSET_PATH = process.env.ASSET_PATH || '/';

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
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    }
}