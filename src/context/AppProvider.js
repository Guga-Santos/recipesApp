import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
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

  // ComponentDidMount like -----------------------
  useEffect(() => {
    const recipesAPI = async () => {
      const categorias = await fetchRecipe('categorias');
      const nacionalidades = await fetchRecipe('nacionalidades');
      const ingredientes = await fetchRecipe('ingredientes');

      setRecipes({
        categorias: categorias.meals,
        nacionalidades: nacionalidades.meals,
        ingredientes: ingredientes.meals,
      });
    };
    const drinksAPI = async () => {
      const categorias = await fetchDrinks('categorias');
      const tipos = await fetchDrinks('tipos');
      const ingredientes = await fetchDrinks('ingredientes');
      const copos = await fetchDrinks('copos');
      setDrinks({
        categorias: categorias.drinks,
        tipos: tipos.drinks,
        ingredientes: ingredientes.drinks,
        copos: copos.drinks,
      });
    };

    recipesAPI();
    drinksAPI();
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
    getSearchType,
    getQuery,
    fetchSearchOnClick,
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
