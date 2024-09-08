import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration de Vite avec les optimisations pour GSAP
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['gsap'],  // Ajoute GSAP pour l'optimisation des dépendances
  },
});

