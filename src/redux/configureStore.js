import { createStore, combineReducers } from 'redux';

import { OrganizationsReducer } from './organizationsReducer';
import { Dataset2Reducer } from './dataset2Reducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            OrganizationsReducer,
            Dataset2Reducer
        })
    );
    return store;
}