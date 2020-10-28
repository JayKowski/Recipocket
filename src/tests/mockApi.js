import 'regenerator-runtime';

const fetch = require('node-fetch');

async function mealSearch(str) {
  let result;

  await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${str}`,
  ).then(data => data.json()).then(res => {
    result = res;
  });
  return result;
}

mealSearch('beef');

// eslint-disable-next-line import/prefer-default-export
export { mealSearch };
