"use client";

import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!user || !password) {
      alert("Preencha usuário e senha.");
      return;
    }

    localStorage.setItem("diow_user", user);

    window.location.href = "/dashboard";
  }

  return (
    <main className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-6">
      {/* Fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-black to-cyan-950/20" />

      {/* Blur */}
      <div className="absolute top-[-120px] left-[-120px] w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-blue-700/20 rounded-full blur-3xl" />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-zinc-950/90 border border-cyan-500/20 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/logo.png"
              alt="Diow Play"
              width={90}
              height={90}
              className="mb-4 drop-shadow-[0_0_20px_rgba(0,255,255,0.35)]"
            />

            <h1 className="text-4xl font-black tracking-wide">
              <span className="text-white">Diow</span>{" "}
              <span className="text-cyan-400">Play</span>
            </h1>

            <p className="text-zinc-400 text-sm mt-2 text-center">
              Painel de pedidos de filmes e séries
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-sm text-zinc-300 mb-2 block">
                Usuário
              </label>

              <input
                type="text"
                placeholder="Digite seu usuário"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="w-full h-12 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-300 mb-2 block">
                Senha
              </label>

              <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white outline-none focus:border-cyan-400 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-bold text-black shadow-lg shadow-cyan-500/20"
            >
              Entrar
            </button>
          </form>

          {/* Telegram */}
          <a
            href="https://t.me/+uslLfs3-3mM4ODAx"
            target="_blank"
            className="mt-6 flex items-center justify-center text-sm text-cyan-400 hover:text-cyan-300 transition"
          >
            Entrar no canal oficial
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 w-full text-center text-sm text-zinc-500 px-4">
        Feito por Diow! 🚀 © 2026 DiowPlay. Todos os direitos reservados.
      </footer>
    </main>
  );
}