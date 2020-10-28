import { combineReducers } from 'redux';

function oneMealReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_MEAL': return action.meal;
    default: return state;
  }
}

function multiMealReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_MEALS': return action.meals;
    default: return state;
  }
}

function categoryReducer(state = '', action) {
  switch (action.type) {
    case 'CHANGE_CATEGORY': return action.category;
    default: return state;
  }
}

function searchMealReducer(state = '', action) {
  switch (action.type) {
    case 'SEARCH_MEAL': return action.meal;
    default: return state;
  }
}

function sampleMealsReducer(state = [], action) {
  switch (action.type) {
    case 'SAMPLE_MEALS': return action.samples;
    default: return state;
  }
}

function sampleReducer(state = '', action) {
  switch (action.type) {
    case 'CURRENT_SAMPLE': return action.sample;
    default: return state;
  }
}

const rootReducer = combineReducers({
  oneMealReducer,
  multiMealReducer,
  categoryReducer,
  searchMealReducer,
  sampleMealsReducer,
  sampleReducer,
});

export default rootReducer;
