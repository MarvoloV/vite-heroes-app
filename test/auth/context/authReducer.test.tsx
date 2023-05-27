

import { describe, expect, test } from 'vitest';
import { authReducer } from '../../../src/auth/context/AuthReducer';
import { types } from '../../../src/auth/types/types';

/* 
   * debe retornar el estado por defecto
   * debe de (login) llamar al login autenticar y establecer el name
   * debe de (logout) borrar el name del usuario y logged en false
*/
describe('Pruebas en AuthReducer', () => { 
  test('debe retornar el estado por defecto', () => { 
    const state = authReducer({logged:false},null);
    expect(state).toEqual({logged:false});
 });
 test('debe de (login) llamar al login autenticar y establecer el name', () => { 
  const action={
    type:types.login,
    payload:{
      name:"jorge",
    }
  }
  const state =authReducer({logged:false},action);
  expect(state).toEqual({...state,logged:true,name:action.payload.name});
  })
  test('debe de (logout) borrar el name del usuario y logged en false', () => { 
    const action={
      type:types.logout,
      payload:{}
    }
    const state =authReducer({logged:false},action);
    expect(state).toEqual({logged:false})
   })
})