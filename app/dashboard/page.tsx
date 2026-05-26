"use client";

import Link from "next/link";

import {
  Film,
  Tv,
  Radio,
  AlertTriangle,
  LogOut,
  ClipboardList,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState("Cliente");
  const [expiration, setExpiration] =
    useState("Calculando...");

  useEffect(() => {
    const userInfo = JSON.parse(
      localStorage.getItem("diow_user_info") || "{}"
    );

    // USER REAL
    if (userInfo?.username) {
      setUser(userInfo.username);
    }

    // EXPIRAÇÃO REAL
    if (userInfo?.exp_date) {
      function updateExpiration() {
        const exp =
          Number(userInfo.exp_date) * 1000;

        const now = Date.now();

        const diff = exp - now;

        if (diff <= 0) {
          setExpiration("Expirada");
          return;
        }

        const days = Math.floor(
          diff / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
          (diff / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
          (diff / (1000 * 60)) % 60
        );

        if (days > 0) {
          setExpiration(
            `${days}d ${hours}h restantes`
          );
        } else {
          setExpiration(
            `${hours}h ${minutes}m restantes`
          );
        }
      }

      updateExpiration();

      const interval = setInterval(
        updateExpiration,
        1000
      );

      return () => clearInterval(interval);
    }
  }, []);

  function logout() {
    localStorage.removeItem("diow_user");
    localStorage.removeItem("diow_user_info");
    localStorage.removeItem("diow_server_info");

    window.location.href = "/login";
  }

  return (
    <main className="min-h-screen bg-[#070b14] flex flex-col text-white">

      {/* TOPO */}
      <header className="h-[70px] border-b border-cyan-500/20 bg-black/70 backdrop-blur-xl flex items-center justify-between px-6">

        <h1 className="text-3xl font-black">
          <span className="text-white">
            Diow
          </span>{" "}
          <span className="text-cyan-400">
            Play
          </span>
        </h1>

        <div className="flex items-center gap-4">

          <div className="text-white font-bold text-lg">
            {user}
          </div>

          <button onClick={logout}>
            <LogOut
              size={20}
              className="hover:text-cyan-400 transition-all"
            />
          </button>

        </div>

      </header>

      {/* CONTEÚDO */}
      <section className="flex-1 flex flex-col items-center justify-center px-6">

        {/* TÍTULO */}
        <div className="text-center mb-10">

          <h2 className="text-5xl font-black mb-4">
            Olá, {user} 👋
          </h2>

          <p className="text-gray-400 text-2xl">
            O que você deseja fazer?
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-6 w-full max-w-[700px]">

          {/* FILME */}
          <Link href="/dashboard/filme">

            <div className="h-[180px] rounded-3xl bg-[#1b1b1b] hover:bg-[#222] border border-cyan-500/10 hover:border-cyan-400/30 transition-all flex flex-col items-center justify-center cursor-pointer">

              <Film
                size={55}
                className="text-cyan-400 mb-4"
              />

              <h2 className="text-3xl font-black text-center">
                Solicitar Filme
              </h2>

            </div>

          </Link>

          {/* SÉRIE */}
          <Link href="/dashboard/serie">

            <div className="h-[180px] rounded-3xl bg-[#1b1b1b] hover:bg-[#222] border border-cyan-500/10 hover:border-cyan-400/30 transition-all flex flex-col items-center justify-center cursor-pointer">

              <Tv
                size={55}
                className="text-cyan-400 mb-4"
              />

              <h2 className="text-3xl font-black text-center">
                Solicitar Série
              </h2>

            </div>

          </Link>

          {/* CANAL */}
          <Link href="/dashboard/canal">

            <div className="h-[180px] rounded-3xl bg-[#1b1b1b] hover:bg-[#222] border border-cyan-500/10 hover:border-cyan-400/30 transition-all flex flex-col items-center justify-center cursor-pointer">

              <Radio
                size={55}
                className="text-cyan-400 mb-4"
              />

              <h2 className="text-3xl font-black text-center">
                Solicitar Canal
              </h2>

            </div>

          </Link>

          {/* REPORTAR */}
          <Link href="/dashboard/reportar">

            <div className="h-[180px] rounded-3xl bg-[#1b1b1b] hover:bg-[#222] border border-cyan-500/10 hover:border-cyan-400/30 transition-all flex flex-col items-center justify-center cursor-pointer">

              <AlertTriangle
                size={55}
                className="text-cyan-400 mb-4"
              />

              <h2 className="text-3xl font-black text-center">
                Reportar Erro
              </h2>

            </div>

          </Link>

        </div>

        {/* MEUS PEDIDOS */}
        <Link
          href="/dashboard/pedidos"
          className="w-full max-w-[700px] mt-8"
        >

          <div className="h-[60px] rounded-2xl bg-[#121212] hover:bg-[#1a1a1a] border border-cyan-500/10 hover:border-cyan-400/30 transition-all flex items-center justify-center text-xl text-gray-300 gap-3 cursor-pointer">

            <ClipboardList size={22} />

            Meus Pedidos

          </div>

        </Link>

        {/* ASSINATURA */}
        <div className="w-full max-w-[700px] mt-5">

          <div className="h-[60px] rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center px-6 text-cyan-300 text-xl font-bold">

            ✅ Assinatura ativa · Expira
            {" "}
            {expiration}

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