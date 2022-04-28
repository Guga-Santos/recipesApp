import PropTypes from 'prop-types';
import React from 'react';

export default function RecipesCard({ image, name, id }) {
  return (
    <section
      data-testid={ `${id}-recipe-card` }
    >
      <img
        src={ image }
        data-testid={ `${id}-card-img` }
        alt="imagem referente a receita"
      />
      <p data-testid={ `${id}-card-name` }>{name}</p>
    </section>
  );
}

RecipesCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
