import { gql } from 'apollo-boost';

const getFamiliesQuery = gql`
{
  families{
    OrganizationID
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
        OrganizationID
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
    $OrganizationID: ID!,
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
      DateEntered: $DateEntered,
      OrganizationID: $OrganizationID,
    )
  {
    FamilyName
    DateEntered
  }
}
`

export {getFamiliesQuery, getFamilyQuery, addFamilyMutation};
