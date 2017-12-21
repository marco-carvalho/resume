const autoprefixer = require('autoprefixer');
// const webpack = require('webpack');
// const path = require('path');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // inject CSS to page
                        loader: 'style-loader'
                    },
                    {
                        // translates CSS into CommonJS modules
                        loader: 'css-loader'
                    },
                    {
                        // Run post css actions
                        loader: 'postcss-loader',
                        options: {
                            // post css plugins, can be exported to postcss.config.js
                            plugins: () => [precss, autoprefixer]
                        }
                    },
                    {
                        // compiles SASS to CSS
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000'
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=images/[name].[ext]',
                    'image-webpack-loader?bypassOnDebug'
                ]
            },
            {
                test: /font-awesome\.config\.js/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'font-awesome-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.pug'
        })
        // new UglifyJSPlugin()
    ]
};