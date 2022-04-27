import PropTypes from 'prop-types';
import React from 'react';

export default function RecipesCard({ image, name, id }) {
  return (
    <section
      data-testid={ `${id}` }
    >
      <img
        src={ image }
        alt="imagem referente a receita"
      />
      <p>{name}</p>
    </section>
  );
}

RecipesCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
