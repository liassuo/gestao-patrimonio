import React from 'react';
import { HistoryEntry, Equipment } from '../../types';
import Card from '../common/Card';
import { Clock } from 'lucide-react';

interface RecentActivityProps {
  historyEntries: HistoryEntry[];
  equipment: Equipment[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ historyEntries, equipment }) => {
  const getEquipmentById = (id: string): Equipment | undefined => {
    return equipment.find(item => item.id === id);
  };

  const formatDateTime = (dateTimeString: string) => {
    if (!dateTimeString) return 'N/A';
    const date = new Date(dateTimeString);
    return new Intl.DateTimeFormat('pt-BR', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Sort history entries by timestamp (newest first)
  const sortedEntries = [...historyEntries].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  ).slice(0, 5);

  return (
    <Card title="Atividade Recente" className="p-4">
      <div className="space-y-4">
        {sortedEntries.length > 0 ? (
          sortedEntries.map((entry) => {
            const relatedEquipment = getEquipmentById(entry.equipmentId);
            return (
              <div key={entry.id} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock size={16} className="text-blue-700" />
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {entry.user} 
                    <span className="ml-1 text-gray-500">
                      {entry.changeType === 'criou' 
                        ? 'adicionou' 
                        : `alterou ${entry.changeType}`}
                    </span>
                    {relatedEquipment && (
                      <span className="ml-1 text-blue-600">
                        {relatedEquipment.assetNumber}
                      </span>
                    )}
                  </div>
                  
                  {entry.changeType !== 'criou' && (
                    <div className="mt-1 text-sm text-gray-500">
                      <span className="font-medium">De:</span> {entry.oldValue || 'N/A'} 
                      <span className="mx-1">→</span> 
                      <span className="font-medium">Para:</span> {entry.newValue || 'N/A'}
                    </div>
                  )}
                  
                  <div className="mt-1 text-xs text-gray-400">
                    {formatDateTime(entry.timestamp)}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-gray-500 py-4">
            Nenhuma atividade recente para exibir.
          </div>
        )}
      </div>
    </Card>
  );
};

export default RecentActivity;
