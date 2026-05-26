export async function enviarTelegram(
  mensagem: string
) {
  const TOKEN =
    "8281514496:AAH08eOOHLPoQwYiPVu8JHu1DJJgJ8NBb8I";

  const CHAT_ID =
    "7257352040";

  try {
    await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: mensagem,
        }),
      }
    );
  } catch (error) {
    console.log(error);
  }
}