import { useContext } from "react";
import MyContext from "./ThemeContext";

const NotFound = () => {
  const { isDarkMode } = useContext(MyContext);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        isDarkMode ? "bg-[#f1eff8] text-gray-800" : "bg-[#15172c] text-white"
      }`}
    >
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-4">Page Not Found</p>
      <a
        href="/"
        className={`hover:underline ${
          isDarkMode ? "text-blue-400" : "text-blue-500"
        }`}
      >
        Go to Dashboard
      </a>
    </div>
  );
};

export default NotFound;
