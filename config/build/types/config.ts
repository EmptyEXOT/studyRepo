export type BuildMode = 'production' | 'development';
export interface IBuildPaths {
    entry: string;
    output: string;
    html: string;
    src: string
}
export interface IBuildOptions {
    mode: BuildMode;
    paths: IBuildPaths;
    isDev: boolean;
    port: number
}

export interface IBuildMode {
    mode: BuildMode,
    port: number
}
