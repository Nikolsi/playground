/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
            // load css
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
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
        })
    ]
}
