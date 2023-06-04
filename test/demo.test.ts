import {render} from '@testing-library/react';
import { HeroesRoutes } from '../src/heroes/routes/HeroesRoutes';
describe('Prueba demo', () => { 
   test('debe mostrar', () => { 
    render(<HeroesRoutes/>);
      expect(2).toBe(2);
    })
 })