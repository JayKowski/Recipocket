import { mealSearch } from './mockApi';

describe('It should generate API requests to an external server', () => {
  test('it should return an object of food information with a meal id', () => mealSearch('mandazi').then(data => {
    expect(data.meals[0].idMeal).toEqual('52967');
  }));
  test('it should return an object of food information with a meal id', () => mealSearch('Arrabiata').then(data => {
    expect(data.meals[0].idMeal).toEqual('52771');
  }));
  test('it should return an object of food information with an appropriate category', () => mealSearch('Arrabiata').then(data => {
    expect(data.meals[0].strCategory).toEqual('Vegetarian');
  }));
});

describe('returns null when no result is found', () => {
  test('returns null when a meal is not found', () => {
    mealSearch('chai').then(data => {
      expect(data.meal).toEqual(null);
    });
  });
  test('returns null when a meal is not found', () => {
    mealSearch('sweet').then(data => {
      expect(data.meal).toEqual(null);
    });
  });
});
