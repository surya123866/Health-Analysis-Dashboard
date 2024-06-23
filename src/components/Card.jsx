import PropTypes from "prop-types";
import MyContext from "./ThemeContext";
import { useContext } from "react";

const Card = ({ title, children, customWidth, customHeight, className }) => {
  const { isDarkMode } = useContext(MyContext);
  return (
    <div
      className={`${className} ${
        isDarkMode ? "bg-white text-black" : "bg-[#262949] text-white"
      } rounded-lg shadow-md`}
      style={{ width: customWidth, height: customHeight }} // Apply custom width here
    >
      <div className="flex text-lg font-bold p-2">
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  customWidth: PropTypes.string,
  customHeight: PropTypes.string,
  className: PropTypes.string,
};

Card.defaultProps = {
  customWidth: "100%", // Default width if not provided
};

export default Card;
