const path = require('path')
const package = require('./package')

var option = {
    entry: package.entry,
    output: {
        path: path.resolve('./web/build'),
        publicPath: 'build/',
        filename: '[name].bundle.js'
    },
    cache: true,
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.css', '.vue', '.html'],
        alias: {
            plugins: path.resolve('./web/src/plugins'),
            vuexs: path.resolve('./web/src/vuex'),
            coms: path.resolve('./web/src/coms'),
            assets: path.resolve('./web/src/assets')
        }
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            include: [path.resolve('./web'), /vue-resource/],
            query: {
                presets: ['es2015'],
                cacheDirectory: true
            }
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(?:jpg|gif|png)$/,
            loader: 'file?name=img/[name].[hash:6].[ext]'
        }]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        cacheDirectory: true
    }
};

if (process.env.NODE_ENV == 'production') {
    option.devtool = false;
}
module.exports = option;