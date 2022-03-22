import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  beforeEach(() => renderWithRouter(<App />));
  it('Teste se página contém um heading h2 com o texto Encountered pokémons.', () => {
    const h2 = screen.getByRole('heading', { level: 2, name: 'Encountered pokémons' });
    expect(h2).toBeInTheDocument();
  });
  it('Teste se é exibido o próximo Pokémon da lista quando (...)', () => {
    const btn = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(btn).toBeInTheDocument();
  });
  it('Teste se é mostrado apenas um Pokémon por vez.', () => {
    const pokemon = screen.getAllByTestId('pokemon-name');
    expect(pokemon).toHaveLength(1);
  });
  it('Teste se a Pokédex tem os botões de filtro.', () => {
    const btn = screen.getAllByTestId('pokemon-type-button'); const n7 = 7;
    expect(btn).toHaveLength(n7);
    const btnType = screen.getByRole('button', { name: 'Electric' });
    expect(btnType).toBeInTheDocument();
  });
  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    const btn = screen.getByRole('button', { name: 'All' });
    expect(btn).toBeInTheDocument();
    userEvent.click(btn);
    const pokemon = screen.getByTestId('pokemon-name');
    expect(pokemon).toHaveTextContent('Pikachu');
  });
});
