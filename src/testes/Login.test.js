import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Login from '../pages/Login';

describe('Testes para verificar todos os componentes da dela de login', () => {
  const emailId = 'email-input';
  const passwordId = 'password-input';
  const loginButtonId = 'login-submit-btn';
  const email = 'test@rtl.com';
  const invalidEmail = 'testrtl.com';
  const password = '12345678';
  const invlidPassword = '123';

  test('Se possui um input para login e para senha', () => {
    renderWithRouter(<Login />);
    const passwordInput = screen.getByTestId(passwordId);
    const emailInput = screen.getByTestId(emailId);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('Se o botão de login é inicialmente desabilitado', () => {
    renderWithRouter(<Login />);
    const loginButton = screen.getByTestId(loginButtonId);
    expect(loginButton.disabled).toBeTruthy();
  });

  test('Se é possivel digitar nos inputs de login e senha', () => {
    renderWithRouter(<Login />);
    const passwordInput = screen.getByTestId(passwordId);
    const emailInput = screen.getByTestId(emailId);
    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    expect(emailInput.value).toBe(email);
    expect(passwordInput.value).toBe(password);
  });

  test('Se ao digitar apenas um email o botão de login continua desabilitado', () => {
    renderWithRouter(<Login />);
    const emailInput = screen.getByTestId(emailId);
    const loginButton = screen.getByTestId(loginButtonId);
    userEvent.type(emailInput, email);
    expect(loginButton).toBeDisabled();
  });

  test('Se ao digitar apenas a senha o botão de login continua desabilitado', () => {
    renderWithRouter(<Login />);
    const passwordInput = screen.getByTestId(passwordId);
    const loginButton = screen.getByTestId(loginButtonId);
    userEvent.type(passwordInput, password);
    expect(loginButton).toBeDisabled();
  });

  test('Se ao digitar um email incorreto o botão continua desabilitado', () => {
    renderWithRouter(<Login />);
    const passwordInput = screen.getByTestId(passwordId);
    const emailInput = screen.getByTestId(emailId);
    const loginButton = screen.getByTestId(loginButtonId);
    userEvent.type(emailInput, invalidEmail);
    userEvent.type(passwordInput, password);
    expect(loginButton).toBeDisabled();
  });

  test('Se ao digitar uma senha invalida o botão continua desabilitado', () => {
    renderWithRouter(<Login />);
    const passwordInput = screen.getByTestId(passwordId);
    const emailInput = screen.getByTestId(emailId);
    const loginButton = screen.getByTestId(loginButtonId);
    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, invlidPassword);
    expect(loginButton).toBeDisabled();
  });

  test('Verifica se ao digitar um email e senha validos o botão é habilitado', () => {
    renderWithRouter(<Login />);
    const passwordInput = screen.getByTestId(passwordId);
    const emailInput = screen.getByTestId(emailId);
    const loginButton = screen.getByTestId(loginButtonId);
    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    expect(loginButton).toBeEnabled();
  });

  test('Ao cliclar no botão habilitado é redirecionado para "/foods"', () => {
    const { history } = renderWithRouter(<Login />);
    const expectedPath = '/foods';
    const passwordInput = screen.getByTestId(passwordId);
    const emailInput = screen.getByTestId(emailId);
    const loginButton = screen.getByTestId(loginButtonId);
    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    fireEvent.click(loginButton);
    expect(history.location.pathname).toBe(expectedPath);
  });
});
