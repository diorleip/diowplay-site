"use client";

import { motion } from "framer-motion";

import { FaWhatsapp } from "react-icons/fa";

export default function Revenda() {
  return (
    <section
      id="revenda"
      className="pb-24 md:pb-32"
    >

      <div className="max-w-[1600px] mx-auto px-4 md:px-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-[140px]" />

            {/* CARD */}
            <div className="relative overflow-hidden rounded-[40px] border border-cyan-500/10 bg-[#081120]/90 backdrop-blur-xl shadow-[0_0_100px_rgba(0,217,255,.12)]">

              <img
                src="/revenda.jpg"
                alt="Revenda"
                className="w-full h-[650px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />

            </div>

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* TAG */}
            <span className="text-cyan-400 uppercase tracking-[5px] text-sm font-black">

              Revenda Premium

            </span>

            {/* TITLE */}
            <h2 className="text-[50px] md:text-[80px] font-black uppercase leading-[0.9] mt-5 mb-8">

              Ganhe Até

              <br />

              <span className="text-cyan-400">
                300%
              </span>

              <br />

              de Lucro

            </h2>

            {/* TEXT */}
            <p className="text-zinc-300 text-[18px] md:text-[26px] leading-relaxed mb-10">

              Torne-se um revendedor oficial Diow Play e tenha acesso
              a um painel completo para gerenciar clientes,
              créditos e assinaturas premium.

            </p>

            {/* FEATURES */}
            <div className="space-y-5 mb-10">

              {[
                "Painel exclusivo",
                "Controle de clientes",
                "Lucro alto",
                "Suporte prioritário",
              ].map((item, i) => (

                <div
                  key={i}
                  className="bg-[#081120]/80 border border-cyan-500/10 rounded-[24px] px-6 py-5 text-lg font-bold"
                >

                  {item}

                </div>

              ))}

            </div>

            {/* BUTTON */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/5547992027636?text=Olá,%20quero%20ser%20revendedor%20Diow%20Play"
              target="_blank"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-[#16a34a] to-[#22c55e] px-8 py-5 rounded-[26px] font-black uppercase text-lg shadow-[0_0_45px_rgba(34,197,94,.35)]"
            >

              <FaWhatsapp className="text-2xl" />

              Quero Revender

            </motion.a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}