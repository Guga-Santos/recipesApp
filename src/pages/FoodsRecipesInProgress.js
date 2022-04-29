import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FoodDetailCard from '../components/FoodDetailCard';
import fetchForDetails from '../services/fetchForDetails';

export default function FoodsRecipesInProgress() {
  const [details, setDetails] = useState([]);
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchForDetails('meal', id);
      setDetails(data.meals[0]);
      console.log(data.meals[0]);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <h1>Meals In Progress</h1>
      <FoodDetailCard data={ details } hasCheckBox />
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finish

      </button>
    </div>
  );
}
