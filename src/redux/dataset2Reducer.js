import { DATASET2 } from '../shared/dataset2';
import * as ActionTypes from './ActionTypes';

export const Dataset2Reducer = (state = DATASET2, action) => {
    switch (action.type) {
        // case ActionTypes.ADD_ORGANIZATION:   // addOrganization(orgId, orgTitle, city)
        //     const organization = action.payload; 
        //     return state.concat(organization);
        default:
            return state;
    }
};