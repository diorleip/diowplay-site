import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            {/* LOGO */}
            <div className="flex justify-center lg:justify-start">

              <Image
                src="/logo.png"
                alt="Diow Play"
                width={190}
                height={70}
                priority
                className="mb-10"
              />

            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Ganhe dinheiro revendendo{" "}
              <span className="text-white">
                Diow
              </span>{" "}
              <span className="text-blue-500">
                Play 
              </span>
            </h1>

            <p className="mt-8 text-gray-300 text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Comece sua revenda hoje e tenha lucros recorrentes.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 mt-12 justify-center lg:justify-start">

              <a
                href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20e%20quero%20revender%20Diow%20Play"
                target="_blank"
              >
                <button className="bg-blue-600 hover:bg-blue-700 transition w-full sm:w-[260px] py-8 rounded-2xl font-bold text-xl shadow-2xl text-center">
                  Mais infomações
                </button>
              </a>

              <a
                href="https://diowplay.sigma.st/#/rs/K4Wrwq91eN/rlKWO3Wzo7"
                target="_blank"
              >
                <button className="border border-gray-600 hover:bg-white/10 transition w-full sm:w-[260px] py-8 rounded-2xl font-bold text-xl text-center">
                  Começar Agora
                </button>
              </a>

            </div>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-8 mt-14 justify-center lg:justify-start text-gray-300 text-lg">

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                Painel Profissional
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                Suporte Completo
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                Streaming HD/FHD
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">

            <Image
              src="/revenda-banner.png"
              alt="Revenda Banner"
              width={750}
              height={750}
              priority
              className="w-full max-w-[700px] object-contain"
            />

          </div>

        </div>

      </section>

      {/* BENEFÍCIOS */}
      <section className="px-6 py-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-7">

          {/* CARD */}
          <div className="bg-slate-900 border border-blue-600 rounded-[30px] p-8 text-center shadow-xl">

            <div className="text-5xl mb-6">
              💰
            </div>

            <h3 className="text-2xl font-bold">
              LUCRO ALTO
            </h3>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Comissões atrativas e recorrentes
            </p>

          </div>

          {/* CARD */}
          <div className="bg-slate-900 border border-blue-600 rounded-[30px] p-8 text-center shadow-xl">

            <div className="text-5xl mb-6">
              🎧
            </div>

            <h3 className="text-2xl font-bold">
              SUPORTE
            </h3>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Equipe pronta para ajudar sempre
            </p>

          </div>

          {/* CARD */}
          <div className="bg-slate-900 border border-blue-600 rounded-[30px] p-8 text-center shadow-xl">

            <div className="text-5xl mb-6">
              🖥️
            </div>

            <h3 className="text-2xl font-bold">
              PAINEL FÁCIL
            </h3>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Sistema intuitivo e completo
            </p>

          </div>

          {/* CARD */}
          <div className="bg-slate-900 border border-blue-600 rounded-[30px] p-8 text-center shadow-xl">

            <div className="text-5xl mb-6">
              🚀
            </div>

            <h3 className="text-2xl font-bold">
              ATIVAÇÃO
            </h3>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Ative clientes em segundos
            </p>

          </div>

          {/* CARD */}
          <div className="bg-slate-900 border border-blue-600 rounded-[30px] p-8 text-center shadow-xl">

            <div className="text-5xl mb-6">
              📢
            </div>

            <h3 className="text-2xl font-bold">
              DIVULGAÇÃO
            </h3>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Artes prontas para vender mais
            </p>

          </div>

        </div>

        {/* ESPAÇAMENTO */}
        <div className="mt-20"></div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-12 text-center text-gray-400 mt-10">

        <p className="text-lg">
          Feito por Diow! 🚀
        </p>

        <p className="mt-3">
          © 2026 DiowPlay. Todos os direitos reservados.
        </p>

      </footer>

    </main>
  );
}