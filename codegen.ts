import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/graphql/schema.graphql",
  documents: "./src/graphql/**/*.graphql",
  generates: {
    "./src/graphql/__generated__/": {
      preset: "client",
      plugins: [],
    },
    // "./graphql.schema.json": {
    //   plugins: ["introspection"],
    // },
  },
  ignoreNoDocuments: true,
};

export default config;
