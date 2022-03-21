import React, { useReducer, createContext } from 'react';

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {

  const generalDataReducer = (state, action) => {
    let newState;
    switch(action.type) {
      case 'name':
        newState = { ...state, name: action.payload };
        break;
      case 'email':
        newState = { ...state, email: action.payload };
        break;
      case 'phone':
        newState = { ...state, phone: action.payload };
        break
      default:
        throw new Error();
    }
    return newState;
  }

  const defaultState = {
    name: '',
    email: '',
    phone: ''
  };

  const [generalData, generalDataDispatch] = useReducer(
    generalDataReducer,
    defaultState
  );

  return(
    <GeneralContext.Provider value={[generalData, generalDataDispatch]}>
      { children }
    </GeneralContext.Provider>
  )
};