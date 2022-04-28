import React, { useContext } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import MainScreen from '../components/MainScreen';

export default function Drinks(props) {
  const contexto = useContext(AppContext);
  const { validateCARD } = contexto;
  return (
    <div>
      <Header />
      { validateCARD && <Card /> }
      <MainScreen { ...props } />
    </div>
  );
}
