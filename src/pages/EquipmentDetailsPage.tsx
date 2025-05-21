import React from 'react';
import { Equipment, HistoryEntry } from '../types';
import { mockEquipment, mockHistory } from '../types';
import EquipmentDetails from '../components/equipment/EquipmentDetails';
import Button from '../components/common/Button';
import { ArrowLeft } from 'lucide-react';

interface EquipmentDetailsPageProps {
  equipmentId: string;
  onBack: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const EquipmentDetailsPage: React.FC<EquipmentDetailsPageProps> = ({ 
  equipmentId,
  onBack,
  onEdit,
  onDelete
}) => {
  // Buscar o equipamento pelo ID
  const equipment = mockEquipment.find(item => item.id === equipmentId);
  
  // Filtrar o histórico desse equipamento
  const historyEntries = mockHistory.filter(entry => entry.equipmentId === equipmentId);

  if (!equipment) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-medium text-gray-900">Equipamento não encontrado.</h2>
        <p className="mt-2 text-gray-500">
          O equipamento que você está procurando não existe ou foi removido.
        </p>
        <Button className="mt-4" onClick={onBack}>
          Voltar para a Lista de Equipamentos
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button 
          variant="outline" 
          onClick={onBack} 
          size="sm"
          icon={<ArrowLeft size={16} />}
          className="mr-4"
        >
          Voltar para Lista
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Detalhes do Equipamento</h1>
      </div>

      <EquipmentDetails 
        equipment={equipment} 
        history={historyEntries}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default EquipmentDetailsPage;
