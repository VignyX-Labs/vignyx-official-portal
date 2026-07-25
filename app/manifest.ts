import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VignyX — Intelligent Healthcare Operations",
    short_name: "VignyX",
    description:
      "AI-powered inventory management for Indian medical shops and hospital pharmacies.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#4338ca",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
