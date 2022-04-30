export default async function fetchSearchByIngredients(ingredient, type) {
  const URL = `https://www.the${type}db.com/api/json/v1/1/filter.php?i=${ingredient}`;

  try {
    const promise = await fetch(URL);
    const response = await promise.json();
    return response;
  } catch (error) {
    return Error(error);
  }
}
