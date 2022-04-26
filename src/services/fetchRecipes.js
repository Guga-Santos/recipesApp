export default async function fetchRecipe(param) {
  let listType = '';

  switch (param) {
  case 'categorias':
    listType = 'c';
    break;
  case 'nacionalidades':
    listType = 'a';
    break;
  case 'ingredientes':
    listType = 'i';
    break;
  default:
    return null;
  }

  const URL = `https://www.themealdb.com/api/json/v1/1/list.php?${listType}=list`;

  try {
    const promise = await fetch(URL);
    const response = await promise.json();
    return response;
  } catch (error) {
    return Error(error);
  }
}
