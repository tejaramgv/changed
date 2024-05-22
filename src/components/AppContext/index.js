import React, { createContext, useState } from 'react';

// Create a new context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
