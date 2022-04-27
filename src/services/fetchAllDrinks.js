export default async function fetchAllDrinks() {
  const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=').then((response) => response.json());
  return data;
}
