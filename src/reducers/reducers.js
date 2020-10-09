import { combineReducers } from 'redux';

function oneMealReducer( state=[], action) {
    switch(action.type) {
        case 'ADD_MEAL': return action.meal
        default: return state
    }
}

function multiMealReducer( state={}, action) {
    return state;
}

const rootReducer = combineReducers({oneMealReducer, multiMealReducer});

export default rootReducer;