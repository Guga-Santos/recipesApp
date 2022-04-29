/* eslint-disable sonarjs/no-duplicate-string */
import React, { useEffect, useState } from 'react';
import DoneRecipesCard from '../components/DoneRecipesCard';
import DoneRecipesFilters from '../components/DoneRecipesFilters';
import Header from '../components/Header';

const mock = [
  {
    id: '52804',
    type: 'Food',
    nationality: 'Canadian',
    category: 'Miscellaneous',
    alcoholicOrNot: '',
    name: 'Poutine',
    image: 'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg',
    doneDate: '26/04/2022',
    tags: ['UnHealthy', 'Speciality', 'HangoverFood'],
  },
  {
    id: '178333',
    type: 'Drink',
    nationality: '',
    category: 'Miscellaneous',
    alcoholicOrNot: 'Alcoholic',
    name: 'Raspberry Julep',
    image: 'https://www.thecocktaildb.com/images/media/drink/hyztmx1598719265.jpg',
    doneDate: '26/04/2022',
    tags: [],
  },
  {
    id: '178333',
    type: 'Drink',
    nationality: '',
    category: 'Miscellaneous',
    alcoholicOrNot: 'Non alcoholic',
    name: 'Raspberry Julep',
    image: 'https://www.thecocktaildb.com/images/media/drink/hyztmx1598719265.jpg',
    doneDate: '26/04/2022',
    tags: [],
  },
];
export default function DoneRecipes() {
  const [doneRecipesInfo, setDoneRecipesInfo] = useState(mock);
  const [filter, setFilter] = useState('');
  console.log(filter);
  console.log(doneRecipesInfo);
  useEffect(() => {
    setDoneRecipesInfo(mock);
  }, []);
  return (
    <>
      <Header title="Done Recipes" hasSearch={ false } />
      <DoneRecipesFilters setFilter={ setFilter } />
      {doneRecipesInfo.map((recipeInfo, index) => (
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
      ))}

    </>
  );
}
