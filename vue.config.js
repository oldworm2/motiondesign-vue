module.exports = {
  devServer: {
    proxy: { 
      '/api': {
        target: 'http://localhost:8181',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}