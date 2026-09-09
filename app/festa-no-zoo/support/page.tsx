import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suporte | Festa no Zoo",
  description:
    "Suporte e atendimento do aplicativo Festa no Zoo, desenvolvido pela NapaTech.",
};

export default function FestaNoZooSupportPage() {
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
            Suporte
          </h1>

          <p
            style={{
              margin: "12px 0 0",
              color: "#667568",
              fontSize: "16px",
              lineHeight: 1.6,
            }}
          >
            Precisa de ajuda com o Festa no Zoo?
            Estamos à disposição.
          </p>
        </header>

        {/* ============================================================
            CONTATO
        ============================================================ */}

        <Section title="Entre em contato">
          <p>
            Para dúvidas, problemas técnicos, questões
            relacionadas à conta, assinatura ou qualquer
            outra solicitação relacionada ao Festa no Zoo,
            entre em contato com a NapaTech.
          </p>

          <ContactCard />
        </Section>

        {/* ============================================================
            INFORMAÇÕES PARA O SUPORTE
        ============================================================ */}

        <Section title="Como podemos ajudar">
          <p>
            Você pode entrar em contato conosco para
            assuntos como:
          </p>

          <List
            items={[
              "dificuldades para acessar o aplicativo;",
              "problemas com a conta do responsável;",
              "recuperação ou alteração do acesso à área parental;",
              "dúvidas sobre atividades e controles parentais;",
              "problemas técnicos nos jogos ou atividades;",
              "dúvidas relacionadas à assinatura Premium;",
              "restauração de compras;",
              "solicitações relacionadas à privacidade e aos dados pessoais;",
              "solicitações de exclusão da conta;",
              "sugestões e comentários sobre o Festa no Zoo.",
            ]}
          />
        </Section>

        {/* ============================================================
            ASSINATURAS
        ============================================================ */}

        <Section title="Assinaturas e pagamentos">
          <p>
            As compras e assinaturas do Festa no Zoo são
            processadas pela Apple App Store ou Google Play,
            conforme o dispositivo utilizado.
          </p>

          <p>
            Caso tenha alguma dificuldade com a liberação
            do acesso Premium após uma compra, utilize
            primeiro a opção <strong>Restaurar compras</strong>{" "}
            disponível no aplicativo.
          </p>

          <Important>
            O cancelamento da renovação de uma assinatura
            deve ser realizado nas configurações de
            assinatura da Apple App Store ou Google Play.
            Excluir o aplicativo ou a conta do Festa no Zoo
            não cancela automaticamente uma assinatura
            ativa.
          </Important>
        </Section>

        {/* ============================================================
            CONTA
        ============================================================ */}

        <Section title="Conta e dados pessoais">
          <p>
            O responsável poderá utilizar os recursos
            disponíveis no próprio Festa no Zoo para
            gerenciar determinadas informações da conta.
          </p>

          <p>
            Para questões relacionadas à privacidade,
            correção de informações ou exercício de direitos
            relacionados a dados pessoais, entre em contato
            conosco pelo e-mail:
          </p>

          <Email />
        </Section>

        {/* ============================================================
            EXCLUSÃO
        ============================================================ */}

        <Section title="Excluir a conta">
          <p>
            Se desejar excluir permanentemente sua conta do
            Festa no Zoo e os dados associados, consulte
            nossa página específica com as instruções e
            informações sobre o processo.
          </p>

          <a
            href="/festa-no-zoo/delete-account"
            style={{
              display: "inline-block",
              marginTop: "6px",
              padding: "11px 18px",
              borderRadius: "999px",
              background: "#365c3a",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Ver informações sobre exclusão da conta
          </a>
        </Section>

        {/* ============================================================
            DOCUMENTOS
        ============================================================ */}

        <Section title="Privacidade e termos">
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

function ContactCard() {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "22px",
        background: "#ffffff",
        border:
          "1px solid rgba(54, 92, 58, 0.12)",
        borderRadius: "14px",
      }}
    >
      <div
        style={{
          marginBottom: "5px",
          color: "#667568",
          fontSize: "13px",
          fontWeight: 700,
        }}
      >
        Atendimento Festa no Zoo
      </div>

      <div
        style={{
          marginBottom: "14px",
          color: "#365c3a",
          fontSize: "18px",
          fontWeight: 800,
        }}
      >
        NapaTech
      </div>

      <a
        href="mailto:contato@napatech.com.br?subject=Suporte%20-%20Festa%20no%20Zoo"
        style={{
          display: "inline-block",
          padding: "11px 18px",
          borderRadius: "999px",
          background: "#365c3a",
          color: "#ffffff",
          fontSize: "14px",
          fontWeight: 800,
          textDecoration: "none",
        }}
      >
        contato@napatech.com.br
      </a>
    </div>
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