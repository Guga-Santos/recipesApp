import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FoodDetailCard from '../components/FoodDetailCard';
import fetchForDetails from '../services/fetchForDetails';
import AppContext from '../context/AppContext';

export default function FoodsRecipesInProgress() {
  const [details, setDetails] = useState([]);
  const [checkBoxArrayCheckedCondition, setCheckBoxArrayCheckedCondition] = useState([]);
  const { checkBoxRender } = useContext(AppContext);

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchForDetails('meal', id);
      setDetails(data.meals[0]);
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
    if (inProgressRecipesStorage.meals[id] === undefined) {
      inProgressRecipesStorage.meals = { ...inProgressRecipesStorage.meals, [id]: [] };
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
      <h1>Meals In Progress</h1>
      <FoodDetailCard data={ details } hasCheckBox />
      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ () => handleClick() }
        disabled={ checkBoxArrayCheckedCondition.some((elem) => elem === false) }
      >
        Finish

      </button>
    </div>
  );
}
