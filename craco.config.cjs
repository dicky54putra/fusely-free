const tsconfig = require("./tsconfig.json");
const path = require("path");

const aliasMapper = (callback = (alias) => alias) => {
  const aliases = {};
  Object.keys(tsconfig.compilerOptions.paths).forEach((key) => {
    const _key = key.replace("/*", "");
    const _val = tsconfig.compilerOptions.paths[key][0].replace("/*", "");
    aliases[_key] = callback(_val);
  });
  return aliases;
};

const alias = aliasMapper((alias) => path.resolve(__dirname, alias));

module.exports = async function () {
  const PluginReactInfo = await import("./webpack.plugin-react-info.js");
  return {
    babel: {
      plugins: ["i18next-extract"],
    },
    webpack: {
      alias: alias,
      configure: (webpackConfig, { env, paths }) => {
        const useEnv = process.env.REACT_APP_BD_EXTRA_ENV ?? env;
        paths.appBuild = path.resolve(`build/${useEnv}`);
        webpackConfig.output.path = path.resolve(`build/${useEnv}`);

        return webpackConfig;
      },
      plugins: [new PluginReactInfo.default()],
    },
    style: {
      modules: {
        localIdentName: "[name]__[local]",
      },
    },
    eslint: {
      pluginOptions: {
        formatter: "visualstudio",
      },
    },
  };
};
