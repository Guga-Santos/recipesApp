import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Footer from '../components/footer';
import Header from '../components/Header';
import MainScreen from '../components/MainScreen';
import AppContext from '../context/AppContext';

export default function Foods(props) {
  const contexto = useContext(AppContext);
  const { validateCARD, searchData } = contexto;

  useEffect(() => {
    const get = JSON.parse(localStorage.getItem('favoriteRecipes'));

    if (!get) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
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
