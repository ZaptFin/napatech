import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Festa no Zoo",
  description:
    "Política de Privacidade do aplicativo Festa no Zoo, desenvolvido pela NapaTech.",
};

export default function FestaNoZooPrivacyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f4ec",
        color: "#243d28",
        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "56px 24px 80px",
        }}
      >
        {/* ============================================================
            CABEÇALHO
        ============================================================ */}

        <header
          style={{
            marginBottom: "42px",
            paddingBottom: "28px",
            borderBottom:
              "1px solid rgba(54, 92, 58, 0.18)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              marginBottom: "12px",
              padding: "6px 12px",
              borderRadius: "999px",
              background:
                "rgba(54, 92, 58, 0.10)",
              color: "#365c3a",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            Festa no Zoo
          </div>

          <h1
            style={{
              margin: 0,
              color: "#365c3a",
              fontSize: "36px",
              lineHeight: 1.15,
              fontWeight: 800,
            }}
          >
            Política de Privacidade
          </h1>

          <p
            style={{
              margin: "12px 0 0",
              color: "#667568",
              fontSize: "14px",
            }}
          >
            Última atualização: 8 de setembro de 2026
          </p>
        </header>

        {/* ============================================================
            INTRODUÇÃO
        ============================================================ */}

        <Section>
          <p>
            A NapaTech respeita a privacidade de seus
            usuários e dedica atenção especial à proteção
            de dados de crianças e de seus responsáveis.
          </p>

          <p>
            Esta Política de Privacidade explica como
            informações são coletadas, utilizadas,
            armazenadas e protegidas no aplicativo{" "}
            <strong>Festa no Zoo</strong>.
          </p>

          <p>
            Ao utilizar o aplicativo, o responsável declara
            estar ciente das práticas descritas nesta
            Política.
          </p>
        </Section>

        {/* ============================================================
            1
        ============================================================ */}

        <Section title="1. Sobre o Festa no Zoo">
          <p>
            O Festa no Zoo é um aplicativo infantil de
            caráter educativo e recreativo, composto por
            jogos, atividades e recursos destinados ao
            desenvolvimento de habilidades como memória,
            atenção, linguagem, raciocínio lógico e
            matemática.
          </p>

          <p>
            O aplicativo foi desenvolvido para utilização
            por crianças sob supervisão e responsabilidade
            de seus pais ou responsáveis legais.
          </p>

          <p>
            Determinadas funcionalidades administrativas,
            como gerenciamento da conta, assinatura,
            controles parentais e configurações, são
            destinadas exclusivamente ao responsável.
          </p>
        </Section>

        {/* ============================================================
            2
        ============================================================ */}

        <Section title="2. Informações do responsável">
          <p>
            Para criação, segurança e gerenciamento da
            conta, poderemos coletar informações fornecidas
            pelo responsável, incluindo:
          </p>

          <List
            items={[
              "endereço de e-mail;",
              "informações necessárias à autenticação e verificação da conta;",
              "configurações de controle parental;",
              "informações relacionadas ao status da assinatura;",
              "informações enviadas voluntariamente em contatos com o suporte.",
            ]}
          />

          <p>
            O e-mail do responsável poderá ser utilizado
            para verificação da conta, segurança,
            recuperação de acesso, comunicações
            relacionadas ao funcionamento do serviço e
            atendimento de solicitações.
          </p>
        </Section>

        {/* ============================================================
            3
        ============================================================ */}

        <Section title="3. Informações relacionadas à criança">
          <p>
            Para personalizar a experiência e acompanhar a
            utilização das atividades, o Festa no Zoo
            poderá armazenar informações fornecidas pelo
            responsável ou produzidas durante o uso do
            aplicativo, tais como:
          </p>

          <List
            items={[
              "nome ou apelido da criança;",
              "idade;",
              "dia e mês de aniversário, quando informados;",
              "atividades selecionadas pelo responsável;",
              "jogos e atividades realizados;",
              "progresso nas atividades;",
              "resultados, pontuações e indicadores de desempenho;",
              "tempo e frequência de utilização;",
              "configurações definidas pelo responsável.",
            ]}
          />

          <p>
            Essas informações são utilizadas para
            proporcionar as funcionalidades do aplicativo,
            apresentar progresso e resultados ao
            responsável e oferecer uma experiência
            adequada à criança.
          </p>

          <Important>
            O Festa no Zoo não solicita diretamente da
            criança informações como endereço residencial,
            telefone, e-mail pessoal ou outros dados de
            contato.
          </Important>
        </Section>

        {/* ============================================================
            4
        ============================================================ */}

        <Section title="4. Finalidades do tratamento das informações">
          <p>
            As informações poderão ser utilizadas para:
          </p>

          <List
            items={[
              "disponibilizar e operar o Festa no Zoo;",
              "criar e manter a conta do responsável;",
              "verificar a identidade ou o acesso do responsável;",
              "permitir a recuperação segura do acesso à área parental;",
              "personalizar a experiência da criança;",
              "registrar progresso e resultados das atividades;",
              "fornecer controles parentais;",
              "controlar o acesso às atividades gratuitas e Premium;",
              "processar e validar o status de assinaturas;",
              "restaurar compras;",
              "sincronizar informações entre dispositivos, quando aplicável;",
              "preservar a segurança e a integridade do serviço;",
              "diagnosticar falhas técnicas;",
              "prestar suporte;",
              "cumprir obrigações legais.",
            ]}
          />
        </Section>

        {/* ============================================================
            5
        ============================================================ */}

        <Section title="5. Proteção especial dos dados de crianças">
          <p>
            A NapaTech reconhece que informações
            relacionadas a crianças exigem proteção
            especial.
          </p>

          <p>
            O tratamento dessas informações é realizado
            exclusivamente para permitir o funcionamento,
            a personalização e os recursos educacionais e
            recreativos do Festa no Zoo, sob administração
            do responsável.
          </p>

          <p>
            A área destinada ao responsável é protegida por
            mecanismo próprio de acesso, como PIN, com o
            objetivo de evitar que determinadas
            configurações sejam alteradas diretamente pela
            criança.
          </p>

          <p>
            A NapaTech busca observar a legislação
            aplicável à proteção de dados pessoais,
            incluindo a{" "}
            <strong>
              Lei Geral de Proteção de Dados Pessoais
              (LGPD — Lei nº 13.709/2018)
            </strong>
            , especialmente as disposições relacionadas ao
            tratamento de dados de crianças e adolescentes.
          </p>
        </Section>

        {/* ============================================================
            6
        ============================================================ */}

        <Section title="6. Bem-estar digital e controles parentais">
          <p>
            O Festa no Zoo é desenvolvido considerando os
            princípios de proteção integral e do melhor
            interesse de crianças e adolescentes, bem como
            as disposições aplicáveis do{" "}
            <strong>
              Estatuto Digital da Criança e do Adolescente
              — ECA Digital
            </strong>
            .
          </p>

          <p>
            O aplicativo busca proporcionar uma experiência
            digital adequada ao público infantil e não é
            projetado para incentivar o uso excessivo ou
            prolongado.
          </p>

          <p>
            Para auxiliar pais e responsáveis na construção
            de hábitos digitais saudáveis, o Festa no Zoo
            poderá disponibilizar recursos como:
          </p>

          <List
            items={[
              "acompanhamento do tempo de utilização do aplicativo;",
              "definição de limites de tempo pelo responsável;",
              "possibilidade de restringir o uso após determinado período;",
              "opção de utilizar lembretes de tempo em vez do bloqueio automático;",
              "mensagens amigáveis sugerindo que a criança faça uma pausa após determinado período de utilização;",
              "informações ao responsável sobre utilização, atividades e progresso;",
              "proteção das configurações parentais por PIN ou mecanismo equivalente.",
            ]}
          />

          <p>
            As mensagens de pausa possuem caráter educativo
            e buscam desencorajar períodos excessivamente
            prolongados de utilização do aplicativo,
            incentivando momentos de descanso e outras
            atividades fora do ambiente digital.
          </p>

          <p>
            Informações relacionadas ao tempo e à
            frequência de utilização poderão ser
            processadas para permitir o funcionamento
            desses recursos de bem-estar digital e controle
            parental.
          </p>

          <Important>
            Essas informações não são utilizadas para
            publicidade direcionada ou para criação de
            perfil publicitário da criança.
          </Important>
        </Section>

        {/* ============================================================
            7
        ============================================================ */}

        <Section title="7. Publicidade e utilização comercial dos dados">
          <Important>
            O Festa no Zoo não utiliza dados pessoais da
            criança para publicidade direcionada ou
            comportamental.
          </Important>

          <p>
            A NapaTech não vende dados pessoais de crianças
            ou responsáveis.
          </p>

          <p>
            Dados relacionados à utilização do aplicativo
            não são utilizados para criação de perfis
            publicitários da criança.
          </p>
        </Section>

        {/* ============================================================
            8
        ============================================================ */}

        <Section title="8. Assinaturas e compras">
          <p>
            O Festa no Zoo poderá oferecer conteúdos e
            funcionalidades por meio de assinatura.
          </p>

          <p>
            Compras realizadas no aplicativo são
            processadas pela plataforma correspondente ao
            dispositivo, como Apple App Store ou Google
            Play.
          </p>

          <p>
            A NapaTech não recebe nem armazena os dados
            completos do cartão ou outro meio de pagamento
            utilizado pelo responsável nas lojas.
          </p>

          <p>
            Para gerenciamento e validação de assinaturas,
            o Festa no Zoo utiliza serviços da RevenueCat,
            que auxiliam na identificação do status da
            compra, restauração de compras e
            disponibilização das funcionalidades
            correspondentes.
          </p>

          <p>
            As informações processadas para essa finalidade
            são limitadas ao necessário para gerenciamento
            das compras e assinaturas.
          </p>
        </Section>

        {/* ============================================================
            9
        ============================================================ */}

        <Section title="9. Prestadores de serviços">
          <p>
            Para disponibilizar suas funcionalidades, o
            Festa no Zoo utiliza serviços tecnológicos de
            terceiros, incluindo:
          </p>

          <Provider
            name="Google Firebase"
            description="Utilizado para recursos de infraestrutura de dados, autenticação ou verificação, armazenamento, sincronização, segurança e funcionamento de serviços do aplicativo."
          />

          <Provider
            name="RevenueCat"
            description="Utilizado para gerenciamento e validação do status de assinaturas e compras realizadas pelas lojas de aplicativos."
          />

          <Provider
            name="Apple App Store e Google Play"
            description="Responsáveis pelo processamento das compras e assinaturas realizadas em suas respectivas plataformas."
          />

          <p>
            Esses prestadores poderão tratar determinadas
            informações técnicas necessárias à prestação de
            seus serviços de acordo com suas próprias
            políticas de privacidade e obrigações legais.
          </p>
        </Section>

        {/* ============================================================
            10
        ============================================================ */}

        <Section title="10. Dados técnicos e segurança">
          <p>
            Determinadas informações técnicas poderão ser
            processadas para permitir o funcionamento e a
            segurança do aplicativo, como informações
            relacionadas ao dispositivo, sistema
            operacional, versão do aplicativo, registros
            técnicos e informações necessárias à
            identificação e correção de falhas.
          </p>

          <p>
            Essas informações serão utilizadas para
            funcionamento, segurança, diagnóstico e
            melhoria técnica do serviço.
          </p>
        </Section>

        {/* ============================================================
            11
        ============================================================ */}

        <Section title="11. Armazenamento e retenção">
          <p>
            As informações são mantidas pelo período
            necessário para disponibilização das
            funcionalidades do Festa no Zoo, manutenção da
            conta, cumprimento das finalidades descritas
            nesta Política ou atendimento de obrigações
            legais.
          </p>

          <p>
            Quando uma conta for excluída, os dados
            associados serão eliminados ou anonimizados,
            ressalvadas as informações cuja conservação
            seja necessária ou permitida por obrigação
            legal, exercício regular de direitos, prevenção
            de fraudes ou outras hipóteses previstas na
            legislação.
          </p>

          <p>
            Algumas informações relacionadas a transações
            poderão continuar registradas pela Apple,
            Google ou outros prestadores conforme suas
            próprias obrigações legais e políticas.
          </p>
        </Section>

        {/* ============================================================
            12
        ============================================================ */}

        <Section title="12. Segurança">
          <p>
            A NapaTech adota medidas técnicas e
            organizacionais destinadas a proteger as
            informações contra acesso não autorizado,
            perda, alteração, divulgação ou utilização
            indevida.
          </p>

          <p>
            Nenhum sistema eletrônico é absolutamente imune
            a incidentes. Caso seja identificado incidente
            relevante envolvendo dados pessoais, serão
            adotadas as medidas previstas pela legislação
            aplicável.
          </p>
        </Section>

        {/* ============================================================
            13
        ============================================================ */}

        <Section title="13. Direitos do responsável">
          <p>
            O responsável poderá solicitar, quando
            aplicável:
          </p>

          <List
            items={[
              "confirmação da existência de tratamento;",
              "acesso aos dados;",
              "correção de informações;",
              "informações sobre o tratamento;",
              "exclusão dos dados;",
              "revogação de consentimento, quando aplicável;",
              "demais direitos previstos na legislação de proteção de dados.",
            ]}
          />

          <p>
            O aplicativo também poderá disponibilizar
            mecanismos próprios para atualização ou
            exclusão de determinadas informações.
          </p>

          <p>
            Solicitações relacionadas à privacidade podem
            ser encaminhadas para:
          </p>

          <Email />
        </Section>

        {/* ============================================================
            14
        ============================================================ */}

        <Section title="14. Exclusão da conta">
          <p>
            O responsável poderá solicitar a exclusão da
            conta e dos dados associados por meio das
            funcionalidades disponibilizadas no Festa no
            Zoo ou entrando em contato com a NapaTech.
          </p>

          <p>
            Antes da exclusão, poderão ser realizadas etapas
            de confirmação destinadas a impedir exclusões
            acidentais ou não autorizadas.
          </p>

          <Important>
            A exclusão da conta do Festa no Zoo não
            necessariamente cancela uma assinatura ativa
            processada pela Apple App Store ou Google Play.
            O cancelamento da renovação da assinatura
            deverá seguir os procedimentos disponibilizados
            pela respectiva loja.
          </Important>
        </Section>

        {/* ============================================================
            15
        ============================================================ */}

        <Section title="15. Transferência e processamento de dados">
          <p>
            Alguns prestadores tecnológicos utilizados pelo
            Festa no Zoo poderão processar informações em
            servidores localizados fora do Brasil.
          </p>

          <p>
            Quando aplicável, a NapaTech adotará os
            mecanismos previstos na legislação para o
            tratamento e a transferência internacional de
            dados pessoais.
          </p>
        </Section>

        {/* ============================================================
            16
        ============================================================ */}

        <Section title="16. Alterações desta Política">
          <p>
            Esta Política poderá ser atualizada para
            refletir alterações no Festa no Zoo, em seus
            serviços, na legislação ou nas práticas de
            privacidade.
          </p>

          <p>
            A data da versão mais recente estará sempre
            indicada no início deste documento.
          </p>

          <p>
            Alterações relevantes poderão ser comunicadas
            por meio do aplicativo ou por outros meios
            adequados.
          </p>
        </Section>

        {/* ============================================================
            17
        ============================================================ */}

        <Section title="17. Contato">
          <p>
            Em caso de dúvidas, solicitações ou questões
            relacionadas à privacidade e proteção de dados:
          </p>

          <p>
            <strong>NapaTech</strong>
          </p>

          <Email />
        </Section>

        {/* ============================================================
            RODAPÉ
        ============================================================ */}

        <footer
          style={{
            marginTop: "56px",
            paddingTop: "24px",
            borderTop:
              "1px solid rgba(54, 92, 58, 0.18)",
            textAlign: "center",
            color: "#718074",
            fontSize: "13px",
          }}
        >
          © 2026 NapaTech · Festa no Zoo
        </footer>
      </div>
    </main>
  );
}

