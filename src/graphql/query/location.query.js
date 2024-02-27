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
  query division($name: String!) {
    division(name: $name) {
      id
      name
      about
      image
      districts{
        id
         image
         name
         bn_name
       }
    }
  }
`;

export { GET_DIVISIONS, GET_DIVISION };
