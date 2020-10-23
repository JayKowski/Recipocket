export function addMeal(meal) {
  return {
    type: 'ADD_MEAL',
    meal,
  };
}

export function addMeals(meals) {
  return {
    type: 'ADD_MEALS',
    meals,
  };
}

export function changeCategory(category) {
  return {
    type: 'CHANGE_CATEGORY',
    category,
  };
}

export function searchMeal(meal) {
  return {
    type: 'SEARCH_MEAL',
    meal,
  };
}
