import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "10:00", price: 65000 },
  { name: "11:00", price: 65500 },
  { name: "12:00", price: 65200 },
  { name: "13:00", price: 66000 },
  { name: "14:00", price: 65800 },
  { name: "15:00", price: 66250 },
];

const CoinChart = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
      <div style={{ width: "80%", maxWidth: "600px" }}>
        <h2 style={{ textAlign: "center" }}>Bitcoin (BTC) Fiyat Grafiği</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={["auto", "auto"]} />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CoinChart;
