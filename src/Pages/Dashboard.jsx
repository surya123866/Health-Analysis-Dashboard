/* eslint-disable react/prop-types */
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
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
import { SkeletonTheme } from "react-loading-skeleton";
import { BiStopwatch } from "react-icons/bi";
import { GiBatteryPackAlt } from "react-icons/gi";
import { PiNotebookBold } from "react-icons/pi";
import { BsHeartPulseFill } from "react-icons/bs";
import { RiPinDistanceLine } from "react-icons/ri";

const COLORS = ["#8884d8", "#FF007A", "#9C27B0", "#B39DDB"];

const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const ticks = [0, 1, 2, 3, 4, 5, 6];

const FoodCustomizedLabel = ({ cx, cy, label, isDarkMode }) => {
  return (
    <g>
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

const renderCustomizedLabel = ({ cx, cy, label, isDarkMode }) => {
  return (
    <g>
      <text
        x={cx}
        y={cy + 25}
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

const getColor = (value) => {
  if (value < 20) return "#3b82f6"; // Blue
  if (value < 25) return "#22c55e"; // Green
  if (value < 30) return "#f97316"; // Orange
  return "#ef4444"; // Red
};

const CustomBar = (props) => {
  const { x, y, width, height, value } = props;
  return (
    <rect x={x} y={y} width={width} height={height} fill={getColor(value)} />
  );
};

const Dashboard = () => {
  const { isDarkMode } = useContext(MyContext);
  return (
    <SkeletonTheme baseColor="#262949" highlightColor="#4e5282">
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
              This dashboard integrates comprehensive data for health
              monitoring, performance analysis, and wellness management. It
              offers a holistic view of nutrition, activity, and personal health
              metrics essential for informed decision-making and improving
              overall well-being.
            </p>
          </div>
          <div className="p-4  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense gap-4">
            <Card title="Sleep">
              <div className="flex justify-between text-white">
                <div
                  className={`p-2 ${isDarkMode ? "text-black" : "text-white"}`}
                >
                  <p className="text-3xl">{combinedData?.SleepData?.time}</p>
                  <p className="flex gap-2 items-center">
                    <span>
                      <FaArrowTrendUp color="#cd2596" size={10} />{" "}
                    </span>
                    {combinedData?.SleepData?.percentage}
                  </p>
                </div>
                <ResponsiveContainer width="70%" height={150}>
                  <AreaChart data={combinedData?.SleepData?.data}>
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#cd2596"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#cd2596"
                          stopOpacity={0}
                        />
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
              <div className="flex justify-between text-white">
                <div
                  className={`p-2 ${isDarkMode ? "text-black" : "text-white"}`}
                >
                  <p className="text-3xl">{combinedData?.ActivityData?.time}</p>
                  <p className=" flex gap-2 items-center">
                    <span>
                      <FaArrowTrendUp color="#4742a9" size={10} />{" "}
                    </span>
                    {combinedData?.ActivityData?.percentage}
                  </p>
                </div>
                <ResponsiveContainer width="70%" height={150}>
                  <AreaChart data={combinedData?.ActivityData?.data}>
                    <defs>
                      <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#4742a9"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#4742a9"
                          stopOpacity={0}
                        />
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
              <div className="flex justify-between text-white">
                <div
                  className={`p-2 ${isDarkMode ? "text-black" : "text-white"}`}
                >
                  <p className="text-3xl">
                    {combinedData?.EfficiencyData?.efficiency}
                  </p>
                  <p className=" flex gap-2 items-center">
                    <span>
                      <FaArrowTrendUp color="#6b179d" size={10} />{" "}
                    </span>
                    {combinedData?.EfficiencyData?.percentage}
                  </p>
                </div>
                <ResponsiveContainer width="70%" height={150}>
                  <AreaChart data={combinedData?.EfficiencyData?.data}>
                    <defs>
                      <linearGradient id="colorUv3" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#6b179d"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#6b179d"
                          stopOpacity={0}
                        />
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
                    data={combinedData?.FoodData?.pieData}
                    innerRadius={80}
                    outerRadius={100}
                    label={(props) =>
                      FoodCustomizedLabel({
                        ...props,
                        label: combinedData?.FoodData?.label,
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
                    {combinedData?.FoodData?.pieData?.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 p-5">
                {combinedData?.FoodData?.pieData?.map((item, index) => (
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
              <div className="p-4 text-white w-full">
                <div
                  className={`mb-2 flex justify-between ${
                    isDarkMode ? "text-gray-800" : "text-white"
                  }`}
                >
                  <p>Gender</p>
                  <p>{combinedData?.personalData?.gender}</p>
                </div>
                <div
                  className={`mb-2 flex justify-between ${
                    isDarkMode ? "text-gray-800" : "text-white"
                  }`}
                >
                  <p>Age</p>
                  <p>{combinedData?.personalData?.age}</p>
                </div>
                <div
                  className={`mb-2 flex justify-between ${
                    isDarkMode ? "text-gray-800" : "text-white"
                  }`}
                >
                  <p>Height</p>
                  <p>{combinedData?.personalData?.height}</p>
                </div>
                <div
                  className={`mb-2 flex justify-between ${
                    isDarkMode ? "text-gray-800" : "text-white"
                  }`}
                >
                  <p>Weight</p>
                  <p>{combinedData?.personalData?.weight}</p>
                </div>
                <div
                  className={`mb-2 flex justify-between ${
                    isDarkMode ? "text-gray-800" : "text-white"
                  }`}
                >
                  <p>Blood pressure</p>
                  <p>{combinedData?.personalData?.bloodPressure}</p>
                </div>
                <div
                  className={`mb-2 flex justify-between ${
                    isDarkMode ? "text-gray-800" : "text-white"
                  }`}
                >
                  <p>Activity energy</p>
                  <p>{combinedData?.personalData?.activityEnergy}</p>
                </div>
                <div
                  className={`mb-2 flex justify-between ${
                    isDarkMode ? "text-gray-800" : "text-white"
                  }`}
                >
                  <p>Rest energy</p>
                  <p>{combinedData?.personalData?.restEnergy}</p>
                </div>
                <div
                  className={`mb-2 flex justify-between ${
                    isDarkMode ? "text-gray-800" : "text-white"
                  }`}
                >
                  <p>Bust</p>
                  <p>{combinedData?.personalData?.bust}</p>
                </div>
                <div
                  className={`mb-2 flex justify-between ${
                    isDarkMode ? "text-gray-800" : "text-white"
                  }`}
                >
                  <p>Waist</p>
                  <p>{combinedData?.personalData?.waist}</p>
                </div>
              </div>
            </Card>
            <Card title="Analytics" className={"col-span-2"}>
              <div className="flex items-center justify-center w-full gap-10 mb-5">
                <div className="flex items-center">
                  <div className="bg-[#cd2596] h-3 w-3 rounded-full mr-2"></div>
                  <p className="text-sm">Sleep</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#4742a9] h-3 w-3 rounded-full mr-2"></div>
                  <p className="text-sm">Activity</p>
                </div>
              </div>
              <div className="p-2">
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={combinedData?.AnalyticsData}>
                    <defs>
                      <linearGradient
                        id="colorSleep"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#cd2596"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#cd2596"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="colorActivity"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#3e44fb"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#3e44fb"
                          stopOpacity={0}
                        />
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
            <Card title="Stretching" className="col-span-2">
              <div className="flex flex-row justify-around items-center gap-5">
                <div className="relative w-[35%] h-auto">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={combinedData?.stretchData?.stretchPercentagedata}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        startAngle={90}
                        endAngle={-270}
                        innerRadius={70}
                        outerRadius={90}
                        label={(props) =>
                          renderCustomizedLabel({
                            ...props,
                            label:
                              combinedData?.stretchData
                                ?.stretchPercentagedata[0]?.value,
                            isDarkMode: isDarkMode,
                          })
                        }
                        fill="#8884d8"
                        stroke="none"
                        labelLine={false}
                      >
                        <Cell key="Completed" fill="#ff1aa6" />
                        <Cell key="Remaining" fill="#1b1d33" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute top-10 left-16">
                    <GrYoga color="#ff1aa6" size={60} />
                  </div>
                </div>
                <div className="flex flex-col w-32 gap-4 border-r border-black">
                  <div className="p-2 border-b border-black">
                    <div className="flex items-center gap-2">
                      <BiStopwatch color="#ff1aa6" />
                      <p className="text-sm">Training time</p>
                    </div>
                    <p className="ml-6">
                      {combinedData?.stretchData?.trainingTime}
                    </p>
                  </div>
                  <div className="p-2 border-b border-black">
                    <div className="flex items-center gap-2">
                      <GiBatteryPackAlt color="#ff1aa6" />
                      <p className="text-sm">Total calories</p>
                    </div>
                    <p className="ml-6">
                      {combinedData?.stretchData?.totalCalories}
                    </p>
                  </div>
                  <div className="p-2 border-b border-black">
                    <div className="flex items-center gap-2">
                      <PiNotebookBold color="#ff1aa6" />
                      <p className="text-sm">Exercises</p>
                    </div>
                    <p className="ml-6">
                      {combinedData?.stretchData?.exercises}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[250px] gap-4">
                  <div className="w-full">
                    <ResponsiveContainer width="100%" height={100}>
                      <BarChart data={combinedData?.stretchData?.histogramData}>
                        <Bar dataKey="value" fill="#8884d8" barSize={5} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-wrap items-center w-[280px] gap-4 p-2 border-l border-black">
                    <div className="border-b border-black">
                      <div className="flex items-center gap-2">
                        <BsHeartPulseFill color="#353474" />
                        <p className="text-sm">Active pressure</p>
                      </div>
                      <p className="ml-6">
                        {combinedData?.stretchData?.activePressure}
                      </p>
                    </div>
                    <div className="border-b border-black">
                      <div className="flex items-center gap-2">
                        <BsHeartPulseFill color="#353474" />
                        <p className="text-sm">Heart Rate</p>
                      </div>
                      <p className="ml-6">
                        {combinedData?.stretchData?.heartRate}
                      </p>
                    </div>
                    <div className="border-b border-black">
                      <div className="flex items-center gap-2">
                        <BsHeartPulseFill color="#353474" />
                        <p className="text-sm">Normal pressure</p>
                      </div>
                      <p className="ml-6">
                        {combinedData?.stretchData?.normalPressure}
                      </p>
                    </div>
                    <div className="border-b border-black">
                      <div className="flex items-center gap-2">
                        <BsHeartPulseFill color="#353474" />
                        <p className="text-sm">Resting Rate</p>
                      </div>
                      <p className="ml-6">
                        {combinedData?.stretchData?.restingRate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card title="Running" className="col-span-2">
              <div className="flex flex-row justify-around items-center   mb-4">
                <div className="relative w-[35%] h-auto">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={combinedData?.runningData?.runningPercentagedata}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        startAngle={90}
                        endAngle={-270}
                        innerRadius={70}
                        outerRadius={90}
                        label={(props) =>
                          renderCustomizedLabel({
                            ...props,
                            label:
                              combinedData?.runningData
                                ?.runningPercentagedata[0]?.value,
                            isDarkMode: isDarkMode,
                          })
                        }
                        fill="#8884d8"
                        stroke="none"
                        labelLine={false}
                      >
                        <Cell key="Completed" fill="#4541a7" />
                        <Cell key="Remaining" fill="#1b1d33" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute top-10 left-20">
                    <FaRunning size={60} />
                  </div>
                </div>
                <div className="flex flex-col w-32 gap-4 border-r border-black">
                  <div className="p-2 border-b border-black">
                    <div className="flex items-center gap-2">
                      <BiStopwatch color="#4541a7" />
                      <p className="text-sm">Training time</p>
                    </div>
                    <p className="ml-6">
                      {combinedData?.runningData?.trainingTime}
                    </p>
                  </div>
                  <div className="p-2 border-b border-black">
                    <div className="flex items-center gap-2">
                      <GiBatteryPackAlt color="#4541a7" />
                      <p className="text-sm">Total calories</p>
                    </div>
                    <p className="ml-6">
                      {combinedData?.runningData?.totalCalories}
                    </p>
                  </div>
                  <div className="p-2 border-b border-black">
                    <div className="flex items-center gap-2">
                      <RiPinDistanceLine color="#4541a7" />
                      <p className="text-sm">Distance</p>
                    </div>
                    <p className="ml-6">
                      {combinedData?.runningData?.distance}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center w-[260px] gap-2 p-2">
                  <div className="w-full">
                    <ResponsiveContainer width="100%" height={100}>
                      <BarChart data={combinedData?.runningData?.histogramData}>
                        <Bar
                          dataKey="value"
                          shape={<CustomBar />}
                          barSize={5}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-wrap justify-center items-center w-full">
                    {combinedData.runningData.zones.map((zone, index) => (
                      <div key={index} className="w-full">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className={`bg-${zone.color} h-2 w-2 rounded-full`}
                            ></div>
                            <span>{zone.name}</span>
                            <span className="ml-2">{zone.time}</span>
                          </div>
                          <span>{zone.bpm}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Dashboard;
