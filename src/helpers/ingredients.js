function ingredients(meal) {
  const ingredients = [];
  for (let i = 1; i < 20; i += 1) {
    if (
      meal[`strIngredient${i}`] !== null
        && meal[`strIngredient${i}`] !== ''
    ) {
      ingredients.push(meal[`strIngredient${i}`]);
    } else {
      break;
    }
  }
  return ingredients;
}

export default ingredients;
