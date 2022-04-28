import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FoodDetailCard from '../components/FoodDetailCard';
import fetchForDetails from '../services/fetchForDetails';
import fetchRecomended from '../services/fetchRecomended';
import './FoodDetails.css';

const MAGICNUMBER = 6;

export default function FoodDetails() {
  const [details, setDetails] = useState([]);
  const [recomended, setRecomended] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const id = location.pathname.split('/')[2];
  const doneRecipes = [];
  let isRecipeDone = false;
  if (localStorage.doneRecipes !== undefined) {
    doneRecipes.push(JSON.parse(localStorage.doneRecipes));
    isRecipeDone = doneRecipes.find((index) => index.id === details.idMeal);
  }
  console.log(isRecipeDone);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchForDetails('meal', id);
      setDetails(data.meals[0]);
      const randomData = await fetchRecomended('cocktail');
      setRecomended(randomData.drinks.slice(0, MAGICNUMBER));
      console.log(randomData.drinks.slice(0, MAGICNUMBER));
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Food Details</h1>
      <FoodDetailCard data={ details } />
      <iframe
        title="Embedded youtube video"
        data-testid="video"
        frameBorder="0"
        src={ details?.strYoutube }
        controls
      />
      <section className="carousel_section">
        { recomended.map((rec, i) => (
          <div
            className="carousel_div"
            key={ i }
            data-testid={ `${i}-recomendation-card` }
          >
            <img
              className="carousel_imgs"
              src={ rec.strDrinkThumb }
              alt="imagem"
            />
            <h4 data-testid={ `${i}-recomendation-title` }>{rec.strDrink}</h4>
          </div>))}
      </section>
      { !isRecipeDone
        && (
          <button
            type="button"
            data-testid="start-recipe-btn"
            style={ { position: 'fixed', bottom: '0px' } }
            onClick={ () => history.push(`${location.pathname}/in-progress`) }
          >
            Start Recipe

          </button>
        )}
    </div>
  );
}
