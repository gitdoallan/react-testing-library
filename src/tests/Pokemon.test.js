import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  beforeEach(() => renderWithRouter(<App />));
  it('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    const pokemon = screen.getByTestId('pokemon-name');
    const type = screen.getByTestId('pokemon-type');
    const weight = screen.getByTestId('pokemon-weight');
    const img = screen.getByRole('img');
    expect(pokemon).toHaveTextContent('Pikachu');
    expect(type).toHaveTextContent('Electric');
    expect(weight).toHaveTextContent(/Average weight: 6.0 kg/);
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  it('Teste se o card do Pokémon indicado na Pokédex contém um link', () => {
    const link = screen.getByRole('link', { name: /details/ });
    expect(link).toHaveAttribute('href', '/pokemons/25');
  });
  it('Teste se ao clicar no link de navegação do Pokémon', () => {
    const btn = screen.getByRole('link', { name: 'More details' }); userEvent.click(btn);
    const fav = screen.getByRole('checkbox'); userEvent.click(fav);
  });
  it('Teste também se a URL exibida no navegador muda para /pokemon/<id>', () => {
    const { history } = renderWithRouter(<App />);
    const btn = screen.getAllByRole('link', { name: /More/ });
    userEvent.click(btn[1]);
    expect(history.location.pathname).toBe('/pokemons/25');
  });
  it('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const btn = screen.getAllByRole('link', { name: 'More details' });
    userEvent.click(btn[0]);
    const fav = screen.getAllByRole('checkbox'); userEvent.click(fav[0]);
    const img = screen.getAllByAltText(/Pikachu is marked/);
    expect(img[0]).toHaveAttribute('src', '/star-icon.svg');
  });
});
