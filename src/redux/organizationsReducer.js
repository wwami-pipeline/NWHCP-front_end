// This reducer handles the "organizations" part of the state
import { ORGANIZATIONS } from '../shared/organizations';
import * as ActionTypes from './ActionTypes';

export const OrganizationsReducer = (state = ORGANIZATIONS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ORGANIZATION:   // addOrganization(orgId, orgTitle, city)
            const organization = action.payload; 
            const newState = [...state, organization];
            return newState;
        default:
            return state;
    }
};

// Next step: Update the relevant component to dispatch the ADD_ORGANIZATION action