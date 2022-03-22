import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('1. Teste se o topo da aplicação contém um conjunto fixo de links', () => {
  beforeEach(() => renderWithRouter(<App />));
  it('O primeiro link deve possuir o texto Home.', () => {
    const link = screen.getByText('Home');
    expect(link).toBeInTheDocument();
  });
  it('O segundo link deve possuir o texto About.', () => {
    const link = screen.getByText('About');
    expect(link).toBeInTheDocument();
  });
  it('O terceiro link deve possuir o texto Favorite Pokémons.', () => {
    const link = screen.getByText('Favorite Pokémons');
    expect(link).toBeInTheDocument();
  });
});
