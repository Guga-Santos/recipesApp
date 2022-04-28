export default async function fetchRecipesByCategory(category, type) {
  const url = {
    '/foods': `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    '/drinks': `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`,
  };
  try {
    const response = await fetch(url[type]);
    const data = await response.json();
    return data;
  } catch (error) {
    return Error(error);
  }
}
