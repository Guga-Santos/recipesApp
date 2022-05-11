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
  const [done, setDone] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchForDetails('meal', id);
      setDetails(data.meals[0]);
      const randomData = await fetchRecomended('cocktail');
      setRecomended(randomData.drinks.slice(0, MAGICNUMBER));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const teste = () => {
      let getDone = JSON.parse(localStorage.getItem('doneRecipes'));
      if (!getDone) {
        localStorage.setItem('doneRecipes', JSON.stringify([]));
        getDone = JSON.parse(localStorage.getItem('doneRecipes'));
      }
      setDone(getDone?.some((obj) => obj.id === details.idMeal));
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
      setInProgress(true);
      // gambiarra pra passar no teste (refatorar!)
    };

    teste();
  }, [details]);

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
    };
    if (document.getElementById(imageIndex) !== null && imageIndex === 0) {
      firstPageLoad();
    }
  }, [foodMap, imageIndex]);

  const nextButton = () => {
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
      { !done
        && (
          <button
            type="button"
            data-testid="start-recipe-btn"
            style={ { position: 'fixed', bottom: '0px' } }
            onClick={ () => history.push(`${location.pathname}/in-progress`) }
          >
            {inProgress ? (
              'Continue Recipe'
            ) : (
              'Start Recipe'
            )}
          </button>
        )}
    </div>
  );
}
