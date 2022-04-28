import { useState, useEffect } from 'react';
import fetchRecipesByCategory from '../services/fetchRecipesByCategory';
import fetchDrinks from '../services/fetchDrinks';
import fetchRecipe from '../services/fetchRecipes';
import fetchAllFoods from '../services/fetchAllFoods';
import fetchAllDrinks from '../services/fetchAllDrinks';

export default function useFilterByCategory(pathname) {
  const [drinksList, setDrinksList] = useState({});
  const [foodsList, setFoodsList] = useState({});
  const [loading, setLoading] = useState(true);
  const [filterSelected, setFilterSelected] = useState('');

  async function fetchAllRecipes() {
    setLoading(true);
    let recipesList;
    let recipesCategory;
    switch (pathname) {
    case '/foods':
      recipesList = await fetchAllFoods();
      recipesCategory = await fetchRecipe('categorias');
      setFoodsList({ recipesList, recipesCategory });
      setLoading(false);
      break;
    case '/drinks':
      recipesList = await fetchAllDrinks();
      recipesCategory = await fetchDrinks('categorias');
      setDrinksList({ recipesList, recipesCategory });
      setLoading(false);
      break;
    default:
      break;
    }
  }
  useEffect(() => {
    fetchAllRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchRecipesByFilter(filter) {
    if (filter === 'All') {
      return fetchAllRecipes();
    }
    let recipesListByCategory;
    switch (pathname) {
    case '/foods':
      setLoading(true);
      recipesListByCategory = await fetchRecipesByCategory(filter, pathname);
      setFoodsList((prevState) => ({
        ...prevState,
        recipesList: recipesListByCategory,
      }));
      setLoading(false);
      break;
    case '/drinks':
      setLoading(true);
      recipesListByCategory = await fetchRecipesByCategory(filter, pathname);
      setDrinksList((prevState) => ({
        ...prevState,
        recipesList: recipesListByCategory,
      }));
      setLoading(false);
      break;
    default:
      break;
    }
  }
  function selectFilter(categorySelected) {
    if (filterSelected === categorySelected) {
      setFilterSelected('All');
      fetchRecipesByFilter('All');
    } else {
      setFilterSelected(categorySelected);
      fetchRecipesByFilter(categorySelected);
    }
  }

  return {
    drinksList,
    foodsList,
    loading,
    selectFilter };
}
