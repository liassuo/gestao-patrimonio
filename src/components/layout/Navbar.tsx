import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary lg:hidden"
          >
            <Menu size={24} />
          </button>
          <div className="ml-4 lg:ml-0">
            <h1 className="text-xl font-bold text-primary-dark">GIO - Gestão de Patrimônio</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary">
            <Bell size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              <User size={18} />
            </div>
            <span className="hidden md:block text-sm font-medium text-gray-700">
              Administrador
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;