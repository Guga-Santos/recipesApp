import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchAllDrinks from '../services/fetchAllDrinks';
import fetchAllFoods from '../services/fetchAllFoods';
import fetchDrinks from '../services/fetchDrinks';
import fetchRecipe from '../services/fetchRecipes';
import fetchSearchByFilters from '../services/fetchSearchByFilters';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [recipes, setRecipes] = useState({});
  const [drinks, setDrinks] = useState({});
  const [searchFilter, setSearchFilter] = useState('');
  // Input radio selecionado no componente SearchBar
  const [query, setquery] = useState('');

  // Aquilo que é digitado no input text do SearchBar
  const [searchData, setSearchData] = useState([]);

  const [validateCARD, setValidateCARD] = useState(false);

  const [selectedCATEG, setSelectedCATEG] = useState('');

  const [exploreIngredients, setExploreIngredients] = useState(false);
  const [ingredient, setIngredient] = useState('');

  const [favRecipesInfo, setFavRecipesInfo] = useState();
  // alterna entre true e false cada vez que o checked dos checkbox de receitas e alterado
  const [checkBoxRender, setCheckBoxRender] = useState(false);

  // ComponentDidMount like -----------------------
  const [loading, setLoading] = useState(true);
  // ComponentDidMount link -----------------------
  useEffect(() => {
    const recipesAPI = async () => {
      const categorias = await fetchRecipe('categorias');
      const nacionalidades = await fetchRecipe('nacionalidades');
      const ingredientes = await fetchRecipe('ingredientes');
      const allFoods = await fetchAllFoods();
      setRecipes({
        allFoods,
        categorias: categorias.meals,
        nacionalidades: nacionalidades.meals,
        ingredientes: ingredientes.meals,
      });
      setLoading(false);
    };
    const drinksAPI = async () => {
      const categorias = await fetchDrinks('categorias');
      const tipos = await fetchDrinks('tipos');
      const ingredientes = await fetchDrinks('ingredientes');
      const copos = await fetchDrinks('copos');
      const allDrinks = await fetchAllDrinks();
      setDrinks({
        allDrinks,
        categorias: categorias.drinks,
        tipos: tipos.drinks,
        ingredientes: ingredientes.drinks,
        copos: copos.drinks,
      });
      setLoading(false);
    };
    drinksAPI();
    recipesAPI();
  }, []);
  //  --------------------------------------------

  const getSearchType = ({ target }) => {
    setSearchFilter(target.value);
  };

  const getQuery = ({ target }) => {
    setquery(target.value);
  };

  const fetchSearchOnClick = async (location) => {
    const data = await fetchSearchByFilters(location, searchFilter, query);
    setSearchData(data);
    setValidateCARD(true);
  };

  const contexto = {
    recipes,
    drinks,
    searchFilter,
    searchData,
    query,
    validateCARD,
    selectedCATEG,
    exploreIngredients,
    ingredient,
    favRecipesInfo,
    setFavRecipesInfo,
    setSelectedCATEG,
    getSearchType,
    getQuery,
    fetchSearchOnClick,
    setSearchData,
    setValidateCARD,
    setExploreIngredients,
    setIngredient,
    loading,
    checkBoxRender,
    setCheckBoxRender,
  };

  return (
    <AppContext.Provider value={ contexto }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
