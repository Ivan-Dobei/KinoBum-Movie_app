import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = ({isDev}: BuildOptions): RuleSetRule[] => {

   const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   };

   const styleLoader = {
      test: /\.s[ac]ss$/i,
      use: [
         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         {
            loader: "css-loader",
            options: {
               modules: {
                  auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                  localIdentName: isDev
                     ? '[path][name]--[local].[hash:base64:6]'
                     : '[hash:base64:8]'
               }
            }
         },
         "sass-loader",
      ],
   };

   return [
      typescriptLoader,
      styleLoader
   ];
}
