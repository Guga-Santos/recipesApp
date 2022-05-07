import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/Details.css';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FoodDetailCard({ data, hasCheckBox }) {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [copied, setCopied] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [checkeds, setCheckeds] = useState({});

  const favoriteRecipes = {
    id: data.idMeal,
    type: 'food',
    nationality: data.strArea,
    category: data.strCategory,
    alcoholicOrNot: '',
    name: data.strMeal,
    image: data.strMealThumb,
  };

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
      setFavorited(getStorage.some((obj) => obj.id === data.idMeal));
    }
  }, [data.idMeal]);

  const handleShare = () => {
    navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`);
    setCopied(true);
  };

  const handleFavorited = () => {
    let get = JSON.parse(localStorage.getItem('favoriteRecipes'));

    if (!get) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
      get = JSON.parse(localStorage.getItem('favoriteRecipes'));
    }

    if (!favorited) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([...get, favoriteRecipes]));
      localStorage.setItem('doneRecipes', JSON.stringify([...get, favoriteRecipes]));
      // id: "53060"
      setFavorited(true);
    }
    if (favorited) {
      const filter = get.filter((obj) => obj.id !== data.idMeal);
      localStorage.setItem('favoriteRecipes', JSON.stringify([...filter]));
      setFavorited(false);
    }
  };

  const addIngredientLocalStorage = (name) => {
    const inProgressRecipesStorage = JSON
      .parse(localStorage.getItem('inProgressRecipes'));
    inProgressRecipesStorage
      .meals[data.idMeal] = [...inProgressRecipesStorage.meals[data.idMeal],
        name];
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipesStorage));
  };

  const handleChecked = ({ target }) => {
    setCheckeds({
      ...checkeds,
      [target.id]: target.checked,
    });
    addIngredientLocalStorage(target.name);
  };

  const isIngredientChecked = (number) => {
    const inProgressRecipesStorage = JSON
      .parse(localStorage.getItem('inProgressRecipes'));
    const ingredientList = inProgressRecipesStorage.meals[data.idMeal];
    const isPresent = ingredientList.some((elem) => parseInt(elem, 10) === number);
    return isPresent;
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
            <div
              data-testid={ `${i}-ingredient-step` }
              key={ i }
            >
              <h4
                data-testid={ `${i}-ingredient-name-and-measure` }
                className="checked"
              >
                {`${obj[1]} - ${measure[i][1]}`}
              </h4>
              {hasCheckBox
              && <input
                type="checkbox"
                name={ i }
                onChange={ (e) => handleChecked(e) }
                checked={ isIngredientChecked(i) }
              />}
            </div>))}
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

FoodDetailCard.defaultProps = {
  hasCheckBox: false,
};

FoodDetailCard.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  hasCheckBox: PropTypes.bool,
};
