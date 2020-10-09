import React from 'react';
import '../stylesheets/App.css';
import Meal from './Meal';
import MealSearch from './MealSearch';
import MealPreview from './MealPreview';
import CategorySearch from './CategorySearch';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions'
import { connect } from 'react-redux';



class App extends React.Component {
  render() {
    console.log(this.props.state);
    return (
      <div>
        <hr />
        <h1>Meal Tips</h1>
        <p>Your number one place for delicious meal recipes</p>
        <hr />
        <MealSearch addMeal={this.props.addMeal} meal={this.props.state.oneMealReducer} />
        <MealPreview meal={this.props.state.oneMealReducer} />
        <Meal />
        <CategorySearch />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
