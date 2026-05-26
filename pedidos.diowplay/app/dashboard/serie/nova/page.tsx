"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  Bell,
  LogOut,
  Search,
  Tv,
  X,
} from "lucide-react";

import { enviarTelegram } from "../../../../lib/telegram";

export default function SolicitarSerieNovaPage() {
  const [user, setUser] = useState("Cliente");
  const [search, setSearch] = useState("");
  const [series, setSeries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

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

  async function buscarSeries(valor: string) {
    setSearch(valor);

    if (!valor.trim()) {
      setSeries([]);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(
          valor
        )}`
      );

      const data = await response.json();

      setSeries(data.results || []);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  async function solicitarSerie(nome: string) {

    // SALVAR PEDIDO
    const novoPedido = {
      tipo: "📺 Série",
      nome: nome,
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
      `📺 NOVA SOLICITAÇÃO DE SÉRIE

👤 Cliente: ${user}

📡 Série: ${nome}`
    );

    alert(
      "Conteúdo solicitado com sucesso!"
    );
  }

  return (
    <main className="min-h-screen bg-[#070b14] text-white flex flex-col">

      {/* HEADER */}
      <header className="h-[70px] border-b border-cyan-500/20 bg-black/70 backdrop-blur-xl flex items-center justify-between px-6">

        {/* ESQUERDA */}
        <div className="flex items-center gap-5">

          <Link href="/dashboard/serie">
            <ArrowLeft
              size={22}
              className="text-white hover:text-cyan-400 transition-all"
            />
          </Link>

          <h1 className="text-2xl font-black">
            📺 Solicitar Série
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
      <section className="flex-1 px-6 py-6">

        {/* BUSCA */}
        <div className="relative">

          <Search
            size={22}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Buscar série..."
            value={search}
            onChange={(e) =>
              buscarSeries(
                e.target.value
              )
            }
            className="w-full h-[60px] rounded-full bg-[#202020] border border-cyan-500/30 focus:border-cyan-400 outline-none pl-14 pr-14 text-white text-xl"
          />

          {search && (
            <button
              onClick={() => {
                setSearch("");
                setSeries([]);
              }}
              className="absolute right-5 top-1/2 -translate-y-1/2"
            >
              <X className="text-gray-400" />
            </button>
          )}

        </div>

        {/* RESULTADOS */}
        <div className="mt-8">

          {loading ? (
            <div className="text-center text-gray-400 mt-20">
              Buscando séries...
            </div>
          ) : series.length > 0 ? (

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

              {series.map(
                (serie) => (
                  <div
                    key={serie.id}
                    className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5"
                  >

                    {/* CAPA */}
                    <img
                      src={
                        serie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${serie.poster_path}`
                          : "https://placehold.co/500x750"
                      }
                      alt={serie.name}
                      className="w-full h-[330px] object-cover"
                    />

                    {/* INFO */}
                    <div className="p-4">

                      <h2 className="font-bold line-clamp-2">
                        {serie.name}
                      </h2>

                      <p className="text-sm text-gray-400 mt-1">
                        {serie.first_air_date?.slice(
                          0,
                          4
                        ) || "S/D"}
                      </p>

                      {/* BOTÃO */}
                      <button
                        onClick={() =>
                          solicitarSerie(
                            serie.name
                          )
                        }
                        className="mt-4 w-full h-11 rounded-xl bg-cyan-400 hover:bg-cyan-300 transition-all text-black font-black"
                      >
                        Solicitar
                      </button>

                    </div>

                  </div>
                )
              )}

            </div>

          ) : (

            <div className="flex flex-col items-center justify-center mt-32 text-gray-400">

              <Tv
                size={70}
                className="text-cyan-400 mb-5"
              />

              <p className="text-2xl">
                Digite o nome da série
                para buscar
              </p>

            </div>

          )}

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