import { gql } from "@apollo/client";

const CREATE_PARKINGLOT = gql`
  #graphql
  mutation createParkingLot(
    $name: String
    $image: String
    $address: AddressInput
    $price: [PriceInput]
    $lotType: LotTypeInput
    $avilableLot: [AvilableLotInput]
    $clientId: String
    $location: ID
    $categoryId: ID
  ) {
    createParkingLot(
      name: $name
      image: $image
      avilableLot: $avilableLot
      lotType: $lotType
      price: $price
      address: $address
      location: $location
      categoryId: $categoryId
      clientId: $clientId
    ) {
      id
      name
    }
  }
`;

export { CREATE_PARKINGLOT };
