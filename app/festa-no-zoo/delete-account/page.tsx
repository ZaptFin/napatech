import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excluir Conta | Festa no Zoo",
  description:
    "Informações para exclusão da conta e dos dados associados ao Festa no Zoo.",
};

export default function FestaNoZooDeleteAccountPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f4ec",
        color: "#243d28",
        fontFamily: "Arial, Helvetica, sans-serif",
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
              background: "rgba(54, 92, 58, 0.10)",
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
            Exclusão da conta
          </h1>

          <p
            style={{
              margin: "12px 0 0",
              color: "#667568",
              fontSize: "16px",
              lineHeight: 1.6,
            }}
          >
            Informações para excluir sua conta do Festa no
            Zoo e os dados associados.
          </p>
        </header>

        {/* ============================================================
            PELO APLICATIVO
        ============================================================ */}

        <Section title="Excluir pelo aplicativo">
          <p>
            O responsável poderá solicitar a exclusão da
            conta diretamente pelo Festa no Zoo.
          </p>

          <Steps
            items={[
              "Abra o Festa no Zoo.",
              "Acesse a área do responsável.",
              "Informe o PIN de acesso.",
              "Abra Conta do responsável.",
              "Selecione Excluir conta.",
              "Leia as informações apresentadas e confirme a exclusão.",
            ]}
          />

          <Important>
            Para proteger os dados da criança e evitar
            exclusões acidentais ou não autorizadas, o
            Festa no Zoo poderá solicitar uma confirmação
            adicional da identidade do responsável antes de
            concluir a exclusão.
          </Important>
        </Section>

        {/* ============================================================
            POR E-MAIL
        ============================================================ */}

        <Section title="Solicitar exclusão por e-mail">
          <p>
            Se você não tiver mais acesso ao aplicativo ou
            encontrar alguma dificuldade para utilizar o
            recurso de exclusão, poderá enviar uma
            solicitação diretamente à NapaTech.
          </p>

          <p>
            Utilize preferencialmente o mesmo endereço de
            e-mail cadastrado como responsável pela conta.
          </p>

          <a
            href="mailto:contato@napatech.com.br?subject=Exclus%C3%A3o%20de%20conta%20-%20Festa%20no%20Zoo"
            style={{
              display: "inline-block",
              marginTop: "8px",
              padding: "11px 18px",
              borderRadius: "999px",
              background: "#365c3a",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Solicitar exclusão da conta
          </a>
        </Section>

        {/* ============================================================
            DADOS EXCLUÍDOS
        ============================================================ */}

        <Section title="O que acontece com os dados">
          <p>
            Após a confirmação da exclusão, os dados
            associados à conta serão excluídos ou
            anonimizados, conforme aplicável.
          </p>

          <p>
            Isso poderá incluir:
          </p>

          <List
            items={[
              "dados da conta do responsável;",
              "dados do perfil da criança;",
              "configurações parentais;",
              "seleção das atividades gratuitas;",
              "progresso e resultados das atividades;",
              "histórico de utilização vinculado à conta;",
              "demais informações associadas à conta que não precisem ser preservadas por obrigação legal.",
            ]}
          />

          <p>
            Após a exclusão, informações e progresso
            removidos poderão não ser recuperáveis.
          </p>
        </Section>

        {/* ============================================================
            RETENÇÃO
        ============================================================ */}

        <Section title="Informações que poderão ser mantidas">
          <p>
            Determinadas informações poderão ser mantidas
            pelo período necessário quando sua conservação
            for exigida ou permitida pela legislação, por
            exemplo para:
          </p>

          <List
            items={[
              "cumprimento de obrigações legais ou regulatórias;",
              "exercício regular de direitos;",
              "prevenção de fraude e segurança;",
              "manutenção de registros necessários para resolução de disputas.",
            ]}
          />

          <p>
            Dados mantidos por essas razões não serão
            utilizados para continuar oferecendo uma conta
            ativa ao usuário.
          </p>
        </Section>

        {/* ============================================================
            ASSINATURA
        ============================================================ */}

        <Section title="Importante sobre assinaturas">
          <Important>
            Excluir a conta do Festa no Zoo não cancela
            automaticamente uma assinatura ativa na Apple
            App Store ou Google Play.
          </Important>

          <p>
            Caso exista uma assinatura ativa, o responsável
            deverá cancelar sua renovação diretamente nas
            configurações de assinatura da loja utilizada
            para realizar a compra.
          </p>

          <p>
            A Apple ou o Google também poderão manter
            registros relacionados às transações de acordo
            com suas próprias políticas e obrigações
            legais.
          </p>
        </Section>

        {/* ============================================================
            CRIANÇA
        ============================================================ */}

        <Section title="Proteção dos dados da criança">
          <p>
            A exclusão da conta também abrange os dados da
            criança vinculados à conta do responsável,
            observadas as hipóteses legais de retenção
            aplicáveis.
          </p>

          <p>
            A NapaTech dedica atenção especial à proteção
            de dados de crianças e adota mecanismos para
            que decisões relacionadas à conta e à exclusão
            de dados sejam realizadas pelo responsável.
          </p>
        </Section>

        {/* ============================================================
            DÚVIDAS
        ============================================================ */}

        <Section title="Precisa de ajuda?">
          <p>
            Em caso de dúvidas sobre a exclusão da conta ou
            dos dados associados ao Festa no Zoo, entre em
            contato:
          </p>

          <p>
            <strong>NapaTech</strong>
          </p>

          <Email />
        </Section>

        {/* ============================================================
            LINKS
        ============================================================ */}

        <Section title="Mais informações">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <DocumentLink
              href="/festa-no-zoo/privacy"
              title="Política de Privacidade"
            />

            <DocumentLink
              href="/festa-no-zoo/terms"
              title="Termos de Uso"
            />

            <DocumentLink
              href="/festa-no-zoo/support"
              title="Suporte"
            />
          </div>
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
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        marginBottom: "36px",
        fontSize: "16px",
        lineHeight: 1.75,
      }}
    >
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

function Steps({
  items,
}: {
  items: string[];
}) {
  return (
    <ol
      style={{
        paddingLeft: "26px",
        margin: "18px 0",
      }}
    >
      {items.map((item) => (
        <li
          key={item}
          style={{
            marginBottom: "9px",
            paddingLeft: "4px",
          }}
        >
          {item}
        </li>
      ))}
    </ol>
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
        background: "rgba(54, 92, 58, 0.08)",
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

function DocumentLink({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <a
      href={href}
      style={{
        padding: "11px 16px",
        background: "#ffffff",
        border:
          "1px solid rgba(54, 92, 58, 0.22)",
        borderRadius: "10px",
        color: "#365c3a",
        fontSize: "14px",
        fontWeight: 800,
        textDecoration: "none",
      }}
    >
      {title}
    </a>
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