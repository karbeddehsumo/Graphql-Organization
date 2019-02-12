import { gql } from 'apollo-boost';

const getFamiliesQuery = gql`
{
  families{
    FamilyName
    Address
    Address2
    City
    State
    Zip
    Status
    EnteredBy
    DateEntered
    id
  }
}
`

const getFamilyQuery = gql`
  query($id: ID){
      family(id: $id) {
        FamilyName
        Address
        Address2
        City
        State
        Zip
        Status
        EnteredBy
        DateEntered
        id
  }
}
`

const addFamilyMutation = gql`
  mutation(
    $FamilyName: String!,
    $Address: String!,
    $Address2: String!,
    $City: String!,
    $State: String!,
    $Zip: String!,
    $Status: String!,
    $EnteredBy: String!,
    $DateEntered: String!,
  ){
    addFamily(
      FamilyName: $FamilyName,
      Address: $Address,
      Address2: $Address2,
      City: $City,
      State: $State,
      Zip: $Zip,
      Status: $Status,
      EnteredBy: $EnteredBy,
      DateEntered: $DateEntered
    )
  {
    FamilyName
    DateEntered
  }
}
`

const deleteFamilyMutation = gql`
  mutation deleteFamilyMutation($id: ID) {
    deleteFamilyMutation(id: $id) {
      id
      name
    }
  }`

const updateFamilyMutation = gql`
  mutation updateFamilyMutation($id: String!, $name: String!) {
    updateFamilyMutation(id: $id, FirstName: $name) {
      id
      FirstName
    }
  }`


export {getFamiliesQuery, getFamilyQuery, addFamilyMutation, deleteFamilyMutation, updateFamilyMutation};
