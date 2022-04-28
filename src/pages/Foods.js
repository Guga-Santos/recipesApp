import React, { useContext } from 'react';
import Card from '../components/Card';
import Footer from '../components/footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import MainScreen from '../components/MainScreen';

export default function Foods(props) {
  const contexto = useContext(AppContext);
  const { validateCARD, searchData } = contexto;

  return (
    <div>
      <Header title="Foods" hasSearch />
      { validateCARD && <Card data={ searchData.meals } type="Foods" /> }
      {!validateCARD && <MainScreen { ...props } />}
      <Footer />
    </div>
  );
}
