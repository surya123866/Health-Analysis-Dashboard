import { Link } from "react-router-dom";
import ToggleButton from "./togglebutton";
import { useContext } from "react";
import MyContext from "./ThemeContext";

import { TbLayoutDashboard } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { TbBarbell } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const { isDarkMode } = useContext(MyContext);

  return (
    <div
      className={`min-h-screen w-64 ${
        isDarkMode ? "bg-white text-black" : "bg-[#262949] text-gray-200"
      } flex flex-col`}
    >
      <div className="p-4 text-2xl font-bold text-[#ef70c6]">
        Fit{" "}
        <span className={`${isDarkMode ? "text-black" : "text-white"}`}>
          Health
        </span>
      </div>
      <nav className="flex-1">
        <ul>
          <li
            className={`flex gap-2 items-center px-4 py-2 hover:text-[#ef70c6] hover:bg-gradient-to-r ${
              isDarkMode ? "from-white" : "from-[#262949]"
            } to-[#ef70c6]`}
          >
            <TbLayoutDashboard size={24} /> <Link to="/">Dashboard</Link>
          </li>
          <li
            className={`flex gap-2 items-center px-4 py-2 hover:text-[#ef70c6] hover:bg-gradient-to-r ${
              isDarkMode ? "from-white" : "from-[#262949]"
            } to-[#ef70c6]`}
          >
            <FaRegHeart size={24} /> <Link to="/health">Health</Link>
          </li>
          <li
            className={`flex gap-2 items-center px-4 py-2 hover:text-[#ef70c6] hover:bg-gradient-to-r ${
              isDarkMode ? "from-white" : "from-[#262949]"
            } to-[#ef70c6]`}
          >
            <TbBarbell size={24} />
            <Link to="/trainings">Trainings</Link>
          </li>
          <li
            className={`flex gap-2 items-center px-4 py-2 hover:text-[#ef70c6] hover:bg-gradient-to-r ${
              isDarkMode ? "from-white" : "from-[#262949]"
            } to-[#ef70c6]`}
          >
            <FaArrowTrendUp size={24} /> <Link to="/dynamics">Dynamics</Link>
          </li>
          <li
            className={`flex gap-2 items-center px-4 py-2 hover:text-[#ef70c6] hover:bg-gradient-to-r ${
              isDarkMode ? "from-white" : "from-[#262949]"
            } to-[#ef70c6]`}
          >
            <LuMail size={24} />
            <Link to="/messages">Messages</Link>
          </li>
          <li
            className={`flex gap-2 items-center px-4 py-2 hover:text-[#ef70c6] hover:bg-gradient-to-r ${
              isDarkMode ? "from-white" : "from-[#262949]"
            } to-[#ef70c6]`}
          >
            <CgProfile size={24} />
            <Link to="/profile">Profile</Link>
          </li>
          <li
            className={`flex gap-2 items-center px-4 py-2 hover:text-[#ef70c6] hover:bg-gradient-to-r ${
              isDarkMode ? "from-white" : "from-[#262949]"
            } to-[#ef70c6]`}
          >
            <IoIosHelpCircleOutline size={24} /> <Link to="/help">Help</Link>
          </li>
        </ul>
        <div className="mt-8">
          <ul>
            <li
              className={`flex gap-2 items-center px-4 py-2 hover:text-[#ef70c6] hover:bg-gradient-to-r ${
                isDarkMode ? "from-white" : "from-[#262949]"
              } to-[#ef70c6]`}
            >
              <IoSettingsOutline size={24} />
              <Link to="/settings">Settings</Link>
            </li>
            <li
              className={`flex gap-2 items-center px-4 py-2 hover:text-[#ef70c6] hover:bg-gradient-to-r ${
                isDarkMode ? "from-white" : "from-[#262949]"
              } to-[#ef70c6]`}
            >
              <FiLogOut size={24} />
              <Link to="/logout">Log out</Link>
            </li>
          </ul>
        </div>
        <div className="px-4 py-10">
          <ToggleButton />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
