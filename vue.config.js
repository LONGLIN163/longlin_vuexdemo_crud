module.exports = {
    runtimeCompiler: true,
    css: {
      loaderOptions: {
        scss: {
          prependData: `
            @import "@/assets/scss/variables.scss";
            @import "@/assets/scss/mixins.scss";
          `
        }
      }
    }
  };