// This reducer handles the "organizations" part of the state

import { ORGANIZATIONS } from '../shared/organizations';
import * as ActionTypes from './ActionTypes';

// This reducer takes the organizations part of the state and
// a Redux action object {type, payload} and makes some change to
// the state before returning a new, updated state

export const OrganizationsReducer = (state = ORGANIZATIONS, action) => {
    // console.log("old state:", state);
    switch (action.type) {

        case ActionTypes.ADD_ORGANIZATION:   // addComment(campsiteId, rating, author, text)
            const organization = action.payload; //an object with the property identifiers campsiteId, rating, author, text

            // Add a couple more properties called id and length
            comment.id = state.length;  // length of comments array
            comment.date = new Date().toISOString();

            // Return the updated state to the redux store
            // The state here is a string array of comments
            console.log("new state", state.concat(comment));
            return state.concat(comment); 

        default:
            return state;
    }
};

// Next step: Update MainComponent and CampsiteInfoComponent to dispatch the ADD_COMMENT action