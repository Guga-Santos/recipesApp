import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipesCard({ image, name, id, type, idType }) {
  return (
    <section
      data-testid={ `${id}-recipe-card` }
      className="boxFlex"
    >
      <Link to={ `${type}/${idType}` } className="testeFlex">
        <img
          src={ image }
          data-testid={ `${id}-card-img` }
          alt="imagem referente a receita"
          style={ { pointerEvents: 'auto' } }
          className="imgRecipesCard"
        />
        <p data-testid={ `${id}-card-name` } className="pCenter">{name}</p>
      </Link>
    </section>
  );
}

RecipesCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  idType: PropTypes.string.isRequired,

};
