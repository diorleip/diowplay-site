export async function enviarTelegram(
  mensagem: string
) {
  console.log("Telegram:", mensagem);

  return {
    ok: true,
  };
}