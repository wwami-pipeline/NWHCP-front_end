// This is where we define all the action creators
// Action creators return an action object with the property identifiers "type" and "payload"
// The "payload" contains the data you want to send to the state to update it
import * as ActionTypes from './ActionTypes';

export const addOrganization = (orgId, orgTitle, city) => ({
    type: ActionTypes.ADD_POSTING,  // match with name in ActionTypes.js
    payload: {
        orgId: orgId,
        orgTitle: orgTitle,
        city: city
    }
});

// Next step: Update the comments reducer to update its part of the state
// when the ADD_COMMENT action is dispatched to the store