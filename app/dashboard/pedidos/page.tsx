"use client";

import Link from "next/link";

import {
  ArrowLeft,
  ClipboardList,
  Trash2,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

export default function PedidosPage() {

  const [pedidos, setPedidos] =
    useState<any[]>([]);

  useEffect(() => {
    carregarPedidos();
  }, []);

  function carregarPedidos() {

    const dados = localStorage.getItem(
      "diow_pedidos"
    );

    if (dados) {
      setPedidos(JSON.parse(dados));
    }

  }

  function limparPedidos() {

    localStorage.removeItem(
      "diow_pedidos"
    );

    setPedidos([]);

    alert(
      "Pedidos removidos com sucesso!"
    );

  }

  return (
    <main className="min-h-screen bg-[#070b14] text-white flex flex-col">

      {/* HEADER */}
      <header className="h-[65px] border-b border-cyan-500/20 bg-black/80 backdrop-blur-xl flex items-center justify-between px-6">

        <div className="flex items-center gap-5">

          <Link href="/dashboard">
            <ArrowLeft
              size={22}
              className="hover:text-cyan-400 transition-all"
            />
          </Link>

          <h1 className="text-2xl font-black">
            📋 Meus Pedidos
          </h1>

        </div>

        {pedidos.length > 0 && (

          <button
            onClick={limparPedidos}
            className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-all"
          >

            <Trash2 size={18} />

            Limpar

          </button>

        )}

      </header>

      {/* CONTEÚDO */}
      <section className="flex-1 px-5 py-8 flex justify-center">

        <div className="w-full max-w-[700px]">

          {pedidos.length > 0 ? (

            <div className="space-y-4">

              {pedidos.map(
                (pedido, index) => (

                  <div
                    key={index}
                    className="bg-[#1b1b1b] border border-cyan-500/10 rounded-2xl p-5 hover:border-cyan-400/30 transition-all"
                  >

                    {/* TOPO */}
                    <div className="flex items-center justify-between mb-3">

                      <h2 className="text-cyan-400 text-lg font-black">
                        {pedido.tipo}
                      </h2>

                    </div>

                    {/* NOME */}
                    <p className="text-xl font-bold">
                      {pedido.nome}
                    </p>

                    {/* DATA */}
                    <p className="text-gray-400 mt-3 text-sm">
                      {pedido.data}
                    </p>

                  </div>

                )
              )}

            </div>

          ) : (

            <div className="flex flex-col items-center justify-center mt-32 text-gray-400">

              <ClipboardList
                size={75}
                className="mb-6 text-cyan-400"
              />

              <p className="text-2xl font-bold">
                Nenhum pedido encontrado
              </p>

              <p className="mt-2 text-gray-500">
                Seus pedidos aparecerão aqui.
              </p>

            </div>

          )}

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