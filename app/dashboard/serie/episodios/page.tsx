"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  Bell,
  LogOut,
  Send,
  Search,
} from "lucide-react";

import { enviarTelegram } from "../../../../lib/telegram";

export default function EpisodiosPage() {
  const [user, setUser] =
    useState("Cliente");

  const [serie, setSerie] =
    useState("");

  const [temporada, setTemporada] =
    useState("");

  const [episodio, setEpisodio] =
    useState("");

  const [
    temporadaCompleta,
    setTemporadaCompleta,
  ] = useState(false);

  const [resultados, setResultados] =
    useState<any[]>([]);

  // API TMDB
  const API_KEY = "29167ef57aa318463781e17b293618ac";

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

  async function buscarSeries(
    valor: string
  ) {
    setSerie(valor);

    if (!valor.trim()) {
      setResultados([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(
          valor
        )}`
      );

      const data = await response.json();

      setResultados(data.results || []);
    } catch (error) {
      console.log(error);
    }
  }

  function selecionarSerie(
    nome: string
  ) {
    setSerie(nome);

    setResultados([]);
  }

  async function enviarSolicitacao() {

    if (!serie || !temporada) {
      alert(
        "Preencha os campos obrigatórios."
      );
      return;
    }

    // SALVAR PEDIDO
    const novoPedido = {
      tipo: "📺 Episódios",
      nome: serie,
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
      `📺 SOLICITAÇÃO DE EPISÓDIOS

👤 Cliente: ${user}

📡 Série: ${serie}

📀 Temporada: ${temporada}

${
  temporadaCompleta
    ? "✅ Temporada completa"
    : `🎞️ Episódio: ${episodio}`
}`
    );

    alert(
      "Solicitação enviada com sucesso!"
    );

    setSerie("");
    setTemporada("");
    setEpisodio("");
    setTemporadaCompleta(false);
  }

  return (
    <main className="min-h-screen bg-[#070b14] text-white flex flex-col">

      {/* HEADER */}
      <header className="h-[70px] border-b border-cyan-500/20 bg-black/70 backdrop-blur-xl flex items-center justify-between px-6">

        <div className="flex items-center gap-5">

          <Link href="/dashboard/serie">
            <ArrowLeft
              size={22}
              className="text-white hover:text-cyan-400 transition-all"
            />
          </Link>

          <h1 className="text-2xl font-black">
            🔄 Novos Episódios
          </h1>

        </div>

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

          {/* BUSCA */}
          <div className="mb-6 relative">

            <label className="block text-xl font-bold mb-3">
              Buscar série no catálogo{" "}
              <span className="text-red-500">
                *
              </span>
            </label>

            <div className="relative">

              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={serie}
                onChange={(e) =>
                  buscarSeries(
                    e.target.value
                  )
                }
                placeholder="Digite o nome da série"
                className="w-full h-[62px] rounded-2xl bg-[#202020] border border-cyan-500/20 focus:border-cyan-400 outline-none pl-14 pr-5 text-white text-xl"
              />

            </div>

            {/* RESULTADOS */}
            {resultados.length > 0 && (
              <div className="mt-3 bg-[#151515] border border-cyan-500/20 rounded-2xl overflow-hidden">

                {resultados
                  .slice(0, 5)
                  .map((item) => (

                    <button
                      key={item.id}
                      onClick={() =>
                        selecionarSerie(
                          item.name
                        )
                      }
                      className="w-full px-5 py-4 text-left hover:bg-[#1f1f1f] border-b border-white/5 transition-all"
                    >

                      <div className="flex items-center gap-4">

                        <img
                          src={
                            item.poster_path
                              ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                              : "https://placehold.co/100x150"
                          }
                          alt={item.name}
                          className="w-12 h-16 rounded-lg object-cover"
                        />

                        <div>

                          <h2 className="font-bold text-lg">
                            {item.name}
                          </h2>

                          <p className="text-sm text-gray-400">
                            {item.first_air_date?.slice(
                              0,
                              4
                            ) || "S/D"}
                          </p>

                        </div>

                      </div>

                    </button>

                  ))}

              </div>
            )}

          </div>

          {/* TEMPORADA */}
          <div className="mb-6">

            <label className="block text-xl font-bold mb-3">
              Temporada{" "}
              <span className="text-red-500">
                *
              </span>
            </label>

            <input
              type="number"
              value={temporada}
              onChange={(e) =>
                setTemporada(
                  e.target.value
                )
              }
              placeholder="Ex: 2"
              className="w-full h-[62px] rounded-2xl bg-[#202020] border border-cyan-500/20 focus:border-cyan-400 outline-none px-5 text-white text-xl"
            />

          </div>

          {/* CHECKBOX */}
          <div className="mb-6 flex items-center gap-3">

            <input
              type="checkbox"
              checked={temporadaCompleta}
              onChange={() =>
                setTemporadaCompleta(
                  !temporadaCompleta
                )
              }
              className="w-6 h-6"
            />

            <p className="text-xl">
              Solicitar temporada completa
            </p>

          </div>

          {/* EPISÓDIO */}
          {!temporadaCompleta && (
            <div className="mb-8">

              <label className="block text-xl font-bold mb-3">
                Episódio{" "}
                <span className="text-red-500">
                  *
                </span>
              </label>

              <input
                type="number"
                value={episodio}
                onChange={(e) =>
                  setEpisodio(
                    e.target.value
                  )
                }
                placeholder="Ex: 5"
                className="w-full h-[62px] rounded-2xl bg-[#202020] border border-cyan-500/20 focus:border-cyan-400 outline-none px-5 text-white text-xl"
              />

            </div>
          )}

          {/* BOTÃO */}
          <button
            onClick={enviarSolicitacao}
            className="w-full h-[65px] rounded-2xl bg-cyan-400 hover:bg-cyan-300 transition-all text-black font-black text-2xl flex items-center justify-center gap-3"
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