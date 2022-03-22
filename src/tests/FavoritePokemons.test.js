import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  renderWithRouter(<FavoritePokemons />);
  it('Teste se é exibido na tela a mensagem No favorite pokemon found', () => {
    const p = screen.getByText('No favorite pokemon found');
    expect(p).toBeInTheDocument();
  });
  it('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    const pokemonsMock = [{ id: 25, name: 'Pikachu', type: 'Electric', averageWeight: { value: '6.0', measurementUnit: 'kg' }, image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png' }, { id: 4, name: 'Charmander', type: 'Fire', averageWeight: { value: '8.5', measurementUnit: 'kg' }, image: 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png' }];
    renderWithRouter(<FavoritePokemons pokemons={ pokemonsMock } />);
    const testId = screen.getAllByTestId('pokemon-name');
    expect(testId).toHaveLength(2);
  });
});
