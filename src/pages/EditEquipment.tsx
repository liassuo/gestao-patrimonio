import React from 'react';
import { Equipment } from '../types';
import { mockEquipment } from '../types';
import EquipmentForm from '../components/equipment/EquipmentForm';
import Button from '../components/common/Button';
import { ArrowLeft } from 'lucide-react';

interface EditEquipmentProps {
  equipmentId: string;
  onBack: () => void;
  onSubmit: (data: Partial<Equipment>) => void;
}

const EditEquipment: React.FC<EditEquipmentProps> = ({ 
  equipmentId, 
  onBack, 
  onSubmit 
}) => {
  // Buscar o equipamento pelo ID
  const equipment = mockEquipment.find(item => item.id === equipmentId);

  if (!equipment) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-medium text-gray-900">Equipamento não encontrado.</h2>
        <p className="mt-2 text-gray-500">
          O equipamento que você está tentando editar não existe ou foi removido.
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
          Voltar
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Editar Equipamento</h1>
      </div>

      <EquipmentForm 
        initialData={equipment}
        onSubmit={onSubmit}
        onCancel={onBack}
      />
    </div>
  );
};

export default EditEquipment;
