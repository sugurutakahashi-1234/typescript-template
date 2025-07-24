import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["src/main.ts"],
  project: ["src/**/*.ts"],
  ignore: [],
  ignoreDependencies: ["tslib", "@commitlint/cli"], // tslib is a runtime dependency, @commitlint/cli is used in CI only
  ignoreBinaries: ["du", "awk", "sed"], // du,awk,sed: deps:size script
  ignoreExportsUsedInFile: false,
  includeEntryExports: true,
  typescript: {
    config: ["tsconfig.json"],
  },
};

export default config;
