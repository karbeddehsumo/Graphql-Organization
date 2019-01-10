import {
    GraphQLList
} from 'graphql'

import { organizationType} from '../../types/organization';
import organizationModel from '../../../models/organization';

export default {
    type: new GraphQLList(organizationType);
    resolve() {
        const organizations = organizationModel.find().exec();
        if(!organizations) {
            throw new Error('Error getting organizations data')
        }
        return organizations
    }
}
