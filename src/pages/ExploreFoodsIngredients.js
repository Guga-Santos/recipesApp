import React, { useContext } from 'react';
import Footer from '../components/footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import IngredientsCard from './IngredientsCard';

export default function ExploreFoodsIngredients() {
  const { recipes: { ingredientes } } = useContext(AppContext);
  return (
    <div>
      <Header title="Explore Ingredients" hasSearch={ false } />
      {ingredientes && <IngredientsCard data={ ingredientes } type="meal" />}
      <Footer />
    </div>
  );
}
