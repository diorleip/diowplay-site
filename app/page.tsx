'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Tv,
  Film,
  Smartphone,
  CheckCircle,
  PlayCircle,
} from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* FUNDO */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 opacity-20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-10 blur-3xl rounded-full" />

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 pt-16 pb-20">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* TEXTO */}
          <div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Revenda o{' '}
              <span className="text-blue-500">
                Diow Play 
              </span>
            </motion.h1>

            <p className="mt-5 text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
              Ganhe dinheiro revendendo uma plataforma moderna com canais,
              filmes e séries em alta qualidade.
            </p>

            {/* BOTÕES */}
            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20revender%20Diow%20Play%20🚀"
                target="_blank"
              >
                <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold text-sm">
                  Quero Revender
                </button>
              </Link>

              <button className="border border-gray-700 hover:bg-white/5 transition px-6 py-3 rounded-xl text-sm flex items-center gap-2">
                <PlayCircle size={18} />
                Ver Demonstração
              </button>

            </div>

            {/* STATUS */}
            <div className="flex flex-wrap gap-5 mt-8 text-sm text-gray-300">

              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-blue-500" />
                Painel Profissional
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-blue-500" />
                Suporte Completo
              </div>

            </div>

          </div>

          {/* MOCKUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >

            <div className="bg-slate-900 border border-gray-800 rounded-3xl p-5 w-[290px] shadow-2xl">

              <div className="bg-slate-950 rounded-2xl p-4">

                <div className="flex items-center justify-between mb-5">

                  <h2 className="font-bold text-xl">
                    Diow Play
                  </h2>

                  <span className="bg-green-500 text-xs px-2 py-1 rounded-full">
                    ONLINE
                  </span>

                </div>

                <div className="space-y-3">

                  <div className="bg-blue-600 rounded-xl p-3 flex items-center gap-3">
                    <Tv size={20} />
                    <span className="text-sm">
                      Canais Ao Vivo
                    </span>
                  </div>

                  <div className="bg-slate-900 border border-gray-800 rounded-xl p-3 flex items-center gap-3">
                    <Film size={20} />
                    <span className="text-sm">
                      Filmes e Séries
                    </span>
                  </div>

                  <div className="bg-slate-900 border border-gray-800 rounded-xl p-3 flex items-center gap-3">
                    <Smartphone size={20} />
                    <span className="text-sm">
                      Smart TV / TV Box
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* BENEFÍCIOS */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 pb-20">

        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-slate-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">
              Painel Completo
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Controle clientes e acessos facilmente.
            </p>
          </div>

          <div className="bg-slate-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">
              Conteúdo Atualizado
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Filmes, séries e canais sempre atualizados.
            </p>
          </div>

          <div className="bg-slate-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">
              Compatibilidade Total
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Funciona em Smart TVs, celular e TV Box.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-5 pb-20">

        <div className="bg-slate-900 border border-gray-800 rounded-3xl p-8 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Comece hoje sua revenda 
          </h2>

          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Entre em contato agora e tenha acesso imediato ao painel.
          </p>

          <Link
            href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20revender%20Diow%20Play%20🚀"
            target="_blank"
          >
            <button className="mt-7 bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-xl font-semibold">
              Falar no WhatsApp
            </button>
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">

        <p>
          Feito por Diow! 🚀
        </p>

        <p className="mt-1">
          © 2026 DiowPlay. Todos os direitos reservados.
        </p>

      </footer>

    </main>
  )
}