import { gql } from "@apollo/client";

// const ADD_PROJECT = gql`
//   #graphql
//   mutation AddProject(
//     $name: String!
//     $details: String!
//     $status: ProjectStatus!
//     $clientId: ID!
//   ) {
//     addProject(
//       name: $name
//       details: $details
//       status: $status
//       clientId: $clientId
//     ) {
//       id
//       name
//       details
//       status
//       client {
//         id
//         name
//         phone
//       }
//     }
//   }
// `;
const UPDATE_DIVISION = gql`
  #graphql
  mutation updateDivision($id: ID!, $about: String!, $image: String!) {
    updateDivision(id: $id, about: $about, image: $image) {
      id
    }
  }
`;

export { UPDATE_DIVISION };
