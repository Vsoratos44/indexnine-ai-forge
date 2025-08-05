import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Performance optimizations
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-tabs', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          'three-vendor': ['three'],
          'chart-vendor': ['recharts'],
          'supabase-vendor': ['@supabase/supabase-js'],
          'motion-vendor': ['framer-motion'],
        },
      },
    },
    // Enable source maps only in development
    sourcemap: mode === 'development',
    // Optimize CSS
    cssCodeSplit: true,
    // Target modern browsers for smaller bundles
    target: 'esnext',
    // Minify in production
    minify: mode === 'production' ? 'esbuild' : false,
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // Performance optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-tabs',
      '@radix-ui/react-dialog',
      '@supabase/supabase-js'
    ],
    exclude: ['three'] // Large library, load on demand
  },
}));
