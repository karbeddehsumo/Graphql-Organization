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
     id: { type: GraphQLID},
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
     ParentID: {type: GraphQLID}
   })
});

const MemberType = new GraphQLObjectType({
   name: 'member',
   fields: () => ({
     id: {type: GraphQLID},
     FamilyID: {type: GraphQLID},
     OrganizationID: {type: GraphQLID},
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
         return Organization.findById(parent.id);
       }
     },
     family: {
       type: FamilyType,
       resolve(parent, args){
         return Family.findById(parent.id);
       }
     }
   })
});

const FamilyType = new GraphQLObjectType({
  name: 'famiy',
  fields: () => ({
    id: {type: GraphQLID},
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
        return Member.find({FamiyID: parent.id});
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
       organization: {
          type: OrganizationType,
          args: {id: {type: GraphQLID}},
          resolve(parent,args){
            return Organization.findById(args.id);
          }
       },
       organizations: {
         type: new GraphQLList(OrganizationType),
         resolve(parent, args){
           return Organization.find({});
         }
       },
       member: {
         type: MemberType,
         args: {id: {type: GraphQLID}},
         rosolve(parent, args){
           return Member.findById(args.id);
         }
       },
       members: {
         type: new GraphQLList(MemberType),
         resolve(parent, args){
           return Member.find({});
         }
       },
       family: {
         type:FamilyType,
         args: {id: {type: GraphQLID}},
         resolve(parent, args){
           return Family.findById(args.id);
         }
       },
       families:{
         type: new GraphQLList(FamilyType),
         resolve(parent, args){
           return Family.find({});
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
          FamilyID: {type: GraphQLID},
          OrganizationID: {type: GraphQLID},
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
          FamilyID: args.FamilyID,
          OrganizationID: args.OrganizationID,
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
        return member.save();
      }
    },
    addFamily: {
      type: FamilyType,
      args: {
        FamilyName: {type: GraphQLString},
        Address: {type: GraphQLString},
        Address2: {type: GraphQLString},
        City: {type: GraphQLString},
        State: {type: GraphQLString},
        Zip: {type: GraphQLString},
        Status: {type: GraphQLString},
        EnteredBy: {type: GraphQLString},
        DateEntered: {type: GraphQLString}
      },
      resolve(parent, args){
        let family = new Family ({
          FamilyName: args.FamilyName,
          Address: args.Address,
          Address2: args.Address2,
          City: args.City,
          State: args.State,
          Zip: args.Zip,
          Status: args.Status,
          EnteredBy: args.EnteredBy,
          DateEntered: args.DateEntered
        });
        return family.save();
      }
    },
    addOrganization: {
      type: OrganizationType,
      args: {
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
        ParentID: {type: GraphQLID}
      },
      resolve(parent, args){
        let organization = new Organization({
          Name: args.Name,
          Address: args.Address,
          Address2: args.Address2,
          City: args.City,
          State: args.State,
          Zip: args.Zip,
          Country: args.Country,
          PhoneNumber: args.PhoneNumber,
          Email: args.Email,
          YearFounded: args.YearFounded,
          StoryID: args.StoryID,
          PictureID: args.PictureID,
          VideoID: args.VideoID,
          Description: args.Description,
          Vision: args.Vision,
          Mission: args.Mission,
          Status: args.Status,
          EnteredBy: args.EnteredBy,
          DateEntered: args.DateEntered,
          ParentID: args.ParentID
        });
        return organization.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
