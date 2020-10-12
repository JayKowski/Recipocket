import React from 'react';
import Meal from './Meal';
import MealPreview from './MealPreview'

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

  // componentDidMount() {
  //   console.log('mounting . . .')
  // }
  
  fetchData() {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      this.props.addMeal(data.meals[0]);
    });
    console.log('component mounted...')
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchMeal(e.target.elements[0].value);
  }

  render() {
    console.log(typeof this.props.state.oneMealReducer.idMeal);
    console.log('preview. . .', preview);
    if(typeof this.props.state.oneMealReducer.idMeal !== 'undefined') {
      console.log(preview);
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Meal"></input>
          </form>
          <MealPreview meal={preview}/>
          <hr />
        </div>
      );
    } else {
      console.log(typeof this.props.state.oneMealReducer);
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Meal"></input>
        </form>
      );
    }
  }
}

export default MealSearch;
