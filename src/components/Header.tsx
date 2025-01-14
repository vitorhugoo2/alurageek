import React from 'react';
import { Search, LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">AluraGeek</span>
            </div>
            <div className="hidden sm:block ml-6">
              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="O que deseja encontrar?"
                    className="w-96 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
            <LogIn className="h-5 w-5 mr-2" />
            <span>Entrar</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;