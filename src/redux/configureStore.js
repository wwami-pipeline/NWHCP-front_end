import { createStore, combineReducers } from 'redux';

import { OrganizationsReducer } from './organizationsReducer';
import { UsersReducer } from './usersReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            OrganizationsReducer,
            UsersReducer
        })
    );
    return store;
}