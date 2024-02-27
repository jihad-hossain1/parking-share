import { gql } from "@apollo/client";

const GET_PARKINGLOTS = gql`
  #graphql
  query getParkingLots {
    getParkingLots {
      id
      name
      image
      location
      lotType
      address {
        id
        area
        map
      }
      avilableLot {
        id
        bay
      }
    }
  }
`;
const GET_PARKINGLOTS_CATEGORY = gql`
  #graphql
  query getParkingLotCategories {
    getParkingLotCategories {
      id
      name
    }
  }
`;

const GET_PARKINGLOT = gql`
  #graphql
  query parkingLot($id: ID!) {
    parkingLot(id: $id) {
      id
      name
      image
      location
      categoryId
      lotType
      address {
        area
        map
      }
      avilableLot {
        bay
      }
    }
  }
`;

export { GET_PARKINGLOTS, GET_PARKINGLOT, GET_PARKINGLOTS_CATEGORY };
