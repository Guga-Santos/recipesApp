import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Footer from '../components/footer';
import Header from '../components/Header';
import MainScreen from '../components/MainScreen';
import AppContext from '../context/AppContext';
import fetchSearchByIngredients from '../services/fetchSearchByIngredients';

export default function Drinks(props) {
  const contexto = useContext(AppContext);
  const {
    setSearchData,
    validateCARD,
    searchData,
    setValidateCARD,
    ingredient,
  } = contexto;

  useEffect(() => {
    if (ingredient) {
      const fetch = async () => {
        const info = await fetchSearchByIngredients(ingredient, 'cocktail');
        setSearchData(info);
        console.log(info);
        setValidateCARD(true);
      };
      fetch();
    }
  }, []);

  return (
    <div>
      <Header title="Drinks" hasSearch />
      {/*       A linha 15 acredito que pode ser retirada. */}
      { validateCARD && <Card data={ searchData.drinks } type="Drinks" /> }
      {!validateCARD && <MainScreen { ...props } />}
      <Footer />
    </div>
  );
}
