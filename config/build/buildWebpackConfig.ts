import {buildLoaders} from "./buildLoaders";
import {buildResolves} from "./buildResolves";
import {buildPlugins} from "./buildPlugins";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {

   const {
      mode,
      isDev,
      paths
   } = options;

   return {
      entry: paths.entry,
      mode,
      output: {
         filename: 'main.[contenthash:8].js',
         path: paths.output,
         clean: true,
      },
      module: {
         rules: buildLoaders(options),
      },
      resolve: buildResolves(options),
      plugins: buildPlugins(options),
      devtool: isDev ? 'inline-source-map' : undefined,
      devServer: isDev ? buildDevServer(options) : undefined,
   }
}
