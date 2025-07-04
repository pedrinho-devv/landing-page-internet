
import React from 'react';
import { Users, Award, MapPin, Clock } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: "50.000+",
      label: "Clientes Conectados"
    },
    {
      icon: Award,
      number: "15+",
      label: "Anos de Experiência"
    },
    {
      icon: MapPin,
      number: "100+",
      label: "Cidades Atendidas"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Suporte Técnico"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Sobre a <span className="text-blue-600">Seabant</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Há mais de 15 anos conectando pessoas e empresas com a melhor internet 
                do mercado. Somos uma empresa brasileira focada em oferecer soluções 
                de conectividade de alta qualidade.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Qualidade Garantida</h3>
                  <p className="text-gray-600">
                    Nossa infraestrutura de fibra óptica garante velocidade e estabilidade 
                    incomparáveis para todos os nossos clientes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Atendimento Personalizado</h3>
                  <p className="text-gray-600">
                    Cada cliente é único para nós. Oferecemos suporte técnico especializado 
                    e atendimento humanizado 24 horas por dia.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cobertura Ampla</h3>
                  <p className="text-gray-600">
                    Presente em mais de 100 cidades, levamos internet de qualidade 
                    para residências e empresas em todo o país.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Nossa Trajetória
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <stat.icon className="h-8 w-8 text-blue-600 mx-auto" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-4">Nossa Missão</h4>
              <p className="text-blue-100 leading-relaxed">
                Democratizar o acesso à internet de alta qualidade, conectando pessoas 
                e empresas às oportunidades do mundo digital com excelência e inovação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
