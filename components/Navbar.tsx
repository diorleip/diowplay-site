"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#020817]/70 border-b border-cyan-500/10"
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="Diow Play"
            className="w-[140px] md:w-[180px]"
          />

        </div>

        {/* MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-white font-semibold">

          <a
            href="#inicio"
            className="hover:text-cyan-400 transition-all"
          >
            Início
          </a>

          <a
            href="#planos"
            className="hover:text-cyan-400 transition-all"
          >
            Planos
          </a>

          <a
            href="/revenda"
            className="hover:text-cyan-400 transition-all"
          >
            Revenda
          </a>

          <a
            href="#suporte"
            className="hover:text-cyan-400 transition-all"
          >
            Suporte
          </a>

        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">

          {/* TELEGRAM */}
          <a
            href="https://t.me/diowplay"
            target="_blank"
            className="hidden md:flex items-center justify-center w-[50px] h-[50px] rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 hover:scale-110 transition-all"
          >
            <FaTelegramPlane className="text-xl" />
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/5547992027636"
            target="_blank"
            className="flex items-center gap-3 bg-gradient-to-r from-[#003cff] via-[#00d9ff] to-[#005eff] px-5 md:px-7 py-3 rounded-2xl font-black uppercase text-sm md:text-base shadow-[0_0_35px_rgba(0,217,255,.35)] hover:scale-105 transition-all"
          >
            <FaWhatsapp className="text-lg" />

            Assinar
          </a>

        </div>

      </div>
    </motion.header>
  );
}