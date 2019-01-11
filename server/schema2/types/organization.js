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

import OrganizationModel from '../../models/organization';
import { organizationType } from './organization';

export const organizationType = new GraphQLObjectType({
    name: 'Organization',
    fields: () => ({
              _id: {type: new GraphQLNonNull(GraphQLID)},
              Name: { type: new GraphQLNonNull(GraphQLString)},
              Address: {type: GraphQLString},
              Address2: {type: GraphQLString},
              City: {type: GraphQLString},
              State: {type: GraphQLString},
              Zip: {type: GraphQLString},
              Country: {type: new GraphQLNonNull(GraphQLString)},
              PhoneNumber: {type: GraphQLString},
              Email: {type: new GraphQLNonNull(GraphQLString)},
              YearFounded: {type: new GraphQLNonNull(GraphQLString)},
              StoryID: {type: GraphQLID},
              PictureID: {type: GraphQLID},
              VideoID: {type: GraphQLID},
              Description: {type: GraphQLString},
              Vision: {type: GraphQLString},
              Mission: {type: GraphQLString},
              Status: {type: new GraphQLNonNull(GraphQLString)},
              EnteredBy: {type: new GraphQLNonNull(GraphQLString)},
              DateEntered: {type: new GraphQLNonNull(GraphQLString)},
              ParentID: {type: GraphQLID}
    })
})

export const organizationInputType = new GraphInputObjectType({
    name: 'OrganizationInput',
    fields: () => ({
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
})
