"use client";
import Link from "next/link";
import {
  PolarGrid,
  RadarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Radar,
  AreaChart,
  Tooltip,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  FunnelChart,
  LabelList,
  Funnel,
  Pie,
  PieChart,
  RadialBarChart,
  RadialBar,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];
const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data3 = [
  {
    value: 100,
    name: "展现",
    fill: "#8884d8",
  },
  {
    value: 80,
    name: "点击",
    fill: "#83a6ed",
  },
  {
    value: 50,
    name: "访问",
    fill: "#8dd1e1",
  },
  {
    value: 40,
    name: "咨询",
    fill: "#82ca9d",
  },
  {
    value: 26,
    name: "订单",
    fill: "#a4de6c",
  },
];
const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];
const data5 =[
  {
    "name": "18-24",
    "uv": 31.47,
    "pv": 2400,
    "fill": "#8884d8"
  },
  {
    "name": "25-29",
    "uv": 26.69,
    "pv": 4567,
    "fill": "#83a6ed"
  },
  {
    "name": "30-34",
    "uv": -15.69,
    "pv": 1398,
    "fill": "#8dd1e1"
  },
  {
    "name": "35-39",
    "uv": 8.22,
    "pv": 9800,
    "fill": "#82ca9d"
  },
  {
    "name": "40-49",
    "uv": -8.63,
    "pv": 3908,
    "fill": "#a4de6c"
  },
  {
    "name": "50+",
    "uv": -2.63,
    "pv": 4800,
    "fill": "#d0ed57"
  },
  {
    "name": "unknow",
    "uv": 6.67,
    "pv": 4800,
    "fill": "#ffc658"
  }
]

export default function Home() {
  return (
    <div className="w-full ">
      <h1 className=" text-center text-cyan-600 font-bold text-lg my-8">
        DASHBOARD
      </h1>
      <section className=" w-full flex gap-4">
        <div className="w-1/5 h-24 bg-neutral-900 rounded-lg p-4">
          <h3 className="text-center text-lime-600 font-bold text-lg">
            ACERTOS
          </h3>
          <h3 className="text-center text-lime-600 font-bold text-4xl">5</h3>
        </div>
        <div className="w-1/5 h-24 bg-neutral-900 rounded-lg p-4">
          <h3 className="text-center text-red-600 font-bold text-lg">ERROS</h3>
          <h3 className="text-center text-red-600 font-bold text-4xl">8</h3>
        </div>
        <div className="w-1/5 h-24 bg-neutral-900 rounded-lg p-4">
          <h3 className="text-center text-cyan-600 font-bold text-lg">
            QUESTÕES
          </h3>
          <h3 className="text-center text-cyan-600 font-bold text-4xl">20</h3>
        </div>
        <div className="w-1/5 h-24 bg-neutral-900 rounded-lg p-4">
          <h3 className="text-center text-purple-600 font-bold text-lg">
            TEMPO MÉDIO
          </h3>
          <h3 className="text-center text-purple-600 font-bold text-4xl">2</h3>
        </div>
        <div className="w-1/5 h-24 bg-neutral-900 rounded-lg p-4">
          <h3 className="text-center text-white font-bold text-lg">
            TEMPO TOTAL
          </h3>
          <h3 className="text-center text-white font-bold text-4xl">2</h3>
        </div>
      </section>
      {/* <section className=" w-full flex gap-8 mt-8">
        <div className="w-1/3 h-40 bg-neutral-900 rounded-lg flex justify-center items-center">
          <PieChart width={730} height={250}>
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </div>
        <div className="w-1/3 h-40 bg-neutral-900 rounded-lg flex justify-center items-center">
          <RadarChart outerRadius={90} width={500} height={300} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="Lily"
              dataKey="B"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            {/* <Legend /> */}
          {/* </RadarChart>
        </div>
        <div className="w-1/3 h-40 bg-neutral-900 rounded-lg flex justify-center items-center">
          <RadialBarChart
            width={730}
            height={250}
            innerRadius="10%"
            outerRadius="80%"
            data={data5}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ fill: "#666", position: "insideStart" }}
              background
              clockWise={true}
              dataKey="uv"
            />
            {/* <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            /> */}
            {/* <Tooltip />
          </RadialBarChart> 
        </div> 
      </section> */}
      <section className=" w-full flex gap-8 mt-8">
        <div className="w-1/2 h-72 bg-neutral-900 rounded-lg flex justify-center items-center">
          <AreaChart
            width={730}
            height={250}
            data={data2}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
        <div className="w-1/2 h-72 bg-neutral-900 rounded-lg">
          <FunnelChart width={730} height={250}>
            <Tooltip />
            <Funnel dataKey="value" data={data3} isAnimationActive>
              <LabelList
                position="right"
                fill="#fff"
                stroke="none"
                dataKey="name"
              />
            </Funnel>
          </FunnelChart>
        </div>
      </section>
    </div>
  );
}
