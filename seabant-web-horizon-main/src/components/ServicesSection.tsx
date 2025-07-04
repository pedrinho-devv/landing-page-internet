
import React from 'react';
import { Wifi, Shield, Headphones, Wrench, Building, Home } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Wifi,
      title: "Internet Fibra Óptica",
      description: "Conexão ultra-rápida e estável com tecnologia de ponta para sua casa ou empresa.",
      features: ["Velocidade simétrica", "Baixa latência", "99.9% estabilidade"]
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Proteção completa contra ameaças digitais com antivírus e firewall avançados.",
      features: ["Antivírus premium", "Firewall empresarial", "Backup na nuvem"]
    },
    {
      icon: Headphones,
      title: "Suporte 24/7",
      description: "Atendimento técnico especializado disponível 24 horas por dia, todos os dias.",
      features: ["Chat online", "Telefone dedicado", "Atendimento presencial"]
    },
    {
      icon: Wrench,
      title: "Instalação Gratuita",
      description: "Instalação profissional sem custos adicionais, incluindo configuração completa.",
      features: ["Técnico especializado", "Configuração Wi-Fi", "Teste de velocidade"]
    },
    {
      icon: Building,
      title: "Soluções Empresariais",
      description: "Planos corporativos com SLA garantido e suporte técnico especializado.",
      features: ["IP fixo", "SLA 99.9%", "Suporte VIP"]
    },
    {
      icon: Home,
      title: "Wi-Fi Mesh",
      description: "Cobertura total da sua casa ou escritório com nossa rede mesh inteligente.",
      features: ["Cobertura ampla", "Roaming automático", "Gerenciamento remoto"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-blue-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas de conectividade com a mais alta qualidade 
            e tecnologia avançada do mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl border border-gray-200 p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1">
                <div className="mb-6">
                  <div className="bg-blue-100 group-hover:bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300">
                    <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Precisa de uma Solução Personalizada?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Nossa equipe de especialistas está pronta para desenvolver a solução 
            ideal para suas necessidades específicas.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
