/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            // load typescript
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            // load css | sass | scss
            {
                test: /\.(sa|sc|c)ss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            // load ttf files (for monaco-editor)
            {
                test: /\.ttf$/,
                use: ['file-loader']
            }
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        modules: ['node_modules'],
        // resolve source-code imports with extensions for TypeScript
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Live-Coding Playground',
            favicon: './assets/images/favicon.ico',
            template: './src/index.html'
        }),
        new MonacoWebpackPlugin()
    ]
}
