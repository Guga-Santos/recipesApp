import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RecipesList from './RecipesList';

import CategoriesList from './CategoriesList';
import useFilterByCategory from '../hooks/useFilterByCategory';

export default function MainScreen({ history }) {
  const { location: { pathname } } = history;
  const [drinks, setDrinks] = useState([]);
  const [foods, setFoods] = useState([]);
  const { drinksList,
    foodsList, loading, selectFilter } = useFilterByCategory(pathname);

  useEffect(() => {
    setDrinks(drinksList);
    setFoods(foodsList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectFilter]);

  console.log(drinks, foods, loading);
  if (loading) {
    return <div>carregando</div>;
  }

  return (
    <section>

      {pathname === '/foods' && (
        <>
          <CategoriesList
            categoriesList={ foods.recipesCategory.meals }
            filter={ selectFilter }
          />
          <RecipesList
            arrayOfRecipes={ foods.recipesList.meals }
            recipesType={ pathname }
          />
        </>
      )}

      {pathname === '/drinks' && (
        <>
          <CategoriesList
            categoriesList={ drinks.recipesCategory.drinks }
            filter={ selectFilter }
          />
          <RecipesList
            arrayOfRecipes={ drinks.recipesList.drinks }
            recipesType={ pathname }
          />
        </>
      )}

    </section>
  );
}

MainScreen.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.string,
  }).isRequired,
};
