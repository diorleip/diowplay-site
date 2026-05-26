import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#020617] text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <Image
            src="/revenda-banner.png"
            alt="Banner"
            fill
            priority
            className="object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-black/75" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div className="text-center lg:text-left">

              {/* LOGO */}
              <div className="flex justify-center lg:justify-start">

                <Image
                  src="/logo.png"
                  alt="Diow Play"
                  width={180}
                  height={60}
                  priority
                  className="mb-8"
                />

              </div>

              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                Plataforma IPTV Profissional
              </span>

              <h1 className="mt-7 text-5xl lg:text-7xl font-extrabold leading-tight">
                Revenda o{" "}
                <span className="text-blue-500">
                  Diow Play
                </span>
              </h1>

              <p className="mt-6 text-gray-300 text-xl leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                Ganhe dinheiro revendendo uma plataforma moderna com canais,
                filmes e séries em alta qualidade.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

                <a
                  href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20revender%20Diow%20Play"
                  target="_blank"
                >
                  <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-bold text-lg w-full sm:w-auto">
                    Quero Revender
                  </button>
                </a>

                <button className="border border-gray-600 hover:bg-white/10 transition px-8 py-4 rounded-2xl font-bold text-lg w-full sm:w-auto">
                  Ver Demonstração
                </button>

              </div>

              {/* FEATURES */}
              <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start text-gray-300">

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  Painel Profissional
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  Suporte Completo
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  Streaming HD/FHD
                </div>

              </div>

            </div>

            {/* RIGHT CARD */}
            <div className="flex justify-center">

              <div className="bg-[#0F172A]/90 backdrop-blur-xl border border-gray-800 rounded-[35px] p-6 w-full max-w-[420px] shadow-2xl">

                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-4xl font-bold">
                    Diow Play
                  </h2>

                  <span className="bg-green-500 text-sm px-3 py-1 rounded-full font-bold">
                    ONLINE
                  </span>

                </div>

                <div className="space-y-4">

                  <div className="bg-blue-600 rounded-2xl p-5 text-lg font-semibold">
                    📺 +10.000 Canais Ao Vivo
                  </div>

                  <div className="bg-[#020617] border border-gray-800 rounded-2xl p-5 text-lg font-semibold">
                    🎬 Filmes e Séries
                  </div>

                  <div className="bg-[#020617] border border-gray-800 rounded-2xl p-5 text-lg font-semibold">
                    📱 Smart TV / TV Box
                  </div>

                  <div className="bg-[#020617] border border-gray-800 rounded-2xl p-5 text-lg font-semibold">
                    ⚡ Streaming Ultra Rápido
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BENEFÍCIOS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-gray-800 rounded-[30px] p-8">
            <h3 className="text-3xl font-bold mb-4">
              Painel Completo
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Controle clientes, testes e acessos facilmente.
            </p>
          </div>

          <div className="bg-slate-900 border border-gray-800 rounded-[30px] p-8">
            <h3 className="text-3xl font-bold mb-4">
              Conteúdo Atualizado
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Filmes, séries e canais sempre atualizados diariamente.
            </p>
          </div>

          <div className="bg-slate-900 border border-gray-800 rounded-[30px] p-8">
            <h3 className="text-3xl font-bold mb-4">
              Compatibilidade
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Funciona em Smart TVs, celular, TV Box e computador.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 pb-24">

        <div className="max-w-5xl mx-auto bg-slate-900 border border-gray-800 rounded-[40px] p-14 text-center">

          <h2 className="text-5xl font-extrabold leading-tight">
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

        <p className="mt-2">
          © 2026 DiowPlay. Todos os direitos reservados.
        </p>

      </footer>

    </main>
  );
}