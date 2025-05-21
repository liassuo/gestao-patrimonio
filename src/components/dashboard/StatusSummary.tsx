import React from 'react';
import { Equipment } from '../../types';
import Card from '../common/Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface StatusSummaryProps {
  equipment: Equipment[];
}

const StatusSummary: React.FC<StatusSummaryProps> = ({ equipment }) => {
  // Count equipment by status
  const statusCounts = equipment.reduce(
    (acc: Record<string, number>, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    },
    {}
  );

  const COLORS = ['#16A34A', '#D97706', '#DC2626'];
  
  const data = [
    { name: 'Ativos', value: statusCounts['ativo'] || 0, color: COLORS[0] },
    { name: 'Manutenção', value: statusCounts['manutenção'] || 0, color: COLORS[1] },
    { name: 'Desativado', value: statusCounts['desativado'] || 0, color: COLORS[2] }
  ];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return percent > 0 ? (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card title="Resumo de Status dos Equipamentos">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center mt-4">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center mx-4">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-sm text-gray-700">
              {entry.name}: {entry.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default StatusSummary;
