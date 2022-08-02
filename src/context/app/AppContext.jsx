import { createContext, useContext, useReducer, useMemo } from "react";
import reducer from "./reducer";

const AppContext = createContext(null);

export function AppProvider({ children }) {

  const initialState = {
    avaluo: []
  };

  const [global, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({
    global, dispatch
  }), [global]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
