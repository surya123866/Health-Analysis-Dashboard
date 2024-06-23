import PropTypes from "prop-types";
import MyContext from "./ThemeContext";
import { useContext, useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Card = ({ title, children, className }) => {
  const { isDarkMode } = useContext(MyContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${className} ${
        isDarkMode ? "bg-white text-black" : "bg-[#262949] text-white"
      } rounded-lg shadow-md`}
    >
      {loading ? (
        <Skeleton height={200} width={"100%"} />
      ) : (
        <>
          <div className="flex text-lg font-bold p-2">
            <p>{title}</p>
          </div>
          <div>{children}</div>
        </>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
