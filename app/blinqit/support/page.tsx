export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#081526] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">

        <h1 className="text-4xl font-bold">
          Suporte
        </h1>

        <p className="mt-3 text-gray-400">
          BlinqIt
        </p>

        <div className="mt-10 space-y-6 text-gray-300 leading-8">

          <p>
            Obrigado por utilizar o <strong>BlinqIt</strong>.
          </p>

          <p>
            Se você encontrou algum problema, deseja enviar sugestões
            ou precisa de ajuda, entre em contato conosco.
          </p>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">

            <h2 className="text-xl font-semibold text-white">
              Contato
            </h2>

            <p className="mt-4">
              <strong>E-mail:</strong><br />
              contato@napatech.com.br
            </p>

            <p className="mt-4">
              <strong>Website:</strong><br />
              https://napatech.com.br
            </p>

          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">

            <h2 className="text-xl font-semibold text-white">
              Horário de atendimento
            </h2>

            <p className="mt-4">
              Segunda a sexta-feira<br />
              09:00 às 18:00 (Horário de Brasília)
            </p>

          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">

            <h2 className="text-xl font-semibold text-white">
              Tempo médio de resposta
            </h2>

            <p className="mt-4">
              Procuramos responder todas as solicitações em até
              2 dias úteis.
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}