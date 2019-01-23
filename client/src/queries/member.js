import { gql } from 'apollo-boost';

const getMembersQuery = gql`
{
  members{
    FamilyID
    OrganizationID
    FirstName
    MiddleName
    LastName
    Suffix
    DOB
    Gender
    MembershipDate
    Title
    ContactTypeID
    PhoneNumber
    PhoneNumberProviderID
    Email
    PictureID
    Status
    EnteredBy
    DateEntered
    id
  }
}
`

const getMemberQuery = gql`
  query ($id: ID){
      member(id: $id){
        FamilyID
        OrganizationID
        FirstName
        MiddleName
        LastName
        Suffix
        DOB
        Gender
        MembershipDate
        Title
        ContactTypeID
        PhoneNumber
        PhoneNumberProviderID
        Email
        PictureID
        Status
        EnteredBy
        DateEntered
        id
        family {
          familyID
          LastName
          Address
          Address2
          Street
          City
          state
          Zip
        }
      }
}
`

const addMemberMutation = gql`
  mutation(
    $FamilyID: ID!,
    $OrganizationID: ID!,
    $FirstName: String!,
    $MiddleName: String!,
    $LastName: String!,
    $Suffix: String!,
    $DOB: String!,
    $Gender: String!,
    $MembershipDate: String!,
    $Title: String!,
    $ContactTypeID: String!,
    $PhoneNumber: String!,
    $PhoneNumberProviderID: String!,
    $Email: String!,
    $PictureID: String!,
    $Status: String!,
    $EnteredBy: String!,
    $DateEntered: String!
  ){
    addMember(
      FamilyID: $FamilyID,
      OrganizationID: $OrganizationID,
      FirstName: $FirstName,
      MiddleName: $MiddleName,
      LastName: $LastName,
      Suffix: $Suffix,
      DOB: $DOB,
      Gender: $Gender,
      MembershipDate: $MembershipDate,
      Title: $Title,
      ContactTypeID: $ContactTypeID,
      PhoneNumber: $PhoneNumber,
      PhoneNumberProviderID: $PhoneNumberProviderID,
      Email: $Email,
      PictureID: $PictureID,
      $Status: $Status,
      EnteredBy: $EnteredBy,
      DateEntered: $DateEntered
    ){
       FirstName
       LastName
    }
}
`


export {getMembersQuery, getMemberQuery, addMemberMutation};
