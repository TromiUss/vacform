const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', ".jsx"]
    },
    output: {
        filename: 'bundle.tsx',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin({
        template: 'public/index.html',
    })],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', {runtime: 'automatic'}],
                            '@babel/preset-typescript'
                        ],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
}