import {
   GraphQLNonNull
} from 'graphql';

import {organizationType, organizationInputType } from '../../type/organization';
import OrganizationModel from '../../../models/organization';

export default {
  type: organizationType,
  args: {
        data: {
             name: 'data',
             type: new GraphQLNonNull(organizationInputType)
        }
  },

  resolve(root, params) {
      const oModel = new OrganizationModel(param.data);
      const newOrganization = oModel.save();
      if(!newOrganization) {
        throw new Error('Error adding organization');
      }

      return newOrganization
  }
}
