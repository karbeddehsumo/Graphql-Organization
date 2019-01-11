const graphql = require('graphql');

import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} from 'graphql';

import MemberModel from '../../models/member';
import { memberType } from './member';

export const memberType = new GraphQLObjectType({
    name: 'Member',
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLID)},
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
})

export const organizationInputType = new GraphInputObjectType({
    name: 'MemberInput',
    fields: () => ({
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
    })
})
