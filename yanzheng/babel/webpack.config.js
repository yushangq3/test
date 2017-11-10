var path = require('path');
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