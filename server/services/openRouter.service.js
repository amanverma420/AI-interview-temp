import axios from "axios";

export const askAi = async (messages) => {
  try {
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new Error("Messages array is empty.");
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",

        messages,

        max_tokens: 800,

        temperature: 0.7,
      },
      {
        timeout: 60000,

        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const content =
      response?.data?.choices?.[0]?.message?.content;

    if (!content || !content.trim()) {
      throw new Error("AI returned empty response.");
    }

    return content;

  } catch (error) {

    console.error(
      "OpenRouter Error:",
      error.response?.data || error.message
    );

    if (error.code === "ECONNRESET") {
      throw new Error(
        "Network connection to OpenRouter was reset."
      );
    }

    throw new Error(
      error.response?.data?.error?.message ||
      error.message ||
      "OpenRouter API Error"
    );
  }
};