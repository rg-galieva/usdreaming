const {resolve} = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const OfflinePlugin = require('offline-plugin');
const cssSettings = require('./../../src/assets/styles/vars.js');

module.exports = function () {
    return {
        context: resolve(__dirname, './../../src'),

        entry: {
            vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom', 'react-router-redux'],
            app: './app.js'
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },


                {
                    test: /\.pcss$/,
                    use: ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use: [
                                {
                                    loader: 'css-loader',
                                    options: {
                                        modules: true,
                                        localIdentName: '[local]_[hash:base64:5]',
                                        importLoaders: 1
                                    }
                                },
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                        sourceMap: 'inline',
                                        plugins: function () {
                                            return [
                                                require('postcss-import'),
                                                require('postcss-mixins'),
                                                require('postcss-cssnext')({
                                                    features: cssSettings
                                                })
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    )
                },
                {
                    test: /\.gcss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader'
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: 'inline',
                                    plugins: function () {
                                        return [
                                            require('postcss-import'),
                                            require('postcss-mixins'),
                                            require('postcss-cssnext')({
                                                features: cssSettings
                                            })
                                        ]
                                    }
                                }
                            }

                        ]
                    })
                },
                {
                    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                    use: 'file-loader?name=img/[name]_[hash:5].[ext]'
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'file-loader?name=svg/[name].[ext]'
                        },
                        {
                            loader: 'svgo-loader',
                            options: {
                                plugins: [
                                    {removeTitle: true},
                                    {removeUselessDefs: false},
                                    {convertPathData: false},
                                    {removeAttrs: false},
                                    {cleanupIDs: false},
                                    {removeHiddenElems: false}
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                    use: 'url-loader?limit=100000'
                }
            ]
        },

        plugins: [
            new ExtractTextPlugin({filename: '[name].styles.css'}),
            new HtmlWebpackPlugin({
                title: 'US Dreaming',
                template: __dirname + '/template.html'
            }),
            // new OfflinePlugin({
            //     ServiceWorker: {
            //         navigateFallbackURL: '/'
            //     },
            //     AppCache: {
            //         FALLBACK: {
            //             '/': '/offline.html'
            //         }
            //     }
            // })
        ]
    }
}