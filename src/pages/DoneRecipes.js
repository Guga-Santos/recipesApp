/* eslint-disable sonarjs/no-duplicate-string */
import React, { useEffect, useState } from 'react';
import DoneRecipesCard from '../components/DoneRecipesCard';
import DoneRecipesFilters from '../components/DoneRecipesFilters';
import Header from '../components/Header';

// const mock = [
//   {
//     id: '52804',
//     type: 'Food',
//     nationality: 'Canadian',
//     category: 'Miscellaneous',
//     alcoholicOrNot: '',
//     name: 'Poutine',
//     image: 'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg',
//     doneDate: '26/04/2022',
//     tags: ['UnHealthy', 'Speciality', 'HangoverFood'],
//   },
//   {
//     id: '178333',
//     type: 'Drink',
//     nationality: '',
//     category: 'Miscellaneous',
//     alcoholicOrNot: 'Alcoholic',
//     name: 'Raspberry Julep',
//     image: 'https://www.thecocktaildb.com/images/media/drink/hyztmx1598719265.jpg',
//     doneDate: '26/04/2022',
//     tags: [],
//   },
//   {
//     id: '178333',
//     type: 'Drink',
//     nationality: '',
//     category: 'Miscellaneous',
//     alcoholicOrNot: 'Non alcoholic',
//     name: 'Raspberry Julep',
//     image: 'https://www.thecocktaildb.com/images/media/drink/hyztmx1598719265.jpg',
//     doneDate: '26/04/2022',
//     tags: [],
//   },
// ];
export default function DoneRecipes() {
  const recipesOnStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  const [doneRecipesInfo, setDoneRecipesInfo] = useState(recipesOnStorage);
  const [recipesFiltered, setRecipesFiltered] = useState([]);
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    setDoneRecipesInfo(recipesOnStorage);
    setRecipesFiltered(filter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterRecipesBytype = (filterByType) => {
    if (filterByType === 'All') {
      return setRecipesFiltered(doneRecipesInfo);
    }
    const doneRecipesFiltered = doneRecipesInfo
      .filter((recipeInfo) => recipeInfo.type === filterByType);
    setRecipesFiltered(doneRecipesFiltered);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => filterRecipesBytype(filter), [filter]);

  const recipesFilteredFunc = () => {
    if (recipesFiltered !== null && recipesFiltered.length !== 0) {
      const recipesFilteredMap = recipesFiltered.map((recipeInfo, index) => (
        <DoneRecipesCard
          key={ `${index}${recipeInfo.name}` }
          recipeImage={ recipeInfo.image }
          recipeName={ recipeInfo.name }
          recipeCategory={ recipeInfo.category }
          recipeNationality={ recipeInfo.nationality }
          recipeDate={ recipeInfo.doneDate }
          recipeTag={ recipeInfo.tags }
          recipeIndex={ index }
          recipeType={ recipeInfo.type }
          isAlcoholic={ recipeInfo.alcoholicOrNot }
        />
      ));
      console.log(recipesFiltered);
      return recipesFilteredMap;
    }
    return <p>No done recipes</p>;
  };

  return (
    <div>
      <Header title="Done Recipes" hasSearch={ false } />
      <DoneRecipesFilters setFilter={ setFilter } />
      {recipesFilteredFunc()}
    </div>
  );
}
