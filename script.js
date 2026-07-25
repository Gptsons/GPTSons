const API_KEY = "AQ.Ab8RN6JDIoeAhLO_UHakFByAHE4I-tyVUtERiFaMbrdn3ISkMA";

async function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");

  const userMessage = input.value.trim();
  if (!userMessage) return;

  chat.innerHTML += `<p><b>👤 You:</b> ${userMessage}</p>`;
  input.value = "";

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: userMessage }
            ]
          }
        ]
      })
    }
  );

  const data = await response.json();

  const reply =
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    "No response.";

  chat.innerHTML += `<p><b>🤖 GPTSon:</b> ${reply}</p>`;
}