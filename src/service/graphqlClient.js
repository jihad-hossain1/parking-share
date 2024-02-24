import { GraphQLClient } from "graphql-request";

export const getClient = (preview) => {
  const client = new GraphQLClient(
    `https://parkingshare-server.vercel.app/api/v1/parkingshare`
  );

  return client;
};
