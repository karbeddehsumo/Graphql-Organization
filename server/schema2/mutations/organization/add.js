const graphql = require('graphql');

const {
   GraphQLNonNull
} = graphql;

import {organizationType, organizationInputType } from '../../types/organization';
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
      const oModel = new OrganizationModel(params.data);
      const newOrganization = oModel.save();
      if(!newOrganization) {
        throw new Error('Error adding organization');
      }

      return newOrganization
  }
}
