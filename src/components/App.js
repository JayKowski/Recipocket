import React from 'react';
import '../stylesheets/App.css';
import Meal from './Meal';
import MealSearch from './MealSearch';
import MealPreview from './MealPreview';
import CategorySearch from './CategorySearch';


function App() {
  return (
    <div>
      <hr />
      <h1>Meal Tips</h1>
      <p>Your number one place for delicious meal recipes</p>
      <hr />
      <MealSearch />
      <MealPreview />
      <Meal />
      <CategorySearch />
    </div>
  );
}

export default App;
