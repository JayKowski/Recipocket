import React from 'react';
import PropTypes from 'prop-types';
import MealPreview from '../components/MealPreview';
import '../stylesheets/RenderCategs.css';

let meals;

function handleClick(e) {
  const sampleDiv = document.querySelector('.categ-list');
  if (e.target.textContent === 'hide') {
    sampleDiv.style.display = 'none';
    e.target.textContent = 'show';
  } else {
    e.target.textContent = 'hide';
    sampleDiv.style.display = 'block';
  }
}

class RenderCategs extends React.Component {
  componentDidMount() {
    const { categoryReducer, addMeals } = this.props;
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryReducer}`;
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
    const { categoryReducer } = this.props;
    if (meals) {
      return (
        <div className="render-categs">
          <div className="heading-data">
            <h2 className="categs-heading">
              Search results [
              {' '}
              {meals.length}
              {' '}
              ]
              {' '}
            </h2>
            <span>
              <button type="button" className="show-toggle" onClick={handleClick}>hide</button>
            </span>
          </div>
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
        </div>
      );
    }
    if (categoryReducer === 'None') {
      return (
        <span>{' '}</span>
      );
    }
    return (
      <p className="categs-heading">Rendering categories. . . .</p>
    );
  }
}

RenderCategs.propTypes = {
  state: PropTypes.shape({
    categoryReducer: PropTypes.string.isRequired,
    multiMealReducer: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
    oneMealReducer: PropTypes.instanceOf(Object),
    searchMealReducer: PropTypes.string,
  }).isRequired,
  addMeals: PropTypes.func.isRequired,
  categoryReducer: PropTypes.string.isRequired,
};

export default RenderCategs;
