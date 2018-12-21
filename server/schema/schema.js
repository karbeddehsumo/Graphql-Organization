const graphql = require('graphql');

const Organization = require('../models/organization');
const Member = require('../models/member');
const Family = require('../models/family');

const { GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLFloat,
   GraphQLBoolean,
   GraphQLList,
   GraphQLNonNull,
   GraphQLSchema
 } = graphql;

const OrganizationType = new GraphQLObjectType({
   name: 'Organization',
   fields: () => ({
     organizationID: { type: GraphQLID},
     Name: { type: GraphQLString},
     Address: {type: GraphQLString},
     Address2: {type: GraphQLString},
     City: {type: GraphQLString},
     State: {type: GraphQLString},
     Zip: {type: GraphQLString},
     Country: {type: GraphQLString},
     PhoneNumber: {type: GraphQLString},
     Email: {type: GraphQLString},
     YearFounded: {type: GraphQLString},
     StoryID: {type: GraphQLID},
     PictureID: {type: GraphQLID},
     VideoID: {type: GraphQLID},
     Description: {type: GraphQLString},
     Vision: {type: GraphQLString},
     Mission: {type: GraphQLString},
     Status: {type: GraphQLString},
     EnteredBy: {type: GraphQLString},
     DateEntered: {type: GraphQLString},
     ParentOrganizationID: {type: GraphQLID},
   })
});

const MemberType = new GraphQLObjectType({
   name: 'member',
   fields: () => ({
     memberID: {type: GraphQLID},
     familyID: {type: GraphQLID},
     organizationID: {type: GraphQLID},
     FirstName: {type: GraphQLString},
     MiddleName: {type: GraphQLString},
     LastName: {type: GraphQLString},
     Suffix: {type: GraphQLString},
     DOB: {type: GraphQLString},
     Gender: {type: GraphQLString},
     MembershipDate: {type: GraphQLString},
     Title: {type: GraphQLString},
     ContactTypeID: {type: GraphQLID},
     PhoneNumber: {type: GraphQLString},
     PhoneNumberProviderID: {type: GraphQLID},
     Email: {type: GraphQLString},
     PictureID: {type: GraphQLID},
     Status: {type: GraphQLString},
     EnteredBy: {type: GraphQLString},
     DateEntered: {type: GraphQLString},
     organization: {
       type: OrganizationType,
       resolve(parent, args){
         //query database here
       }
     },
     family: {
       type: FamilyType,
       resolve(parent, args){
         //query database here
       }
     }

   })
});

const FamilyType = new GraphQLObjectType({
  name: 'famiy',
  fields: () => ({
    familyID: {type: GraphQLID},
    organizationID: {type: GraphQLID},
    FamilyName: {type: GraphQLString},
    Address: {type: GraphQLString},
    Address2: {type: GraphQLString},
    City: {type: GraphQLString},
    State: {type: GraphQLString},
    Zip: {type: GraphQLString},
    Status: {type: GraphQLString},
    EnteredBy: {type: GraphQLString},
    DateEntered: {type: GraphQLString},
    members: {
      type: GraphQLList(MemberType),
      resolve(parent, args){
        //query database herer
      }
    }

  })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
       organization: {
          type: OrganizationType,
          args: {organizationID: {type: GraphQLID}},
          resolve(parent,args){
            //call to database
          }
       },
       organizations: {
         type: new GraphQLList(OrganizationType),
         resolve(parent, args){
           //query database
         }
       },
       member: {
         type: MemberType,
         args: {memberID: {type: GraphQLID}},
         rosolve(parent, args){
           //query database here
         }
       },
       members: {
         type: new GraphQLList(MemberType),
         resolve(parent, args){
           //query database here
         }
       },
       family: {
         type:FamilyType,
         args: {familyID: {type: GraphQLID}},
         resolve(parent, args){
           //query database here
         }
       },
       families:{
         type: new GraphQLList(FamilyType),
         resolve(parent, args){
           //query database here
         }
       }
    }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMember: {
      type: MemberType,
      args: {
          familyID: {type: GraphQLID},
          organizationID: {type: GraphQLID},
          FirstName: {type: GraphQLString},
          MiddleName: {type: GraphQLString},
          LastName: {type: GraphQLString},
          Suffix: {type: GraphQLString},
          DOB: {type: GraphQLString},
          Gender: {type: GraphQLString},
          MembershipDate: {type: GraphQLString},
          Title: {type: GraphQLString},
          ContactTypeID: {type: GraphQLID},
          PhoneNumber: {type: GraphQLString},
          PhoneNumberProviderID: {type: GraphQLID},
          Email: {type: GraphQLString},
          PictureID: {type: GraphQLID},
          Status: {type: GraphQLString},
          EnteredBy: {type: GraphQLString},
          DateEntered: {type: GraphQLString}
      },
      resolve(parent, args){
        let member = new Member({
          familyID: args.familyID,
          organizationID: args,organizationID,
          FirstName: args.FirstName,
          MiddleName: args.MiddleName,
          LastName: args.LastName,
          Suffix: args.Suffix,
          DOB: args.DOB,
          Gender: args.Gender,
          MembershipDate: args.MembershipDate,
          Title: args.Title,
          ContactTypeID: args.ContactTypeID,
          PhoneNumber: args.PhoneNumber,
          PhoneNumberProviderID: args.PhoneNumberProviderID,
          Email: args.Email,
          PictureID: args.PictureID,
          Status: args.Status,
          EnteredBy: args.EnteredBy,
          DateEntered: args.DateEntered
        });
        member.save();
      }
    }
  }
})
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
