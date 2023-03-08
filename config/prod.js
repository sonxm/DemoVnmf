// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    // eslint-disable-next-line
    NODE_ENV: '"production"',
  },
  defineConstants: {},
  mini: {},
  h5: {
    enableSourceMap: true,
    sourceMapType: "source-map",
    /**
     * If...h5It's oversized after composing.，You can use it.webpack-bundle-analyzerPlugin analysis of package size。
     * The reference code is as follows:：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  },
}
