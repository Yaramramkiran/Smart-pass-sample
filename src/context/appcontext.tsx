import { useState, createContext } from "react";

const AppContext = createContext({});

function Contextprovider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, Contextprovider };
