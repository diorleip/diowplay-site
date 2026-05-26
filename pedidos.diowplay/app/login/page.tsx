"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Preencha usuário e senha");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        router.push("/dashboard");
      } else {
        alert(data.message || "Usuário ou senha inválidos");
      }
    } catch (error) {
      alert("Erro ao conectar servidor");
    }

    setLoading(false);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6">
      {/* BOLAS DE FUNDO */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-3xl" />

      {/* CARD LOGIN */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        {/* LOGO */}
        <div className="mb-8 flex flex-col items-center justify-center">
          <Image
            src="/logo.png"
            alt="Diow Play"
            width={90}
            height={90}
            className="mb-4"
            priority
          />

          <h1 className="text-4xl font-bold">
            <span className="text-white">Diow</span>{" "}
            <span className="text-[#0066FF]">Play</span>
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Painel Oficial do Cliente
          </p>
        </div>

        {/* USUÁRIO */}
        <div className="mb-4">
          <label className="mb-2 block text-sm text-gray-300">
            Usuário
          </label>

          <input
            type="text"
            placeholder="Digite seu usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[#0b1120] px-4 py-3 text-white outline-none transition focus:border-[#0066FF]"
          />
        </div>

        {/* SENHA */}
        <div className="mb-6">
          <label className="mb-2 block text-sm text-gray-300">
            Senha
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-[#0b1120] px-4 py-3 pr-14 text-white outline-none transition focus:border-[#0066FF]"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#0066FF]"
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>

        {/* BOTÃO */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full rounded-2xl bg-[#0066FF] py-3 text-lg font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>

        {/* FOOTER */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Feito por Diow! 🚀
          </p>

          <p className="mt-1 text-xs text-gray-500">
            © 2026 DiowPlay. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </main>
  );
}