import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../components/About';

describe('Teste se a página contém as informações sobre a Pokédex.', () => {
  beforeEach(() => renderWithRouter(<About />));
  it('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
    const heading = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(heading).toBeInTheDocument();
  });
  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    const p = screen.getAllByText(/pokémons/i);
    expect(p).toHaveLength(2);
  });
  it('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
