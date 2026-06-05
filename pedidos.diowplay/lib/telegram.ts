export async function enviarTelegram(
  mensagem: string
) {
  alert("TESTE TELEGRAM:\n\n" + mensagem);

  return {
    ok: true,
  };
}