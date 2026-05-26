"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Wallet,
  Tv,
  Zap,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const beneficios = [
    {
      icon: <Wallet size={28} />,
      title: "Lucro Imediato",
      desc: "Compre créditos e revenda pelo valor que desejar.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Painel Completo",
      desc: "Gerencie clientes, créditos e testes facilmente.",
    },
    {
      icon: <Tv size={28} />,
      title: "Conteúdo Completo",
      desc: "Canais, filmes e séries em alta qualidade.",
    },
    {
      icon: <Zap size={28} />,
      title: "Ativação Rápida",
      desc: "Liberação rápida e suporte especializado.",
    },
  ];

  const planos = [
    {
      nome: "Teste",
      preco: "Grátis",
      itens: ["Acesso temporário", "Qualidade HD", "Suporte"],
    },
    {
      nome: "Mensal",
      preco: "R$ 25",
      itens: ["1 Tela", "Filmes e Séries", "Canais Ao Vivo"],
    },
    {
      nome: "Revendedor",
      preco: "Personalizado",
      itens: ["Painel Completo", "Créditos", "Gerenciamento"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* Fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Diow Play"
              width={42}
              height={42}
              className="rounded-xl"
            />

            <h1 className="text-2xl font-bold">
              <span className="text-white">Diow</span>{" "}
              <span className="text-[#0066FF]">Play 🚀</span>
            </h1>
          </div>

          <a
            href="https://wa.me/5547992027636"
            target="_blank"
            className="bg-[#0066FF] hover:bg-blue-700 transition px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0066FF]/10 border border-[#0066FF]/30 px-4 py-2 rounded-full text-sm text-[#4DA3FF] mb-6">
              <CheckCircle2 size={16} />
              Plataforma Oficial Diow Play 🚀
            </div>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Ganhe dinheiro com a{" "}
              <span className="text-[#0066FF]">Diow Play 🚀</span>
            </h2>

            <p className="text-gray-300 text-lg mt-6 leading-relaxed max-w-xl">
              Tenha acesso ao painel de revenda e comece hoje mesmo a vender
              acessos IPTV com canais, filmes e séries.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://wa.me/5547992027636"
                target="_blank"
                className="bg-[#0066FF] hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3"
              >
                <MessageCircle size={22} />
                Quero Revender
              </a>

              <a
                href="#planos"
                className="border border-white/20 hover:border-[#0066FF] hover:bg-[#0066FF]/10 transition px-8 py-4 rounded-2xl font-semibold"
              >
                Ver Planos
              </a>
            </div>
          </div>

          {/* Painel */}
          <div className="relative">
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-7 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">
                  Painel Revendedor
                </h3>

                <div className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
                  Online
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="bg-[#0D1329] rounded-2xl p-5 border border-white/5">
                  <p className="text-gray-400 text-sm">Clientes</p>
                  <h4 className="text-3xl font-black mt-2">128</h4>
                </div>

                <div className="bg-[#0D1329] rounded-2xl p-5 border border-white/5">
                  <p className="text-gray-400 text-sm">Créditos</p>
                  <h4 className="text-3xl font-black mt-2">320</h4>
                </div>

                <div className="bg-[#0D1329] rounded-2xl p-5 border border-white/5">
                  <p className="text-gray-400 text-sm">Ativos</p>
                  <h4 className="text-3xl font-black mt-2 text-green-400">
                    117
                  </h4>
                </div>

                <div className="bg-[#0D1329] rounded-2xl p-5 border border-white/5">
                  <p className="text-gray-400 text-sm">Lucro</p>
                  <h4 className="text-3xl font-black mt-2 text-[#0066FF]">
                    R$ 4K
                  </h4>
                </div>
              </div>

              <div className="mt-8 bg-[#0066FF]/10 border border-[#0066FF]/20 rounded-2xl p-5">
                <p className="text-[#4DA3FF] font-medium">
                  Sistema rápido, moderno e fácil de usar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black">
              Vantagens da Revenda
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Tudo que você precisa para começar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-[#0066FF]/50 transition"
              >
                <div className="text-[#0066FF] mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section
        id="planos"
        className="relative z-10 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black">
              Planos Disponíveis
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Escolha o melhor plano para você.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {planos.map((plano, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[32px] p-8 hover:border-[#0066FF]/50 transition"
              >
                <h3 className="text-2xl font-bold">
                  {plano.nome}
                </h3>

                <div className="text-5xl font-black text-[#0066FF] mt-5">
                  {plano.preco}
                </div>

                <div className="mt-8 space-y-4">
                  {plano.itens.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-[#0066FF]"
                      />

                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/5547992027636"
                  target="_blank"
                  className="mt-10 w-full bg-[#0066FF] hover:bg-blue-700 transition rounded-2xl py-4 font-bold flex items-center justify-center gap-3"
                >
                  <MessageCircle size={20} />
                  Solicitar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#0066FF]/20 to-cyan-500/10 border border-[#0066FF]/20 rounded-[40px] p-12 text-center backdrop-blur-2xl">
          <h2 className="text-5xl font-black leading-tight">
            Comece agora sua revenda
          </h2>

          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp e tenha acesso imediato ao sistema
            de revenda Diow Play 🚀
          </p>

          <a
            href="https://wa.me/5547992027636"
            target="_blank"
            className="inline-flex mt-10 bg-[#0066FF] hover:bg-blue-700 transition px-10 py-5 rounded-2xl font-bold text-xl items-center gap-3"
          >
            <MessageCircle size={24} />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-500">
        <p>Feito por Diow! 🚀</p>

        <p className="mt-2">
          © 2026 DiowPlay. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}