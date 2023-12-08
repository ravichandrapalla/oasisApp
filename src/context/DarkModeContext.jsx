/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";
import { useLocalStorageState } from "./../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  function ToggleDarkMode() {
    console.log("clicked");
    setIsDarkMode((dark) => !dark);
  }
  return (
    <DarkModeContext.Provider value={{ isDarkMode, ToggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext is used outside the darkMode Provider");
  return context;
}

export { DarkModeProvider, useDarkMode };
