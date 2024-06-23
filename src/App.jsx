import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./components/Not-Found";
import MyContext from "./components/ThemeContext";
import { useContext } from "react";
// import Health from "./pages/Health";
// import Trainings from "./pages/Trainings";
// import Dynamics from "./pages/Dynamics";
// import Messages from "./pages/Messages";
// import Profile from "./pages/Profile";
// import Help from "./pages/Help";

function App() {
  const { isDarkMode } = useContext(MyContext);
  return (
    <div className={`w-full ${isDarkMode ? "bg-[#f1eff8]" : "bg-[#15172c]"}`}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/health" element={<Health />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/dynamics" element={<Dynamics />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
