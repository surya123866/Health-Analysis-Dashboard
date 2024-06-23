import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import { combinedData } from "../components/data";
import { useContext } from "react";
import MyContext from "../components/ThemeContext";
import { FaRunning } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { FaArrowTrendUp } from "react-icons/fa6";

const COLORS = ["#8884d8", "#FF007A", "#9C27B0", "#B39DDB"];

const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const ticks = [0, 1, 2, 3, 4, 5, 6];

const renderCustomizedLabel = ({ cx, cy, label, icon, isDarkMode }) => {
  return (
    <g>
      <g transform={`translate(${cx + 10},${cy + 10})`}>
        {icon === "GrYoga" && <GrYoga color="#ff1aa6" size={60} />}
        {icon === "FaRunning" && <FaRunning size={60} />}
      </g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={`${isDarkMode ? "black" : "white"}`}
        fontSize="30"
      >
        {label}%
      </text>
    </g>
  );
};

const Dashboard = () => {
  const { isDarkMode } = useContext(MyContext);
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-4">
          <p
            className={`text-base font-semibold ${
              isDarkMode ? "text-black" : "text-white"
            }`}
          >
            The dashboard integrates comprehensive data for health monitoring,
            performance analysis, and wellness management. It offers a holistic
            view of nutrition, activity, and personal health metrics essential
            for informed decision-making and improving overall well-being.
          </p>
        </div>
        <div className="p-4  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense gap-4">
          <Card title="Sleep">
            <div className="flex justify-between text-white rounded-lg shadow-lg">
              <div
                className={`p-2 ${isDarkMode ? "text-black" : "text-white"}`}
              >
                <p className="text-3xl">{combinedData.SleepData.time}</p>
                <p className="flex gap-2 items-center">
                  <span>
                    <FaArrowTrendUp color="#cd2596" size={10} />{" "}
                  </span>
                  {combinedData.SleepData.percentage}
                </p>
              </div>
              <ResponsiveContainer width="70%" height={150}>
                <AreaChart data={combinedData.SleepData.data}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#cd2596" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#cd2596" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#cd2596"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
          <Card title="Activity">
            <div className="flex justify-between text-white rounded-lg shadow-lg">
              <div
                className={`p-2 ${isDarkMode ? "text-black" : "text-white"}`}
              >
                <p className="text-3xl">{combinedData.ActivityData.time}</p>
                <p className=" flex gap-2 items-center">
                  <span>
                    <FaArrowTrendUp color="#4742a9" size={10} />{" "}
                  </span>
                  {combinedData.ActivityData.percentage}
                </p>
              </div>
              <ResponsiveContainer width="70%" height={150}>
                <AreaChart data={combinedData.ActivityData.data}>
                  <defs>
                    <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4742a9" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#4742a9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#4742a9"
                    fillOpacity={1}
                    fill="url(#colorUv2)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
          <Card title="Efficiency">
            <div className="flex justify-between text-white rounded-lg shadow-lg">
              <div
                className={`p-2 ${isDarkMode ? "text-black" : "text-white"}`}
              >
                <p className="text-3xl">
                  {combinedData.EfficiencyData.efficiency}
                </p>
                <p className=" flex gap-2 items-center">
                  <span>
                    <FaArrowTrendUp color="#6b179d" size={10} />{" "}
                  </span>
                  {combinedData.EfficiencyData.percentage}
                </p>
              </div>
              <ResponsiveContainer width="70%" height={150}>
                <AreaChart data={combinedData.EfficiencyData.data}>
                  <defs>
                    <linearGradient id="colorUv3" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6b179d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#6b179d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#6b179d"
                    fillOpacity={1}
                    fill="url(#colorUv3)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
          <Card title="Food" className={"row-span-2"}>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={combinedData.FoodData.pieData}
                  innerRadius={80}
                  outerRadius={100}
                  label={(props) =>
                    renderCustomizedLabel({
                      ...props,
                      label: combinedData.FoodData.label,
                      isDarkMode: isDarkMode,
                    })
                  }
                  fill="#8884d8"
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  stroke="none"
                  labelLine={false}
                >
                  {combinedData.FoodData.pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 p-5">
              {combinedData.FoodData.pieData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span>{item.value} / 120</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded h-5 mb-4">
                    <div
                      className={
                        index === 0
                          ? "bg-indigo-500 h-5 rounded"
                          : index === 1
                          ? "bg-pink-500 h-5 rounded"
                          : index === 2
                          ? "bg-purple-500 h-5 rounded"
                          : index === 3
                          ? "bg-purple-200 h-5 rounded"
                          : ""
                      }
                      style={{ width: `${(item.value / 120) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card title="Medical Card" className={"grid-cols-1"}>
            <div className="p-4 text-white rounded-lg shadow-lg w-full">
              <div
                className={`mb-2 flex justify-between ${
                  isDarkMode ? "text-gray-800" : "text-white"
                }`}
              >
                <p>Gender</p>
                <p>{combinedData.personalData.gender}</p>
              </div>
              <div
                className={`mb-2 flex justify-between ${
                  isDarkMode ? "text-gray-800" : "text-white"
                }`}
              >
                <p>Age</p>
                <p>{combinedData.personalData.age}</p>
              </div>
              <div
                className={`mb-2 flex justify-between ${
                  isDarkMode ? "text-gray-800" : "text-white"
                }`}
              >
                <p>Height</p>
                <p>{combinedData.personalData.height}</p>
              </div>
              <div
                className={`mb-2 flex justify-between ${
                  isDarkMode ? "text-gray-800" : "text-white"
                }`}
              >
                <p>Weight</p>
                <p>{combinedData.personalData.weight}</p>
              </div>
              <div
                className={`mb-2 flex justify-between ${
                  isDarkMode ? "text-gray-800" : "text-white"
                }`}
              >
                <p>Blood pressure</p>
                <p>{combinedData.personalData.bloodPressure}</p>
              </div>
              <div
                className={`mb-2 flex justify-between ${
                  isDarkMode ? "text-gray-800" : "text-white"
                }`}
              >
                <p>Activity energy</p>
                <p>{combinedData.personalData.activityEnergy}</p>
              </div>
              <div
                className={`mb-2 flex justify-between ${
                  isDarkMode ? "text-gray-800" : "text-white"
                }`}
              >
                <p>Rest energy</p>
                <p>{combinedData.personalData.restEnergy}</p>
              </div>
              <div
                className={`mb-2 flex justify-between ${
                  isDarkMode ? "text-gray-800" : "text-white"
                }`}
              >
                <p>Bust</p>
                <p>{combinedData.personalData.bust}</p>
              </div>
              <div
                className={`mb-2 flex justify-between ${
                  isDarkMode ? "text-gray-800" : "text-white"
                }`}
              >
                <p>Waist</p>
                <p>{combinedData.personalData.waist}</p>
              </div>
            </div>
          </Card>
          <Card title="Analytics" className={"col-span-2"}>
            <div className="p-4">
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={combinedData.AnalyticsData}>
                  <defs>
                    <linearGradient id="colorSleep" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff4d6d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ff4d6d" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorActivity"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#3e44fb" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3e44fb" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="1 0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={ticks}
                    tickFormatter={(value) => days[value % 7]}
                  />
                  <YAxis />
                  <Area
                    type="monotone"
                    dataKey="Sleep"
                    stroke="#ff4d6d"
                    fillOpacity={1}
                    fill="url(#colorSleep)"
                  />
                  <Area
                    type="monotone"
                    dataKey="Activity"
                    stroke="#3e44fb"
                    fillOpacity={1}
                    fill="url(#colorActivity)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
          <Card title="Stretching" className={"col-span-2"}>
            <div className="flex flex-col md:flex-row flex-grow ">
              <div className="flex flex-col md:flex-row items-center justify-between mb-4 w-full">
                <div
                  style={{ width: "100%", height: "auto" }}
                  className="md:w-1/2"
                >
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={combinedData.strechPercentagedata}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        startAngle={90}
                        endAngle={-270}
                        label={(props) =>
                          renderCustomizedLabel({
                            ...props,
                            label: combinedData.strechPercentagedata[0].value,
                            icon: "GrYoga",
                            isDarkMode: isDarkMode,
                          })
                        }
                        innerRadius={70}
                        outerRadius={90}
                        fill="#8884d8"
                        stroke="none"
                        labelLine={false}
                      >
                        <Cell key="Completed" fill="#ff1aa6" />
                        <Cell key="Remaining" fill="#1b1d33" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="md:w-1/2 flex flex-col items-start md:items-end mt-4 md:mt-0">
                  <div className="mb-2">
                    <p className="text-sm font-semibold">Training time</p>
                    <p>{combinedData.stretchData.trainingTime}</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm font-semibold">Total calories</p>
                    <p>{combinedData.stretchData.totalCalories}</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm font-semibold">Exercises</p>
                    <p>{combinedData.stretchData.exercises}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 w-full">
                <div>
                  <p className="text-sm font-semibold">Active pressure</p>
                  <p>{combinedData.stretchData.activePressure}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Heart rate</p>
                  <p>{combinedData.stretchData.heartRate}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Normal pressure</p>
                  <p>{combinedData.stretchData.normalPressure}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Resting rate</p>
                  <p>{combinedData.stretchData.restingRate}</p>
                </div>
              </div>
            </div>
          </Card>
          <Card title="Running" className={"col-span-2"}>
            <div className="flex flex-grow">
              <div className="flex flex-row items-center justify-around mb-4 w-full">
                <div
                  style={{ width: "100%", height: "auto" }}
                  className="md:w-1/2"
                >
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={combinedData.runningPercentagedata}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        label={(props) =>
                          renderCustomizedLabel({
                            ...props,
                            label: combinedData.runningPercentagedata[0].value,
                            icon: "FaRunning",
                            isDarkMode: isDarkMode,
                          })
                        }
                        startAngle={90}
                        endAngle={-270}
                        innerRadius={70}
                        outerRadius={90}
                        fill="#8884d8"
                        stroke="none"
                        labelLine={false}
                      >
                        <Cell key="Completed" fill="#4541a7" />
                        <Cell key="Remaining" fill="#1b1d33" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className=" flex flex-col w-64">
                  <div className="mb-2">
                    <p className="text-sm font-semibold">Training time</p>
                    <p>{combinedData.runningData.trainingTime}</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm font-semibold">Total calories</p>
                    <p>{combinedData.runningData.totalCalories}</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm font-semibold">Exercises</p>
                    <p>{combinedData.runningData.exercises}</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm font-semibold">Active pressure</p>
                    <p>{combinedData.runningData.activePressure}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