/* ==========================================================================
   COMPONENTES
============================================================================ */

function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        marginBottom: "34px",
        fontSize: "16px",
        lineHeight: 1.75,
      }}
    >
      {title && (
        <h2
          style={{
            margin: "0 0 14px",
            color: "#365c3a",
            fontSize: "22px",
            lineHeight: 1.3,
            fontWeight: 800,
          }}
        >
          {title}
        </h2>
      )}

      <div
        style={{
          color: "#3f4e42",
        }}
      >
        {children}
      </div>
    </section>
  );
}

function List({
  items,
}: {
  items: string[];
}) {
  return (
    <ul
      style={{
        paddingLeft: "24px",
        margin: "14px 0 18px",
      }}
    >
      {items.map((item) => (
        <li
          key={item}
          style={{
            marginBottom: "7px",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Important({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        margin: "20px 0",
        padding: "16px 18px",
        background:
          "rgba(54, 92, 58, 0.08)",
        borderLeft: "4px solid #365c3a",
        borderRadius: "8px",
        color: "#365c3a",
        fontWeight: 700,
      }}
    >
      {children}
    </div>
  );
}

function Provider({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div
      style={{
        margin: "14px 0",
        padding: "16px 18px",
        background: "#ffffff",
        border:
          "1px solid rgba(54, 92, 58, 0.12)",
        borderRadius: "12px",
      }}
    >
      <strong
        style={{
          display: "block",
          marginBottom: "4px",
          color: "#365c3a",
        }}
      >
        {name}
      </strong>

      <span>{description}</span>
    </div>
  );
}

function Email() {
  return (
    <p>
      <a
        href="mailto:contato@napatech.com.br"
        style={{
          color: "#365c3a",
          fontWeight: 800,
          textDecoration: "underline",
        }}
      >
        contato@napatech.com.br
      </a>
    </p>
  );
}