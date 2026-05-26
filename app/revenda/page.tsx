export default function RevendaPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-6xl font-bold">
          Diow <span className="text-[#0066FF]">Play 🚀</span>
        </h1>

        <p className="mt-6 text-3xl font-semibold">
          Área de Revenda IPTV
        </p>

        <p className="mt-5 text-zinc-400 text-lg">
          Revenda completa com canais, filmes, séries e suporte.
        </p>

        <a
          href="https://wa.me/5547992027636"
          target="_blank"
          className="inline-block mt-8 bg-[#0066FF] hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-bold"
        >
          Falar no WhatsApp
        </a>
      </div>
    </main>
  );
}