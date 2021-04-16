const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackTerser = require('terser-webpack-plugin');
const OptimizeCssPlugin = require('css-minimizer-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = {
    entry: './App/client/index.js',
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new WebpackTerser({}), new OptimizeCssPlugin({})]
    },
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime']
                }
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./App/client/views/index.html",
            filename: "./index.html",
            // favicon: './App/client/assets/favicon/'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new FaviconsWebpackPlugin({
            logo: './App/client/assets/favicon/favicon-16x16.png',
            cache: false,
            manifest: './App/client/assets/favicon/site.webmanifest',
            icons: {
                android: true,    
                appleIcon: true,           
                appleStartup: false,         
                coast: true,                
                favicons: true,             
                firefox: true,              
                windows: true,              
                yandex: true     
            }
        }),
        new WorkboxPlugin.GenerateSW()
    ]
}