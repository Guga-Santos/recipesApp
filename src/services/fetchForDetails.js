export default async function fetchRandom(type, id) {
  const URL = `https://www.the${type}db.com/api/json/v1/1/lookup.php?i=${id}`;

  // type = 'meal' pra comida e 'cocktail' pra bebida.

  try {
    const promise = await fetch(URL);
    const response = await promise.json();
    return response;
  } catch (error) {
    return Error(error);
  }
}
