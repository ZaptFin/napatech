export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050B14] via-[#081526] to-[#02060D]">

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[900px] w-[900px] rounded-full bg-cyan-500/10 blur-[220px]" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        {/* Logo Animado */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-[180px] sm:w-[220px] md:w-[260px]"
        >
          <source src="/logonapatech.mp4" type="video/mp4" />
        </video>

        {/* Slogan */}
        <h1 className="mt-10 text-3xl md:text-5xl font-bold tracking-tight text-white">
          Tecnologia que conecta ideias.
        </h1>

        {/* Texto */}
        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
          Nosso ecossistema digital está em construção.
          <br />
          Em breve você conhecerá nossos primeiros produtos.
        </p>

        {/* Linha */}
        <div className="mt-12 h-px w-28 bg-cyan-400/30" />

        {/* Produtos */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm uppercase tracking-[0.25em] text-gray-500">

          <span>Zapt</span>

          <span className="text-cyan-500/40">•</span>

          <span>AquiTem BR</span>

          <span className="text-cyan-500/40">•</span>

          <span>BlinqIt</span>

          <span className="text-cyan-500/40">•</span>

          <span>Scripto</span>

          <span className="text-cyan-500/40">•</span>

          <span>Festa no Zoo</span>

        </div>

        {/* Rodapé */}
        <div className="mt-20 text-xs tracking-[0.35em] uppercase text-gray-600">
          © 2026 NapaTech
        </div>

      </div>

    </main>
  );
}