import { GoogleGenAI } from "@google/genai";
import { GeneratedImageResponse } from '../types';

export const generateHeroImage = async (customPrompt?: string): Promise<GeneratedImageResponse> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key not found. Returning null.");
      return { imageUrl: null, error: "API Key missing" };
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Updated prompt for a premium Indigo/Violet abstract aesthetic
    const defaultPrompt = "Abstract architectural macro photography of translucent indigo and violet glass structures, soft studio lighting, caustic reflections, depth of field, 8k resolution, minimalist, high-end design texture.";
    
    const prompt = customPrompt || defaultPrompt;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
            aspectRatio: "16:9",
        }
      }
    });

    let imageUrl: string | null = null;

    // Iterate through parts to find the image
    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData && part.inlineData.data) {
                imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                break;
            }
        }
    }

    if (imageUrl) {
      return { imageUrl };
    } else {
      return { imageUrl: null, error: "No image generated" };
    }

  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
    return { imageUrl: null, error: error instanceof Error ? error.message : "Unknown error" };
  }
};