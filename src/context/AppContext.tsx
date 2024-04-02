import { createContext, useContext, useEffect, useState } from 'react';

interface AppContextProps {}

const AppContext = createContext<AppContextProps | null>(null);

export const useApp = (): AppContextProps => useContext(AppContext);

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
