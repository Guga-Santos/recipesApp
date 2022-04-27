export default async function fetchSearchByFilters(location, type, query) {
  let searchType = '';

  switch (type) {
  case 'ingredient':
    searchType = 'filter.php?i';
    break;
  case 'name':
    searchType = 'search.php?s';
    break;
  case 'first-letter':
    searchType = 'search.php?f';
    break;
  default:
    return null;
  }

  const local = location === '/foods' ? 'themealdb' : 'thecocktaildb';

  const URL = `https://www.${local}.com/api/json/v1/1/${searchType}=${query}`;

  try {
    const promise = await fetch(URL);
    const response = await promise.json();
    return response;
  } catch (error) {
    return Error(error);
  }
}
