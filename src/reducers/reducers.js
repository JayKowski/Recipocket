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

function categoriesReducer( state=[], action) {
    switch(action.type) {
        case 'ADD_CATEGORIES': return action.categories;
        default: return state;
    }
}

function categoryReducer(state=[], action) {
    switch(action.type) {
        case 'CHANGE_CATEGORY': return action.category;
        default: return state;
    }
}

function searchMealReducer(state=[], action) {
    switch(action.type) {
        case 'SEARCH_MEAL': return action.meal;
        default: return state;
    }
}

const rootReducer = combineReducers({oneMealReducer, multiMealReducer, categoriesReducer, categoryReducer, searchMealReducer });

export default rootReducer;