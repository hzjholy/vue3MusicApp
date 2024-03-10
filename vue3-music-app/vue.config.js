const registerRouter = require("./backend/router");

module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `,
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
    open: false,
    port: "9090",
    onBeforeSetupMiddleware(devServer) {
      registerRouter(devServer.app);
    },
    // disableHostCheck: true
  },
  configureWebpack: (config) => {
    if (process.env.npm_config_report) {
      const BundleAnalyzerPlugin =
        require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === "production" ? "/music-next/" : "/",
};
