import React from 'react';
import measFunc from '../helpers/measures';
import ingFunc from '../helpers/ingredients';
import Welcome from './Welcome';
import '../stylesheets/Meal.css';

function parseInstructions(instructions) {
  const instSplit = instructions.split(". ");
  return instSplit;
}


class Meal extends React.Component {

  componentDidUpdate(prevState) {
    if(prevState.match.params.id !== this.props.match.params.id ) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`;
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      this.props.addMeal(data);
      console.log('data');
    });
   }
  }

  componentDidMount() {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`;
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      this.props.addMeal(data);
      console.log('...mounted');
    });
  }

  render() {
    console.log(this.props.state.oneMealReducer.meals)
    if(this.props.state.oneMealReducer.meals) {
      let measurements = measFunc(this.props.state.oneMealReducer.meals[0]);
      let ingredients = this.props.state.oneMealReducer.meals[0] ? ingFunc(this.props.state.oneMealReducer.meals[0]) : 'Loading. . .';
      let instructions = parseInstructions(this.props.state.oneMealReducer.meals[0].strInstructions);
      return (
        <div className="full-meal-details">
          <Welcome />
          <div className="deets-container">
            <h2 className="f-meal-heading">{this.props.state.oneMealReducer.meals[0].strMeal}</h2>
            <div className="img-deets-wrapper">
              <div className="meal-image">
                <img className="f-meal-img" alt="" src={this.props.state.oneMealReducer.meals[0].strMealThumb} width="300" height="300" />
              </div>
              <div className="measures">
                <table className="measures-table">
                  <thead>
                    <tr>
                      <th className="t-left">Ingredients</th>
                      <th className="t-right">Measurements</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      measurements.map((measure, index) => (
                        <tr key={`${index}`}>
                          <td className="t-left">{ingredients[index]}</td>
                          <td className="t-right">{measure}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="f-meal-instructions">
            <hr className="f-meal-hr"/>
            <h2 className="inst-head">Instructions</h2>
            <ol className="instructions-list">
              {
                instructions.map((inst, ind) => (
                  <li className="" key={`instruct-${ind}`}>{inst}</li>
                ))
              }
            </ol>
          </div>
        </div>
      );
    } else {
        return <h2>Loading. . .</h2>;
    }
  }
}

export default Meal;