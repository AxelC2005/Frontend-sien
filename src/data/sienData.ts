// Lee automáticamente PUBLIC_API_URL desde tu archivo .env
export const BASE_URL = import.meta.env.PUBLIC_API_URL.replace(/\/$/, "");

// Parámetros matemáticos exportados de tu model.json (Celda 5: EdadMeses, Peso, Talla, IMC)
export const MODEL_JSON = {
  mean: [179.30257818075975, 53.47467969911588, 154.87722803721888, 22.156645798316546],
  scale: [20.13039970447239, 11.92675753433033, 8.889439630511797, 3.9016421767735188],
  centers: [
    [-0.9008375925918976, -0.7890499876410572, -0.7331979347326382, -0.5572715101435992],
    [0.21947939201685895, 1.5803054134981012, 0.5367352281364034, 1.6015360054719945],
    [0.6578565351737944, 0.06979357276621234, 0.40478314390753956, -0.12781657955630885]
  ]
};

export interface ClusterProfile {
  Nombre: string;
  EdadMeses: number;
  Peso: number;
  Talla: number;
  IMC: number;
  ColorDot: string;
  Desc: string;
  Rec: string;
  Composicion: { Normal: number; Sobrepeso: number; Desnutricion: number };
}

// Incluye EdadMeses, Peso, Talla e IMC exactos de tu Celda 3
export const CLUSTER_INFO: Record<number, ClusterProfile> = {
  0: {
    Nombre: "Estándar Jóvenes (~13.4 años)",
    EdadMeses: 161.16,
    Peso: 44.06,
    Talla: 148.36,
    IMC: 19.98,
    ColorDot: "bg-sky-600",
    Desc: "Adolescente en etapa inicial de estirón puberal (media: 161.16 meses, 44.06 kg y 148.36 cm de talla). El 74.56% presenta estado nutricional normal.",
    Rec: "Vigilar ganancia armónica de talla (148.36 cm promedio) y masa magra durante la pubertad. Fomentar aporte de hierro, calcio y 60 min de actividad física diaria.",
    Composicion: { Normal: 74.56, Sobrepeso: 23.50, Desnutricion: 1.94 }
  },
  1: {
    Nombre: "Riesgo Sobrepeso / Obesidad",
    EdadMeses: 183.73,
    Peso: 72.36,
    Talla: 159.66,
    IMC: 28.42,
    ColorDot: "bg-amber-500",
    Desc: "Ubicado en el clúster de alta densidad ponderal (media: 183.73 meses, 72.36 kg, 159.66 cm de talla e IMC 28.42). El 98.04% tiene diagnóstico de sobrepeso u obesidad.",
    Rec: "Evaluación nutricional clínica prioritaria (K-Means es un tamizaje no supervisado). Reducción de ultraprocesados y plan de ejercicio aeróbico.",
    Composicion: { Normal: 1.96, Sobrepeso: 98.04, Desnutricion: 0.00 }
  },
  2: {
    Nombre: "Estándar Mayores (~16.0 años)",
    EdadMeses: 192.53,
    Peso: 54.32,
    Talla: 158.47,
    IMC: 21.66,
    ColorDot: "bg-emerald-600",
    Desc: "Adolescente con desarrollo físico avanzado (media: 192.53 meses, 54.32 kg y 158.47 cm de talla). El 81.05% presenta diagnóstico antropométrico normal.",
    Rec: "Mantener estilo de vida activo y alimentación balanceada en la transición hacia la etapa juvenil/adulta.",
    Composicion: { Normal: 81.05, Sobrepeso: 18.07, Desnutricion: 0.89 }
  }
};

export const PROVINCIAS_FALLBACK: Record<string, { Sobrepeso: number; Normal: number; Desnutricion: number }> = {
  "PROMEDIO NACIONAL": { Sobrepeso: 33.41, Normal: 65.45, Desnutricion: 1.13 },
  "TACNA - JORGE BASADRE": { Sobrepeso: 55.76, Normal: 43.70, Desnutricion: 0.54 },
  "MOQUEGUA - ILO": { Sobrepeso: 52.99, Normal: 46.10, Desnutricion: 0.91 },
  "AREQUIPA - ISLAY": { Sobrepeso: 52.49, Normal: 46.80, Desnutricion: 0.71 },
  "TUMBES - TUMBES": { Sobrepeso: 35.66, Normal: 62.10, Desnutricion: 2.24 },
  "SAN MARTIN - SAN MARTIN": { Sobrepeso: 29.48, Normal: 68.40, Desnutricion: 2.12 }
};