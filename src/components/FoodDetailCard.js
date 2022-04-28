import PropTypes from 'prop-types';
import React from 'react';

export default function FoodDetailCard({ data }) {
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
        <h4
          data-testid="3-ingredient-name-and-measure"
        >
          {`${data.strIngredient4} - ${data.strMeasure4}`}
        </h4>
        <h4
          data-testid="4-ingredient-name-and-measure"
        >
          {`${data.strIngredient5} - ${data.strMeasure5}`}
        </h4>
        <h4
          data-testid="5-ingredient-name-and-measure"
        >
          {`${data.strIngredient6} - ${data.strMeasure6}`}
        </h4>
        <h4
          data-testid="6-ingredient-name-and-measure"
        >
          {`${data.strIngredient7} - ${data.strMeasure7}`}
        </h4>
        <h4
          data-testid="7-ingredient-name-and-measure"
        >
          {`${data.strIngredient8} - ${data.strMeasure8}`}
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

FoodDetailCard.propTypes = {
  data: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strIngredient1: PropTypes.string,
    strIngredient2: PropTypes.string,
    strIngredient3: PropTypes.string,
    strIngredient4: PropTypes.string,
    strIngredient5: PropTypes.string,
    strIngredient6: PropTypes.string,
    strIngredient7: PropTypes.string,
    strIngredient8: PropTypes.string,
    strMeasure1: PropTypes.string,
    strMeasure2: PropTypes.string,
    strMeasure3: PropTypes.string,
    strMeasure4: PropTypes.string,
    strMeasure5: PropTypes.string,
    strMeasure6: PropTypes.string,
    strMeasure7: PropTypes.string,
    strMeasure8: PropTypes.string,
    strInstructions: PropTypes.string,
  }).isRequired,
};
