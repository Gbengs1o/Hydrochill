'use server';

import { generateProductVisuals, GenerateProductVisualsOutput } from '@/ai/flows/generate-product-visuals';

type FormState = Partial<GenerateProductVisualsOutput> & {
    error: string | null;
}

export async function getVisualRecommendation(
    prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const productDescription = "The HydroChill is a smart water bottle that purifies water using UV-C light, maintains temperature for up to 24 hours, and tracks your hydration via a smart phone app. It's built from premium, surgical-grade stainless steel with a futuristic, minimalist design.";
    const designSpecifications = "Capacity: 500ml. Material: 18/8 stainless steel. Technology: UV-C LED (280nm), Bluetooth 5.0, Double-wall vacuum insulation. Battery: Rechargeable Li-ion, 7-day life. Finish: Matte powder coat.";

    try {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
        const result = await generateProductVisuals({
            productDescription,
            designSpecifications,
        });
        return { ...result, error: null };
    } catch (e) {
        console.error(e);
        return {
            visualType: '',
            rationale: '',
            additionalNotes: '',
            error: 'Failed to generate recommendation. The AI model may be temporarily unavailable. Please try again later.',
        };
    }
}
