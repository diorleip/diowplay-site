'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {
    async function loadTrending() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=SUA_API_TMDB&language=pt-BR`
        )

        const data = await res.json()
        setMovies(data.results || [])
      } catch (err) {
        console.log(err)
      }
    }

    loadTrending()
  }, [])

  return (
    <main className="bg-[#010814] min-h-screen text-white overflow-hidden">
      {/* FUNDO */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(0,89,255,0.15),transparent_35%)] pointer-events-none" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#010814]/90 border-b border-blue-500/10">
        <div className="max-w-[1800px] mx-auto px-4 md:px-10 py-5 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Diow Play"
              className="w-11 h-11 object-contain"
            />

            <h1 className="text-2xl font-black">
              <span className="text-white">Diow</span>{' '}
              <span className="text-blue-500">Play 🚀</span>
            </h1>
          </div>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-10 text-gray-300 font-semibold">
            <a href="#">Início</a>
            <a href="#">Filmes</a>
            <a href="#">Séries</a>
            <a href="#">Canais</a>
            <a href="#">Suporte</a>
          </nav>

          {/* BOTÃO */}
          <button className="bg-blue-600 hover:bg-blue-500 transition-all px-6 py-3 rounded-full font-bold">
            Assinar Agora
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-10 pt-6">
        <div className="relative overflow-hidden rounded-[35px] border border-blue-500/20">
          {/* IMAGEM */}
          <img
            src="/banner.jpg"
            alt="Banner"
            className="w-full h-[240px] sm:h-[350px] md:h-[500px] lg:h-[700px] object-cover"
          />

          {/* ESCURO */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#010814] via-[#010814]/30 to-transparent" />

          {/* TEXTO */}
          <div className="absolute inset-0 flex items-end">
            <div className="p-5 md:p-14 max-w-[850px]">
              <div className="inline-flex items-center gap-2 bg-blue-600 px-5 py-2 rounded-full text-xs md:text-sm font-black mb-5">
                🚀 FUTURO DO STREAMING
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black leading-[1]">
                SEJA BEM-VINDO AO{' '}
                <span className="text-blue-500">DIOW PLAY 🚀</span>
              </h2>

              <p className="text-gray-300 text-sm md:text-lg mt-5 leading-relaxed max-w-[650px]">
                Filmes, séries, canais e futebol ao vivo em uma plataforma
                moderna e rápida.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-blue-600 hover:bg-blue-500 transition-all px-7 py-4 rounded-2xl font-black">
                  ASSINAR AGORA
                </button>

                <button className="bg-white/10 border border-white/10 backdrop-blur-xl hover:bg-white/20 transition-all px-7 py-4 rounded-2xl font-bold">
                  VER CONTEÚDO
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-[1800px] mx-auto px-4 md:px-10 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: '📺',
              title: '+CANAIS',
              desc: 'Canais ao vivo em alta qualidade.',
            },
            {
              icon: '🎬',
              title: '+FILMES',
              desc: 'Filmes atualizados diariamente.',
            },
            {
              icon: '🍿',
              title: '+SÉRIES',
              desc: 'As melhores séries em um só lugar.',
            },
            {
              icon: '📱',
              title: 'MULTI-TELAS',
              desc: 'Assista em TV, celular e computador.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#07111d] border border-blue-500/10 rounded-[28px] p-5 md:p-7 hover:border-blue-500/40 transition-all"
            >
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-lg md:text-2xl font-black mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TENDÊNCIAS */}
      <section className="max-w-[1800px] mx-auto px-4 md:px-10 py-10 overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-4xl font-black">
            🔥 Tendências do TMDB
          </h2>

          <button className="text-blue-500 font-bold">
            Ver todas →
          </button>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-5 animate-scroll w-max">
            {movies.concat(movies).map((movie, index) => (
              <div
                key={index}
                className="min-w-[170px] md:min-w-[240px] rounded-[26px] overflow-hidden bg-[#07111d] border border-blue-500/10 hover:border-blue-500/40 transition-all"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-[250px] md:h-[360px] object-cover"
                />

                <div className="p-4">
                  <h3 className="font-black text-sm md:text-lg truncate">
                    {movie.title || movie.name}
                  </h3>

                  <p className="text-blue-500 text-sm mt-2 font-bold">
                    ⭐ {movie.vote_average?.toFixed(1)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="max-w-[1800px] mx-auto px-4 md:px-10 py-16">
        <h2 className="text-3xl md:text-5xl font-black mb-10">
          💎 Escolha seu plano
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Mensal',
              price: 'R$ 30',
            },
            {
              title: 'Trimestral',
              price: 'R$ 80',
            },
            {
              title: 'Anual',
              price: 'R$ 300',
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-[#07111d] border border-blue-500/10 rounded-[32px] p-8"
            >
              <h3 className="text-2xl font-black">{plan.title}</h3>

              <div className="text-5xl md:text-6xl font-black text-blue-500 mt-6">
                {plan.price}
              </div>

              <ul className="space-y-4 mt-10 text-gray-300">
                <li>✔ Filmes e séries</li>
                <li>✔ Futebol ao vivo</li>
                <li>✔ Canais em HD</li>
                <li>✔ Suporte rápido</li>
              </ul>

              <button className="w-full mt-10 bg-blue-600 hover:bg-blue-500 transition-all py-4 rounded-2xl font-black">
                Assinar Agora
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-500/10 bg-[#07111d] mt-20">
        <div className="max-w-[1800px] mx-auto px-4 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Diow Play"
              className="w-10 h-10 object-contain"
            />

            <h2 className="text-2xl font-black">
              <span className="text-white">Diow</span>{' '}
              <span className="text-blue-500">Play 🚀</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm text-center md:text-right">
            © 2026 Diow Play 🚀 — Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* ANIMAÇÃO */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  )
}