import { createStore, combineReducers } from 'redux';

import { Dataset1 } from './organizationsReducer';
import { Dataset2 } from './dataset2Reducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
        dataset1: Dataset1,
        dataset2: Dataset2
        })
    );
    return store;
}