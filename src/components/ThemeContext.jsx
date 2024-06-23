import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import { dummyData } from "./data";

const MyContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
  isLoading: false,
  fetchedData: [],
  fetchData: () => {},
});

export const MyContextProvider = ({ children }) => {
  const savedDarkMode = localStorage.getItem("darkMode") === "true";
  const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://health/analysisData");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFetchedData(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setFetchedData(dummyData);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
  }, []);

  return (
    <MyContext.Provider
      value={{ isDarkMode, toggleDarkMode, isLoading, fetchedData, fetchData }}
    >
      {children}
    </MyContext.Provider>
  );
};

MyContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyContext;
