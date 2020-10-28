import React from 'react';
import '../stylesheets/App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Welcome from './Welcome';
import MealSearch from '../containers/MealSearch';
import Meal from '../containers/Meal';
import CategorySearch from './CategorySearch';
import SampleMeals from '../containers/SampleMeals';
import * as actions from '../actions/actions';

function App(props) {
  const {
    state, changeCategory, addMeals, addMeal, searchMeal,
  } = props;
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
            <SampleMeals
              sampleMeals={props.sampleMeals}
              currSample={props.currSample}
              state={props.state}
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

App.propTypes = {
  state: PropTypes.shape({
    categoryReducer: PropTypes.string.isRequired,
    multiMealReducer: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
    oneMealReducer: PropTypes.instanceOf(Object),
    searchMealReducer: PropTypes.string,
  }).isRequired,
  changeCategory: PropTypes.func.isRequired,
  addMeals: PropTypes.func.isRequired,
  addMeal: PropTypes.func.isRequired,
  searchMeal: PropTypes.func.isRequired,
  sampleMeals: PropTypes.func.isRequired,
  currSample: PropTypes.func.isRequired,
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
