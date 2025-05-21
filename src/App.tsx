import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import EquipmentList from './pages/EquipmentList';
import EquipmentDetailsPage from './pages/EquipmentDetailsPage';
import AddEquipment from './pages/AddEquipment';
import EditEquipment from './pages/EditEquipment';
import Reports from './pages/Reports';
import { Equipment } from './types';
import { mockEquipment } from './types';

function App() {
  const [route, setRoute] = useState('dashboard');
  const [selectedEquipmentId, setSelectedEquipmentId] = useState<string | null>(null);
  const [equipment, setEquipment] = useState<Equipment[]>(mockEquipment);

  const handleViewDetails = (id: string) => {
    setSelectedEquipmentId(id);
    setRoute('equipment-details');
  };

  const handleEditEquipment = (id: string) => {
    setSelectedEquipmentId(id);
    setRoute('edit-equipment');
  };

  const handleDeleteEquipment = (id: string) => {
    const newEquipment = equipment.filter(item => item.id !== id);
    setEquipment(newEquipment);
    setRoute('equipment');
  };

  const handleAddEquipment = (data: Partial<Equipment>) => {
    const newEquipment: Equipment = {
      ...data,
      id: `${equipment.length + 1}`,
      value: data.value || 0,
      status: data.status as 'ativo' | 'manutenção' | 'desativado',
      assetNumber: data.assetNumber || '',
      location: data.location || '',
      responsible: data.responsible || '',
      description: data.description || '',
      model: data.model || '',
      brand: data.brand || '',
      specs: data.specs || '',
      acquisitionDate: data.acquisitionDate || new Date().toISOString().split('T')[0]
    };
    
    setEquipment([...equipment, newEquipment]);
    setRoute('equipment');
  };

  const handleUpdateEquipment = (data: Partial<Equipment>) => {
    const updatedEquipment = equipment.map(item => 
      item.id === selectedEquipmentId ? { ...item, ...data } : item
    );
    
    setEquipment(updatedEquipment);
    setRoute('equipment-details');
  };

  const renderCurrentRoute = () => {
    switch (route) {
      case 'dashboard':
        return <Dashboard />;
      case 'equipment':
        return (
          <EquipmentList 
            onViewDetails={handleViewDetails} 
            onAddNew={() => setRoute('add-equipment')} 
          />
        );
      case 'equipment-details':
        return (
          <EquipmentDetailsPage 
            equipmentId={selectedEquipmentId || ''}
            onBack={() => setRoute('equipment')}
            onEdit={handleEditEquipment}
            onDelete={handleDeleteEquipment}
          />
        );
      case 'add-equipment':
        return (
          <AddEquipment 
            onBack={() => setRoute('equipment')}
            onSubmit={handleAddEquipment}
          />
        );
      case 'edit-equipment':
        return (
          <EditEquipment 
            equipmentId={selectedEquipmentId || ''}
            onBack={() => setRoute('equipment-details')}
            onSubmit={handleUpdateEquipment}
          />
        );
      case 'reports':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeRoute={route} onNavigate={setRoute}>
      {renderCurrentRoute()}
    </Layout>
  );
}

export default App;