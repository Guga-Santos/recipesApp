import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/Header';
import fetchRandom from '../services/fetchRandom';

export default function ExploreFoods() {
  const history = useHistory();

  const handleSurprise = async () => {
    const data = await fetchRandom('meal');
    history.push(`/foods/${data.meals[0].idMeal}`);
  };

  return (
    <div>
      <Header title="Explore Foods" hasSearch={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      >
        By Ingredient

      </button>
      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
      >
        By Nationality

      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => handleSurprise() }
      >
        Surprise me!

      </button>
      <Footer />
    </div>
  );
}
