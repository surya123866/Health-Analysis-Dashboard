import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

const MyContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const MyContextProvider = ({ children }) => {
  
  const savedDarkMode = localStorage.getItem("darkMode") === "true";
  const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);


  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
  }, []);

  return (
    <MyContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </MyContext.Provider>
  );
};

MyContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyContext;
