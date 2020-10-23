import React from 'react';
import PropTypes from 'prop-types';
import MealPreview from './MealPreview';
import '../stylesheets/MealSearch.css';

let preview;

class MealSearch extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevState) {
    const { addMeal, state } = this.props;
    if (prevState.state.searchMealReducer !== state.searchMealReducer) {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${state.searchMealReducer}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.meals !== null) {
            // eslint-disable-next-line prefer-destructuring
            preview = data.meals[0];
            return addMeal(data.meals[0]);
          }
          // eslint-disable-next-line no-alert
          return alert(`sorry, "${state.searchMealReducer}" recipe not found`);
        });
    }
  }

  handleSubmit(e) {
    const { searchMeal } = this.props;
    e.preventDefault();
    searchMeal(e.target.elements[0].value);
    e.target.elements[0].value = '';
  }

  render() {
    const { state } = this.props;
    if (typeof state.oneMealReducer.idMeal !== 'undefined') {
      return (
        <div className="meal-search">
          <h2 className="head-name">Name Search</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="meal">
              Search by typing a meal&apos;s name
              {' '}
              <br />
              <input name="meal" type="text" placeholder="Meal" />
            </label>
          </form>
          <MealPreview meal={preview} />
          <hr className="meal-search-hr" />
        </div>
      );
    }
    return (
      <div className="meal-search">
        <h2 className="head-name">Name Search</h2>
        <form onSubmit={this.handleSubmit} className="name-form">
          <label htmlFor="meal">
            Search by typing a meal&apos;s name
            {' '}
            <br />
            <input name="meal" type="text" placeholder="Meal" />
          </label>
        </form>
      </div>
    );
  }
}

MealSearch.propTypes = {
  state: PropTypes.shape({
    categoryReducer: PropTypes.string.isRequired,
    multiMealReducer: PropTypes.arrayOf(PropTypes.object),
    // eslint-disable-next-line react/forbid-prop-types
    oneMealReducer: PropTypes.instanceOf(Object),
    searchMealReducer: PropTypes.string,
  }).isRequired,
  addMeal: PropTypes.func.isRequired,
  searchMeal: PropTypes.func.isRequired,
};

export default MealSearch;
