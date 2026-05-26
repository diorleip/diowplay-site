export default function Home() {
  return (
    <main className="bg-[#020617] text-white min-h-screen">

      {/* HERO */}
      <section className="w-full px-5 py-14 flex justify-center">

        <div className="w-full max-w-[1100px] grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Revenda o{" "}
              <span className="text-blue-500">
                Diow Play
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-[550px] mx-auto lg:mx-0">
              Ganhe dinheiro revendendo uma plataforma moderna com canais,
              filmes e séries em alta qualidade.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

              <a
                href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20revender%20Diow%20Play"
                target="_blank"
              >
                <button className="bg-blue-600 hover:bg-blue-700 transition px-7 py-3 rounded-2xl font-semibold w-full sm:w-auto">
                  Quero Revender
                </button>
              </a>

              <button className="border border-gray-700 hover:bg-white/5 transition px-7 py-3 rounded-2xl font-semibold w-full sm:w-auto">
                Demonstração
              </button>

            </div>

            {/* FEATURES */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-8 text-gray-300 justify-center lg:justify-start">

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Painel Profissional
              </div>

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Suporte Completo
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <div className="w-full max-w-[340px] bg-slate-900 border border-gray-800 rounded-[30px] p-5 shadow-2xl">

              <div className="flex items-center justify-between mb-5">

                <h2 className="text-3xl font-bold">
                  Diow Play
                </h2>

                <span className="bg-green-500 text-xs px-2 py-1 rounded-full font-bold">
                  ONLINE
                </span>

              </div>

              <div className="space-y-3">

                <div className="bg-blue-600 rounded-2xl p-4 font-medium">
                  📺 Canais Ao Vivo
                </div>

                <div className="bg-[#0F172A] border border-gray-800 rounded-2xl p-4 font-medium">
                  🎬 Filmes e Séries
                </div>

                <div className="bg-[#0F172A] border border-gray-800 rounded-2xl p-4 font-medium">
                  📱 Smart TV / TV Box
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="w-full px-5 pb-14 flex justify-center">

        <div className="w-full max-w-[1100px] grid md:grid-cols-3 gap-5">

          <div className="bg-slate-900 border border-gray-800 rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-3">
              Painel Completo
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Controle clientes e acessos facilmente.
            </p>
          </div>

          <div className="bg-slate-900 border border-gray-800 rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-3">
              Conteúdo Atualizado
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Filmes, séries e canais sempre atualizados.
            </p>
          </div>

          <div className="bg-slate-900 border border-gray-800 rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-3">
              Compatibilidade Total
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Funciona em Smart TVs, celular e TV Box.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="w-full px-5 pb-20 flex justify-center">

        <div className="w-full max-w-[850px] bg-slate-900 border border-gray-800 rounded-[35px] p-10 text-center">

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Comece hoje sua revenda 
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Entre em contato agora e tenha acesso imediato ao painel.
          </p>

          <a
            href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20revender%20Diow%20Play"
            target="_blank"
          >
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-semibold text-lg">
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