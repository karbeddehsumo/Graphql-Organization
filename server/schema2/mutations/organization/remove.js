import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import { organizationType } from '../../types/organization';
import OrganizationModel from '../../../models/organization';

export default {
    type: organizationType,
    args: {
          id: {
               name: 'id',
               type: new GraphQLNonNull(GraphQLID)
          }
    },
    resolve(root, params) {
        const removeorganization = OrganizationModel.findByIdAndRemove(params.id).exec();
        if(!removeorganization) {
            throw new Error('Error removing organization')
        }
        return removeorganization;
    }
}
