export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#081526] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">

        <h1 className="text-4xl font-bold">
          Suporte
        </h1>

        <p className="mt-3 text-gray-400">
          Noviq
        </p>

        <div className="mt-10 space-y-6 text-gray-300 leading-8">

          <p>
            Obrigado por utilizar o <strong className="text-white">Noviq</strong>.
          </p>

          <p>
            Se você encontrou algum problema, deseja enviar uma sugestão
            ou precisa de ajuda com sua conta, assinatura ou funcionalidades
            do aplicativo, entre em contato conosco.
          </p>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">
              Contato
            </h2>

            <p className="mt-4">
              <strong>E-mail:</strong>
              <br />
              <a
                href="mailto:contato@napatech.com.br"
                className="text-blue-400 underline"
              >
                contato@napatech.com.br
              </a>
            </p>

            <p className="mt-4">
              <strong>Website:</strong>
              <br />
              <a
                href="https://napatech.com.br"
                className="text-blue-400 underline"
              >
                napatech.com.br
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">
              Exclusão de conta e dados
            </h2>

            <p className="mt-4">
              Você pode solicitar a exclusão da sua conta Noviq e dos
              dados associados a ela.
            </p>

            <p className="mt-4">
              Envie a solicitação para{" "}
              <a
                href="mailto:contato@napatech.com.br?subject=Exclusão%20de%20conta%20Noviq"
                className="text-blue-400 underline"
              >
                contato@napatech.com.br
              </a>{" "}
              utilizando, preferencialmente, o mesmo endereço de e-mail
              cadastrado no Noviq.
            </p>

            <p className="mt-4">
              Poderemos solicitar informações adicionais para confirmar
              a identidade e proteger a conta contra solicitações não
              autorizadas.
            </p>

            <p className="mt-4">
              Após a confirmação da solicitação, a conta e os dados
              associados serão excluídos, exceto quando a conservação
              de determinadas informações for necessária ou permitida
              pela legislação aplicável.
            </p>

            <p className="mt-4">
              A exclusão da conta Noviq não cancela automaticamente uma
              assinatura realizada pela App Store ou Google Play. Caso
              exista uma assinatura ativa, ela também deverá ser cancelada
              nas configurações da respectiva loja.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">
              Horário de atendimento
            </h2>

            <p className="mt-4">
              Segunda a sexta-feira
              <br />
              09:00 às 18:00 (Horário de Brasília)
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">
              Tempo médio de resposta
            </h2>

            <p className="mt-4">
              Procuramos responder às solicitações em até 2 dias úteis.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">
              Documentos
            </h2>

            <p className="mt-4">
              <a
                href="/noviq/privacy"
                className="text-blue-400 underline"
              >
                Política de Privacidade
              </a>
            </p>

            <p className="mt-2">
              <a
                href="/noviq/terms"
                className="text-blue-400 underline"
              >
                Termos de Uso
              </a>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}