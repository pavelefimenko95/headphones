require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtendedDefineWebpackPlugin = require('extended-define-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
    mode: 'production',
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/env", "@babel/react"]
                    }
                }
            }
        ]
    },
    plugins: [
        new Visualizer({
            filename: './statistics.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtendedDefineWebpackPlugin({
            __INTERNAL_API_URL__: process.env.INTERNAL_API_URL || '/rest'
        }),
        new CopyWebpackPlugin([
            {from: 'assets/images', to: 'assets/images'}
        ])
    ],
    optimization: {
        sideEffects: false
    },
    devtool: 'source-map'
};