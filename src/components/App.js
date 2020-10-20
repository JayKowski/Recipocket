import React from 'react';
import '../stylesheets/App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Welcome from './Welcome';
import MealSearch from './MealSearch';
import Meal from './Meal';
import CategorySearch from './CategorySearch';
import * as actions from '../actions/actions';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    const {
      state, changeCategory, addMeals, addMeal, searchMeal,
    } = this.props;
    const { categoryReducer } = state;
    return (
      <div className="app-container">
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Welcome />
              <MealSearch addMeal={addMeal} state={state} searchMeal={searchMeal} />
              <CategorySearch
                state={state}
                changeCategory={changeCategory}
                categoryReducer={categoryReducer}
                addMeals={addMeals}
              />
            </div>
          )}
        />
        <Route
          path="/meal/:id"
          render={params => (
            <div>
              <Meal addMeal={addMeal} match={params.match} state={state} />
            </div>
          )}
        />
      </div>
    );
  }
}

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  state: PropTypes.object.isRequired,
  changeCategory: PropTypes.func.isRequired,
  addMeals: PropTypes.func.isRequired,
  addMeal: PropTypes.func.isRequired,
  searchMeal: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actions }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
