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

export function sampleMeals(samples) {
  return {
    type: 'SAMPLE_MEALS',
    samples,
  };
}

export function currSample(sample) {
  return {
    type: 'CURRENT_SAMPLE',
    sample,
  };
}
