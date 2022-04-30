import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FavoriteCards(props) {
  const [copied, setcopied] = useState(false);
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    setFavorited(true);
  }, []);

  const {
    recipeImage,
    recipeName,
    recipeCategory,
    recipeNationality,
    recipeIndex,
    recipeType,
    recipeId,
    recipeAlcoholic,
  } = props;

  const handleClick = () => {
    setcopied(!copied);
    navigator.clipboard.writeText(`http://localhost:3000/${recipeType}s/${recipeId}`);
  };

  return (
    <div>
      <div>
        <Link to={ `/${recipeType}s/${recipeId}` }>
          <img
            data-testid={ `${recipeIndex}-horizontal-image` }
            src={ recipeImage }
            alt="imagem da receita favorita"
          />
          <h4 data-testid={ `${recipeIndex}-horizontal-name` }>{recipeName}</h4>
        </Link>

        {recipeType === 'food'
          ? (
            <p data-testid={ `${recipeIndex}-horizontal-top-text` }>
              {`${recipeNationality} - ${recipeCategory}`}
            </p>)
          : (
            <p data-testid={ `${recipeIndex}-horizontal-top-text` }>
              {recipeAlcoholic}
            </p>)}
        <button
          type="button"
          data-testid={ `${recipeIndex}-horizontal-share-btn` }
          src={ shareIcon }
          onClick={ () => handleClick() }
        >
          {copied ? 'Link copied!'
            : (
              <img
                src={ shareIcon }
                alt="icone de compartilhamento"
              />)}
        </button>
        <button
          type="button"
          data-testid={ `${recipeIndex}-horizontal-favorite-btn` }
          onClick={ () => handleFavorited() }
          src={ favorited ? blackHeartIcon : whiteHeartIcon }
        >
          <img src={ favorited ? blackHeartIcon : whiteHeartIcon } alt="imagem" />
        </button>
      </div>
    </div>
  );
}

FavoriteCards.propTypes = {
  recipeCategory: PropTypes.string.isRequired,
  recipeImage: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeIndex: PropTypes.number.isRequired,
  recipeType: PropTypes.string.isRequired,
  recipeNationality: PropTypes.string.isRequired,
  recipeId: PropTypes.string.isRequired,
  recipeAlcoholic: PropTypes.string.isRequired,
};
