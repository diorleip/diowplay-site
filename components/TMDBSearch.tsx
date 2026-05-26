"use client";

import { useState } from "react";

import {
  FaSearch,
  FaStar,
  FaPlus,
  FaExclamationTriangle,
} from "react-icons/fa";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  vote_average?: number;
  media_type?: string;
}

export default function TMDBSearch() {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState<Movie[]>([]);

  const [loading, setLoading] = useState(false);

  const [reportText, setReportText] = useState("");

  async function searchTMDB() {
    if (!query.trim()) return;

    try {
      setLoading(true);

      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
          query
        )}&language=pt-BR&include_adult=false`,
        {
          method: "GET",

          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
            accept: "application/json",
          },
        }
      );

      const data = await response.json();

      console.log(data);

      if (!data.results) {
        alert("TMDB TOKEN inválido ou não encontrado");
        return;
      }

      const filtered = data.results.filter(
        (item: Movie) =>
          (item.media_type === "movie" ||
            item.media_type === "tv") &&
          item.poster_path
      );

      setResults(filtered);

    } catch (error) {
      console.log(error);

      alert("Erro ao conectar na TMDB");

    } finally {
      setLoading(false);
    }
  }

  function sendReport() {
    if (!reportText.trim()) {
      alert("Digite o problema encontrado");
      return;
    }

    const text =
      `🚨 NOVO ERRO REPORTADO\n\n` +
      `📺 Problema:\n${reportText}`;

    window.open(
      `https://wa.me/5547992027636?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  }

  return (
    <section className="mt-6">

      {/* TITLE */}
      <div className="mb-5">

        <span className="text-cyan-400 uppercase tracking-[3px] text-[10px] font-black">

          Biblioteca TMDB

        </span>

        <h2 className="text-[24px] font-black uppercase mt-1">

          Buscar Conteúdo

        </h2>

      </div>

      {/* SEARCH */}
      <div className="flex gap-3 mb-6">

        <div className="relative flex-1">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 text-sm" />

          <input
            type="text"
            placeholder="Buscar filme ou série..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-[50px] bg-[#081120] border border-cyan-500/10 rounded-[14px] pl-11 pr-4 outline-none text-white placeholder:text-zinc-500 text-sm"
          />

        </div>

        <button
          onClick={searchTMDB}
          className="min-w-[110px] h-[50px] rounded-[14px] bg-gradient-to-r from-[#003cff] via-[#00d9ff] to-[#005eff] text-xs font-black uppercase"
        >

          Buscar

        </button>

      </div>

      {/* LOADING */}
      {loading && (

        <div className="text-cyan-400 text-sm font-bold mb-5">

          Buscando conteúdo...

        </div>

      )}

      {/* RESULTS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mb-10">

        {results.map((movie) => (

          <div
            key={movie.id}
            className="overflow-hidden rounded-[16px] border border-cyan-500/10 bg-[#081120]"
          >

            {/* POSTER */}
            <div className="relative">

              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
                className="w-full h-[240px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />

            </div>

            {/* INFO */}
            <div className="p-3">

              {/* NOTE */}
              <div className="flex items-center gap-2 text-yellow-400 text-[11px] mb-2">

                <FaStar />

                <span className="font-bold">

                  {movie.vote_average?.toFixed(1)}

                </span>

              </div>

              {/* TITLE */}
              <h3 className="text-xs font-black leading-tight line-clamp-2 min-h-[34px] mb-3">

                {movie.title || movie.name}

              </h3>

              {/* REQUEST */}
              <button
                onClick={() => {
                  const text =
                    `🎬 NOVA SOLICITAÇÃO\n\n` +
                    `🎥 Conteúdo: ${movie.title || movie.name}`;

                  window.open(
                    `https://wa.me/5547992027636?text=${encodeURIComponent(
                      text
                    )}`,
                    "_blank"
                  );
                }}
                className="w-full h-[38px] rounded-[10px] bg-gradient-to-r from-[#003cff] via-[#00d9ff] to-[#005eff] flex items-center justify-center gap-2 text-[10px] font-black uppercase"
              >

                <FaPlus />

                Pedir

              </button>

            </div>

          </div>

        ))}

      </div>

      {/* REPORT AREA */}
      <div className="bg-[#081120] border border-red-500/10 rounded-[18px] p-5">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-4">

          <FaExclamationTriangle className="text-red-400" />

          <h3 className="text-sm font-black uppercase text-red-400">

            Reportar Problema

          </h3>

        </div>

        {/* TEXTAREA */}
        <textarea
          placeholder="Ex: Canal HBO travando ou filme sem áudio..."
          value={reportText}
          onChange={(e) => setReportText(e.target.value)}
          className="w-full h-[120px] bg-[#020817] border border-cyan-500/10 rounded-[14px] p-4 outline-none resize-none text-white placeholder:text-zinc-500 text-sm mb-4"
        />

        {/* BUTTON */}
        <button
          onClick={sendReport}
          className="w-full h-[46px] rounded-[12px] bg-gradient-to-r from-[#dc2626] to-[#ef4444] text-xs font-black uppercase"
        >

          Enviar Relatório

        </button>

      </div>

    </section>
  );
}