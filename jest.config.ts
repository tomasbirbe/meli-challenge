import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;
