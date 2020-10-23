import React from 'react';
import PropTypes from 'prop-types';
import RenderCategs from './RenderCategs';
import '../stylesheets/CategorySearch.css';

const categoriesA = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat'];
let meals;

class CategorySearch extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { changeCategory } = this.props;
    changeCategory(e.target.value);
  }

  render() {
    const { categoryReducer, state, addMeals } = this.props;
    if (categoryReducer === '') {
      return (
        <div className="categ-search">
          <h2 className="categ-heading">Category Search</h2>
          <form>
            <label htmlFor="category">
              Choose a category to search by
              {' '}
              <br />
              <select onChange={this.handleChange} className="categs-list" name="category">
                {categoriesA.map((categ, index) => (
                  <option
                    value={`${categ}`}
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${index}`}
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
            <select onChange={this.handleChange} className="categs-list" name="category">
              {categoriesA.map((categ, index) => (

                <option
                  value={`${categ}`}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${index}`}
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
}

CategorySearch.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  state: PropTypes.shape({
    categoryReducer: PropTypes.string.isRequired,
    multiMealReducer: PropTypes.arrayOf(PropTypes.object),
    oneMealReducer: PropTypes.instanceOf(Object),
    searchMealReducer: PropTypes.string,
  }).isRequired,
  changeCategory: PropTypes.func.isRequired,
  categoryReducer: PropTypes.string.isRequired,
  addMeals: PropTypes.func.isRequired,
};

export default CategorySearch;
