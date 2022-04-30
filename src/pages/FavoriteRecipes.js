import React, { useEffect, useState } from 'react';
import DoneRecipesFilters from '../components/DoneRecipesFilters';
import FavoriteCards from '../components/FavoriteCards';
import Header from '../components/Header';

// const favoriteRecipes = [
//   {
//     id: '52771',
//     type: 'food',
//     nationality: 'Italian',
//     category: 'Vegetarian',
//     alcoholicOrNot: '',
//     name: 'Spicy Arrabiata Penne',
//     image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
//   },
//   {
//     id: '178319',
//     type: 'drink',
//     nationality: '',
//     category: 'Cocktail',
//     alcoholicOrNot: 'Alcoholic',
//     name: 'Aquamarine',
//     image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
//   },
// ];

export default function FavoriteRecipes() {
  const [favRecipesInfo, setFavRecipesInfo] = useState();

  useEffect(() => {
    // localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    const recipesOnStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavRecipesInfo(recipesOnStorage);
    console.log(recipesOnStorage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilter = ({ value }) => {
    console.log(value);
  };

  return (
    <div>
      <Header title="Favorite Recipes" hasSearch={ false } />
      <DoneRecipesFilters setFilter={ handleFilter } />
      {favRecipesInfo && favRecipesInfo.map((recipeInfo, index) => (
        <FavoriteCards
          key={ `${index}${recipeInfo.name}` }
          recipeImage={ recipeInfo.image }
          recipeName={ recipeInfo.name }
          recipeCategory={ recipeInfo.category }
          recipeNationality={ recipeInfo.nationality }
          recipeIndex={ index }
          recipeType={ recipeInfo.type }
          recipeId={ recipeInfo.id }
          recipeAlcoholic={ recipeInfo.alcoholicOrNot }
        />))}
    </div>
  );
}
