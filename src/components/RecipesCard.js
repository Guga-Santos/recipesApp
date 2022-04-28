import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipesCard({ image, name, id, type }) {
  return (
    <section
      data-testid={ `${id}-recipe-card` }
    >
      <Link to={ type === 'Foods' ? `/foods/${id}` : `/drinks/${id}` }>
        <img
          src={ image }
          data-testid={ `${id}-card-img` }
          alt="imagem referente a receita"
        />
        <p data-testid={ `${id}-card-name` }>{name}</p>
      </Link>
    </section>
  );
}

RecipesCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
