import { render, screen } from '@testing-library/react';
import React from  'react';
import { describe,test } from "vitest";
import { DcPage } from '../../../src/heroes/pages/DcPage';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../../src/auth';

describe('Pruebas en <DcPage/>', () => { 
  test('debe mostrar los card de heroes de DC', () => { 
    const contextValue = {
      authState: {
        logged: true,
        name: "Jorge",
      },
      onLogin: () => {},
      logout: ()=>{},
    };
      render(
        <MemoryRouter>
          <AuthContext.Provider value={contextValue}>
          <DcPage/>
          </AuthContext.Provider>
        </MemoryRouter>
      )
      expect(screen.getAllByLabelText('dc-heroe').length).toBe(10);
      
   })
 })