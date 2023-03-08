const config = {
  projectName: "@vnmfify/demo",
  date: "2021-3-9",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: `dist`,
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // Set conversion size ceiling
        },
      },
      cssModules: {
        enable: true, // Default As false，If needed css modules Functions，Set as true
        config: {
          namingPattern: "module", // Convert Mode，Value As global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    esnextModules: ["@vnmfify"],
    publicPath: process.env.NODE_ENV === "development" ? "/" : "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true, // Default As false，If needed css modules Functions，Set as true
        config: {
          namingPattern: "module", // Convert Mode，Value As global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    output: {
      filename: "js/[name].[hash:8].js",
      chunkFilename: "chunk/[name].[chunkhash:8].js",
    },
    miniCssExtractPluginOption: {
      filename: "css/[name].[hash:8].css",
      chunkFilename: "chunk/[name].[chunkhash:8].css",
    },
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"))
  }
  return merge({}, config, require("./prod"))
}
