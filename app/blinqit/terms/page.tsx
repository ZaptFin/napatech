export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#081526] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">

        <h1 className="text-4xl font-bold">
          Política de Privacidade
        </h1>

        <p className="mt-2 text-gray-400">
          BlinqIt
        </p>

        <div className="mt-10 space-y-6 text-gray-300 leading-8">

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              1. Introdução
            </h2>

            <p>
              Política de Privacidade — Blinqit

  Esta Política de Privacidade descreve como o aplicativo Blinqit  ("o aplicativo", "nós") coleta, usa e protege as informações dos usuários. Ao usar o Blinqit, você concorda com os termos descritos aqui. 

  1. Quem somos
  O Blinqit é desenvolvido por NapaTech. Para qualquer dúvida sobre esta política, entre em contato pelo e-mail indicado na seção de Contato, ao final deste documento

  2. Quais informações coletamos
  O Blinqit coleta o mínimo de informação necessário para seu funcionamento:

 Nome de exibição:  ao jogar pela primeira vez, um nome de jogador é gerado automaticamente (ex: "Jogador8821"). Você pode alterá-lo livremente nas configurações de Perfil. Não coletamos e-mail, telefone, ou qualquer dado de login para esta funcionalidade.

Identificador de dispositivo:  um identificador único é gerado e armazenado localmente no seu aparelho para vincular seu progresso (pontuação, moedas, streak) ao ranking global. Esse identificador não está associado a nenhuma informação pessoal identificável fora do app.
   Dados de progresso do jogo:  pontuação total, sequência de dias jogados (streak), moedas acumuladas e estatísticas de partidas são armazenados para exibir seu progresso e posição no ranking global.
   Dados coletados por anúncios:  o aplicativo utiliza o Google AdMob para exibir anúncios (recompensados e intersticiais). O AdMob pode coletar identificadores de publicidade do dispositivo, dados de interação com anúncios, e informações técnicas (modelo do aparelho, sistema operacional, localização aproximada) para fins de exibição e personalização de anúncios. Consulte a "https://policies.google.com/privacy" Política de Privacidade do Google  para mais detalhes sobre como o Google trata esses dados. 

  3. Como usamos as informações
  As informações coletadas são usadas exclusivamente para:

   Exibir seu progresso e posição no ranking global de jogadores
   Manter o funcionamento de recursos como streak diário, moedas e power-ups
   Exibir anúncios através do Google AdMob, que podem ser personalizados com base em dados coletados pelo Google
 
  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing.

  4. Armazenamento dos dados
  Os dados de progresso e ranking são armazenados de forma segura através do Google Firebase (Firestore), serviço de infraestrutura do Google. Dados como vidas, moedas e configurações locais são armazenados apenas no seu próprio dispositivo.\

  5. Anúncios e o Google AdMob
  O Blinqit exibe anúncios fornecidos pelo Google AdMob. Esses anúncios podem usar identificadores de publicidade para exibir conteúdo relevante. Você pode gerenciar suas preferências de anúncios personalizados nas configurações do seu dispositivo (Android: Configurações → Google → Anúncios; iOS: Configurações → Privacidade → Publicidade).

  6. Direitos do usuário
  Você pode, a qualquer momento:
   
   Alterar seu nome de exibição no ranking
   Solicitar a exclusão dos seus dados de progresso, entrando em contato conosco com o identificador do seu dispositivo (disponível na tela de Perfil do app) 

  7. Dados de menores
  O Blinqit é classificado como conteúdo livre, adequado para todas as idades. Não coletamos intencionalmente informações pessoais identificáveis de crianças além do nome de exibição opcional, que pode ser fictício.

  8. Alterações nesta política
  Esta política pode ser atualizada periodicamente. Recomendamos revisá-la ocasionalmente. Alterações significativas serão comunicadas através de avisos no próprio aplicativo.

Contato
    Para dúvidas, solicitações de exclusão de dados, ou qualquer questão relacionada a esta política, entre em contato:
    E-mail: zaptapp26@gmail.com

            </p>
          </section>

          

          {/* Continue normalmente */}

        </div>

      </div>
    </main>
  );
}