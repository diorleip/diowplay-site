"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  Bell,
  LogOut,
  Send,
  Radio,
} from "lucide-react";

import { enviarTelegram } from "../../../lib/telegram";

export default function SolicitarCanalPage() {
  const [user, setUser] = useState("Cliente");

  const [canal, setCanal] =
    useState("");

  const [categoria, setCategoria] =
    useState("");

  const [info, setInfo] =
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

  async function enviarSolicitacao() {

    if (!canal.trim()) {
      alert("Digite o nome do canal.");
      return;
    }

    // SALVAR PEDIDO
    const novoPedido = {
      tipo: "📡 Canal",
      nome: canal,
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
      `📡 NOVA SOLICITAÇÃO DE CANAL

👤 Cliente: ${user}

📺 Canal: ${canal}

🏷️ Categoria:
${categoria || "Não informada"}

📝 Informações:
${info || "Nenhuma"}`
    );

    alert(
      "Solicitação enviada com sucesso!"
    );

    setCanal("");
    setCategoria("");
    setInfo("");
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
            📡 Solicitar Canal
          </h1>

        </div>

        {/* DIREITA */}
        <div className="flex items-center gap-4">

          <Bell
            size={16}
            className="text-white"
          />

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
      <section className="flex-1 flex justify-center px-6 pt-10">

        <div className="w-full max-w-[660px]">

          {/* TÍTULO */}
          <div className="mb-8">

            <div className="flex items-center gap-3 mb-3">

              <Radio
                size={28}
                className="text-cyan-400"
              />

              <h2 className="text-3xl font-black">
                Solicitar Canal
              </h2>

            </div>

            <p className="text-gray-400 text-lg">
              Informe o canal que deseja
              solicitar.
            </p>

          </div>

          {/* CANAL */}
          <div className="mb-6">

            <label className="block text-xl font-bold mb-3">
              Nome do canal{" "}
              <span className="text-red-500">
                *
              </span>
            </label>

            <input
              type="text"
              value={canal}
              onChange={(e) =>
                setCanal(e.target.value)
              }
              placeholder="Ex: ESPN, CNN, Discovery..."
              className="w-full h-[62px] rounded-2xl bg-[#202020] border border-cyan-500/20 focus:border-cyan-400 outline-none px-5 text-white text-xl"
            />

          </div>

          {/* CATEGORIA */}
          <div className="mb-6">

            <label className="block text-xl font-bold mb-3">
              Categoria
            </label>

            <input
              type="text"
              value={categoria}
              onChange={(e) =>
                setCategoria(e.target.value)
              }
              placeholder="Ex: Esportes, Notícias..."
              className="w-full h-[62px] rounded-2xl bg-[#202020] border border-cyan-500/20 focus:border-cyan-400 outline-none px-5 text-white text-xl"
            />

          </div>

          {/* INFO */}
          <div className="mb-8">

            <label className="block text-xl font-bold mb-3">
              Informações adicionais
            </label>

            <textarea
              value={info}
              onChange={(e) =>
                setInfo(e.target.value)
              }
              placeholder="Qualquer detalhe..."
              rows={5}
              className="w-full rounded-2xl bg-[#202020] border border-cyan-500/20 focus:border-cyan-400 outline-none p-5 text-white text-xl resize-none"
            />

          </div>

          {/* BOTÃO */}
          <button
            onClick={enviarSolicitacao}
            className="w-full h-[65px] rounded-2xl bg-cyan-400 hover:bg-cyan-300 transition-all text-black font-black text-2xl flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(0,200,255,0.35)]"
          >

            <Send size={24} />

            Enviar Solicitação

          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full text-center py-5 text-gray-500 text-sm">

        Feito por Diow! 🚀 © 2026
        DiowPlay. Todos os direitos
        reservados.

      </footer>

    </main>
  );
}