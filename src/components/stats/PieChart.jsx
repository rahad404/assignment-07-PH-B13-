import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

export default function InteractionPieChart({ call, text, video }) {
  const data = [
    { name: 'Calls', value: call, color: '#244D3F' },
    { name: 'Texts', value: text, color: '#37A163' },
    { name: 'Videos', value: video, color: '#7F37F5' },
  ]

  return (
<ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          dataKey="value"
          
          innerRadius={75}
          outerRadius={100}
          paddingAngle={2}      
          cornerRadius={3}    

          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        
        <Tooltip 
          contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
        />
        
        <Legend 
          verticalAlign="bottom" 
          align="center"
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ paddingTop: '20px', fontSize: '14px', color: '#64748b' }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}