import { types } from "../types/types";

export interface InitialStateAuth{
  logged?:boolean,
  name?:string | null
}

interface IAuthAction{
  type: types | undefined;
  payload:InitialStateAuth
}

const initialState:InitialStateAuth={
  logged:false,
}

export const authReducer = (state=initialState, action:IAuthAction | null):InitialStateAuth => { 
  switch (action?.type) {
    case types.login:
      return {
        ...state,
        logged:true,
        name:action?.payload.name
      };
    case types.logout:
      return {
        logged:false,
      }
    default:
      return state;
  }
};
