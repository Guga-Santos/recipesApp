import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/Header';
import fetchRandom from '../services/fetchRandom';

export default function ExploreDrinks() {
  const history = useHistory();

  const handleSurprise = async () => {
    const data = await fetchRandom('cocktail');
    history.push(`/drinks/${data.drinks[0].idDrink}`);
  };

  return (
    <div>
      <Header title="Explore Drinks" hasSearch={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      >
        By Ingredient

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
