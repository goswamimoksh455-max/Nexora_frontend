export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://51.21.161.160',
        changeOrigin: true,
        secure: false, // This is the magic line that ignores the weak certificate
      },
    },
  },
});