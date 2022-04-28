import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoFood from '../images/logoFood.png';
import '../css/Login.css';

function Login() {
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [enableButton, setEnableButton] = useState(true);

  const activeButton = () => {
    const mingLength = 5;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    const checkEmail = emailRegex.test(emailValue);
    const passwordLength = passwordValue.length > mingLength;
    console.log(checkEmail, passwordLength);
    if (checkEmail && passwordLength) {
      setEnableButton(false);
    } else { setEnableButton(true); }
  };

  const changePaswordValue = (target) => {
    setPasswordValue(target.value);
    activeButton();
  };

  const changeEmailValue = ({ target }) => {
    setEmailValue(target.value);
    activeButton();
  };

  const submitUser = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: emailValue }));
  };

  return (
    <section className="componentsLogin">
      <div className="logo">
        <img src={ logoFood } className="imageLogo" alt="logo" />
        <input
          type="text"
          data-testid="email-input"
          className="emailLogin"
          placeholder="your@email.com"
          value={ emailValue }
          onChange={ changeEmailValue }
        />
        <input
          type="password"
          data-testid="password-input"
          className="passwordLogin"
          placeholder="password"
          onChange={ ({ target }) => { changePaswordValue(target); } }
          value={ passwordValue }
        />
        <Link to="/foods">
          <button
            type="button"
            data-testid="login-submit-btn"
            className="loginButton"
            disabled={ enableButton }
            onClick={ submitUser }
          >
            Login
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Login;
