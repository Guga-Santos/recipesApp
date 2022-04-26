import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchDrinks from '../services/fetchDrinks';
import fetchRecipe from '../services/fetchRecipes';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [recipes, setRecipes] = useState({});
  const [drinks, setDrinks] = useState({});


// ComponentDidMount link -----------------------
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

  const contexto = {
    recipes,
    drinks,
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
