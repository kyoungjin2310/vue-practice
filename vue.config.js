const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  //eslint 끄기 - lintOnSave:false
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
			@import "@/assets/_common.scss";
                `,
      },
    },
  },
});
