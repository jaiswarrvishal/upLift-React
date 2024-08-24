// Example of creating a context
import React, { createContext, useContext } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const theme = { /* some theme values */ };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Example of using the context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
