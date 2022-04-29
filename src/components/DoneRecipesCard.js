import PropTypes from 'prop-types';
import React from 'react';
import shareIcon from '../images/shareIcon.svg';

export default function DoneRecipesCard(props) {
  const {
    recipeImage,
    recipeName,
    recipeCategory,
    recipeNationality,
    recipeDate,
    recipeTag,
    recipeIndex,
    recipeType,
    isAlcoholic,
  } = props;

  if (recipeType === 'Food') {
    return (
      <div>
        <img
          data-testid={ `${recipeIndex}-horizontal-image` }
          src={ recipeImage }
          alt="imagem da receita feita"
        />
        <h4 data-testid={ `${recipeIndex}-horizontal-name` }>{recipeName}</h4>
        <p data-testid={ `${recipeIndex}-horizontal-top-text` }>{recipeCategory}</p>
        <p>{recipeNationality}</p>
        <p data-testid={ `${recipeIndex}-horizontal-done-date` }>{recipeDate}</p>
        {recipeTag.map((recipe, index) => (
          index < 1 && (
            <span
              data-testid={ `${index}-${recipe}-horizontal-tag` }
              key={ `${recipe}${index}` }
            >
              {recipe}
            </span>)
        ))}
        <img
          data-testid={ `${recipeIndex}-horizontal-share-btn` }
          src={ shareIcon }
          alt="icone de compartilhamento"
        />
      </div>
    );
  }
  if (recipeType === 'Drink') {
    return (
      <div>
        <img
          data-testid={ `${recipeIndex}-horizontal-image` }
          src={ recipeImage }
          alt="imagem da receita feita"
        />
        <h4 data-testid={ `${recipeIndex}-horizontal-name` }>{recipeName}</h4>
        <p>{isAlcoholic}</p>
        <p data-testid={ `${recipeIndex}-horizontal-done-date` }>{recipeDate}</p>
        <img
          data-testid={ `${recipeIndex}-horizontal-share-btn` }
          src={ shareIcon }
          alt="icone de compartilhamento"
        />
      </div>
    );
  }
}

DoneRecipesCard.propTypes = {
  recipeCategory: PropTypes.string.isRequired,
  recipeDate: PropTypes.string.isRequired,
  recipeImage: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeTag: PropTypes.string.isRequired,
  recipeIndex: PropTypes.number.isRequired,
  recipeType: PropTypes.string.isRequired,
  recipeNationality: PropTypes.string.isRequired,
  isAlcoholic: PropTypes.string.isRequired,
};
