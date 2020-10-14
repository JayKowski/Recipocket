import React from 'react';
import '../stylesheets/App.css';
import Welcome from './Welcome';
import MealSearch from './MealSearch';
import Meal from './Meal';
import CategorySearch from './CategorySearch';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions'
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';



class App extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <div className="app-container">
        <Route exact 
          path='/' 
          render={() => (
            <div>
              <Welcome />
              <MealSearch addMeal={this.props.addMeal} {...this.props} />
              <CategorySearch {...this.props} categ={this.props.state.categoriesReducer} />
            </div>
          )}
        />
        <Route
          path="/meal/:id"
          render={ params => (
            <div>
              <Meal {...this.props} {...params} />
            </div>
          )}
        />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
