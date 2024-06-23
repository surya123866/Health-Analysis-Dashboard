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
        isDarkMode ? "bg-white text-black" : "bg-[#262949] text-[#ce1f93]"
      } flex flex-col`}
    >
      <div className="p-4 text-2xl font-bold">
        Fit <span className="text-white">Health</span>
      </div>
      <nav className="flex-1">
        <ul>
          <li className="flex gap-2 items-center px-4 py-2 hover:bg-[#e89fd0]">
            <TbLayoutDashboard /> <Link to="/">Dashboard</Link>
          </li>
          <li className="flex gap-2 items-center px-4 py-2 hover:bg-[#e89fd0]">
            <FaRegHeart /> <Link to="/health">Health</Link>
          </li>
          <li className="flex gap-2 items-center px-4 py-2 hover:bg-[#e89fd0]">
            <TbBarbell />
            <Link to="/trainings">Trainings</Link>
          </li>
          <li className="flex gap-2 items-center px-4 py-2 hover:bg-[#e89fd0]">
            <FaArrowTrendUp /> <Link to="/dynamics">Dynamics</Link>
          </li>
          <li className="flex gap-2 items-center px-4 py-2 hover:bg-[#e89fd0]">
            <LuMail />
            <Link to="/messages">Messages</Link>
          </li>
          <li className="flex gap-2 items-center px-4 py-2 hover:bg-[#e89fd0]">
            <CgProfile />
            <Link to="/profile">Profile</Link>
          </li>
          <li className="flex gap-2 items-center px-4 py-2 hover:bg-[#e89fd0]">
            <IoIosHelpCircleOutline /> <Link to="/help">Help</Link>
          </li>
        </ul>

        <div className="mt-8">
          <ul>
            <li className="flex gap-2 items-center px-4 py-2 hover:bg-[#e89fd0]">
              <IoSettingsOutline />
              <Link to="/settings">Settings</Link>
            </li>
            <li className="flex gap-2 items-center px-4 py-2 hover:bg-[#e89fd0]">
              <FiLogOut />
              <Link to="/logout">Log out</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="px-4 py-2">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Sidebar;
