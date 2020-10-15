import React from 'react';
import MealPreview from './MealPreview';


let meals;

class RenderCategs extends React.Component {
  componentDidUpdate(prevState) {
    if(prevState.state.categoryReducer !== this.props.state.categoryReducer){
     const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.state.categoryReducer}`;
    console.log('Render UPDATED. . .', this.props.state.categoryReducer, apiUrl);
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      meals = data.meals;
      this.props.addMeals(data.meals);
    });
    }
  }

  componentDidMount() {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.state.categoryReducer}`;
    console.log(this.props.state.categoryReducer);
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      meals = data.meals;
      this.props.addMeals(data.meals);
    });
  }

  render() {
    if(meals) {
      return (
        <div>
          <h2>Render Categs</h2>
          <ul>
            {
              meals.map((m, index) => (
                <li key={`${index}`}>
                  <MealPreview meals={m}/>
                </li>
              ))
            }
          </ul>
        </div>
      );
    } else {
      return (
        <p>rendering categs. . . .</p>
      )
    }
  }
}

export default RenderCategs;