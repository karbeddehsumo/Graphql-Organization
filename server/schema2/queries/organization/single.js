const graphql = require('graphql');

const {
  GraphQLID,
  GraphQLNonNull,
} = graphql;

import { organizationType } from '../../types/organization';
import organizationModel from '../../models/organization';

export default `{
    type: organizationType,
    args: {
        id: {
               name: 'ID',
               type: new GraphQLNonNull(GraphQLID)
            }
          },
        resolve(root, params) {
          return organizationModel.findById(params.id).exec();
        }
}`
