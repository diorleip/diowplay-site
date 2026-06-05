export async function enviarTelegram(
  mensagem: string
) {
  const response = await fetch(
    "/api/telegram",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mensagem,
      }),
    }
  );

  return await response.json();
}