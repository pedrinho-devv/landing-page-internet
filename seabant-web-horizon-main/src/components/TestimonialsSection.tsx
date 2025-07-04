
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      content: "A Seabant transformou minha empresa! A internet é super rápida e estável. Nunca mais tive problemas de conexão durante videoconferências importantes.",
      rating: 5,
      location: "São Paulo - SP"
    },
    {
      name: "João Santos",
      role: "Desenvolvedor",
      content: "Como trabalho home office, preciso de uma internet confiável. A Seabant superou minhas expectativas! Upload e download excelentes para meus projetos.",
      rating: 5,
      location: "Rio de Janeiro - RJ"
    },
    {
      name: "Ana Costa",
      role: "Professora",
      content: "O suporte técnico da Seabant é fantástico! Sempre que preciso, eles me atendem rapidamente. A instalação foi super profissional e rápida.",
      rating: 5,
      location: "Belo Horizonte - MG"
    },
    {
      name: "Carlos Oliveira",
      role: "Gamer",
      content: "Ping baixíssimo e velocidade incrível! Consigo jogar online sem lag e fazer streaming ao mesmo tempo. Melhor internet que já tive!",
      rating: 5,
      location: "Curitiba - PR"
    },
    {
      name: "Luciana Ferreira",
      role: "Arquiteta",
      content: "Uso a internet para enviar projetos pesados e fazer reuniões online. A Seabant nunca me deixou na mão. Qualidade excepcional!",
      rating: 5,
      location: "Salvador - BA"
    },
    {
      name: "Roberto Lima",
      role: "Contador",
      content: "Atendimento nota 10! Mudei para a Seabant e não me arrependo. Internet estável, preço justo e suporte sempre disponível.",
      rating: 5,
      location: "Fortaleza - CE"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que Nossos <span className="text-blue-600">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mais de 50.000 clientes confiam na Seabant para suas necessidades de conectividade. 
            Veja alguns depoimentos reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Aspas */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-blue-600 opacity-50" />
              </div>

              {/* Avaliação */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Depoimento */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Informações do cliente */}
              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-blue-600 text-sm font-medium">{testimonial.role}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Junte-se aos Nossos Clientes Satisfeitos!
            </h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Faça parte da família Seabant e experimente a melhor internet do mercado. 
              Instalação gratuita e sem compromisso.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Quero Contratar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
