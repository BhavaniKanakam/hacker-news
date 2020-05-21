import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';


describe('App', () => {

  it('renders App', () => {
    const {getByTestId} = render(<App />);
    const AppContainer = getByTestId('App');
    expect(AppContainer).toBeVisible();
  });

});