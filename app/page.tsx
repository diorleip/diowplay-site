export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* TEXTO */}
          <div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Revenda o{" "}
              <span className="text-blue-500">
                Diow Play 
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Ganhe dinheiro revendendo uma plataforma moderna com canais,
              filmes e séries em alta qualidade.
            </p>

            {/* BOTÕES */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20revender%20Diow%20Play"
                target="_blank"
              >
                <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold">
                  Quero Revender
                </button>
              </a>

              <button className="border border-gray-700 hover:bg-white/5 transition px-6 py-3 rounded-xl font-semibold">
                Demonstração
              </button>

            </div>

            {/* STATUS */}
            <div className="flex flex-wrap gap-6 mt-8 text-gray-300">

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Painel Profissional
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Suporte Completo
              </div>

            </div>

          </div>

          {/* CARD */}
          <div className="flex justify-center">

            <div className="w-full max-w-sm bg-slate-900 border border-gray-800 rounded-3xl p-6 shadow-2xl">

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold">
                  Diow Play
                </h2>

                <span className="bg-green-500 text-xs px-3 py-1 rounded-full font-semibold">
                  ONLINE
                </span>

              </div>

              <div className="space-y-4">

                <div className="bg-blue-600 rounded-2xl p-4">
                  📺 Canais Ao Vivo
                </div>

                <div className="bg-slate-950 border border-gray-800 rounded-2xl p-4">
                  🎬 Filmes e Séries
                </div>

                <div className="bg-slate-950 border border-gray-800 rounded-2xl p-4">
                  📱 Smart TV / TV Box
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BENEFÍCIOS */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-gray-800 rounded-3xl p-6">
            <h3 className="text-xl font-bold mb-3">
              Painel Completo
            </h3>

            <p className="text-gray-400">
              Controle clientes e acessos facilmente.
            </p>
          </div>

          <div className="bg-slate-900 border border-gray-800 rounded-3xl p-6">
            <h3 className="text-xl font-bold mb-3">
              Conteúdo Atualizado
            </h3>

            <p className="text-gray-400">
              Filmes, séries e canais sempre atualizados.
            </p>
          </div>

          <div className="bg-slate-900 border border-gray-800 rounded-3xl p-6">
            <h3 className="text-xl font-bold mb-3">
              Compatibilidade Total
            </h3>

            <p className="text-gray-400">
              Funciona em Smart TVs, celular e TV Box.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-20">

        <div className="bg-slate-900 border border-gray-800 rounded-3xl p-8 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Comece hoje sua revenda 
          </h2>

          <p className="text-gray-400 mt-4">
            Entre em contato agora e tenha acesso imediato ao painel.
          </p>

          <a
            href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20revender%20Diow%20Play"
            target="_blank"
          >
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-xl font-semibold">
              Falar no WhatsApp
            </button>
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">

        <p>
          Feito por Diow! 🚀
        </p>

        <p className="mt-2">
          © 2026 DiowPlay. Todos os direitos reservados.
        </p>

      </footer>

    </main>
  )
}