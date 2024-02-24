import { gql } from "@apollo/client";

const GET_DIVISIONS = gql`
  #graphql
  query divisions {
    divisions {
      id
      name
      about
      image
    }
  }
`;

const GET_DIVISION = gql`
  #graphql
  query division($id: ID!) {
    division(id: $id) {
      id
      name
      about
      name
    }
  }
`;

export { GET_DIVISIONS, GET_DIVISION };
