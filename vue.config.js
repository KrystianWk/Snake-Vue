const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/save-score': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});
