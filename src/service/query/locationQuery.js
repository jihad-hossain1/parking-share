import { gql } from "graphql-request";
import { getClient } from "../graphqlClient";

export const getDivisions = async () => {
  const client = getClient(false);
  const gqlResponse = await client.request(
    gql`
      query divisions {
        divisions {
          name
          id
        }
      }
    `
  );
  return {
    data: gqlResponse?.divisions || [],
  };
};

export const getDivision = async (id) => {
  const client = getClient();
  const gqlResponse = await client.request(
    gql`
      query division($id: ID!) {
        division(id: $id) {
          id
          name
        }
      }
    `,
    { id: id }
  );
  return {
    data: gqlResponse?.division || {},
  };
};
