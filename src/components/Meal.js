import React from 'react';
import measFunc from '../helpers/measures';
import ingFunc from '../helpers/ingredients'

class Meal extends React.Component {
  componentDidUpdate(prevState) {
    if(prevState.match.params.id !== this.props.match.params.id ) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`;
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      this.props.addMeal(data);
      console.log('...updated')
    });
   }
  }

  componentDidMount() {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`;
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      this.props.addMeal(data);
      console.log('...mounted')
    });
  }

  render() {
    console.log(this.props.state.oneMealReducer.meals)
    if(this.props.state.oneMealReducer.meals) {
        let measurements = measFunc(this.props.state.oneMealReducer.meals[0]);
        let ingredients = this.props.state.oneMealReducer.meals[0] ? ingFunc(this.props.state.oneMealReducer.meals[0]) : 'Loading. . .';
        return (
          <div>
            <h2>{this.props.state.oneMealReducer.meals[0].strMeal}</h2>
            <div>
              <img alt="" src={this.props.state.oneMealReducer.meals[0].strMealThumb} width="80" height="80" />
            </div>
            <div>
              <h4>Ingredients vs Measurements</h4>
              <ul>
                {
                measurements.map((measure, index) => (
                  <li key={`${index}`}>
                    <strong>{`${ingredients[index]}`}</strong>:{`${measure}`}
                  </li>
                ))}
              </ul>
              <hr />
            </div>
            <div>
              <h2>Instructions</h2>
              <p>{this.props.state.oneMealReducer.meals[0].strInstructions}</p>
            </div>
          </div>
        );
    } else {
        return <h2>Loading. . .</h2>;
    }
  }
}

export default Meal;