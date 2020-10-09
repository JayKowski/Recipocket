import React from 'react';

class MealPreview extends React.Component {
  render() {
    console.log(this.props.meal);
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
            <li>Common in: {this.props.meal.strArea}</li>
            <li>category: {this.props.meal.strCategory}</li>
            <li>Tags: {this.props.meal.strTags}</li>
          </ul>
        </div>
      );
    }
  }
}

export default MealPreview; 