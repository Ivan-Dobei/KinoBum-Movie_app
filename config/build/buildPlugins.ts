import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, {WebpackPluginInstance} from 'webpack';
import {BuildOptions} from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = ({paths}: BuildOptions):WebpackPluginInstance[] => {
   return [
      new HtmlWebpackPlugin({
         template: paths.html,
      }),
      new MiniCssExtractPlugin({
         filename: 'css/[name].[contenthash:8].css',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProgressPlugin(),
   ];
};
