"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const data = [
  { name: '건강보조제', value: 96.5, category: 'primary' },
  { name: '라면/면류', value: 94.2, category: 'primary' },
  { name: '소스/조미료', value: 88.5, category: 'secondary' },
  { name: '스낵/과자', value: 75.4, category: 'secondary' },
  { name: '전통음료', value: 67.3, category: 'muted' }
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-border shadow-md p-3 rounded-sm font-sans text-sm">
        <p className="font-bold text-secondary mb-1">{payload[0].payload.name}</p>
        <p className="text-primary font-bold">수요 지수: {payload[0].value}</p>
      </div>
    );
  }
  return null;
}

export function TrendChart() {
  return (
    <div className="h-[280px] w-full mt-4 font-sans">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={data} 
          layout="vertical" 
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E5E7EB" />
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis 
            dataKey="name" 
            type="category" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748B', fontSize: 13, fontWeight: 500 }} 
            width={85}
            dx={-5}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F8FAFC' }} />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={
                  entry.category === 'primary' ? '#0A1D37' : 
                  entry.category === 'secondary' ? '#B89742' : 
                  '#CBD5E1'
                } 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
