import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import { organizationType, organizationInputType } from '../../types/organization';
import OrganizationModel from '../../../models/organization';

export default {
    type: organizationType,
    args: {
          id: {
              name: 'ID',
              type: new GraphQLNonNull(GraphQLID)
          },

          data: {
            name: 'data',
            type: new GraphQLNonNull(organizationInputType)
          }
    },
    resolve(root, params) {
      return OrganizationModel.findByIdAndUpdate(
          params.id,
          {$set: {...params.data}},
          { new: true }
      )
      .catch(err => new Error('Couldn\'t update Organization data, ', err));
    }
}
