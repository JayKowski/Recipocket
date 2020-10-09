import React from 'react';

const meal = {};

class MealSearch extends React.Component {
    componentDidMount() {
        const apiUrl =
          "https://www.themealdb.com/api/json/v1/1/filter.php?i=avocado";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
    }

    render() {
        return (
          <div>
            <form>
              <input type="text" placeholder="Meal"></input>
            </form>
            <p>this is the meal search component</p><hr />
          </div>
        );
    }
}

export default MealSearch;

/* 
    fetch('https://api.github.com/users/hacktivist123/repos')
  .then(response => response.json())
  .then(data => console.log(data));
*/