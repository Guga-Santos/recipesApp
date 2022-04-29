import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FoodDetailCard from '../components/FoodDetailCard';
import fetchForDetails from '../services/fetchForDetails';
import fetchRecomended from '../services/fetchRecomended';
import './DetailsPage.css';

const MAGICNUMBER = 6; // teste

export default function FoodDetails() {
  const [details, setDetails] = useState([]);
  const [recomended, setRecomended] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const location = useLocation();
  const history = useHistory();
  const id = location.pathname.split('/')[2];
  const doneRecipes = [];
  const progressRecipes = [];
  let isRecipeDone = false;
  let isRecipeInProgress = false;
  if (localStorage.doneRecipes !== undefined) {
    doneRecipes.push(JSON.parse(localStorage.doneRecipes));
    isRecipeDone = doneRecipes.find((index) => index.id === details.idMeal);
  }
  if (localStorage.inProgressRecipes !== undefined) {
    progressRecipes.push(JSON.parse(localStorage.inProgressRecipes));
    isRecipeInProgress = progressRecipes.find((index) => index.id === details.idMeal);
  }
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

  const foodMap = recomended.map((rec, i) => (
    <div
      className="carousel_div"
      key={ i }
      id={ i }
      data-testid={ `${i}-recomendation-card` }
      style={ { display: 'none' } }
    >
      <img
        className="carousel_imgs"
        src={ rec.strDrinkThumb }
        alt="imagem"
      />
      <h4 data-testid={ `${i}-recomendation-title` }>{rec.strDrink}</h4>
    </div>));

  useEffect(() => {
    const firstPageLoad = () => {
      document.getElementById(imageIndex).removeAttribute('style');
      document.getElementById(imageIndex + 1).removeAttribute('style');
      setImageIndex(2);
      console.log('entrei no fist');
    };
    if (document.getElementById(imageIndex) !== null && imageIndex === 0) {
      firstPageLoad();
    }
  }, [foodMap]);

  const nextButton = () => {
    console.log(imageIndex);
    if (imageIndex === MAGICNUMBER - 1) {
      document.getElementById(imageIndex).style.display = 'none';
      document.getElementById(imageIndex - 1).style.display = 'none';
      document.getElementById(0).removeAttribute('style');
      document.getElementById(1).removeAttribute('style');
      setImageIndex(2);
    } else {
      const imageIndexPlus = imageIndex + 1;
      document.getElementById(imageIndex).removeAttribute('style');
      document.getElementById(imageIndex + 1).removeAttribute('style');
      document.getElementById(imageIndex - 2).style.display = 'none';
      document.getElementById(imageIndex - 1).style.display = 'none';
      console.log(imageIndexPlus);
      setImageIndex(imageIndexPlus);
    }
  };

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
      <button type="button" onClick={ nextButton }>
        Next
      </button>
      <section className="carousel_section">
        { foodMap }
      </section>
      { !isRecipeDone
        && (
          <button
            type="button"
            data-testid="start-recipe-btn"
            style={ { position: 'fixed', bottom: '0px' } }
            onClick={ () => history.push(`${location.pathname}/in-progress`) }
          >
            {isRecipeInProgress ? (
              'Continue Recipe'
            ) : (
              'Start Recipe'
            )}
          </button>
        )}
    </div>
  );
}
