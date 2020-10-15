import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/MealPreview.css';

class MealPreview extends React.Component {
  render() {
    if (this.props.meal) {
      return (
        <div className="meal-preview">
          <h2 className="name-preview">{this.props.meal.strMeal}</h2>
          <div className="flex-cont">
            <div className="img-preview-div">
            <Link to={`/meal/${this.props.meal.idMeal}`}>
              <img
              className="preview-img"
                src={this.props.meal.strMealThumb}
                width="200"
                height="200"
                alt=""
              />
            </Link>
          </div>
          <div className="preview-deets">
            <ul>
              <li>
                <span className="prev-meal-name">Name: </span> 
                <span className="prev-meal-prop">{this.props.meal.strMeal}</span>
              </li>
              <li>
                <span className="prev-meal-name">Origin: </span> 
                <span className="prev-meal-prop">{this.props.meal.strArea}</span>
              </li>
              <li>
                <span className="prev-meal-name">category: </span> 
                <span className="prev-meal-prop">{this.props.meal.strCategory}</span>
              </li>
              <li>
                <span className="prev-meal-name">Tags: </span> 
                <span className="prev-meal-prop">{this.props.meal.strTags}</span>
              </li>
            </ul>
            <Link to={`/meal/${this.props.meal.idMeal}`}><button className="more-deets">See More</button></Link>
          </div>
          </div>
        </div>
      );
    } else if (this.props.meals) {
      return (
        <div className="meal-preview small-preview">
          <h2 className="name-preview">{this.props.meals.strMeal}</h2>
          <div>
            <Link to={`/meal/${this.props.meals.idMeal}`}>
              <img
                src={this.props.meals.strMealThumb}
                width="50"
                height="50"
                alt=""
              />
            </Link>
          </div>
          <ul>
            <li>Name: {this.props.meals.strMeal}</li>
          </ul>
          <Link to={`/meal/${this.props.meals.idMeal}`}><button>See More</button></Link>
        </div>
      );
    }
  }
}

export default MealPreview; 