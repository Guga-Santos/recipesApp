import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import DrinkDetailCard from '../components/DrinkDetailCard';
import fetchForDetails from '../services/fetchForDetails';
import fetchRecomended from '../services/fetchRecomended';

const MAGICNUMBER = 6;

export default function DrinkDetails() {
  const [details, setDetails] = useState([]);
  const [recomended, setRecomended] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const id = location.pathname.split('/')[2];
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchForDetails('cocktail', id);
      setDetails(data.drinks[0]);
      const randomData = await fetchRecomended('meal');
      setRecomended(randomData.meals.slice(0, MAGICNUMBER));
      console.log(data.drinks);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1> Drink Details </h1>
      <DrinkDetailCard data={ details } />
      <div style={ { display: 'flex', width: '80vw', overflowx: 'scroll' } }>
        { recomended.map((rec, i) => (
          <div
            key={ i }
            data-testid={ `${i}-recomendation-card` }
          >
            <img
              src={ rec.strMealThumb }
              alt="imagem"
              style={ { width: '45vw' } }
            />
            <h4>{rec.strMeal}</h4>
          </div>))}
      </div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        style={ { position: 'fixed', bottom: '0px' } }
        onClick={ () => history.push(`${location.pathname}/in-progress`) }
      >
        Start Recipe

      </button>
    </div>
  );
}
