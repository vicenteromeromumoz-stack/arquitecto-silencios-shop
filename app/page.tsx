export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-20">
      <main className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl sm:text-6xl font-light tracking-[0.2em] uppercase">
          Arquitecto de Silencios
        </h1>
        <p className="text-lg sm:text-xl tracking-widest uppercase opacity-80">
          Construyendo el vacío
        </p>
        
        <div className="mt-12">
          <button className="border border-[var(--color-carbon)] px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[var(--color-carbon)] hover:text-[var(--color-concreto)] dark:border-[var(--color-concreto)] dark:hover:bg-[var(--color-concreto)] dark:hover:text-[var(--color-carbon)] cursor-pointer">
            Entrar
          </button>
        </div>
      </main>
      
      <footer className="absolute bottom-8 text-xs tracking-widest uppercase opacity-50">
        © 2026 Arquitecto de Silencios
      </footer>
    </div>
  );
}
