import React, { useState } from 'react';

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
    console.log('oi');
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', [{ email: emailValue }]);
  };

  return (
    <section>
      <input
        type="text"
        data-testid="email-input"
        value={ emailValue }
        onChange={ changeEmailValue }
      />
      <input
        type="text"
        data-testid="password-input"
        onChange={ ({ target }) => { changePaswordValue(target); } }
        value={ passwordValue }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ enableButton }
        onClick={ submitUser }
      >
        Login
      </button>
    </section>
  );
}

export default Login;
