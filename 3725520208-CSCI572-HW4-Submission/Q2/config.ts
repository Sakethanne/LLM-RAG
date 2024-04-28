import { Config } from "./src/config";

export const defaultConfig: Config = {
  // url: "https://www.builder.io/c/docs/developers",
  // match: "https://www.builder.io/c/docs/**",
  url: "https://www.tableau.com",
  match: "https://www.tableau.com/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
