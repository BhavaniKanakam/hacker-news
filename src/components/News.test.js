import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import News from './News';


describe('App', () => {

    const onHide = jest.fn();
    const item = {
        title: 'Stephen Hawking has died',
        author: 'Cogito'
    }
  it('renders table', () => {
    const {getByTestId} = render(<News item={item} onHide={onHide} setVotes={onHide} />);
    const AppContainer = getByTestId('table-row');
    const Title = getByTestId('title')
    expect(AppContainer).toBeVisible();
    expect(Title).toHaveTextContent("Stephen Hawking has died");
  });

  it('display correct title', () => {
    const {getByTestId} = render(<News item={item} onHide={onHide} setVotes={onHide} />);
    const Title = getByTestId('title')
    expect(Title).toHaveTextContent("Stephen Hawking has died");
  })

});