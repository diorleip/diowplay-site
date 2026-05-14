"use client";

import {
  FaWhatsapp,
  FaTelegramPlane,
  FaPlay,
  FaCheckCircle,
} from "react-icons/fa";

const posters = [
  "/poster1.jpg",
  "/poster2.jpg",
  "/poster3.jpg",
  "/poster4.jpg",
  "/poster5.jpg",
  "/poster6.jpg",
  "/poster7.jpg",
  "/poster8.jpg",
  "/poster9.jpg",
];

export default function Home() {
  return (
    <main className="bg-[#020817] text-white min-h-screen overflow-hidden">

      {/* FLOAT BUTTON */}
      <a
        href="https://wa.me/5547992027636?text=Olá,%20vim%20do%20site"
        target="_blank"
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 bg-green-500 w-[65px] md:w-[78px] h-[65px] md:h-[78px] rounded-full flex items-center justify-center text-[34px] md:text-[42px] shadow-[0_0_35px_rgba(34,197,94,.6)] hover:scale-110 transition-all"
      >
        <FaWhatsapp />
      </a>

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-300px] left-[-300px] w-[900px] h-[900px] bg-cyan-500/20 blur-[180px]" />

        <div className="absolute bottom-[-300px] right-[-300px] w-[900px] h-[900px] bg-blue-700/20 blur-[180px]" />

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] bg-[size:90px_90px]" />

      </div>

      {/* HEADER */}
      <header className="max-w-[1600px] mx-auto px-4 md:px-10 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-5">

        <img
          src="/logo.png"
          className="w-[170px] md:w-[220px]"
        />

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">

          <a
            href="https://wa.me/5547992027636"
            target="_blank"
            className="bg-green-600 px-5 md:px-7 py-3 md:py-4 rounded-2xl flex items-center gap-3 font-black text-sm md:text-lg shadow-[0_0_40px_rgba(34,197,94,.4)]"
          >

            <FaWhatsapp className="text-xl md:text-2xl" />

            WhatsApp

          </a>

          <a
            href="https://t.me/diowplay"
            target="_blank"
            className="bg-cyan-600 px-5 md:px-7 py-3 md:py-4 rounded-2xl flex items-center gap-3 font-black text-sm md:text-lg shadow-[0_0_40px_rgba(0,217,255,.4)]"
          >

            <FaTelegramPlane className="text-xl md:text-2xl" />

            Telegram

          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-10 pt-2 md:pt-5 pb-16 md:pb-24">

        <div className="grid lg:grid-cols-[1fr_750px] gap-10 md:gap-16 items-center">

          {/* LEFT */}
          <div>

            <span className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-4 md:px-5 py-2 rounded-full text-[11px] md:text-sm tracking-[3px] uppercase inline-block mb-6 md:mb-10">

              Plataforma Premium

            </span>

            <h1 className="text-[52px] sm:text-[70px] md:text-[95px] leading-[0.88] font-black uppercase mb-6 md:mb-10">

              Streaming
              <br />

              Premium
              <br />

              <span className="text-cyan-400">
                Diow Play
              </span>

            </h1>

            <p className="text-[18px] md:text-[28px] text-zinc-300 leading-relaxed max-w-[650px] mb-10 md:mb-14">

              Filmes, séries, animes, canais e conteúdos premium
              em um único lugar com qualidade máxima.

            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-10 md:mb-14">

              {[
                "Sem travamentos",
                "Qualidade Full HD e 4K",
                "Compatível com Smart TV",
                "Atualizações diárias",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#081120] border border-cyan-500/10 rounded-[24px] md:rounded-[30px] p-5 md:p-7 flex items-center gap-4 md:gap-5"
                >

                  <FaCheckCircle className="text-cyan-400 text-3xl md:text-4xl min-w-[30px]" />

                  <span className="font-black text-[16px] md:text-[22px] leading-tight">
                    {item}
                  </span>

                </div>
              ))}

            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5547992027636?text=Olá,%20vim%20do%20site%20e%20quero%20assinar%20o%20Diow%20Play"
              target="_blank"
              className="inline-flex bg-gradient-to-r from-[#003cff] via-[#00d9ff] to-[#005eff] hover:scale-105 transition-all rounded-[24px] md:rounded-[30px] px-8 md:px-10 py-5 md:py-7 text-[18px] md:text-[24px] font-black uppercase shadow-[0_0_60px_rgba(0,217,255,.45)]"
            >

              Assinar Agora

            </a>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500/10 blur-[150px]" />

            <div className="relative bg-[#081120]/95 border border-cyan-500/10 rounded-[35px] md:rounded-[50px] p-4 md:p-8 backdrop-blur-xl shadow-[0_0_120px_rgba(0,217,255,.08)]">

              {/* MAIN */}
              <div className="relative rounded-[24px] md:rounded-[35px] overflow-hidden mb-4 md:mb-6">

                <img
                  src="/poster1.jpg"
                  className="w-full h-[280px] md:h-[500px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-5 md:p-10">

                  <div className="bg-cyan-500 text-black px-3 md:px-4 py-2 rounded-full font-black text-[10px] md:text-sm inline-flex items-center gap-2 mb-3 md:mb-5">

                    <FaPlay />

                    EM ALTA

                  </div>

                  <h2 className="text-[28px] md:text-[55px] font-black uppercase leading-none mb-3 md:mb-4">
                    Conteúdo
                    <br />
                    Premium
                  </h2>

                  <p className="text-zinc-300 text-[13px] md:text-lg max-w-[500px]">
                    Os melhores filmes, séries e canais em um só lugar.
                  </p>

                </div>

              </div>

              {/* GRID */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">

                {posters.slice(1).map((poster, i) => (
                  <div
                    key={i}
                    className="relative rounded-[18px] md:rounded-[24px] overflow-hidden group"
                  >

                    <img
                      src={poster}
                      className="w-full h-[140px] md:h-[200px] object-cover group-hover:scale-105 transition-all duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PLANOS */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-10 pb-24 md:pb-36">

        <div className="flex items-center justify-center gap-3 md:gap-5 mb-14 md:mb-24">

          <div className="w-[70px] md:w-[220px] h-[3px] rounded-full bg-gradient-to-r from-transparent to-cyan-400 shadow-[0_0_25px_#00d9ff]" />

          <h2 className="text-center text-[38px] md:text-[80px] font-black uppercase tracking-wide whitespace-nowrap">
            PLANOS
          </h2>

          <div className="w-[70px] md:w-[220px] h-[3px] rounded-full bg-gradient-to-l from-transparent to-cyan-400 shadow-[0_0_25px_#00d9ff]" />

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-10">

          {[
            {
              nome:"Mensal",
              valor:"30",
              glow:"#00d9ff"
            },
            {
              nome:"Trimestral",
              valor:"80",
              glow:"#009dff"
            },
            {
              nome:"Semestral",
              valor:"150",
              glow:"#00bfff"
            },
            {
              nome:"Anual",
              valor:"300",
              glow:"#00e1ff"
            },
          ].map((plano, i) => (

            <a
              key={i}
              href="https://wa.me/5547992027636?text=Olá,%20vim%20do%20site%20e%20quero%20assinar%20o%20Diow%20Play"
              target="_blank"
              className="block group"
            >

              <div
                className="rounded-[35px] md:rounded-[42px] p-[2px] h-full transition-all duration-500 group-hover:scale-[1.02]"
                style={{
                  background:`linear-gradient(135deg,#003cff,#00d9ff,#005eff)`,
                  boxShadow:`0 0 35px ${plano.glow}55`
                }}
              >

                <div className="bg-[#07111f]/95 backdrop-blur-xl rounded-[35px] md:rounded-[42px] p-6 md:p-10 h-full border border-cyan-400/10 flex flex-col justify-between">

                  <div>

                    <h3 className="text-[32px] md:text-[44px] text-center font-black uppercase mb-8 md:mb-12 tracking-wide break-words">

                      {plano.nome}

                    </h3>

                    {/* PREÇO */}
                    <div className="flex items-end justify-center gap-1 mb-10 md:mb-14 flex-wrap">

                      <span className="text-[22px] md:text-[30px] font-black text-cyan-300">
                        R$
                      </span>

                      <span
                        className="text-[58px] md:text-[88px] leading-none font-black"
                        style={{
                          background:"linear-gradient(to bottom,#ffffff,#00d9ff)",
                          WebkitBackgroundClip:"text",
                          WebkitTextFillColor:"transparent"
                        }}
                      >

                        {plano.valor}

                      </span>

                      <span className="text-[18px] md:text-[24px] mb-1 md:mb-3 text-cyan-300">
                        ,00
                      </span>

                    </div>

                    <div className="space-y-4 md:space-y-5 mb-10 md:mb-14">

                      {[
                        "Qualidade Premium",
                        "Canais + Filmes",
                        "Séries e Animes",
                        "Suporte 24h",
                      ].map((item, x) => (

                        <div
                          key={x}
                          className="flex items-center gap-3 md:gap-4 text-[16px] md:text-[20px]"
                        >

                          <FaCheckCircle className="text-cyan-400 min-w-[18px]" />

                          <span className="text-zinc-100 break-words">
                            {item}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* BOTÃO */}
                  <div
                    className="w-full py-5 md:py-7 px-4 rounded-[22px] md:rounded-[26px] text-[16px] md:text-[22px] font-black uppercase flex items-center justify-center gap-3 text-white text-center leading-tight"
                    style={{
                      background:"linear-gradient(135deg,#003cff,#00d9ff,#005eff)",
                      boxShadow:"0 0 35px rgba(0,217,255,.45)"
                    }}
                  >

                    <FaWhatsapp className="text-[22px] md:text-[28px] min-w-[22px]" />

                    <span className="break-words">
                      QUERO ASSINAR
                    </span>

                  </div>

                </div>

              </div>

            </a>

          ))}

        </div>

      </section>

      {/* REVENDA */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-10 pb-24 md:pb-32">

        <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-center">

          {/* IMAGEM */}
          <div
            className="relative overflow-hidden rounded-[30px] md:rounded-[45px] border border-cyan-400/10 bg-[#07111f]"
            style={{
              boxShadow:"0 0 70px rgba(0,217,255,.18)"
            }}
          >

            {/* CASO A IMAGEM NÃO CARREGUE */}
            <img
              src="/revenda.jpg"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />

          </div>

          {/* INFO */}
          <div
            className="bg-[#07111f]/95 border border-cyan-400/10 rounded-[30px] md:rounded-[45px] p-6 md:p-14"
            style={{
              boxShadow:"0 0 70px rgba(0,217,255,.12)"
            }}
          >

            <span className="text-cyan-400 uppercase tracking-[5px] text-[11px] md:text-sm font-black">

              REVENDA PREMIUM

            </span>

            <h2 className="text-[42px] md:text-[75px] leading-[0.9] font-black uppercase mt-4 md:mt-5 mb-6 md:mb-8">

              Revenda
              <br />

              <span className="text-cyan-400">
                Diow Play
              </span>

            </h2>

            <p className="text-zinc-300 text-[17px] md:text-[25px] leading-relaxed mb-8 md:mb-12">

              Com a revenda você terá acesso a um painel exclusivo podendo comprar seus créditos e revende-los garantindo uma renda extra e gerenciar todas as suas listas.

            </p>

            {/* 300 */}
            <a
              href="https://wa.me/5547992027636?text=Olá,%20vim%20do%20site%20e%20quero%20vender%20o%20Diow%20Play"
              target="_blank"
              className="block rounded-[28px] md:rounded-[38px] p-[2px] mb-8 md:mb-12 hover:scale-[1.02] transition-all"
              style={{
                background:"linear-gradient(135deg,#003cff,#00d9ff,#005eff)",
                boxShadow:"0 0 45px rgba(0,217,255,.25)"
              }}
            >

              <div className="bg-[#081120] rounded-[28px] md:rounded-[38px] px-4 md:px-8 py-8 md:py-12 text-center">

                <p className="text-[22px] md:text-[32px] uppercase font-black mb-3 text-zinc-200">

                  Quero ter

                </p>

                <h3 className="text-[70px] md:text-[110px] leading-none font-black text-cyan-400 mb-3">

                  300%

                </h3>

                <p className="text-[24px] md:text-[36px] uppercase font-black text-white">

                  de lucro

                </p>

              </div>

            </a>

            {/* BUTTON */}
            <a
              href="https://wa.me/5547992027636?text=Olá,%20vim%20do%20site%20e%20quero%20vender%20o%20Diow%20Play"
              target="_blank"
              className="w-full rounded-[24px] md:rounded-[30px] py-5 md:py-7 px-4 text-[18px] md:text-[26px] font-black uppercase flex items-center justify-center gap-4 text-white transition-all hover:scale-[1.02] text-center"
              style={{
                background:"linear-gradient(135deg,#16a34a,#22c55e)",
                boxShadow:"0 0 40px rgba(34,197,94,.45)"
              }}
            >

              <FaWhatsapp className="text-[26px] md:text-[36px]" />

              FALAR COM CONSULTOR

            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="max-w-[1600px] mx-auto px-4 md:px-10 pb-12 md:pb-16">

        <div className="flex justify-center mb-4">

          <img
            src="/logo.png"
            className="w-[70px] opacity-80"
          />

        </div>

        <div className="flex justify-center mb-6 md:mb-8">

          <div className="w-[200px] md:w-[500px] h-[2px] rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00d9ff]" />

        </div>

        <p className="text-center text-zinc-500 text-[11px] md:text-[13px] leading-[2] max-w-[850px] mx-auto">

          Feito por Diow 🚀. © 2026 DIOW PLAY - Todos os direitos reservados

          <br />

        </p>

      </footer>

    </main>
  );
}