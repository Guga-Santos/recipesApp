import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import RecipesList from './RecipesList';
import AppContext from '../context/AppContext';

export default function MainScreen({ history }) {
  const { loading, recipes } = useContext(AppContext);
  const { location } = history;

  if (loading) {
    return <div>carregando</div>;
  }
  return (
    <section>
      <RecipesList
        arrayOfRecipes={ recipes.allFoods.meals }
        recipesType={ location.pathname }
      />
    </section>
  );
}

MainScreen.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.string,
  }).isRequired,
};
