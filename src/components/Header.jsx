import { useContext } from "react";
import MyContext from "./ThemeContext";
import { LuBell } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const { isDarkMode } = useContext(MyContext);

  return (
    <div
      className={`flex justify-between items-center p-4 ${
        isDarkMode ? "bg-[#f1eff8] text-black" : "bg-[#15172c] text-white"
      }`}
    >
      <div className="text-xl font-bold">Dashboard</div>
      <div className="flex items-center">
        <div
          className={`mr-4 rounded-lg ${
            isDarkMode ? "bg-[#262949] text-white" : "bg-white text-black"
          }`}
        >
          <select
            className={`p-3 rounded outline-none ${
              isDarkMode ? "bg-white text-black" : "bg-[#262949] text-white"
            }`}
          >
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
        <div
          className={`w-[250px] flex items-center p-3 rounded gap-2 ${
            isDarkMode ? "bg-white text-black" : "bg-[#262949] text-white"
          }`}
        >
          <IoIosSearch size={20} color={"#ce1f93"} />
          <input
            type="text"
            className={`outline-none ${
              isDarkMode ? "bg-white text-black" : "bg-[#262949] text-white"
            }`}
            placeholder="Search..."
          />
        </div>

        <div
          className={` rounded p-2 w-[250px] flex items-center justify-between gap-2 ml-4 ${
            isDarkMode ? "bg-white text-black" : " bg-[#262949] text-white"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 flex justify-center items-center rounded-full p-3 bg-[#15172c]">
              <p className="text-[#ce1f93] text-sm">M</p>
            </div>
            <p> Hello, Martin</p>
          </div>
          <div className="flex items-center gap-2">
            <LuBell />
            <LuMail />
            <FiLogOut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
