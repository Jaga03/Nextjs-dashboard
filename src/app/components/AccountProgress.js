"use client";

import { PieChart, Pie, Cell, Label } from "recharts";
import { motion } from "framer-motion";

function AccountProgress() {
  const data = [
    { name: "Completed", value: 85 },
    { name: "Remaining", value: 15 },
  ];
  const COLORS = ["#3B82F6", "#E5E7EB"];

  return (
    <motion.div
      className="bg-white p-4 rounded-xl shadow"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-lg font-semibold mb-4 text-center">Account Progress</h2>
      <div className="flex flex-col items-center">
        <PieChart width={120} height={120}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={55}
            dataKey="value"
            startAngle={90}
            endAngle={-270} 
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}

            
            <Label
              value="85%"
              position="center"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                fill: "#111827", 
              }}
            />

            
            
          </Pie>
        </PieChart>
      </div>
    </motion.div>
  );
}

export default AccountProgress;
