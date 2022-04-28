import React, { useContext } from 'react';
import Card from '../components/Card';
import Footer from '../components/footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

export default function Drinks() {
  const contexto = useContext(AppContext);
  const { validateCARD, searchData } = contexto;
  return (
    <div>
      <Header title="Drinks" hasSearch />
      { validateCARD && <Card data={ searchData.drinks } type="Drinks" /> }
      <Footer />
    </div>
  );
}
