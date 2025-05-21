import React from 'react';

interface SeloProps {
  children: React.ReactNode;
  variante: 'ativo' | 'manutenção' | 'desativado' | 'padrão';
  className?: string;
}

const Selo: React.FC<SeloProps> = ({ 
  children, 
  variante = 'padrão', 
  className = '' 
}) => {
  const variantes = {
    ativo: 'bg-green-100 text-green-800',
    manutenção: 'bg-amber-100 text-amber-800',
    desativado: 'bg-red-100 text-red-800',
    padrão: 'bg-gray-100 text-gray-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantes[variante]} ${className}`}>
      {children}
    </span>
  );
};

export default Selo;
