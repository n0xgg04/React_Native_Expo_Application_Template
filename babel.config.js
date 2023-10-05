module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      [
        "module-resolver",
        {
          alias: {
            "@Graphql": "./src/graphql",
            "@Components": "./src/components",
            "@Screens": "./src/screens",
            "@Stores": "./src/stores",
            "@Assets": "./assets",
            "@Hooks": "./src/hooks",
            "@": "./src",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
