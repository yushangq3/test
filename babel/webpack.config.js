var path = require('path');

var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'commons', // 这公共代码的chunk名为'commons'
    filename: '[name].bundle.js', // 生成后的文件名，虽说用了[name]，但实际上就是'commons.bundle.js'了
    minChunks: 4, // 设定要有4个chunk（即4个页面）加载的js模块才会被纳入公共代码。这数目自己考虑吧，我认为3-5比较合适。
});
module.exports = {
    entry: './src/base.js',    
    output: {    
        path: __dirname,    
        filename: './mix/[name].bundle.js',    
    },    
    module: {    
        loaders: [{    
            test: /\.js$/,       
            loader: 'babel-loader',
            exclude: path.resolve(__dirname,"./node_modules"),
                //打包包括的文件
            include: path.resolve(__dirname, "./src"),
            options: {
                'presets': ['latest']
            }
        }]    
    }    
}    