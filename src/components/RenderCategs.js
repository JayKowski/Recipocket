/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import MealPreview from './MealPreview';
import '../stylesheets/RenderCategs.css';

let meals;

class RenderCategs extends React.Component {
  componentDidMount() {
    const { categoryReducer, addMeals } = this.props;
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryReducer}`;
    // console.log(state.categoryReducer);
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        meals = data.meals;
        addMeals(data.meals);
      });
  }

  componentDidUpdate(prevState) {
    const { categoryReducer, state, addMeals } = this.props;
    if (prevState.state.categoryReducer !== state.categoryReducer) {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryReducer}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          meals = data.meals;
          addMeals(data.meals);
        });
    }
  }

  render() {
    if (meals) {
      return (
        <div className="render-categs">
          <h2 className="categs-heading">
            Search results [
            {' '}
            {meals.length}
            {' '}
            ]
            {' '}
          </h2>
          <ul className="categ-list">
            <div className="categories-container">
              {
              meals.map((m, index) => (
                <li className="categ-item" key={`0${10 + index}`}>
                  <MealPreview meals={m} />
                </li>
              ))
            }
            </div>
          </ul>
          <h2 className="categs-heading">END</h2>
        </div>
      );
    }
    return (
      <p>rendering categs. . . .</p>
    );
  }
}

RenderCategs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  state: PropTypes.shape({
    categoryReducer: PropTypes.string.isRequired,
    multiMealReducer: PropTypes.arrayOf(PropTypes.object),
    oneMealReducer: PropTypes.instanceOf(Object),
    searchMealReducer: PropTypes.string,
  }).isRequired,
  addMeals: PropTypes.func.isRequired,
  categoryReducer: PropTypes.string.isRequired,
};

export default RenderCategs;
