export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-[var(--color-concreto)] text-[var(--color-carbon)]">
      <main className="flex flex-col items-center text-center">
        {/* Título Principal: Tipografía Serif, Mayúsculas, Tracking muy amplio */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] leading-[1.4] uppercase font-light max-w-5xl">
          ARQUITECTO DE SILENCIOS
        </h1>
        
        {/* Subtítulo */}
        <p className="mt-8 text-sm md:text-base tracking-[0.3em] uppercase opacity-80 font-mono">
          Diseño, luz y vacío
        </p>
        
        {/* Botón Minimalista */}
        <div className="mt-16">
          <button className="px-10 py-4 border border-[var(--color-carbon)] text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 ease-out hover:bg-[var(--color-carbon)] hover:text-[var(--color-concreto)] cursor-pointer">
            Explorar Colección
          </button>
        </div>
      </main>
    </div>
  );
}
