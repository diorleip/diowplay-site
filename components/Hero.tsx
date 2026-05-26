"use client";

import { motion } from "framer-motion";
import {
  FaPlay,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-20 pb-24 md:pb-32"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-300px] left-[-300px] w-[900px] h-[900px] bg-cyan-500/20 blur-[180px]" />

      <div className="absolute bottom-[-300px] right-[-300px] w-[900px] h-[900px] bg-blue-700/20 blur-[180px]" />

      {/* GRID */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 grid lg:grid-cols-2 gap-14 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-400/20 px-5 py-3 rounded-full mb-8">

            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

            <span className="uppercase tracking-[4px] text-cyan-300 text-sm font-black">
              Plataforma Premium
            </span>

          </div>

          {/* TITLE */}
          <h1 className="text-[52px] sm:text-[70px] md:text-[95px] leading-[0.88] font-black uppercase mb-8">

            Streaming
            <br />

            <span className="text-cyan-400">
              Premium
            </span>

            <br />

            Diow Play

          </h1>

          {/* DESCRIPTION */}
          <p className="text-zinc-300 text-[18px] md:text-[26px] leading-relaxed max-w-[700px] mb-10">

            Filmes, séries, animes, esportes e conteúdos premium
            em uma plataforma moderna com qualidade máxima.

          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">

            {[
              "Sem travamentos",
              "Qualidade Full HD e 4K",
              "Compatível com Smart TV",
              "Atualizações diárias",
            ].map((item, i) => (

              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-[#081120]/90 border border-cyan-500/10 rounded-[28px] p-5 flex items-center gap-4 backdrop-blur-xl"
              >

                <FaCheckCircle className="text-cyan-400 text-3xl min-w-[30px]" />

                <span className="font-bold text-lg">
                  {item}
                </span>

              </motion.div>

            ))}

          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            {/* ASSINAR */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/5547992027636?text=Olá,%20quero%20assinar%20o%20Diow%20Play"
              target="_blank"
              className="flex items-center gap-4 bg-gradient-to-r from-[#003cff] via-[#00d9ff] to-[#005eff] px-8 py-5 rounded-[24px] font-black uppercase text-lg shadow-[0_0_50px_rgba(0,217,255,.4)]"
            >

              <FaWhatsapp className="text-2xl" />

              Assinar Agora

            </motion.a>

            {/* VER MAIS */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-4 border border-cyan-400/20 bg-white/5 backdrop-blur-xl px-8 py-5 rounded-[24px] font-black uppercase text-lg"
            >

              <FaPlay />

              Ver Conteúdo

            </motion.button>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          {/* GLOW */}
          <div className="absolute inset-0 bg-cyan-500/20 blur-[140px]" />

          {/* CARD */}
          <div className="relative bg-[#081120]/90 border border-cyan-500/10 rounded-[40px] overflow-hidden backdrop-blur-xl shadow-[0_0_120px_rgba(0,217,255,.12)]">

            {/* IMAGE */}
            <div className="relative">

              <img
                src="/poster1.jpg"
                alt="Banner"
                className="w-full h-[650px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-black/20 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-10">

                <div className="inline-flex items-center gap-3 bg-cyan-400 text-black px-4 py-2 rounded-full font-black uppercase text-sm mb-5">

                  <FaPlay />

                  Em Alta

                </div>

                <h2 className="text-[55px] font-black uppercase leading-none mb-4">

                  Conteúdo
                  <br />

                  Premium

                </h2>

                <p className="text-zinc-300 text-lg max-w-[500px]">

                  Os melhores filmes, séries e esportes
                  em uma experiência premium cinematográfica.

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}