function ingredients(meal) {
    let ingredients = [];
    for (let i = 1; i < 20; i++) {
      if (
        meal[`strIngredient${i}`] !== null &&
        meal[`strIngredient${i}`] !== ""
      ) {
        ingredients.push(meal[`strIngredient${i}`]);
      } else {
          break;
      }
    }
    return ingredients;
}

export default ingredients;