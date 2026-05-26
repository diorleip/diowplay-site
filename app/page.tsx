import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#020617] text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <Image
            src="/revenda-banner.png"
            alt="Revenda Diow Play"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/75" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            {/* LOGO */}
            <Image
              src="/logo.png"
              alt="Diow Play"
              width={180}
              height={60}
              priority
              className="mb-8"
            />

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Ganhe dinheiro revendendo{" "}
              <span className="text-blue-500">
                Diow Play 🚀
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-xl leading-relaxed max-w-2xl">
              Comece sua revenda hoje e tenha lucros recorrentes.
            </p>

            {/* BOTÕES */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <a
                href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20e%20quero%20revender%20Diow%20Play"
                target="_blank"
              >
                <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-bold text-lg w-full sm:w-auto">
                  🚀 Quero Revender
                </button>
              </a>

              <button className="border border-gray-600 hover:bg-white/10 transition px-8 py-4 rounded-2xl font-bold text-lg w-full sm:w-auto">
                Ver Demonstração
              </button>

            </div>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-6 mt-10 text-gray-300">

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

        </div>

      </section>

      {/* BENEFÍCIOS PREMIUM */}
      <section className="bg-[#020617] px-6 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-5 gap-6">

            {/* CARD */}
            <div className="bg-slate-900 border border-blue-600 rounded-[30px] p-7 text-center shadow-2xl">

              <div className="text-5xl mb-5">
                💰
              </div>

              <h3 className="text-2xl font-bold">
                LUCRO ALTO
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Comissões atrativas e recorrentes
              </p>

            </div>

            {/* CARD */}
            <div className="bg-slate-900 border border-blue-600 rounded-[30px] p-7 text-center shadow-2xl">

              <div className="text-5xl mb-5">
                🎧
              </div>

              <h3 className="text-2xl font-bold">
                SUPORTE
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Equipe pronta para ajudar sempre
              </p>

            </div>

            {/* CARD */}
            <div className="bg-slate-900 border border-blue-600 rounded-[30px] p-7 text-center shadow-2xl">

              <div className="text-5xl mb-5">
                🖥️
              </div>

              <h3 className="text-2xl font-bold">
                PAINEL FÁCIL
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Sistema intuitivo e completo
              </p>

            </div>

            {/* CARD */}
            <div className="bg-slate-900 border border-blue-600 rounded-[30px] p-7 text-center shadow-2xl">

              <div className="text-5xl mb-5">
                🚀
              </div>

              <h3 className="text-2xl font-bold">
                ATIVAÇÃO RÁPIDA
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Ative clientes em segundos
              </p>

            </div>

            {/* CARD */}
            <div className="bg-slate-900 border border-blue-600 rounded-[30px] p-7 text-center shadow-2xl">

              <div className="text-5xl mb-5">
                📢
              </div>

              <h3 className="text-2xl font-bold">
                DIVULGAÇÃO
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Artes prontas para vender mais
              </p>

            </div>

          </div>

          {/* BOTÃO */}
          <div className="flex justify-center mt-14">

            <a
              href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20e%20quero%20revender%20Diow%20Play"
              target="_blank"
            >
              <button className="bg-blue-600 hover:bg-blue-700 transition px-12 py-5 rounded-[25px] text-2xl font-bold shadow-2xl">
                🚀 Quero Revender
              </button>
            </a>

          </div>

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