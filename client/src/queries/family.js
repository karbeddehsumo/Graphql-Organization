import { gql } from 'apollo-boost';

const getFamiliesQuery = gql`
{
  families{
    FamilyID
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
  }
}
`

const getFamilyQuery = gql`
{
  query get Family($familyID: ID){
      family(FamilyID: $familyID) {
        FamilyID
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
{
  mutation(
    $FamilyID: ID!,
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
  )
}
`

export {getFamiliesQuery, getFamilyQuery, addFamilyMutation};
