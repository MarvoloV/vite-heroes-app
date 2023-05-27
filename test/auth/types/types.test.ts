import { describe, expect, test } from 'vitest';
import { types } from '../../../src/auth/types/types';
describe('Pruebas en Types.ts', () => { 
  test('debe regresar estos types', () => { 
    expect(types).toEqual(
     {
      "login":"[Auth] Login",
      "logout":"[Auth] Logout"
    })
   })
 })