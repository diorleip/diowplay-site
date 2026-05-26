"use client";

import {
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="suporte"
      className="relative border-t border-cyan-500/10 pt-20 pb-10 overflow-hidden"
    >

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/10 blur-[140px]" />

      <div className="max-w-[1600px] mx-auto px-4 md:px-10 relative z-10">

        {/* TOP */}
        <div className="grid lg:grid-cols-3 gap-14 mb-16">

          {/* BRAND */}
          <div>

            <img
              src="/logo.png"
              alt="Diow Play"
              className="w-[180px] mb-6"
            />

            <p className="text-zinc-400 text-lg leading-relaxed max-w-[450px]">

              Plataforma premium de streaming com filmes,
              séries, esportes, animes e conteúdos exclusivos
              em qualidade máxima.

            </p>

          </div>

          {/* LINKS */}
          <div>

            <h3 className="text-2xl font-black uppercase mb-6">

              Navegação

            </h3>

            <div className="space-y-4 text-zinc-300 text-lg">

              <a
                href="#inicio"
                className="block hover:text-cyan-400 transition-all"
              >
                Início
              </a>

              <a
                href="#planos"
                className="block hover:text-cyan-400 transition-all"
              >
                Planos
              </a>

              <a
                href="/revenda"
                className="block hover:text-cyan-400 transition-all"
              >
                Revenda
              </a>

              <a
                href="#suporte"
                className="block hover:text-cyan-400 transition-all"
              >
                Suporte
              </a>

            </div>

          </div>

          {/* SOCIAL */}
          <div>

            <h3 className="text-2xl font-black uppercase mb-6">

              Redes Oficiais

            </h3>

            <div className="flex gap-4">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/5547992027636"
                target="_blank"
                className="w-[65px] h-[65px] rounded-[22px] bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-3xl hover:scale-110 transition-all"
              >

                <FaWhatsapp />

              </a>

              {/* TELEGRAM */}
              <a
                href="https://t.me/diowplay"
                target="_blank"
                className="w-[65px] h-[65px] rounded-[22px] bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl hover:scale-110 transition-all"
              >

                <FaTelegramPlane />

              </a>

              {/* INSTAGRAM */}
              <a
                href="#"
                className="w-[65px] h-[65px] rounded-[22px] bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 text-3xl hover:scale-110 transition-all"
              >

                <FaInstagram />

              </a>

            </div>

          </div>

        </div>

        {/* LINE */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-8" />

        {/* COPYRIGHT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-zinc-500 text-sm md:text-base text-center md:text-left">

            © 2026 Diow Play — Todos os direitos reservados.

          </p>

          <p className="text-cyan-400 text-sm md:text-base font-bold">

            Feito por Diow 🚀

          </p>

        </div>

      </div>

    </footer>
  );
}