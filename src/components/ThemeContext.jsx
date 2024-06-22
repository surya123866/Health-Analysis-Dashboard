import PropTypes from "prop-types";

import { createContext, useState } from "react";

const MyContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const MyContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

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
