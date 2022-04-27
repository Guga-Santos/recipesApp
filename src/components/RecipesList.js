import PropTypes from 'prop-types';
import React from 'react';
import RecipesCard from './RecipesCard';

const NUMBER_OF_RECIPES_LISTED = 12;

export default function RecipesList({ arrayOfRecipes, recipesType }) {
  const listRecipes = (array, listLength, type) => {
    const recipes = [];
    for (let index = 0; index < listLength; index += 1) {
      const { strMealThumb, strMeal, idMeal } = array[index];
      const { strDrink, strDrinkThumb, idDrink } = array[index];
      if (type === '/food') {
        recipes
          .push(<RecipesCard image={ strMealThumb } name={ strMeal } id={ idMeal } />);
      }

      if (type === '/drink') {
        recipes
          .push(<RecipesCard image={ strDrinkThumb } name={ strDrink } id={ idDrink } />);
      }
    }
    return recipes;
  };
  return (
    <section>
      {listRecipes(arrayOfRecipes, NUMBER_OF_RECIPES_LISTED, recipesType)}
    </section>
  );
}

RecipesList.propTypes = {
  arrayOfRecipes: PropTypes.arrayOf(PropTypes.string).isRequired,
  recipesType: PropTypes.string.isRequired,
};
