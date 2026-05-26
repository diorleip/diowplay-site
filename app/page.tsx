export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="max-w-2xl">

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Revenda o{" "}
              <span className="text-blue-500">
                Diow Play  🚀
              </span>
            </h1>

            <p className="mt-7 text-gray-300 text-xl leading-relaxed">
              Ganhe dinheiro revendendo uma plataforma moderna com canais,
              filmes e séries em alta qualidade.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20revender%20Diow%20Play"
                target="_blank"
              >
                <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-bold text-lg">
                  Quero Revender
                </button>
              </a>

              <button className="border border-gray-700 hover:bg-white/5 transition px-8 py-4 rounded-2xl font-bold text-lg">
                Demonstração
              </button>

            </div>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-8 mt-10 text-gray-300 text-lg">

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                Painel Profissional
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                Suporte Completo
              </div>

            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center">

            <div className="w-full max-w-md bg-slate-900 border border-gray-800 rounded-[36px] p-7 shadow-2xl">

              <div className="flex items-center justify-between mb-7">

                <h2 className="text-4xl font-bold">
                  Diow Play
                </h2>

                <span className="bg-green-500 text-sm px-3 py-1 rounded-full font-bold">
                  ONLINE
                </span>

              </div>

              <div className="space-y-5">

                <div className="bg-blue-600 rounded-2xl p-5 text-lg font-semibold">
                  📺 Canais Ao Vivo
                </div>

                <div className="bg-slate-950 border border-gray-800 rounded-2xl p-5 text-lg font-semibold">
                  🎬 Filmes e Séries
                </div>

                <div className="bg-slate-950 border border-gray-800 rounded-2xl p-5 text-lg font-semibold">
                  📱 Smart TV / TV Box
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-gray-800 rounded-[32px] p-8 min-h-[220px]">
            <h3 className="text-3xl font-bold mb-5">
              Painel Completo
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Controle clientes e acessos facilmente.
            </p>
          </div>

          <div className="bg-slate-900 border border-gray-800 rounded-[32px] p-8 min-h-[220px]">
            <h3 className="text-3xl font-bold mb-5">
              Conteúdo Atualizado
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Filmes, séries e canais sempre atualizados.
            </p>
          </div>

          <div className="bg-slate-900 border border-gray-800 rounded-[32px] p-8 min-h-[220px]">
            <h3 className="text-3xl font-bold mb-5">
              Compatibilidade Total
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Funciona em Smart TVs, celular e TV Box.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-slate-900 border border-gray-800 rounded-[40px] p-14 text-center">

          <h2 className="text-5xl font-extrabold">
            Comece hoje sua revenda 
          </h2>

          <p className="text-gray-400 mt-6 text-xl">
            Entre em contato agora e tenha acesso imediato ao painel.
          </p>

          <a
            href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20revender%20Diow%20Play"
            target="_blank"
          >
            <button className="mt-10 bg-blue-600 hover:bg-blue-700 transition px-10 py-4 rounded-2xl font-bold text-lg">
              Falar no WhatsApp
            </button>
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-10 text-center text-gray-400">

        <p className="text-lg">
          Feito por Diow! 🚀
        </p>

        <p className="mt-2 text-base">
          © 2026 DiowPlay. Todos os direitos reservados.
        </p>

      </footer>

    </main>
  )
}