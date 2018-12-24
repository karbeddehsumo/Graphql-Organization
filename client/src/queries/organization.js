import { gql } from 'apollo-boost';

const getOrganizationsQuery = gql`
{
  organizations{
    OrganizationID
    Name
    Address
    Address2
    City
    State
    Zip
    Country
    PhoneNumber
    Email
    YearFounded
    StoryID
    PictureID
    VideoID
    Description
    Vision
    Mission
    Status
    EnteredBy
    DateEntered
    ParentOrganizationID
  }
}
`
const addOrganizationMutation = gql`
     mutation(
       $Name: String!,
       $Address: String!,
       $Address2: String!,
       $City: String!,
       $State: String!,
       $Zip: String!,
       $Country: String!,
       $PhoneNumber: String!,
       $Email: String!,
       $YearFounded: String!,
       $StoryID: ID!,
       $PictureID: ID!,
       $VideoID: ID!,
       $Description: String!,
       $Vision: String!,
       $Mission: String!,
       $Status: String!,
       $EnteredBy: String!,
       $DateEntered: String!,
       $ParentOrganizationID: ID!
     ) {
        addOrganization(
         Name: $Name,
         Address: $Address,
         Address2: $Address2,
         City: $City,
         State: $State,
         Zip: $Zip,
         Country: $Country,
         PhoneNumber: $PhoneNumber,
         Email: $Email,
         YearFounded: $YearFounded,
         StoryID: $StoryID,
         PictureID: $PictureID,
         VideoID: $VideoID,
         Description: $Description,
         Vision: $Vision,
         Mission: $Mission,
         Status: $Status,
         EnteredBy: $EnteredBy,
         DateEntered: $DateEntered,
         ParentOrganizationID: $ParentOrganizationID
       ){
         Name
         OrganizationID
       }
     }
`

export {getOrganizationsQuery, addOrganizationMutation};
