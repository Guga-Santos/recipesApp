import React, { useContext } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

export default function Foods() {
  const contexto = useContext(AppContext);
  const { validateCARD } = contexto;
  return (
    <div>
      <Header />
      { validateCARD && <Card /> }
    </div>
  );
}
