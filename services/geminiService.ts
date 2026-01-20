
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTravelSuggestions = async (tripName: string, travellers: number, purpose: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest 3 unique, off-the-beaten-path experiences for a ${travellers}-person trip to ${tripName} focused on ${purpose}. Provide details on why it fits a "premium" experience.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              premiumReason: { type: Type.STRING },
            },
            required: ["title", "description", "premiumReason"]
          }
        }
      }
    });

    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Gemini Error:", error);
    return [];
  }
};

export const getSmartCustomizationTips = async (trip: any) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Give 3 short travel tips for the trip "${trip.name}" during current season. Keep it professional and luxury-focused.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });
    return JSON.parse(response.text || "[]");
  } catch (error) {
    return ["Pack light", "Bring comfortable shoes", "Stay hydrated"];
  }
};
