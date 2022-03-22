import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  beforeEach(() => renderWithRouter(<App />));
  it('Teste se as informações detalhadas do Pokémon selecionado são mostradas.', () => {
    const btn = screen.getByRole('link', { name: /More/ }); userEvent.click(btn);
    const heading = screen.getByRole('heading', { level: 2, name: /Pikachu Details/ });
    const summary = screen.getByRole('heading', { level: 2, name: 'Summary' });
    const type = screen.getByText(/electricity /);
    expect(heading).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(type).toBeInTheDocument();
  });
  it('Teste se existe na página uma seção com os mapas contendo as localizações', () => {
    const btn = screen.getByRole('link', { name: /details/i }); userEvent.click(btn);
    const heading = screen.getByRole('heading', { level: 2, name: /of pikachu/i });
    const loc = screen.getAllByAltText(/pikachu location/i);
    expect(heading).toBeInTheDocument(); expect(loc).toHaveLength(2);
    expect(loc[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  });
  it('Teste se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    const btn = screen.getByRole('link', { name: 'More details' }); userEvent.click(btn);
    const fav = screen.getByRole('checkbox');
    const label = screen.getByLabelText('Pokémon favoritado?');
    expect(fav).toBeInTheDocument(); expect(label).toBeInTheDocument();
  });
});
