export function addMeal(meal) {
    console.log(meal)
    return {
        type: 'ADD_MEAL',
        meal,
    }
}

export function addMeals(meals) {
    return {
        type: 'ADD_MEALS',
        meals,
    }
}