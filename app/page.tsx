export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050B14] via-[#091526] to-[#02060D]">

      {/* Glow azul no fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        {/* Logo animado */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-[280px] sm:w-[360px] md:w-[460px] drop-shadow-[0_0_40px_rgba(56,189,248,0.25)]"
        >
          <source src="/logonapatech.mp4" type="video/mp4" />
        </video>

        {/* Título */}
        <h1 className="mt-10 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Em construção
        </h1>

        {/* Texto */}
        <p className="mt-5 max-w-xl text-lg leading-8 text-gray-400">
          Estamos construindo novas soluções digitais.
          <br />
          Em breve a NapaTech estará no ar.
        </p>

        {/* Rodapé */}
        <div className="mt-16 text-sm tracking-[0.35em] uppercase text-gray-600">
          Tecnologia que conecta ideias
        </div>

      </div>
    </main>
  );
}