import PropTypes from 'prop-types';
import React from 'react';

export default function DrinkDetailCard({ data }) {
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
        <h4
          data-testid="0-ingredient-name-and-measure"
        >
          {`${data.strIngredient1} - ${data.strMeasure1}`}
        </h4>
        <h4
          data-testid="1-ingredient-name-and-measure"
        >
          {`${data.strIngredient2} - ${data.strMeasure2}`}
        </h4>
        <h4
          data-testid="2-ingredient-name-and-measure"
        >
          {`${data.strIngredient3} - ${data.strMeasure3}`}
        </h4>
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
      >
        Share

      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favorite
      </button>

    </div>
  );
}

DrinkDetailCard.propTypes = {
  data: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strIngredient1: PropTypes.string,
    strIngredient2: PropTypes.string,
    strIngredient3: PropTypes.string,
    strMeasure1: PropTypes.string,
    strMeasure2: PropTypes.string,
    strMeasure3: PropTypes.string,
    strInstructions: PropTypes.string,
  }).isRequired,
};
