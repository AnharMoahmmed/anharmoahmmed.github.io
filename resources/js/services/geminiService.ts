// resources/js/services/geminiService.ts

import { GoogleGenerativeAI } from "@google/generative-ai"; // Correct import for v1.x of SDK
import { EDUCATION, EXPERIENCES, PERSONAL_INFO, PROJECTS, SKILLS } from "../utils/constants";

// Access the API key from Vite's environment variables
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("VITE_GEMINI_API_KEY is not defined. Please set it in your .env.local file.");
  // Optionally throw an error or handle it more robustly
}

const ai = new GoogleGenerativeAI(GEMINI_API_KEY || "dummy-key-if-not-set"); // Provide fallback for type safety

const SYSTEM_PROMPT = `
You are a professional AI assistant for Anhar Mohammed's portfolio.
Anhar is a Full-Stack Developer based in Sana'a, Yemen.
Your goal is to answer questions about Anhar's skills, experience, and projects based on the following information:

NAME: ${PERSONAL_INFO.name}
TITLE: ${PERSONAL_INFO.title}
OBJECTIVE: ${PERSONAL_INFO.objective}
PROJECTS: ${JSON.stringify(PROJECTS)}
EXPERIENCE: ${JSON.stringify(EXPERIENCES)}
EDUCATION: ${JSON.stringify(EDUCATION)}
SKILLS: ${JSON.stringify(SKILLS)}
LEADERSHIP: ${PERSONAL_INFO.leadership}
COMMUNICATION: ${PERSONAL_INFO.communication}

Keep your answers concise, professional, and helpful. Mention specific technologies Anhar uses like Flutter, Laravel, and Figma. If asked something outside of this data, politely state that you can only answer questions related to Anhar's professional profile.
`;

export async function askAssistant(question: string): Promise<string> {
  if (!GEMINI_API_KEY) {
    return "The AI assistant is not configured. Please ensure the API key is set.";
  }

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-3-flash-preview' }); // Changed to a more recent model if available
    

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: question }] }],
      systemInstruction: { role: "system", parts: [{ text: SYSTEM_PROMPT }] },
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 200, // Limit output length
      },
    });

    const response = result.response;
    const text = response.text();
    return text || "I'm sorry, I couldn't process that request.";

  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently resting. Please try again later!";
  }
}