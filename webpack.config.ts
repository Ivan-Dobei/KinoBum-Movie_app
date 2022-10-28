import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPaths} from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
   const paths: BuildPaths = {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      output: path.resolve(__dirname, 'build'),
      src: path.resolve(__dirname, 'src'),
   }

   const PORT = env.port;
   const mode: BuildMode = env.mode;
   const isDev = mode === 'development';

   return buildWebpackConfig({
      mode,
      isDev,
      paths,
      port: PORT,
   });
};
