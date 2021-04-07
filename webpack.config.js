const path = require('path');

module.exports = {
    entry: {
        'javascripts/build.js': './src/index.js',
    },
    output: {
        filename: '[name]',
        path: path.join(__dirname, 'public'),
    },
    resolve: {
        extension: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_module|bower_components|public\/)/,
                loader: 'babel-loader',
            },
        ],
    },
};