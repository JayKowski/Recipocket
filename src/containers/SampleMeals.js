import React from 'react';
import PropTypes from 'prop-types';
import MealPreview from '../components/MealPreview';
import '../stylesheets/SampleMeals.css';

const samplesArr = ['chicken_breast', 'Beef', 'Mushrooms', 'Milk', 'Lemon', 'Garlic', 'Carrots', 'Onions', 'Potatoes'];
const rand = () => Math.ceil(Math.random() * 9);

function handleClick(e) {
  const sampleDiv = document.querySelector('.sample-list');
  if (e.target.textContent === 'hide') {
    sampleDiv.style.display = 'none';
    e.target.textContent = 'show';
  } else {
    sampleDiv.style.display = 'block';
    e.target.textContent = 'hide';
  }
}

class SampleMeals extends React.Component {
  componentDidMount() {
    const { sampleMeals, currSample } = this.props;
    const num = rand();
    const random = samplesArr[num];
    const sample = random;
    currSample(sample);
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${sample}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data) {
          sampleMeals(data.meals);
        }
      });
  }

  componentDidUpdate(prevState) {
    const { sampleMeals, state } = this.props;
    const random = samplesArr[rand()];
    const randMeal = random || 'chicken_breast';
    if (prevState.state.sampleReducer !== state.sampleReducer) {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${randMeal}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          sampleMeals(data.meals);
        })
        .catch(err => {
        // eslint-disable-next-line no-alert
          alert(`error: ${err.message}. Please reload`);
        });
    }
  }

  render() {
    const { state } = this.props;
    const { sampleMealsReducer } = state;
    if (sampleMealsReducer !== null) {
      return (
        <div className="sample-meals">
          <hr className="sample-hr" />
          <div className="head-data">
            <h2 className="sample-heading">Some sample meals </h2>
            <span>
              <button type="button" onClick={handleClick} className="toggle-show">hide</button>
            </span>
          </div>
          <ul className="sample-list">
            <div className="categories-container">
              {
            sampleMealsReducer.map((m, index) => (
              <li className="sample-item" key={`0${10 + index}`}>
                <MealPreview meals={m} />
              </li>
            ))
            }
            </div>
          </ul>
        </div>
      );
    }
    return (
      <p>Loading Samples. . .</p>
    );
  }
}

SampleMeals.propTypes = {
  sampleMeals: PropTypes.func.isRequired,
  currSample: PropTypes.func.isRequired,
  state: PropTypes.shape({
    categoryReducer: PropTypes.string.isRequired,
    multiMealReducer: PropTypes.arrayOf(PropTypes.object),
    oneMealReducer: PropTypes.instanceOf(Object),
    searchMealReducer: PropTypes.string,
    sampleReducer: PropTypes.string.isRequired,
    sampleMealsReducer: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  }).isRequired,
};

export default SampleMeals;
