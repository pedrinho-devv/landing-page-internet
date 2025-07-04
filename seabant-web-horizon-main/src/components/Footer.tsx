
import React from 'react';
import { Wifi, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    "Início",
    "Sobre",
    "Planos",
    "Serviços",
    "Contato"
  ];

  const services = [
    "Internet Residencial",
    "Internet Empresarial",
    "Wi-Fi Mesh",
    "Suporte Técnico",
    "Instalação"
  ];

  const legal = [
    "Política de Privacidade",
    "Termos de Uso",
    "Regulamento",
    "LGPD",
    "SAC"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wifi className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Seabant</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Há mais de 15 anos conectando pessoas e empresas com a melhor internet 
              do mercado. Qualidade, velocidade e confiabilidade em primeiro lugar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-bold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">
                    Av. Paulista, 1000<br />
                    Bela Vista - São Paulo - SP
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-gray-400">0800 123 4567</p>
                  <p className="text-sm text-gray-500">Atendimento 24h</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <p className="text-gray-400">contato@seabant.com.br</p>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Links Legais */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">Informações Legais</h4>
              <div className="flex flex-wrap gap-4">
                {legal.map((item, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Certificações */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">Certificações</h4>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 px-4 py-2 rounded border">
                  <span className="text-xs text-gray-400">ANATEL</span>
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded border">
                  <span className="text-xs text-gray-400">ISO 9001</span>
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded border">
                  <span className="text-xs text-gray-400">LGPD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Seabant Internet. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              CNPJ: 12.345.678/0001-90 | Licença ANATEL: SCM nº 123456
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
