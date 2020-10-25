import React from 'react';
import PropTypes from 'prop-types';
import RenderCategs from '../containers/RenderCategs';
import '../stylesheets/CategorySearch.css';

const categoriesA = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat'];
let meals;

function CategorySearch(props) {
  const handleChange = e => {
    const { changeCategory } = props;
    changeCategory(e.target.value);
  };

  const { categoryReducer, state, addMeals } = props;
  if (categoryReducer === '') {
    return (
      <div className="categ-search">
        <h2 className="categ-heading">Category Search</h2>
        <form>
          <label htmlFor="category">
            Choose a category to search by
            {' '}
            <br />
            <select onChange={handleChange} className="categs-list" name="category">
              {categoriesA.map((categ, index) => (
                <option
                  value={`${categ}`}
                  key={`${index + 100}`}
                >
                  {`${categ}`}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
    );
  }
  return (
    <div className="categ-search">
      <h2 className="categ-heading">Category Search</h2>
      <form>
        <label htmlFor="category">
          Choose a category to search by
          {' '}
          <br />
          <select onChange={handleChange} className="categs-list" name="category">
            {categoriesA.map((categ, index) => (

              <option
                value={`${categ}`}
                key={`${index + 100}`}
              >
                {`${categ}`}
              </option>
            ))}
          </select>
        </label>
      </form>
      <div>
        <RenderCategs
          state={state}
          addMeals={addMeals}
          categoryReducer={categoryReducer}
          meals={meals}
        />
      </div>
    </div>
  );
}

CategorySearch.propTypes = {
  state: PropTypes.shape({
    categoryReducer: PropTypes.string.isRequired,
    multiMealReducer: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
    oneMealReducer: PropTypes.instanceOf(Object),
    searchMealReducer: PropTypes.string,
  }).isRequired,
  changeCategory: PropTypes.func.isRequired,
  categoryReducer: PropTypes.string.isRequired,
  addMeals: PropTypes.func.isRequired,
};

export default CategorySearch;
