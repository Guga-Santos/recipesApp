import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/Details.css';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function DrinkDetailCard({ data, hasCheckBox }) {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [copied, setCopied] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [checkeds, setCheckeds] = useState({});

  const favoriteRecipes = {
    id: data.idDrink,
    type: 'drink',
    nationality: '',
    category: data.strCategory,
    alcoholicOrNot: data.strAlcoholic,
    name: data.strDrink,
    image: data.strDrinkThumb,
  };

  useEffect(() => {
    const fetchData = async () => {
      setMeasure(Object.entries(data).filter((str) => str[0]
        .includes('strMeasure')));

      setIngredients(Object.entries(data).filter((str) => str[0]
        .includes('strIngredient')));
    };
    fetchData();
  }, [data]);

  useEffect(() => {
    const getStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getStorage) {
      setFavorited(getStorage.some((obj) => obj.id === data.idDrink));
    }
  }, [data.idDrink]);

  const handleFavorited = () => {
    let get = JSON.parse(localStorage.getItem('favoriteRecipes'));

    if (!get) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
      get = JSON.parse(localStorage.getItem('favoriteRecipes'));
    }

    if (!favorited) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([...get, favoriteRecipes]));
      setFavorited(true);
    }
    if (favorited) {
      const filter = get.filter((obj) => obj.id !== data.idDrink);
      localStorage.setItem('favoriteRecipes', JSON.stringify([...filter]));
      setFavorited(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`http://localhost:3000/drinks/${id}`);
    setCopied(true);
  };

  const addIngredientLocalStorage = (name) => {
    const inProgressRecipesStorage = JSON
      .parse(localStorage.getItem('inProgressRecipes'));
    inProgressRecipesStorage
      .cocktails[data.idDrink] = [...inProgressRecipesStorage.cocktails[data.idDrink],
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
    const ingredientList = inProgressRecipesStorage.cocktails[data.idDrink];
    const isPresent = ingredientList.some((elem) => parseInt(elem, 10) === number);
    return isPresent;
  };

  return (
    <div className="detail-card-container">
      <img
        src={ data.strDrinkThumb }
        alt="uma imagem"
        data-testid="recipe-photo"
      />
      <h2
        data-testid="recipe-title"
      >
        { data.strDrink }

      </h2>
      <p
        data-testid="recipe-category"
      >
        {data.strAlcoholic}

      </p>
      <div className="ingredients-container">
        <h2>Ingredients:</h2>
        {/* Depois tentar refatorar essa parte */}
        {ingredients
          .map((obj, i) => obj[1] && (
            <div
              key={ i }
              data-testid={ `${i}-ingredient-step` }
            >
              <h4
                data-testid={ `${i}-ingredient-name-and-measure` }
                className="checked"
              >
                { `${obj[1]} - ${measure[i][1]}`}
              </h4>
              {hasCheckBox
              && <input
                type="checkbox"
                id={ i }
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

DrinkDetailCard.propTypes = {
  data: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strInstructions: PropTypes.string,
    strCategory: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
  hasCheckBox: PropTypes.bool.isRequired,
};
