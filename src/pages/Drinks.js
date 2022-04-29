import React, { useContext } from 'react';
import Card from '../components/Card';
import Footer from '../components/footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import MainScreen from '../components/MainScreen';

export default function Drinks(props) {
  const contexto = useContext(AppContext);
  const { validateCARD, searchData } = contexto;
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
