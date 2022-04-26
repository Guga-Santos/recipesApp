export default async function fetchDrinks(param) {
  let listType = '';

  switch (param) {
  case 'categorias':
    listType = 'c';
    break;
  case 'tipos':
    listType = 'a';
    break;
  case 'ingredientes':
    listType = 'i';
    break;
  case 'copos':
    listType = 'g';
    break;
  default:
    return null;
  }

  const URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?${listType}=list`;

  try {
    const promise = await fetch(URL);
    const response = await promise.json();
    return response;
  } catch (error) {
    return Error(error);
  }
}
