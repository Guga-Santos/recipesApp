import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import DrinkDetailCard from '../components/DrinkDetailCard';
import fetchForDetails from '../services/fetchForDetails';
import AppContext from '../context/AppContext';

export default function DrinkRecipesInProgress() {
  const [details, setDetails] = useState([]);
  const { checkBoxRender } = useContext(AppContext);
  const [checkBoxArrayCheckedCondition, setCheckBoxArrayCheckedCondition] = useState([]);

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchForDetails('cocktail', id);
      setDetails(data.drinks[0]);
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

  useEffect(() => {
    const isAllChecked = () => {
      const checkBoxArray = document.getElementsByClassName('ingredientCheckBox');
      const checkBoxArrayLength = checkBoxArray.length;
      const condiditonArray = [];
      for (let index = 0; index < checkBoxArrayLength; index += 1) {
        condiditonArray.push(checkBoxArray[index].checked);
      }
      setCheckBoxArrayCheckedCondition(condiditonArray);
    };
    isAllChecked();
  }, [checkBoxRender]);

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
          disabled={ checkBoxArrayCheckedCondition.some((elem) => elem === false) }
        >
          Finish

        </button>
      </div>
    </div>
  );
}
