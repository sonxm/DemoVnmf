// babel-preset-vnmf More Options and Defaults：
// https://github.com/NervJS/vnmf/blob/next/packages/babel-preset-vnmf/README.md
module.exports = {
  presets: [
    [
      "vnmf",
      {
        framework: "react",
        ts: true,
      },
    ],
  ],
  plugins: [
    "lodash",
    [
      "import",
      {
        libraryName: "@vnmfify/core",
        libraryDirectory: "",
        style: true,
      },
      "@vnmfify/core",
    ],
    [
      "import",
      {
        libraryName: "@vnmfify/commerce",
        libraryDirectory: "",
        style: true,
      },
      "@vnmfify/commerce",
    ],
    // [
    //   "import",
    //   {
    //     libraryName: "@vnmfify/icons",
    //     libraryDirectory: "",
    //     camel2DashComponentName: false,
    //     style: () => "@vnmfify/icons/style",
    //   },
    //   "@vnmfify/icons",
    // ],
  ],
}
