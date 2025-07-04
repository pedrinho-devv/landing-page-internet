
import React, { useState } from 'react';
import { Menu, X, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Wifi className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-600">Seabant</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('planos')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Planos
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contato
            </button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Contratar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('planos')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Planos
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contato
              </button>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                Contratar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
