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
{
  query get Family($id: ID){
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
        members{
          FirstName
          MiddleName
          LastName
          Suffix
          DOB
          Gender
          Title
          PhoneNumber
          Email
        }
      }
  }
}
`

const addFamilyMutation = gql`
  mutation(
    $OrganizationID: ID!,
    $FamilyName: String!,
    $Address: String!,
    $Address2: String!,
    $City: String!,
    $State: String!,
    $Zip: String!,
    $Status: String!,
    $EnteredBy: String!,
    $DateEntered: String!
  ){
    addFamily(
      OrganizationID: $OrganizationID,
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
  }
  {
    FamilyName
    DateEntered
  }
}
`

export {getFamiliesQuery, getFamilyQuery, addFamilyMutation};
