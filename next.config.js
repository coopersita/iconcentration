module.exports = {
  reactStrictMode: true,
  basePath: "/iconcentration",
  assetPrefix: "/iconcentrarion",
  async exportPathMap() {
    const paths = {
      "/": { page: "/" },
      "/game": { page: "/game" },
    };
    return paths;
  },
};
