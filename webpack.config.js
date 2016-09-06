var Webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.elm$/,
                exclude: [/elm-stuff/, /node_modules/],
                loader: 'elm-webpack'
            },
            {
                test: /\.js$/,
                loaders: [
                    'babel'
                ]
            }
        ]
    },
    plugins: [
        new Webpack.optimize.DedupePlugin(),
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    devtool: 'eval'
};

