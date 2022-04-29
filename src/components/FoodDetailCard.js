import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FoodDetailCard({ data }) {
  const location = useLocation();

  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [copied, setCopied] = useState(false);
  const [favorited, setFavorited] = useState(false);

  const favoriteRecipes = [{
    id: data.idMeal,
    type: 'food',
    nationality: data.strArea,
    category: data.strCategory,
    alcoholicOrNot: '',
    name: data.strMeal,
    image: data.strMealThumb,
  }];

  useEffect(() => {
    const fetchData = async () => {
      setMeasure(Object.entries(data).filter((str) => str[0]
        .includes('strMeasure') && str[1]));

      setIngredients(Object.entries(data).filter((str) => str[0]
        .includes('strIngredient') && str[1]));
    };
    fetchData();
  }, [data]);

  useEffect(() => {
    const getStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getStorage) {
      setFavorited(getStorage[0]?.id === data.idMeal);
    }
  }, [data.idMeal]);

  const handleShare = () => {
    navigator.clipboard.writeText(`http://localhost:3000${location.pathname}`);
    setCopied(true);
  };

  const handleFavorited = () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    setFavorited(true);
  };

  return (
    <div className="detail-card-container">
      <img
        src={ data.strMealThumb }
        alt="uma imagem"
        data-testid="recipe-photo"
      />
      <h2
        data-testid="recipe-title"
      >
        { data.strMeal }

      </h2>
      <p
        data-testid="recipe-category"
      >
        {data.strCategory}

      </p>
      <div className="ingredients-container">
        {/* Depois tentar refatorar essa parte */}
        {ingredients
          .map((obj, i) => (
            <h4
              key={ i }
              data-testid={ `${i}-ingredient-name-and-measure` }
            >
              {`${obj[1]} - ${measure[i][1]}`}
            </h4>))}
      </div>
      <div className="instructions-container">
        <h3>Instructions:</h3>
        <p data-testid="instructions">
          {' '}
          {data.strInstructions}
        </p>
      </div>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => handleShare() }
      >
        {copied ? 'Link copied!' : 'Share'}

      </button>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => handleFavorited() }
        src={ favorited ? blackHeartIcon : whiteHeartIcon }
      >
        <img src={ favorited ? blackHeartIcon : whiteHeartIcon } alt="imagem" />
      </button>

    </div>
  );
}

FoodDetailCard.propTypes = {
  data: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strYoutube: PropTypes.string,
    idMeal: PropTypes.string,
    strArea: PropTypes.string,
  }).isRequired,
};
