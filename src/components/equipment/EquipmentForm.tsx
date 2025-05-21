import React, { useState } from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';
import { Equipment } from '../../types';

interface EquipmentFormProps {
  initialData?: Partial<Equipment>;
  onSubmit: (data: Partial<Equipment>) => void;
  onCancel: () => void;
}

const EquipmentForm: React.FC<EquipmentFormProps> = ({
  initialData = {},
  onSubmit,
  onCancel
}) => {
  const [formData, setFormData] = useState<Partial<Equipment>>({
    assetNumber: '',
    location: '',
    responsible: '',
    status: 'ativo',
    description: '',
    model: '',
    brand: '',
    specs: '',
    value: 0,
    acquisitionDate: new Date().toISOString().split('T')[0],
    ...initialData
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'value' ? parseFloat(value) || 0 : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.assetNumber?.trim()) {
      newErrors.assetNumber = 'Número de patrimônio é obrigatório';
    }
    
    if (!formData.location?.trim()) {
      newErrors.location = 'Localização é obrigatória';
    }
    
    if (!formData.responsible?.trim()) {
      newErrors.responsible = 'Responsável é obrigatório';
    }
    
    if (!formData.status) {
      newErrors.status = 'Status é obrigatório';
    }
    
    if (!formData.model?.trim()) {
      newErrors.model = 'Modelo é obrigatório';
    }
    
    if (!formData.brand?.trim()) {
      newErrors.brand = 'Marca é obrigatória';
    }
    
    if (formData.value === undefined || formData.value < 0) {
      newErrors.value = 'Valor deve ser um número positivo';
    }
    
    if (!formData.acquisitionDate?.trim()) {
      newErrors.acquisitionDate = 'Data de aquisição é obrigatória';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const statusOptions = [
    { value: 'active', label: 'Ativo' },
    { value: 'maintenance', label: 'Em manutenção' },
    { value: 'decommissioned', label: 'Desativado' }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-900">
            {initialData.id ? 'Editar Equipamento' : 'Adicionar Novo Equipamento'}
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Número de Patrimônio"
              name="assetNumber"
              value={formData.assetNumber || ''}
              onChange={handleChange}
              required
              error={errors.assetNumber}
            />

            <Input
              label="Localização"
              name="location"
              value={formData.location || ''}
              onChange={handleChange}
              required
              error={errors.location}
            />

            <Input
              label="Responsável"
              name="responsible"
              value={formData.responsible || ''}
              onChange={handleChange}
              required
              error={errors.responsible}
            />

            <Select
              label="Status"
              name="status"
              value={formData.status || ''}
              onChange={handleChange}
              options={statusOptions}
              required
              error={errors.status}
            />

            <Input
              label="Descrição"
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              error={errors.description}
            />

            <Input
              label="Modelo"
              name="model"
              value={formData.model || ''}
              onChange={handleChange}
              required
              error={errors.model}
            />

            <Input
              label="Marca"
              name="brand"
              value={formData.brand || ''}
              onChange={handleChange}
              required
              error={errors.brand}
            />

            <Input
              label="Especificações Técnicas"
              name="specs"
              value={formData.specs || ''}
              onChange={handleChange}
              error={errors.specs}
            />

            <Input
              label="Valor (R$)"
              name="value"
              type="number"
              value={formData.value?.toString() || '0'}
              onChange={handleChange}
              required
              error={errors.value}
            />

            <Input
              label="Data de Aquisição"
              name="acquisitionDate"
              type="date"
              value={formData.acquisitionDate || ''}
              onChange={handleChange}
              required
              error={errors.acquisitionDate}
            />
          </div>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end space-x-3">
          <Button variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit">
            {initialData.id ? 'Atualizar Equipamento' : 'Adicionar Equipamento'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EquipmentForm;
