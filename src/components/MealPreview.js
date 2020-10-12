import React from 'react';

class MealPreview extends React.Component {
  render() {
    if (this.props.meal) {
      return (
        <div>
          <h2>_Meal Preview</h2>
          <div>
            <img
              src={this.props.meal.strMealThumb}
              width="50"
              height="50"
              alt=""
            />
          </div>
          <ul>
            <li>Name: {this.props.meal.strMeal}</li>
            <li>Origin: {this.props.meal.strArea}</li>
            <li>category: {this.props.meal.strCategory}</li>
            <li>Tags: {this.props.meal.strTags}</li>
          </ul>
        </div>
      );
    } else if (this.props.meals) {
      return (
        <div>
          <h2>Meal Preview</h2>
          <div>
            <img
              src={this.props.meals.strMealThumb}
              width="50"
              height="50"
              alt=""
            />
          </div>
          <ul>
            <li>Name: {this.props.meals.strMeal}</li>
          </ul>
          <button>See More</button>
        </div>
      );
    }
  }
}

export default MealPreview; 