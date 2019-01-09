import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import { organizationType } from '../../types/organizanametion';
import organizationModel from '../../models/organization';

export default {
    type: organizationType,
    args: {
        id: {
               name: 'ID',
               type: new GraphQLNonNull(GraphQLID)
            }
          },
        resolve(root, param) {
          return organizationModel.findById(param.id).exec();
        }
}
