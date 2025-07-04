
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, MessageCircle, Headphones } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Ligue Agora",
      info: "0800 123 4567",
      description: "Atendimento gratuito 24h",
      action: "Ligar Agora"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(11) 99999-9999",
      description: "Resposta rápida via WhatsApp",
      action: "Chamar no WhatsApp"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@seabant.com.br",
      description: "Resposta em até 2 horas",
      action: "Enviar E-mail"
    }
  ];

  const offices = [
    {
      city: "São Paulo - SP",
      address: "Av. Paulista, 1000 - Bela Vista",
      phone: "(11) 3333-4444",
      hours: "Seg à Sex: 8h às 18h"
    },
    {
      city: "Rio de Janeiro - RJ",
      address: "Rua das Flores, 500 - Copacabana",
      phone: "(21) 3333-5555",
      hours: "Seg à Sex: 8h às 18h"
    },
    {
      city: "Belo Horizonte - MG",
      address: "Av. Brasil, 800 - Centro",
      phone: "(31) 3333-6666",
      hours: "Seg à Sex: 8h às 18h"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-blue-600">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atendê-lo! Escolha a forma de contato que preferir 
            e nossa equipe especializada irá ajudá-lo.
          </p>
        </div>

        {/* Métodos de Contato */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">
                  {method.info}
                </p>
                <p className="text-gray-600 mb-6">
                  {method.description}
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Informações dos Escritórios */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nossos Escritórios
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {offices.map((office, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">
                      {office.city}
                    </h4>
                    <p className="text-gray-600 mb-2">{office.address}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <Phone className="h-4 w-4 mr-2" />
                      {office.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {office.hours}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Atendimento 24h */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
            <div className="flex items-center justify-center mb-4">
              <Headphones className="h-8 w-8 mr-3" />
              <div>
                <h4 className="text-xl font-bold">Suporte 24/7</h4>
                <p className="text-blue-100">Sempre disponível para você</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6">
              Nossa equipe técnica está disponível 24 horas por dia, 7 dias por semana, 
              para resolver qualquer problema ou dúvida.
            </p>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
              Falar com Suporte Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
