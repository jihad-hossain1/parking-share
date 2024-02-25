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
const GET_DIVISIONS_FOR_FILTER = gql`
  #graphql
  query divisions {
    divisions {
      id
      name
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
const GET_DISTRICT_BY_DIVISIONID = gql`
  #graphql
  query getDistrictByDivisionId($name: String!) {
    getDistrictByDivisionId(name: $name) {
      id
      name
      about
      name
    }
  }
`;

export {
  GET_DIVISIONS,
  GET_DIVISION,
  GET_DIVISIONS_FOR_FILTER,
  GET_DISTRICT_BY_DIVISIONID,
};
