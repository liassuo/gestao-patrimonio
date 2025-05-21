import React from 'react';
import { Equipment } from '../types';
import { mockEquipment } from '../types';
import EquipmentTable from '../components/equipment/EquipmentTable';
import Button from '../components/common/Button';
import { PlusCircle } from 'lucide-react';

interface EquipmentListProps {
  onViewDetails: (id: string) => void;
  onAddNew: () => void;
}

const EquipmentList: React.FC<EquipmentListProps> = ({ onViewDetails, onAddNew }) => {
  const equipment: Equipment[] = mockEquipment;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventário de Equipamentos</h1>
          <p className="mt-1 text-sm text-gray-500">
            Gerencie e acompanhe os equipamentos de TI da empresa.
          </p>
        </div>
        <Button 
          className="mt-4 sm:mt-0" 
          onClick={onAddNew} 
          icon={<PlusCircle size={16} />}
        >
          Adicionar Equipamento
        </Button>
      </div>

      <EquipmentTable 
        equipment={equipment} 
        onViewDetails={onViewDetails} 
      />
    </div>
  );
};

export default EquipmentList;
