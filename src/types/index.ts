// Tipos de Equipamentos
export interface Equipment {
  id: string;
  assetNumber: string;
  location: string;
  responsible: string;
  status: 'ativo' | 'manutenção' | 'desativado';
  description: string;
  model: string;
  brand: string;
  specs: string;
  value: number;
  acquisitionDate: string;
}

// Tipos de Histórico
export interface HistoryEntry {
  id: string;
  equipmentId: string;
  timestamp: string;
  user: string;
  changeType: 'localização' | 'responsável' | 'status' | 'criou' | 'atualizou';
  oldValue: string;
  newValue: string;
}

// Dados Mock para Demonstração
export const mockEquipment: Equipment[] = [
  {
    id: '1',
    assetNumber: 'LT-2023-001',
    location: 'Matriz',
    responsible: 'João Silva',
    status: 'ativo',
    description: 'Notebook para desenvolvimento',
    model: 'XPS 15',
    brand: 'Dell',
    specs: 'i7, 32GB RAM, 1TB SSD',
    value: 1800,
    acquisitionDate: '2023-01-15'
  },
  {
    id: '2',
    assetNumber: 'PC-2022-045',
    location: 'Obra A',
    responsible: 'Maria Souza',
    status: 'manutenção',
    description: 'Estação para gerenciamento de projetos',
    model: 'ThinkCentre',
    brand: 'Lenovo',
    specs: 'i5, 16GB RAM, 512GB SSD',
    value: 1200,
    acquisitionDate: '2022-08-10'
  },
  {
    id: '3',
    assetNumber: 'IM-2023-012',
    location: 'Departamento Financeiro',
    responsible: 'Carlos Lima',
    status: 'ativo',
    description: 'Impressora a laser colorida',
    model: 'LaserJet Pro',
    brand: 'HP',
    specs: 'Wi-Fi, Impressão Duplex',
    value: 450,
    acquisitionDate: '2023-03-22'
  },
  {
    id: '4',
    assetNumber: 'TB-2022-033',
    location: 'Escritório',
    responsible: 'Ana Pereira',
    status: 'desativado',
    description: 'Tablet para apresentações',
    model: 'iPad Pro',
    brand: 'Apple',
    specs: '12.9", 256GB',
    value: 999,
    acquisitionDate: '2022-05-18'
  },
  {
    id: '5',
    assetNumber: 'LT-2023-022',
    location: 'Engenharia',
    responsible: 'Roberto Souza',
    status: 'ativo',
    description: 'Notebook para engenharia',
    model: 'Precision 5570',
    brand: 'Dell',
    specs: 'i9, 64GB RAM, 2TB SSD, RTX 3080',
    value: 2800,
    acquisitionDate: '2023-02-28'
  }
];

export const mockHistory: HistoryEntry[] = [
  {
    id: '1',
    equipmentId: '1',
    timestamp: '2023-01-15T09:00:00Z',
    user: 'Admin',
    changeType: 'criou',
    oldValue: '',
    newValue: 'Equipamento cadastrado'
  },
  {
    id: '2',
    equipmentId: '1',
    timestamp: '2023-03-20T14:30:00Z',
    user: 'TI',
    changeType: 'localização',
    oldValue: 'TI',
    newValue: 'Matriz'
  },
  {
    id: '3',
    equipmentId: '2',
    timestamp: '2022-08-10T11:15:00Z',
    user: 'Admin',
    changeType: 'criou',
    oldValue: '',
    newValue: 'Equipamento cadastrado'
  },
  {
    id: '4',
    equipmentId: '2',
    timestamp: '2023-05-05T16:45:00Z',
    user: 'Suporte TI',
    changeType: 'status',
    oldValue: 'ativo',
    newValue: 'manutenção'
  },
  {
    id: '5',
    equipmentId: '3',
    timestamp: '2023-03-22T10:00:00Z',
    user: 'Admin',
    changeType: 'criou',
    oldValue: '',
    newValue: 'Equipamento cadastrado'
  }
];
