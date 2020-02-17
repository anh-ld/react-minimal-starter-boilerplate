const HtmlWebPackPlugin = require("html-webpack-plugin")
const DashboardPlugin = require("webpack-dashboard/plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const RobotstxtPlugin = require("robotstxt-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const paths = require("./paths")

const {root, src, build, assets} = paths

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: assets + "/index.html",
    title: "React Boilerplate",
    favicon: assets + "/favicon.ico",
    meta: {viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"}
})

const cleanWebpackPlugin = new CleanWebpackPlugin()

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'styles/[name].[contenthash:8].css',
    chunkFilename: '[id].css',
})

const robotstxtPlugin = new RobotstxtPlugin({
    filePath: "./robots.txt",
})

const dashboardPlugin = new DashboardPlugin()

module.exports = {
    entry: [src + "/index.tsx"],
    output: {
        path: build,
        filename: "[name].bundle.js",
        publicPath: "/"
    },
    resolve: {extensions: [".js", ".jsx", ".ts", ".tsx"]},
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.(scss|sass)?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    "sass-loader"
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                },
            },
        ]
    },
    plugins: [
        cleanWebpackPlugin,
        miniCssExtractPlugin,
        htmlWebpackPlugin,
        robotstxtPlugin,
        dashboardPlugin
    ]
}
