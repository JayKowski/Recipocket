import React from 'react';
import MealPreview from './MealPreview';
import '../stylesheets/MealSearch.css';

let preview;

class MealSearch extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevState, prevProps) {
    // console.log(this.props)
    if(prevState.state.searchMealReducer !== this.props.state.searchMealReducer) {
      // console.log(this.props.state.searchMealReducer);
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.props.state.searchMealReducer}`;
      fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if(data.meals !== null) {
          preview = data.meals[0];
          return this.props.addMeal(data.meals[0]);
        } else {
          return alert(`sorry, "${this.props.state.searchMealReducer}" recipe not found`);
        }
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchMeal(e.target.elements[0].value);
    e.target.elements[0].value = '';
  }

  render() {
    if(typeof this.props.state.oneMealReducer.idMeal !== 'undefined') {
      return (
        <div className="meal-search">
          <h2 className="head-name">Name Search</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Search by typing a meal's name <br />
              <input type="text" placeholder="Meal"></input>
            </label>
          </form>
          <MealPreview meal={preview}/>
          <hr />
        </div>
      );
    } else {
      // console.log(typeof this.props.state.oneMealReducer);
      return (
        <div className="meal-search">
          <h2 className="head-name">Name Search</h2>
          <form onSubmit={this.handleSubmit} className="name-form">
            <label>
              Search by typing a meal's name <br />
              <input type="text" placeholder="Meal"></input>
            </label>
          </form>
        </div>
      );
    }
  }
}

export default MealSearch;
