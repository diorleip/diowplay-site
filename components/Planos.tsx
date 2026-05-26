"use client";

import { motion } from "framer-motion";

import {
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

const planos = [
  {
    nome: "Mensal",
    valor: "30",
  },
  {
    nome: "Trimestral",
    valor: "80",
  },
  {
    nome: "Semestral",
    valor: "150",
  },
  {
    nome: "Anual",
    valor: "300",
  },
];

export default function Planos() {
  return (
    <section
      id="planos"
      className="pb-24 md:pb-32"
    >

      <div className="max-w-[1600px] mx-auto px-4 md:px-10">

        {/* TITLE */}
        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[5px] text-sm font-black">

            Planos Premium

          </span>

          <h2 className="text-[42px] md:text-[75px] font-black uppercase leading-none mt-5">

            Escolha Seu Plano

          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {planos.map((plano, i) => (

            <motion.a
              key={i}
              href="https://wa.me/5547992027636?text=Olá,%20quero%20assinar%20o%20Diow%20Play"
              target="_blank"
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[38px] p-[2px]"
              style={{
                background:
                  "linear-gradient(135deg,#003cff,#00d9ff,#005eff)",
              }}
            >

              <div className="bg-[#081120]/95 backdrop-blur-xl rounded-[38px] p-8 h-full border border-cyan-400/10">

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none shadow-[inset_0_0_120px_rgba(0,217,255,.18)] rounded-[38px]" />

                {/* NOME */}
                <h3 className="text-[36px] font-black uppercase text-center mb-10">

                  {plano.nome}

                </h3>

                {/* PREÇO */}
                <div className="flex items-end justify-center mb-10">

                  <span className="text-cyan-300 text-2xl font-black mr-1">

                    R$

                  </span>

                  <span
                    className="text-[85px] leading-none font-black"
                    style={{
                      background:
                        "linear-gradient(to bottom,#ffffff,#00d9ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >

                    {plano.valor}

                  </span>

                  <span className="text-cyan-300 text-2xl font-black ml-1 mb-2">

                    ,00

                  </span>

                </div>

                {/* BENEFÍCIOS */}
                <div className="space-y-5 mb-10">

                  {[
                    "Qualidade Premium",
                    "Filmes e Séries",
                    "Animes e Futebol",
                    "Suporte 24h",
                  ].map((item, x) => (

                    <div
                      key={x}
                      className="flex items-center gap-4"
                    >

                      <FaCheckCircle className="text-cyan-400 text-xl" />

                      <span className="text-zinc-200 text-lg">

                        {item}

                      </span>

                    </div>

                  ))}

                </div>

                {/* BUTTON */}
                <div className="bg-gradient-to-r from-[#003cff] via-[#00d9ff] to-[#005eff] rounded-[24px] py-5 flex items-center justify-center gap-4 font-black uppercase text-lg shadow-[0_0_40px_rgba(0,217,255,.35)]">

                  <FaWhatsapp className="text-2xl" />

                  Assinar Agora

                </div>

              </div>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}