module.exports = {
  reactStrictMode: true,
  basePath: "/iconcentration",
  // // assetPrefix: "/iconcentrarion",
  async exportPathMap() {
    const paths = {
      "/": { page: "/" },
      "/game": { page: "/game" },
    };
    return paths;
  },
};
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
// module.exports = withBundleAnalyzer({});
