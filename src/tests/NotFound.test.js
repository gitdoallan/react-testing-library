import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../components/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  beforeEach(() => renderWithRouter(<NotFound />));
  it(' Teste se página contém um heading h2 com o texto Page requested not found', () => {
    const h2 = screen.getByText(/page requested not found/i);
    expect(h2).toBeInTheDocument();
  });
  it('Teste se página mostra a imagem', () => {
    const img = screen.getByAltText(/crying/i);
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
