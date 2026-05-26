import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#020817] text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center px-5 py-32"
      >

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/80" />

        {/* EFEITOS */}
        <div className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] bg-[#0066FF]/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />

        {/* CONTEÚDO */}
        <div className="relative z-10 max-w-5xl text-center">

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
            Sua diversão
            <span className="text-cyan-400"> começa aqui.</span>
          </h1>

          <p className="mt-6 text-zinc-300 text-base sm:text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Filmes, séries, canais ao vivo e esportes em um só lugar.
          </p>

          {/* BOTÕES */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

            <a
              href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20testar%20os%20plano%20Diow%20Play."
              target="_blank"
              className="w-full sm:w-auto text-center bg-gradient-to-r from-[#003cff] via-[#00d9ff] to-[#005eff] px-8 py-4 rounded-2xl text-white font-black uppercase text-sm md:text-base shadow-[0_0_35px_rgba(0,217,255,.35)] hover:scale-105 transition-all"
            >
              Assinar Agora
            </a>

            <a
              href="/revenda"
              className="w-full sm:w-auto text-center border border-cyan-400 text-cyan-300 px-8 py-4 rounded-2xl font-black uppercase text-sm md:text-base hover:bg-cyan-400 hover:text-black transition-all"
            >
              Área de Revenda
            </a>

          </div>

        </div>

      </section>

      {/* FILMES */}
      <section className="px-5 md:px-12 py-20">

        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-3xl md:text-5xl font-black mb-8 text-center md:text-left">
            🎬 Filmes & 📺 Séries em Destaque
          </h2>

          <div className="overflow-hidden rounded-[30px] border border-cyan-500 shadow-[0_0_40px_rgba(0,217,255,.25)]">

            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop"
              alt="Banner"
              className="w-full h-[220px] sm:h-[350px] md:h-[600px] object-cover"
            />

          </div>

        </div>

      </section>

      {/* PLANOS */}
      <section
        id="planos"
        className="px-5 md:px-12 py-20"
      >

        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-3xl md:text-5xl font-black mb-16">
            Conheça nossos planos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              { nome: "Mensal", preco: "R$30", icon: "📅" },
              { nome: "Trimestral", preco: "R$80", icon: "📅" },
              { nome: "Semestral", preco: "R$150", icon: "🕒" },
              { nome: "Anual", preco: "R$300", icon: "👑" },
            ].map((plano) => (

              <div
                key={plano.nome}
                className="bg-white rounded-[30px] p-8 text-center text-[#0066FF]"
              >

                <div className="text-5xl mb-5">
                  {plano.icon}
                </div>

                <h3 className="text-3xl font-black mb-4">
                  {plano.nome}
                </h3>

                <span className="block text-4xl font-black mb-8">
                  {plano.preco}
                </span>

                <a
                  target="_blank"
                  href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20testar%20os%20plano%20Diow%20Play."
                  className="block w-full bg-[#0066FF] text-white py-4 rounded-2xl font-black hover:scale-105 transition-all"
                >
                  Testar Agora
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* BENEFÍCIOS */}
      <section className="px-5 md:px-12 py-20">

        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-3xl md:text-5xl font-black mb-16">
            Por que escolher Diow Play?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[
              {
                icon: "🎬",
                titulo: "Melhor Catálogo",
                texto: "Filmes e séries atualizados diariamente.",
              },
              {
                icon: "📺",
                titulo: "Suporte Rápido",
                texto: "Atendimento rápido e eficiente.",
              },
              {
                icon: "📱",
                titulo: "Múltiplos Dispositivos",
                texto: "Assista onde quiser.",
              },
            ].map((item) => (

              <div
                key={item.titulo}
                className="bg-[#07111f] border border-[#0b315f] rounded-[30px] p-10 text-center"
              >

                <div className="text-6xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-black mb-4">
                  {item.titulo}
                </h3>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  {item.texto}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-5 md:px-12 pb-20">

        <div className="max-w-[1400px] mx-auto bg-gradient-to-r from-[#003cff] via-[#00d9ff] to-[#005eff] rounded-[35px] p-10 md:p-16 text-center">

          <h2 className="text-4xl md:text-6xl font-black">
            Diow Play 🚀
          </h2>

          <p className="mt-5 text-white/90 text-lg md:text-2xl">
            Assista onde quiser com máxima qualidade.
          </p>

          <a
            href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20testar%20os%20plano%20Diow%20Play."
            target="_blank"
            className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-2xl font-black uppercase hover:scale-105 transition-all"
          >
            Falar no WhatsApp
          </a>

        </div>

      </section>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href="https://wa.me/5547992027636?text=Olá%20vim%20do%20site%20quero%20testar%20os%20plano%20Diow%20Play."
        target="_blank"
        className="fixed bottom-5 right-5 z-50 w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,.6)] hover:scale-110 transition-all"
      >

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-[32px] h-[32px]"
        />

      </a>

      {/* FOOTER */}
      <footer className="border-t border-white/10 text-center text-zinc-500 py-8 px-5">
        Feito por Diow! 🚀 © 2026 DiowPlay. Todos os direitos reservados.
      </footer>

    </main>
  );
}