import React from 'react';
import RenderCategs from './RenderCategs';
import '../stylesheets/CategorySearch.css';

const categoriesA = ["Beef", "Chicken", "Dessert", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian", "Breakfast", "Goat"];
let meals;

class CategorySearch extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevState) {
    if(prevState.state.categoryReducer !== this.props.state.categoryReducer){
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.state.categoryReducer}`;
      fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('...updated')
      });
      }
  }

  handleChange(e) {
    this.props.changeCategory(e.target.value);
  }

  render() {
    if(typeof this.props.state.categoryReducer === 'object') {
        return (
        <div className="categ-search">
          <h2 className="categ-heading" >Category Search</h2>
          <form>
            <label>
              Choose a category to search by  <br />
              <select onChange={this.handleChange} className="categs-list">
                {categoriesA.map((categ, index) => (
                  
                  <option
                    value={`${categ}`}
                    key={`${index}`}
                  >{`${categ}`}</option>
                ))}
              </select>
            </label>
          </form>
        </div>
      );
    } else {
      return (
      <div className="categ-search">
        <h2 className="categ-heading" >Category Search</h2>
        <form>
          <label>
            Choose a category to search by <br />
            <select onChange={this.handleChange}>
              {categoriesA.map((categ, index) => (
                
                <option
                  value={`${categ}`}
                  key={`${index}`}
                >{`${categ}`}</option>
              ))}
            </select>
          </label>
        </form>
        <div>
          {
            <RenderCategs {...this.props} category={this.props.state.categoryReducer} meals={meals}/>
          }
        </div>
      </div>
    );
    }
  }
}

export default CategorySearch;