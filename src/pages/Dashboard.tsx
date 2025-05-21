import React from 'react';
import { Equipment, HistoryEntry } from '../types';
import { mockEquipment, mockHistory } from '../types';
import StatisticsCard from '../components/dashboard/StatisticsCard';
import StatusSummary from '../components/dashboard/StatusSummary';
import RecentActivity from '../components/dashboard/RecentActivity';
import { Laptop, AlertTriangle, CheckCircle, DollarSign } from 'lucide-react';

const Dashboard: React.FC = () => {
  const equipment: Equipment[] = mockEquipment;
  const history: HistoryEntry[] = mockHistory;

  const totalEquipment = equipment.length;
  const activeEquipment = equipment.filter(item => item.status === 'ativo').length;
  const maintenanceEquipment = equipment.filter(item => item.status === 'manutenção').length;
  const totalValue = equipment.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Visão geral do seu inventário de equipamentos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatisticsCard
          title="Total de Equipamentos"
          value={totalEquipment}
          icon={<Laptop size={20} />}
          color="primary"
        />
        <StatisticsCard
          title="Equipamentos Ativos"
          value={activeEquipment}
          icon={<CheckCircle size={20} />}
          color="green"
        />
        <StatisticsCard
          title="Em Manutenção"
          value={maintenanceEquipment}
          icon={<AlertTriangle size={20} />}
          color="amber"
        />
        <StatisticsCard
          title="Valor Total"
          value={`R$ ${totalValue.toLocaleString('pt-BR')}`}
          icon={<DollarSign size={20} />}
          color="secondary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusSummary equipment={equipment} />
        <RecentActivity historyEntries={history} equipment={equipment} />
      </div>
    </div>
  );
};

export default Dashboard;
