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

import FamilyModel from '../../models/family';
import { familyType } from './family';

export const familyType = new GraphQLObjectType({
    name: 'Family',
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLID)},
        OrganizationID: {type: GraphQLID},
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
})

export const familyInputType = new GraphInputObjectType({
    name: 'FamilyInput',
    fields: () => ({
      OrganizationID: {type: GraphQLID},
      FamilyName: {type: GraphQLString},
      Address: {type: GraphQLString},
      Address2: {type: GraphQLString},
      City: {type: GraphQLString},
      State: {type: GraphQLString},
      Zip: {type: GraphQLString},
      Status: {type: GraphQLString},
      EnteredBy: {type: GraphQLString},
      DateEntered: {type: GraphQLString}
    })
})
