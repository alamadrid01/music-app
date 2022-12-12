import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [file, setFile] = useState("");

  return (
    <AppContext.Provider
      value={{
        file,
        setFile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// invoke this hook in any component to have access to the global state
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
