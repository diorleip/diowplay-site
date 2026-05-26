"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  ArrowLeft,
  Bell,
  LogOut,
  Tv,
  RefreshCcw,
  ChevronRight,
} from "lucide-react";

export default function SeriePage() {
  const [user, setUser] = useState("Cliente");

  useEffect(() => {
    const usuario = localStorage.getItem("diow_user");

    if (usuario) {
      setUser(usuario);
    }
  }, []);

  function logout() {
    localStorage.removeItem("diow_user");

    window.location.href = "/login";
  }

  return (
    <main className="min-h-screen bg-[#070b14] text-white flex flex-col">

      {/* HEADER */}
      <header className="h-[70px] border-b border-cyan-500/20 bg-black/70 backdrop-blur-xl flex items-center justify-between px-6">

        {/* ESQUERDA */}
        <div className="flex items-center gap-5">

          <Link href="/dashboard">
            <ArrowLeft
              size={22}
              className="text-white hover:text-cyan-400 transition-all"
            />
          </Link>

          <h1 className="text-2xl font-black">
            <span className="text-white">
              📺 Solicitar Série
            </span>
          </h1>

        </div>

        {/* DIREITA */}
        <div className="flex items-center gap-4">

          <Bell size={16} className="text-white" />

          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-sm font-bold">
            8
          </div>

          <div className="text-white font-bold">
            {user}
          </div>

          <button onClick={logout}>
            <LogOut
              size={18}
              className="hover:text-cyan-400 transition-all"
            />
          </button>

        </div>

      </header>

      {/* CONTEÚDO */}
      <section className="flex-1 flex items-start justify-center px-6 pt-14">

        <div className="w-full max-w-[760px]">

          {/* TEXTO */}
          <div className="text-center mb-10">

            <h2 className="text-3xl font-black">
              O que você deseja fazer?
            </h2>

          </div>

          {/* BOTÕES */}
          <div className="flex flex-col gap-6 mt-8">

            {/* NOVA SÉRIE */}
            <Link
              href="/dashboard/serie/nova"
              className="bg-[#232323] hover:bg-[#2c2c2c] border border-white/5 hover:border-cyan-400/30 rounded-3xl px-8 py-8 flex items-center justify-between transition-all duration-300"
            >

              <div className="flex items-center gap-6">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                  <Tv
                    size={34}
                    className="text-cyan-400"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Solicitar nova série
                  </h3>

                  <p className="text-gray-400 text-lg mt-2">
                    Série que ainda não está no catálogo
                  </p>

                </div>

              </div>

              <ChevronRight
                size={30}
                className="text-gray-400"
              />

            </Link>

            {/* NOVOS EPISÓDIOS */}
            <Link
              href="/dashboard/serie/episodios"
              className="bg-[#232323] hover:bg-[#2c2c2c] border border-white/5 hover:border-cyan-400/30 rounded-3xl px-8 py-8 flex items-center justify-between transition-all duration-300"
            >

              <div className="flex items-center gap-6">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                  <RefreshCcw
                    size={34}
                    className="text-cyan-400"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Solicitar novos episódios
                  </h3>

                  <p className="text-gray-400 text-lg mt-2">
                    Série existente que precisa de novos eps
                  </p>

                </div>

              </div>

              <ChevronRight
                size={30}
                className="text-gray-400"
              />

            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full text-center py-5 text-gray-500 text-sm">
        Feito por Diow! 🚀 © 2026 DiowPlay. Todos os direitos reservados.
      </footer>

    </main>
  );
}