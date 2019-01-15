const graphql = require('graphql');

const {
   GraphQLNonNull
} = graphql;

const {organizationType, organizationInputType } = require('../../types/organization');
const OrganizationModel = require( '../../../models/organization');

const add = new GraphQLObjectType  ({
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
});
