module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入遍历和mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  }
}
