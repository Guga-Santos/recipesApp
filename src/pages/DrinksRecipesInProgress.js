import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import DrinkDetailCard from '../components/DrinkDetailCard';
import fetchForDetails from '../services/fetchForDetails';

export default function DrinkRecipesInProgress() {
  const [details, setDetails] = useState([]);

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchForDetails('cocktail', id);
      setDetails(data.drinks[0]);
      console.log(data.drinks[0]);
    };
    fetchData();
    if (!JSON
      .parse(localStorage.getItem('inProgressRecipes'))) {
      const emptyKey = {
        cocktails: {
        },
        meals: {
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(emptyKey));
    }
    const inProgressRecipesStorage = JSON
      .parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipesStorage.cocktails[id] === undefined) {
      inProgressRecipesStorage.cocktails = { ...inProgressRecipesStorage.cocktails,
        [id]: [] };
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipesStorage));
    }
  }, [id]);

  const handleClick = () => {
    history.push('/done-recipes');
  };

  return (
    <div>
      <h1>Drink In Progress</h1>
      <div>
        <DrinkDetailCard data={ details } hasCheckBox />
        <button
          type="button"
          data-testid="finish-recipe-btn"
          onClick={ () => handleClick() }
        >
          Finish

        </button>
      </div>
    </div>
  );
}
