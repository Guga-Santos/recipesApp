import PropTypes from 'prop-types';
import React from 'react';

const NUMBER_OF_BUTTONS = 5;

export default function CategoriesList({ categoriesList, filter }) {
  return (
    <section className="categorySection">
      <button
        onClick={ ({ target: { value } }) => filter(value) }
        value="All"
        data-testid="All-category-filter"
        type="button"
        className="navbar-toggler"
      >
        All
      </button>
      { categoriesList.map(({ strCategory }, index) => (
        index < NUMBER_OF_BUTTONS && (
          <button
            type="button"
            key={ `${strCategory}` }
            value={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
            onClick={ ({ target: { value } }) => filter(value) }
            className="navbar-toggler"
          >
            {strCategory}
          </button>)))}
    </section>
  );
}

CategoriesList.propTypes = {
  categoriesList: PropTypes.instanceOf(Object).isRequired,
  filter: PropTypes.func.isRequired,
};
