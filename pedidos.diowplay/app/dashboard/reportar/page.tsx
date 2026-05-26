"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  Bell,
  LogOut,
  Flag,
  AlertTriangle,
} from "lucide-react";

import { enviarTelegram } from "../../../lib/telegram";

export default function ReportarErroPage() {
  const [user, setUser] = useState("Cliente");

  const [tipoConteudo, setTipoConteudo] =
    useState("");

  const [nomeConteudo, setNomeConteudo] =
    useState("");

  const [problema, setProblema] =
    useState("");

  const [descricao, setDescricao] =
    useState("");

  useEffect(() => {
    const usuario = localStorage.getItem(
      "diow_user"
    );

    if (usuario) {
      setUser(usuario);
    }
  }, []);

  function logout() {
    localStorage.removeItem("diow_user");

    window.location.href = "/login";
  }

  async function reportarProblema() {

    if (
      !tipoConteudo ||
      !nomeConteudo ||
      !problema
    ) {
      alert(
        "Preencha os campos obrigatórios."
      );
      return;
    }

    // SALVAR PEDIDO
    const novoPedido = {
      tipo: "🚨 Reporte",
      nome: nomeConteudo,
      data: new Date().toLocaleString(
        "pt-BR"
      ),
    };

    const pedidos = JSON.parse(
      localStorage.getItem(
        "diow_pedidos"
      ) || "[]"
    );

    pedidos.unshift(novoPedido);

    localStorage.setItem(
      "diow_pedidos",
      JSON.stringify(pedidos)
    );

    // TELEGRAM
    await enviarTelegram(
      `🚨 NOVO REPORTE DE ERRO

👤 Cliente: ${user}

📦 Tipo: ${tipoConteudo}

🎬 Conteúdo: ${nomeConteudo}

⚠️ Problema: ${problema}

📝 Descrição:
${descricao || "Nenhuma"}`
    );

    alert(
      "Problema reportado com sucesso!"
    );

    setTipoConteudo("");
    setNomeConteudo("");
    setProblema("");
    setDescricao("");
  }

  const tiposProblema = [
    "🔇 Sem áudio",
    "🚫 Sem imagem",
    "⏳ Travando",
    "❌ Fora do ar",
    "📉 Qualidade",
    "💬 Legendas",
  ];

  return (
    <main className="min-h-screen bg-[#070b14] text-white flex flex-col">

      {/* HEADER */}
      <header className="h-[65px] border-b border-cyan-500/20 bg-black/80 backdrop-blur-xl flex items-center justify-between px-5">

        <div className="flex items-center gap-4">

          <Link href="/dashboard">
            <ArrowLeft
              size={20}
              className="text-white hover:text-cyan-400 transition-all"
            />
          </Link>

          <h1 className="text-xl font-black">
            ⚠️ Reportar Erro
          </h1>

        </div>

        <div className="flex items-center gap-4">

          <Bell
            size={15}
            className="text-white"
          />

          <div className="text-white font-bold text-sm">
            {user}
          </div>

          <button onClick={logout}>
            <LogOut
              size={17}
              className="hover:text-cyan-400 transition-all"
            />
          </button>

        </div>

      </header>

      {/* CONTEÚDO */}
      <section className="flex-1 flex justify-center px-5 pt-8 pb-8">

        <div className="w-full max-w-[620px]">

          {/* AVISO */}
          <div className="mb-6 bg-cyan-500/10 border border-cyan-400/20 rounded-2xl px-5 py-4 flex gap-4">

            <AlertTriangle className="text-cyan-400 min-w-[20px]" />

            <div>

              <p className="text-cyan-300 font-bold text-base">
                Use esta área somente para conteúdos já existentes com problema.
              </p>

              <p className="text-cyan-200/80 text-sm mt-1">
                Para solicitar algo novo,
                volte ao início.
              </p>

            </div>

          </div>

          {/* TIPO */}
          <div className="mb-6">

            <label className="block text-lg font-bold mb-3">
              Tipo do conteúdo{" "}
              <span className="text-red-500">
                *
              </span>
            </label>

            <div className="flex flex-wrap gap-3">

              {[
                "🎬 Filme",
                "📺 Série",
                "📡 Canal",
              ].map((item) => (

                <button
                  key={item}
                  onClick={() =>
                    setTipoConteudo(item)
                  }
                  className={`px-5 h-[45px] rounded-full font-bold text-base transition-all ${
                    tipoConteudo === item
                      ? "bg-cyan-400 text-black"
                      : "bg-[#1b1b1b] text-white border border-cyan-500/10"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          {/* NOME */}
          <div className="mb-6">

            <label className="block text-lg font-bold mb-3">
              Nome do conteúdo{" "}
              <span className="text-red-500">
                *
              </span>
            </label>

            <input
              type="text"
              value={nomeConteudo}
              onChange={(e) =>
                setNomeConteudo(
                  e.target.value
                )
              }
              placeholder="Ex: Breaking Bad, ESPN..."
              className="w-full h-[58px] rounded-2xl bg-[#1b1b1b] border border-cyan-500/20 focus:border-cyan-400 outline-none px-5 text-white text-lg"
            />

          </div>

          {/* PROBLEMAS */}
          <div className="mb-6">

            <label className="block text-lg font-bold mb-3">
              Tipo de problema{" "}
              <span className="text-red-500">
                *
              </span>
            </label>

            <div className="flex flex-wrap gap-3">

              {tiposProblema.map((item) => (

                <button
                  key={item}
                  onClick={() =>
                    setProblema(item)
                  }
                  className={`px-5 h-[45px] rounded-full font-bold text-base transition-all ${
                    problema === item
                      ? "bg-cyan-400 text-black"
                      : "bg-[#1b1b1b] text-white border border-cyan-500/10"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          {/* DESCRIÇÃO */}
          <div className="mb-6">

            <label className="block text-lg font-bold mb-3">
              Descrição adicional
            </label>

            <textarea
              value={descricao}
              onChange={(e) =>
                setDescricao(
                  e.target.value
                )
              }
              placeholder="Descreva o problema..."
              rows={4}
              className="w-full rounded-2xl bg-[#1b1b1b] border border-cyan-500/20 focus:border-cyan-400 outline-none p-5 text-white text-lg resize-none"
            />

          </div>

          {/* BOTÃO */}
          <button
            onClick={reportarProblema}
            className="w-full h-[60px] rounded-2xl bg-cyan-400 hover:bg-cyan-300 transition-all text-black font-black text-xl flex items-center justify-center gap-3"
          >

            <Flag size={22} />

            Reportar Problema

          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full text-center py-4 text-gray-500 text-xs">

        Feito por Diow! 🚀 © 2026
        DiowPlay. Todos os direitos
        reservados.

      </footer>

    </main>
  );
}