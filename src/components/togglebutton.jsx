import { useContext, useEffect } from "react";
import MyContext from "../components/ThemeContext";

const Toggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(MyContext);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    toggleDarkMode(!isDarkMode);
  };

  return (
    <div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="hidden"
          id="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <label
          htmlFor="checkbox"
          className={`flex items-center ${
            isDarkMode ? "bg-black" : "bg-white"
          } w-14 h-7 rounded-full p-1 cursor-pointer relative`}
        >
          <span
            className={`flex justify-center items-center w-5 h-5 rounded-full absolute top-1 ${
              isDarkMode ? "transform translate-x-7 bg-white" : "bg-black"
            } transition-transform duration-200 `}
          >
            {isDarkMode ? "🌙" : "☀️"}
          </span>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
