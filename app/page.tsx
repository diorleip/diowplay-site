'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Tv,
  Film,
  Smartphone,
  CheckCircle,
  PlayCircle
} from 'lucide-react'

export default function Home() {
  return (
    <main className="bg-[#050816] min-h-screen text-white overflow-hidden">
      
      {/* HERO */}
      <section className="relative px-5 py-16 md:py-20 max-w-6xl mx-auto">
        
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

          {/* TEXTOS */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Revenda o{' '}
              <span className="text-[#0066FF]">
                Diow Play 
              </span>
            </motion.h1>

            <p className="text-gray-300 mt-5 text-base md:text-lg leading-relaxed max-w-lg">
              Ganhe dinheiro revendendo uma plataforma moderna com
              canais, filmes e séries em alta qualidade.
            </p>

            {/* BOTÕES */}
            <div className="flex flex-wrap gap-4 mt-8">
              
              <Link
                href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20revender%20Diow%20Play%20🚀"
                target="_blank"
              >
                <button className="bg-[#0066FF] hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold text-sm">
                  Quero Revender
                </button>
              </Link>

              <button className="border border-white/20 px-6 py-3 rounded-xl text-sm flex items-center gap-2 hover:bg-white/5 transition">
                <PlayCircle size={18} />
                Ver Demonstração
              </button>

            </div>

            {/* STATUS */}
            <div className="flex flex-wrap gap-5 mt-8 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#0066FF]" />
                Painel Profissional
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#0066FF]" />
                Suporte Completo
              </span>
            </div>
          </div>

          {/* MOCKUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >
            <div className="bg-[#0B1120] border border-white/10 rounded-3xl p-5 w-[280px] shadow-2xl">
              
              <div className="bg-[#111827] rounded-2xl p-4">

                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-lg">
                    Diow Play
                  </h2>

                  <span className="bg-green-500 text-xs px-2 py-1 rounded-full">
                    ONLINE
                  </span>
                </div>

                <div className="space-y-3">
                  
                  <div className="bg-[#0066FF] rounded-xl p-3 flex items-center gap-3">
                    <Tv size={20} />
                    <span className="text-sm">Canais Ao Vivo</span>
                  </div>

                  <div className="bg-[#111827] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                    <Film size={20} />
                    <span className="text-sm">Filmes e Séries</span>
                  </div>

                  <div className="bg-[#111827] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                    <Smartphone size={20} />
                    <span className="text-sm">Smart TV / TV Box</span>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-5 pb-16 max-w-6xl mx-auto">
        
        <div className="grid md:grid-cols-3 gap-5">

          {[
            {
              title: 'Painel Completo',
              desc: 'Controle clientes e acessos facilmente.'
            },
            {
              title: 'Conteúdo Atualizado',
              desc: 'Filmes, séries e canais sempre atualizados.'
            },
            {
              title: 'Compatibilidade Total',
              desc: 'Funciona em Smart TVs, celular e TV Box.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#0B1120] border border-white/10 rounded-2xl p-5"
            >
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-5 pb-16 max-w-4xl mx-auto text-center">

        <div className="bg-[#0B1120] border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold">
            Comece hoje sua revenda 
          </h2>

          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Entre em contato agora e tenha acesso imediato ao painel.
          </p>

          <Link
            href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20revender%20Diow%20Play%20🚀"
            target="_blank"
          >
            <button className="mt-6 bg-[#0066FF] hover:bg-blue-700 transition px-8 py-3 rounded-xl font-semibold">
              Falar no WhatsApp
            </button>
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        <p>Feito por Diow! 🚀</p>
        <p className="mt-1">
          © 2026 DiowPlay. Todos os direitos reservados.
        </p>
      </footer>

    </main>
  )
}