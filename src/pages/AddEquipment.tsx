import React from 'react';
import { Equipment } from '../types';
import EquipmentForm from '../components/equipment/EquipmentForm';
import Button from '../components/common/Button';
import { ArrowLeft } from 'lucide-react';

interface AddEquipmentProps {
  onBack: () => void;
  onSubmit: (data: Partial<Equipment>) => void;
}

const AddEquipment: React.FC<AddEquipmentProps> = ({ onBack, onSubmit }) => {
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
        <h1 className="text-2xl font-bold text-gray-900">Adicionar Novo Equipamento</h1>
      </div>

      <EquipmentForm 
        onSubmit={onSubmit}
        onCancel={onBack}
      />
    </div>
  );
};

export default AddEquipment;
