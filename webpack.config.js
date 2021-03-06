const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'webpack with react-fresh',
    mode: 'development',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        app: './src/index',
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: { browsers: ['last 2 chrome versions'] },
                            debug: true,
                        }],
                        '@babel/preset-react',
                    ],
                    plugins: ['react-refresh/babel'],
                },
                exclude: path.join(__dirname, 'node_modules'),
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: 'img/[contenthash].[ext]'
                }
            }
        ],
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist',
    },
    devServer: {
        publicPath: '/dist',
        hot: true,
        historyApiFallback: true
    }
};