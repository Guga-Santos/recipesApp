export default async function fetchAllFoods() {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((response) => response.json());
  return data;
}
