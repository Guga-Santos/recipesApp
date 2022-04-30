import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Footer from '../components/footer';
import Header from '../components/Header';
import MainScreen from '../components/MainScreen';
import AppContext from '../context/AppContext';
import fetchSearchByIngredients from '../services/fetchSearchByIngredients';

export default function Foods(props) {
  const contexto = useContext(AppContext);
  const {
    setSearchData,
    validateCARD,
    searchData,
    setValidateCARD,
    ingredient,
  } = contexto;

  useEffect(() => {
    const get = JSON.parse(localStorage.getItem('favoriteRecipes'));

    if (!get) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    if (ingredient) {
      const fetch = async () => {
        const info = await fetchSearchByIngredients(ingredient, 'meal');
        setSearchData(info);
        console.log(info);
        setValidateCARD(true);
      };
      fetch();
    }
  }, []);

  return (
    <div>
      <Header title="Foods" hasSearch />
      <div className="cards-box">
        { validateCARD && <Card data={ searchData.meals } type="Foods" /> }
        {!validateCARD && <MainScreen { ...props } />}
      </div>
      <Footer />
    </div>
  );
}
