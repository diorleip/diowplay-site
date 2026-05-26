"use client";

import Image from "next/image";
import {
  DollarSign,
  Headphones,
  Monitor,
  Rocket,
  Users,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  const whatsappLink =
    "https://wa.me/5547992027636?text=Ol%C3%A1%20vim%20do%20site%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20revenda%20diow%20play";

  const revendaLink =
    "https://diowplay.sigma.st/#/rs/K4Wrwq91eN/rlKWO3Wzo7";

  const cards = [
    {
      icon: <DollarSign size={55} />,
      title: "LUCRO ALTO",
      desc: "Ganhos recorrentes e ótima margem de lucro.",
    },
    {
      icon: <Headphones size={55} />,
      title: "SUPORTE COMPLETO",
      desc: "Equipe pronta para te ajudar sempre.",
    },
    {
      icon: <Monitor size={55} />,
      title: "PAINEL FÁCIL",
      desc: "Sistema intuitivo para gerenciar tudo.",
    },
    {
      icon: <Rocket size={55} />,
      title: "ATIVAÇÃO RÁPIDA",
      desc: "Ative clientes em poucos segundos.",
    },
    {
      icon: <Users size={55} />,
      title: "MATERIAL DE DIVULGAÇÃO",
      desc: "Artes e conteúdos prontos para vender.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/bg-stars.jpg')] bg-cover bg-center opacity-20" />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#001133] via-black to-[#001133]" />

      {/* Conteúdo */}
      <div className="relative z-10">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-10 pb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Texto */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="/logo.png"
                  alt="Diow Play"
                  width={90}
                  height={90}
                />

                <div>
                  <h1 className="text-5xl font-black leading-none">
                    DIOW
                  </h1>

                  <p className="text-[#0066FF] text-3xl font-bold tracking-[5px]">
                    PLAY
                  </p>
                </div>
              </div>

              <h2 className="text-5xl lg:text-7xl font-black leading-[0.95]">
                Ganhe dinheiro revendendo
                <span className="block text-[#0066FF] mt-3">
                  Diow Play 🚀
                </span>
              </h2>

              <p className="text-2xl text-gray-300 mt-8 leading-relaxed max-w-xl">
                Comece sua revenda hoje e tenha{" "}
                <span className="text-[#0066FF] font-bold">
                  lucros recorrentes.
                </span>
              </p>

              {/* Botões */}
              <div className="flex flex-col md:flex-row gap-5 mt-12">
                <a
                  href={revendaLink}
                  target="_blank"
                  className="bg-gradient-to-r from-[#003cff] to-[#0066FF] hover:scale-105 transition-all duration-300 rounded-3xl px-8 py-6 flex items-center justify-between gap-5 shadow-[0_0_30px_rgba(0,102,255,0.5)]"
                >
                  <div>
                    <h3 className="text-2xl font-black">
                      QUERO REVENDER
                    </h3>

                    <p className="text-sm text-gray-200 mt-1">
                      Começar agora
                    </p>
                  </div>

                  <ArrowRight size={32} />
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  className="bg-gradient-to-r from-[#009933] to-[#00cc66] hover:scale-105 transition-all duration-300 rounded-3xl px-8 py-6 flex items-center justify-between gap-5 shadow-[0_0_30px_rgba(0,255,100,0.4)]"
                >
                  <div>
                    <h3 className="text-2xl font-black">
                      MAIS INFORMAÇÕES
                    </h3>

                    <p className="text-sm text-gray-100 mt-1">
                      Falar no WhatsApp
                    </p>
                  </div>

                  <ArrowRight size={32} />
                </a>
              </div>
            </div>

            {/* Imagem */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#0066FF]/20 blur-[120px]" />

              <Image
                src="/revenda-banner.png"
                alt="Revenda Diow Play"
                width={900}
                height={900}
                className="relative z-10 object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#050816] border border-[#0066FF]/40 rounded-[30px] p-8 text-center hover:border-[#0066FF] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(0,102,255,0.15)]"
              >
                <div className="text-[#0066FF] flex justify-center mb-6">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-black mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="bg-gradient-to-r from-[#001f66] to-[#003cff] rounded-[40px] p-10 text-center shadow-[0_0_60px_rgba(0,102,255,0.4)]">
            <h2 className="text-4xl lg:text-6xl font-black leading-tight">
              COMECE AGORA E MUDE
              <span className="block">
                SEUS RESULTADOS 🚀
              </span>
            </h2>

            <a
              href={revendaLink}
              target="_blank"
              className="inline-flex mt-10 bg-white text-black hover:scale-105 transition-all duration-300 px-10 py-5 rounded-2xl text-2xl font-black items-center gap-4"
            >
              QUERO REVENDER
              <ArrowRight size={30} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="Diow Play"
                width={60}
                height={60}
              />

              <div>
                <h3 className="text-2xl font-black">
                  DIOW PLAY
                </h3>

                <p className="text-gray-400">
                  Feito por Diow! 🚀
                </p>
              </div>
            </div>

            <p className="text-gray-500 text-center">
              © 2026 DiowPlay. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}