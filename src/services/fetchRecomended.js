export default async function fetchRecomended(type) {
  const URL = `https://www.the${type}db.com/api/json/v1/1/search.php?s=`;

  // type = 'meal' pra comida e 'cocktail' pra bebida.

  try {
    const promise = await fetch(URL);
    const response = await promise.json();
    return response;
  } catch (error) {
    return Error(error);
  }
}
