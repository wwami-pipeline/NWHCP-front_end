import React, { useReducer } from 'react';

export default function createContext(reducer, actions, initialState) {
  const Context = React.createContext(null);

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>
  };

  return { Context, Provider };
};