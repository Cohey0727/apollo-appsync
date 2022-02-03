/**
 * API_KEYによる認証に関するドキュメント
 * https://docs.aws.amazon.com/ja_jp/appsync/latest/devguide/security-authz.html#api-key-authorization
 */

module.exports = {
  schema: [
    {
      [process.env.REACT_APP_GRAPHQL_API_URL]: {
        headers: { "X-API-KEY": process.env.REACT_APP_GRAPHQL_API_KEY },
      },
    },
  ],
  documents: ["./src/graphql/**.gql"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
