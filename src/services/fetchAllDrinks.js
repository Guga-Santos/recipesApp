export default async function fetchAllDrinks() {
  try {
    const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=').then((response) => response.json());
    return data;
  } catch (error) {
    return Error(error);
  }
}
