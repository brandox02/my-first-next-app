import { useContext, useReducer } from 'react';
import { createContext } from 'react';

const Context = createContext({ f: 100 });
export const useAppContext = () => useContext(Context);

export const AppProvider = ({ children, value }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: 2 };
    }
  };
  const [state, dispatch] = useReducer(reducer, value);

  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    </>
  );
};
