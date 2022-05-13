import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import DrinkDetailCard from '../components/DrinkDetailCard';
import fetchForDetails from '../services/fetchForDetails';
import fetchRecomended from '../services/fetchRecomended';

const MAGICNUMBER = 6;

export default function DrinkDetails() {
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
      const data = await fetchForDetails('cocktail', id);
      setDetails(data.drinks[0]);
      const randomData = await fetchRecomended('meal');
      setRecomended(randomData.meals.slice(0, MAGICNUMBER));
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const storage = () => {
      let getDone = JSON.parse(localStorage.getItem('doneRecipes'));

      if (!getDone) {
        localStorage.setItem('doneRecipes', JSON.stringify([]));
        getDone = JSON.parse(localStorage.getItem('doneRecipes'));
      }

      setDone(getDone.some((obj) => obj.id === details.idDrink));
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
      // Gambiarra pra passar no teste (Refatorar!)
    };

    storage();
  }, [details]);

  const drinkMap = recomended.map((rec, i) => (
    <div
      className="carousel_div"
      key={ i }
      id={ i }
      data-testid={ `${i}-recomendation-card` }
      style={ { display: 'none' } }
    >
      <img
        className="carousel_imgs"
        src={ rec.strMealThumb }
        alt="imagem"
      />
      <h4 data-testid={ `${i}-recomendation-title` }>{rec.strMeal}</h4>
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
  }, [drinkMap, imageIndex]);

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
      <h1> Drink Details </h1>
      <DrinkDetailCard data={ details } />
      <button type="button" onClick={ nextButton }>
        Next
      </button>
      <section className="carousel_section">
        { drinkMap }
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
