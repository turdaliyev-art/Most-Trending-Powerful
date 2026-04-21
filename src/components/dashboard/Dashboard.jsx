import styles from "./Dashboard.module.css"
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import React, { useContext } from 'react'
import { productsData } from '../../App'
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';
import { 
  BarChart, Bar,
} from 'recharts';
const data = [
  { time: '4am', may21: 25, may22: 10 },
  { time: '5am', may21: 10, may22: 15 },
  { time: '6am', may21: 5, may22: 10 },
  { time: '7am', may21: 15, may22: 25 },
  { time: '8am', may21: 25, may22: 35 },
  { time: '9am', may21: 25, may22: 30 },
  { time: '10am', may21: 30, may22: 35 },
  { time: '11am', may21: 10, may22: 50 },
  { time: '12am', may21: 20, may22: 45 },
  { time: '1pm', may21: 35, may22: 25 },
  { time: '2pm', may21: 40, may22: 25 },
  { time: '3pm', may21: 50, may22: 30 },
];

const data2 = [
  { day: '12', revenue: 1500 },
  { day: '13', revenue: 2500 },
  { day: '14', revenue: 4000 },
  { day: '15', revenue: 3000 },
  { day: '16', revenue: 5000 },
  { day: '17', revenue: 4500 },
  { day: '18', revenue: 6000 },
];


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#2d3446', color: '#fff', padding: '10px', borderRadius: '6px', fontSize: '12px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>{payload[0].value} Orders</p>
        <p style={{ margin: 0 }}>May 22, {payload[0].payload.time}</p>
      </div>
    );
  }
  return null;
};


function Dashboard() {
    const products = useContext(productsData)

  const chartData = data2; // yuqorida aniqlangan data2 ni ishlatamiz
  const title = "Last 7 Days Sales";
  const totalItems = "1,259";
  const totalRevenue = "12,546";
  return (
    <div className={styles.dashboard}>
      <p className={styles.dshTitle}>Dashboard</p>
      <div className={styles.dashboardStats}>


        <div className={styles.statCard}>
            <div className={styles.aboutBlog}>
              <p className={styles.statPrice}>$10.540</p>
              <p className={styles.statTitle}>Total Revenue</p>
              <p className={styles.statBenefit1}>22.45% <FaArrowTrendUp/></p>
            </div>
            <img src="./$.png" alt="" />
        </div>
        <div className={styles.statCard}>
            <div className={styles.aboutBlog}>
              <p className={styles.statPrice}>1,056</p>
              <p className={styles.statTitle}>Orders</p>
              <p className={styles.statBenefit1}>15.34% <FaArrowTrendUp/></p>
            </div>
            <img src="./cart.png" alt="" />
        </div>
        <div className={styles.statCard}>
            <div className={styles.aboutBlog}>
              <p className={styles.statPrice}>48</p>
              <p className={styles.statTitle}>Active Sessions</p>
              <p className={styles.statBenefit2}>18.25% <FaArrowTrendDown/></p>
            </div>
            <img src="./dshuser.png" alt="" />
        </div>
        <div className={styles.statCard}>
            <div className={styles.aboutBlog}>
              <p className={styles.statPrice}>5.420</p>
              <p className={styles.statTitle}>Total Sessions</p>
              <p className={styles.statBenefit2}>10.24% <FaArrowTrendDown/></p>
            </div>
            <img src="./dshusers.png" alt="" />
        </div>
      </div>

      <div className={styles.dshCharts}>

        <div className={styles.dshChart1}>
                 <div className={styles.chartWrapper}>
              <div className={styles.header}>
                <h3 className={styles.dshChart1Title}>Orders Over Time</h3>
                <span style={{ color: '#64748b', fontSize: '14px', fontFamily: "inter" }}>Last 12 Hours ▾</span>
              </div>

              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>645</div>
                  <div className={styles.statLabel}>Orders on May 22</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>472</div>
                  <div className={styles.statLabel}>Orders on May 21</div>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8',fontFamily: "san serif", fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="may22" stroke="#2563eb" strokeWidth={3} dot={{ fill: '#2563eb', r: 5 }} activeDot={{ r: 7 }} />
                  <Line type="monotone" dataKey="may21" stroke="#cbd5e1" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
        </div>

        <div className={styles.dshChart2}>
            <div style={{ width: '100%', maxWidth: '350px', padding: '28px', fontFamily: 'sans-serif' }}>
              <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>{title || "Last 7 Days Sales"}</h2>
              <div style={{ marginBottom: '-10px' }}>
                <p style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>{totalItems}</p>
                <p style={{ color: '#64748b',fontSize: "14px", lineHeight:"20px", marginBottom: "12px" }}>Items Sold</p>
                <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '10px 0 0' }}>${totalRevenue}</p>
                <p style={{ color: '#64748b', fontSize: "14px", lineHeight:"20px", margin: 0 }}>Revenue</p>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} barCategoryGap="30%">
                  <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8' }} 
                  />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }} 
                    contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#334155', color: '#fff' }}
                  />
                  <Bar 
                    dataKey="revenue" 
                    fill="#10b981" 
                    radius={[4, 4, 4, 4]} 
                    barSize={12}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
        </div>
      </div>

      
          <div className={styles.tableContainer}>
            <h2 className={styles.title}>Top Products by Units Sold</h2>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr>
                  <th>
                    Name
                  </th>
                  <th>Price</th>
                  <th>UnitsSold</th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
               {products.map((product, i) => (
                 <tr key={i}>
                   <td>
                     <div className={styles.productInfo}>
                       <img src={product.src} alt={product.name} className={styles.productImg} />
                       {product.name}
                     </div>
                   </td>
                   <td>{product.price}</td>
                   <td>{product.unitsSold}</td>
                 </tr>
               ))}
              </tbody>
          </table>
          </div>
       </div>
    
    
  )
}

export default Dashboard
