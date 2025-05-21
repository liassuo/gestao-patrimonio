import React from 'react';
import { 
  Home, 
  Laptop, 
  History, 
  FileText, 
  Settings,
  PlusCircle,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeRoute: string;
  onNavigate: (route: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeRoute, onNavigate }) => {
  const menuItems = [
    { name: 'Dashboard', icon: <Home size={20} />, route: 'dashboard' },
    { name: 'Equipamentos', icon: <Laptop size={20} />, route: 'equipment' },
    { name: 'Adicionar Novo', icon: <PlusCircle size={20} />, route: 'add-equipment' },
    { name: 'Relatórios', icon: <FileText size={20} />, route: 'reports' },
    { name: 'Configurações', icon: <Settings size={20} />, route: 'settings' },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-20 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:relative lg:inset-auto lg:w-64 transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-full bg-primary-dark text-white">
        <div className="flex items-center justify-center h-16 border-b border-opacity-20">
          <img
            src="../images/logo.png"
            alt="Logo"
            className="h-8 w-auto mr-2"
            justify-content="center"
            style={{ width: '180px', height: 'auto' }}
          />
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.route}>
                <button
                  className={`flex items-center w-full px-4 py-3 rounded-md transition-colors ${
                    activeRoute === item.route
                      ? 'bg-primary text-white'
                      : 'text-white/90 hover:bg-primary hover:text-white'
                  }`}
                  onClick={() => onNavigate(item.route)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-opacity-20">
          <button className="flex items-center w-full px-4 py-3 rounded-md text-white/90 hover:bg-primary hover:text-white transition-colors">
            <LogOut size={20} className="mr-3" />
            <span>Sair</span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => onNavigate(activeRoute)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;