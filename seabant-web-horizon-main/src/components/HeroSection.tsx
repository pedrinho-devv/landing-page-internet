
import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Shield, Clock } from 'lucide-react';

const HeroSection = () => {
  const scrollToPlanos = () => {
    const element = document.getElementById('planos');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Internet de 
                <span className="text-blue-600"> Alta Velocidade</span>
                <br />para sua Casa e Empresa
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Conecte-se com a velocidade que você precisa. Planos a partir de R$ 49,90 
                com instalação gratuita e suporte 24 horas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                onClick={scrollToPlanos}
              >
                Ver Planos
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3"
              >
                Fale Conosco
              </Button>
            </div>

            {/* Características */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ultra Rápida</h3>
                  <p className="text-sm text-gray-600">Até 1GB de velocidade</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Confiável</h3>
                  <p className="text-sm text-gray-600">99.9% de estabilidade</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Suporte 24h</h3>
                  <p className="text-sm text-gray-600">Atendimento contínuo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-4">
                    <div className="w-8 h-8 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-bold">Conectado</h3>
                  <p className="text-blue-100">Velocidade máxima</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Download</span>
                    <span className="font-bold">500 Mbps</span>
                  </div>
                  <div className="w-full bg-blue-400 bg-opacity-30 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-4/5 animate-pulse"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Upload</span>
                    <span className="font-bold">250 Mbps</span>
                  </div>
                  <div className="w-full bg-blue-400 bg-opacity-30 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-3/5 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
