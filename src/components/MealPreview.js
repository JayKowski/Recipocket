import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/MealPreview.css';

function MealPreview(props) {
  const { meal, meals } = props;
  if (meal) {
    return (
      <div className="meal-preview">
        <h2 className="name-preview">{meal.strMeal}</h2>
        <div className="flex-cont">
          <div className="img-preview-div">
            <Link to={`/meal/${meal.idMeal}`}>
              <img
                className="preview-img"
                src={meal.strMealThumb}
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
                <span className="prev-meal-prop">{meal.strMeal}</span>
              </li>
              <li>
                <span className="prev-meal-name">Origin: </span>
                <span className="prev-meal-prop">{meal.strArea}</span>
              </li>
              <li>
                <span className="prev-meal-name">category: </span>
                <span className="prev-meal-prop">{meal.strCategory}</span>
              </li>
              <li>
                <span className="prev-meal-name">Tags: </span>
                <span className="prev-meal-prop">{meal.strTags}</span>
              </li>
            </ul>
            <Link to={`/meal/${meal.idMeal}`}><button type="button" className="more-details">See More</button></Link>
          </div>
        </div>
      </div>
    );
  }
  if (meals) {
    return (
      <div className="meal-preview small-preview">
        <h2 className="name-preview">{meals.strMeal}</h2>
        <div className="one-preview">
          <div>
            <Link to={`/meal/${meals.idMeal}`}>
              <img
                src={meals.strMealThumb}
                width="150"
                height="150"
                alt=""
              />
            </Link>
          </div>
          <Link to={`/meal/${meals.idMeal}`}><button type="button" className="see-more">Details</button></Link>
        </div>
      </div>
    );
  }
  return true;
}

MealPreview.propTypes = {
  meal: PropTypes.instanceOf(Object),
  meals: PropTypes.instanceOf(Object),
};

export default MealPreview;
