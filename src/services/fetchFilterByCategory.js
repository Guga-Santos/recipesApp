export default async function fetchFilterByCategory(category) {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`;

  try {
    const promise = await fetch(URL);
    const response = await promise.json();
    return response.meals;
  } catch (error) {
    return Error(error);
  }
}
