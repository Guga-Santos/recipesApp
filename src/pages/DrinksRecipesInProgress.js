import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DrinkDetailCard from '../components/DrinkDetailCard';
import fetchForDetails from '../services/fetchForDetails';

export default function DrinkRecipesInProgress() {
  const [details, setDetails] = useState([]);
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchForDetails('cocktail', id);
      setDetails(data.drinks[0]);
      console.log(data.drinks[0]);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <h1>Drink In Progress</h1>
      <div>
        <DrinkDetailCard data={ details } hasCheckBox />
        <button
          type="button"
          data-testid="finish-recipe-btn"
        >
          Finish

        </button>
      </div>
    </div>
  );
}
