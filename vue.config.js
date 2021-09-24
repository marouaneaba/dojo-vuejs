
module.exports = {
    devServer: {
        proxy: {
            '^/v2': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                secure:false,
                pathRewrite: {'^/v2': '/v2'},
                logLevel: 'debug'
            },
            '^/token': {
                target: 'http://localhost:8082',
                changeOrigin: true,
                secure:false,
                pathRewrite: {'^/token': '/token'},
                logLevel: 'debug'
            },
        }
    }
}