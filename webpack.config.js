var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: "development",
    context: __dirname,
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname), //any files listed after this are the folders that files are under. tells it to look there.
        filename: "bundle.js"
    },
    devServer: {
        port: 3000,
        contentBase: '.'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".css", "*"]
        //looks for these extensions to bundle together
    }
}