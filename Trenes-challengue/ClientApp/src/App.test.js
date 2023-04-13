import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Tren from '../src/components/Tren';
import '@testing-library/jest-dom';



describe('Tren component', () => {
  let component;
  let mockVagones = [
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 }
  ];
  let mockTren = [
    { id: 4, number: 4 },
    { id: 5, number: 5 }
  ];

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockVagones)
    });

    component = render(<Tren />);
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  test('deberia arga el componente sin crashear', async () => {
    expect(component).toBeDefined();
  });

  test('deberia mostrar texto plano al inicar', async () => {
    expect(component.getByText('Cargando vagones...')).toBeInTheDocument();
    expect(component.getByText('Cargando tren...')).toBeInTheDocument();
  });




});
