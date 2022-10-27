
export type BuildMode = 'development' | 'production';

export interface BuildPaths {
   html: string;
   entry: string;
   output: string;
}

export interface BuildEnv {
   mode: BuildMode;
   port: number;
}

export interface BuildOptions {
   paths: BuildPaths;
   mode: BuildMode;
   isDev: boolean;
   port: number;
}
