import React from 'react';
import PropTypes from 'prop-types';
import measFunc from '../helpers/measures';
import ingFunc from '../helpers/ingredients';
import Welcome from '../components/Welcome';
import '../stylesheets/Meal.css';

function parseInstructions(instructions) {
  const instSplit = instructions.split('. ');
  return instSplit;
}

class Meal extends React.Component {
  componentDidMount() {
    const { match, addMeal } = this.props;
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        addMeal(data);
      });
  }

  componentDidUpdate(prevState) {
    const { match, addMeal } = this.props;
    if (prevState.match.params.id !== match.params.id) {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          addMeal(data);
        });
    }
  }

  render() {
    const { state } = this.props;
    if (state.oneMealReducer.meals) {
      const measurements = measFunc(state.oneMealReducer.meals[0]);
      const ingredients = state.oneMealReducer.meals[0] ? ingFunc(state.oneMealReducer.meals[0]) : 'Loading. . .';
      const instructions = parseInstructions(state.oneMealReducer.meals[0].strInstructions);
      return (
        <div className="full-meal-details">
          <Welcome />
          <div className="deets-container">
            <h2 className="f-meal-heading">{state.oneMealReducer.meals[0].strMeal}</h2>
            <div className="img-deets-wrapper">
              <div className="meal-image">
                <img className="f-meal-img" alt="" src={state.oneMealReducer.meals[0].strMealThumb} width="300" height="300" />
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
                        <tr key={`measure-${index + 100}`}>
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
            <hr className="f-meal-hr" />
            <h2 className="inst-head">Instructions</h2>
            <ol className="instructions-list">
              {
                instructions.map((inst, ind) => (
                  <li className="" key={`instruct-${ind + 100}`}>{inst}</li>
                ))
              }
            </ol>
          </div>
        </div>
      );
    }
    return <h2>Loading. . .</h2>;
  }
}

Meal.propTypes = {
  state: PropTypes.shape({
    categoryReducer: PropTypes.string.isRequired,
    multiMealReducer: PropTypes.arrayOf(PropTypes.object),
    oneMealReducer: PropTypes.instanceOf(Object),
    searchMealReducer: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.instanceOf(Object),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  addMeal: PropTypes.func.isRequired,
};

export default Meal;
