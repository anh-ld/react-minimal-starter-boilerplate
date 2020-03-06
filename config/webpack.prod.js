const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const TerserPlugin = require("terser-webpack-plugin")
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const paths = require("./paths")

const {build} = paths

module.exports = merge(common, {
    mode: "production",
    devtool: "false",
    bail: true,
    output: {
        path: build,
        publicPath: "/",
        filename: "[name].[contenthash:8].js"
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {ecma: 8},
                    compress: {ecma: 5, warnings: false, comparisons: false, inline: 2},
                    mangle: {safari10: true},
                    keep_classnames: true,
                    keep_fnames: true,
                    output: {ecma: 5, comments: false, ascii_only: true},
                },
            }),
            new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
})
