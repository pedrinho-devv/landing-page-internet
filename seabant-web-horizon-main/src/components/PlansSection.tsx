
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

const PlansSection = () => {
  const plans = [
    {
      name: "Básico",
      speed: "100 Mbps",
      price: "49,90",
      originalPrice: "69,90",
      features: [
        "100 Mbps de velocidade",
        "Wi-Fi grátis",
        "Instalação gratuita",
        "Suporte técnico",
        "Modem incluso"
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Família",
      speed: "300 Mbps",
      price: "79,90",
      originalPrice: "99,90",
      features: [
        "300 Mbps de velocidade",
        "Wi-Fi 6 grátis",
        "Instalação gratuita",
        "Suporte técnico 24h",
        "Modem Wi-Fi 6 incluso",
        "Netflix por 3 meses"
      ],
      popular: true,
      color: "border-blue-500"
    },
    {
      name: "Premium",
      speed: "500 Mbps",
      price: "119,90",
      originalPrice: "149,90",
      features: [
        "500 Mbps de velocidade",
        "Wi-Fi 6 mesh grátis",
        "Instalação gratuita",
        "Suporte técnico VIP",
        "Roteador mesh incluso",
        "Netflix + Amazon Prime",
        "IP fixo gratuito"
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Ultra",
      speed: "1 Giga",
      price: "189,90",
      originalPrice: "229,90",
      features: [
        "1 Giga de velocidade",
        "Wi-Fi 6E mesh grátis",
        "Instalação gratuita",
        "Suporte técnico VIP",
        "Kit mesh completo",
        "Todos os streamings",
        "IP fixo + DNS premium",
        "Técnico dedicado"
      ],
      popular: false,
      color: "border-gray-200"
    }
  ];

  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Escolha o <span className="text-blue-600">Plano Ideal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Planos flexíveis para atender suas necessidades. Todos com instalação gratuita 
            e sem taxa de adesão.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.color} ${plan.popular ? 'scale-105 shadow-xl' : 'shadow-md'} transition-all hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {plan.speed}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-gray-900">
                      R$ {plan.price}
                    </span>
                    <span className="text-gray-500">/mês</span>
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    De R$ {plan.originalPrice}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  Contratar Agora
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  *Promoção válida por tempo limitado
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou o plano ideal? Temos soluções personalizadas para empresas.
          </p>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Solicitar Orçamento Empresarial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
