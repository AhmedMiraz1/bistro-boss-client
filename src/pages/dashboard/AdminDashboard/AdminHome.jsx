import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCarAlt,  FaProductHunt, FaUsers } from "react-icons/fa";
import { BsCalendarEventFill } from "react-icons/bs";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie,  Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#F23131'];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });


  const {data: chartData=[]}=useQuery({
    queryKey: ['order-stats'],
    queryFn: async ()=> {
      const res = await axiosSecure.get('/order/stats')
      return res.data
    }
  })

  //custom shape for the barCart

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };




  // custom shape for the pie chart 


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const pieChartData = chartData?.map(data=> {
  return { name: data.category, value: data.revenue}
})
  return (
    <div>
      <h2 className="text-4xl uppercase">
        <span>Hi, Welcome </span>
        {user?.displayName ? user?.displayName : "back"}
      </h2>

      <div className="flex justify-between my-12 gap-7 uppercase">

        <div className="flex bg-purple-500 text-white items-center gap-6 px-14 py-9 rounded-lg shadow-lg font-bold text-3xl">

          <div><BsCalendarEventFill /></div>
          <div>
            <h1>{stats?.revenue}</h1>
            <p>Revenue</p>
          </div>
        </div>
        <div className="flex bg-orange-500 text-white items-center gap-6 px-14 py-9 rounded-lg shadow-lg font-bold text-3xl ">

          <div><FaUsers/></div>
          <div>
            <h1>{stats?.users}</h1>
            <p>Users</p>
          </div>
        </div>
        <div className="flex bg-pink-500 text-white items-center gap-6 px-14 py-9 rounded-lg shadow-lg font-bold text-3xl">

          <div><FaProductHunt/></div>
          <div>
            <h1>{stats?.menuItems}</h1>
            <p>Products</p>
          </div>
        </div>
        <div className="flex bg-accent text-white items-center gap-6 px-14 py-9 rounded-lg shadow-lg font-bold text-3xl">

          <div><FaCarAlt/></div>
          <div>
            <h1>{stats?.orders}</h1>
            <p>orders</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-1/2">
        <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
        </div>
        <div className="w-1/2">
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend/>
        </PieChart>
        </div>

      </div>
    </div>
  );
};

export default AdminHome;
