import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Festa no Zoo",
  description:
    "Termos de Uso do aplicativo Festa no Zoo, desenvolvido pela NapaTech.",
};

export default function FestaNoZooTermsPage() {
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
            Termos de Uso
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
            Estes Termos de Uso regulam a utilização do
            aplicativo <strong>Festa no Zoo</strong>,
            desenvolvido e disponibilizado pela{" "}
            <strong>NapaTech</strong>.
          </p>

          <p>
            Ao criar uma conta ou autorizar a utilização do
            Festa no Zoo por uma criança, o responsável
            declara ter lido e concordado com estes Termos
            e com a Política de Privacidade do aplicativo.
          </p>
        </Section>

        {/* ============================================================
            1
        ============================================================ */}

        <Section title="1. Sobre o Festa no Zoo">
          <p>
            O Festa no Zoo é um aplicativo infantil de
            caráter educativo e recreativo que disponibiliza
            jogos e atividades envolvendo, entre outros
            temas, memória, atenção, linguagem, matemática
            e raciocínio lógico.
          </p>

          <p>
            O aplicativo busca proporcionar uma experiência
            divertida e adequada ao público infantil,
            combinando entretenimento, aprendizagem e
            desenvolvimento de habilidades.
          </p>

          <Important>
            O Festa no Zoo não substitui acompanhamento
            escolar, pedagógico, psicológico, médico ou
            qualquer avaliação profissional.
          </Important>
        </Section>

        {/* ============================================================
            2
        ============================================================ */}

        <Section title="2. Utilização por crianças">
          <p>
            O Festa no Zoo foi desenvolvido para utilização
            por crianças sob supervisão e responsabilidade
            de seus pais ou responsáveis legais.
          </p>

          <p>
            A criação e administração da conta, contratação
            de assinaturas, definição de controles parentais
            e demais decisões administrativas devem ser
            realizadas pelo responsável.
          </p>

          <p>
            Ao disponibilizar o aplicativo para uma criança,
            o responsável declara possuir autoridade para
            autorizar sua utilização.
          </p>
        </Section>

        {/* ============================================================
            3
        ============================================================ */}

        <Section title="3. Conta do responsável">
          <p>
            Algumas funcionalidades do Festa no Zoo exigem a
            criação ou verificação de uma conta do
            responsável.
          </p>

          <p>
            O responsável deverá fornecer informações
            corretas e manter seus dados atualizados.
          </p>

          <p>
            O acesso à área administrativa poderá ser
            protegido por PIN ou outro mecanismo de
            segurança.
          </p>

          <p>
            É responsabilidade do responsável manter suas
            credenciais protegidas e evitar sua utilização
            por pessoas não autorizadas.
          </p>
        </Section>

        {/* ============================================================
            4
        ============================================================ */}

        <Section title="4. Perfil da criança">
          <p>
            O responsável poderá fornecer informações para
            criação do perfil da criança e personalização
            de sua experiência no Festa no Zoo.
          </p>

          <p>
            O aplicativo também poderá registrar progresso,
            resultados e informações relacionadas à
            utilização das atividades.
          </p>

          <p>
            O tratamento dessas informações seguirá a
            Política de Privacidade do Festa no Zoo.
          </p>
        </Section>

        {/* ============================================================
            5
        ============================================================ */}

        <Section title="5. Acesso gratuito">
          <p>
            O Festa no Zoo poderá disponibilizar
            gratuitamente parte de suas atividades.
          </p>

          <p>
            Durante a configuração inicial, o responsável
            poderá selecionar um conjunto de atividades que
            permanecerão disponíveis no plano gratuito.
          </p>

          <Important>
            A seleção gratuita é definida durante a
            configuração inicial e não poderá ser alterada
            pelo usuário posteriormente, salvo se a
            NapaTech disponibilizar essa possibilidade.
          </Important>

          <p>
            A quantidade, organização e disponibilidade das
            atividades gratuitas poderão variar entre
            versões do aplicativo, respeitados os acessos
            já concedidos quando aplicável.
          </p>
        </Section>

        {/* ============================================================
            6
        ============================================================ */}

        <Section title="6. Festa no Zoo Premium">
          <p>
            O Festa no Zoo poderá oferecer uma assinatura
            Premium que disponibiliza acesso a
            funcionalidades, jogos ou conteúdos adicionais.
          </p>

          <p>
            As condições comerciais aplicáveis, incluindo
            preço, moeda, periodicidade e eventuais períodos
            promocionais, serão apresentadas ao responsável
            pela Apple App Store ou Google Play antes da
            confirmação da contratação.
          </p>

          <p>
            A assinatura poderá possuir renovação
            automática, conforme as condições apresentadas
            pela respectiva loja.
          </p>
        </Section>

        {/* ============================================================
            7
        ============================================================ */}

        <Section title="7. Renovação e cobrança">
          <p>
            Quando a assinatura possuir renovação
            automática, a cobrança será realizada pela
            Apple App Store ou Google Play de acordo com as
            condições informadas ao responsável no momento
            da contratação.
          </p>

          <p>
            O gerenciamento dos pagamentos é realizado pela
            plataforma responsável pela compra.
          </p>

          <p>
            A NapaTech não recebe nem armazena os dados
            completos do cartão ou outro meio de pagamento
            utilizado na loja.
          </p>
        </Section>

        {/* ============================================================
            8
        ============================================================ */}

        <Section title="8. Cancelamento da assinatura">
          <p>
            O responsável poderá cancelar a renovação da
            assinatura utilizando as configurações de
            assinatura da Apple App Store ou Google Play,
            conforme a plataforma utilizada para realizar
            a compra.
          </p>

          <Important>
            A exclusão do aplicativo do dispositivo ou a
            exclusão da conta do Festa no Zoo não implica,
            por si só, o cancelamento de uma assinatura
            ativa.
          </Important>

          <p>
            O responsável deverá cancelar a renovação
            diretamente por meio da loja responsável pela
            assinatura quando necessário.
          </p>

          <p>
            Após o cancelamento, o acesso Premium poderá
            permanecer disponível até o término do período
            já contratado, conforme as regras da respectiva
            plataforma.
          </p>
        </Section>

        {/* ============================================================
            9
        ============================================================ */}

        <Section title="9. Restauração de compras">
          <p>
            Quando tecnicamente aplicável, o Festa no Zoo
            disponibilizará recurso para restauração de
            compras.
          </p>

          <p>
            A disponibilidade da restauração depende das
            informações associadas à conta utilizada na
            Apple App Store ou Google Play e das regras
            dessas plataformas.
          </p>
        </Section>

        {/* ============================================================
            10
        ============================================================ */}

        <Section title="10. Alterações em preços e condições comerciais">
          <p>
            Os preços, planos e condições comerciais do
            Festa no Zoo poderão ser alterados.
          </p>

          <p>
            Qualquer alteração relacionada a uma assinatura
            existente será realizada de acordo com as
            regras da Apple App Store ou Google Play e com
            a legislação aplicável.
          </p>

          <p>
            As condições apresentadas pela loja no momento
            da contratação ou renovação prevalecerão para
            fins de cobrança.
          </p>
        </Section>

        {/* ============================================================
            11
        ============================================================ */}

        <Section title="11. Bem-estar digital e proteção da criança">
          <p>
            O Festa no Zoo é desenvolvido considerando os
            princípios de proteção integral e do melhor
            interesse de crianças e adolescentes e as
            disposições aplicáveis do{" "}
            <strong>
              Estatuto Digital da Criança e do Adolescente
              — ECA Digital
            </strong>
            .
          </p>

          <p>
            A NapaTech busca oferecer uma experiência
            digital adequada ao público infantil e evitar
            mecanismos projetados para incentivar o uso
            excessivo ou prolongado do aplicativo.
          </p>

          <p>
            Para auxiliar pais e responsáveis na construção
            de hábitos digitais saudáveis, o Festa no Zoo
            disponibiliza ou poderá disponibilizar recursos
            como:
          </p>

          <List
            items={[
              "acompanhamento do tempo de utilização do aplicativo;",
              "definição de limites de tempo pelo responsável;",
              "possibilidade de restringir o uso após determinado período;",
              "opção de utilizar lembretes em vez do bloqueio automático;",
              "mensagens amigáveis sugerindo que a criança faça uma pausa após determinado período de utilização;",
              "informações ao responsável sobre atividades, utilização e progresso;",
              "proteção das configurações parentais por PIN ou mecanismo equivalente.",
            ]}
          />

          <p>
            As mensagens de pausa possuem caráter educativo
            e buscam desencorajar períodos excessivamente
            prolongados de uso, incentivando momentos de
            descanso e outras atividades fora do ambiente
            digital.
          </p>

          <Important>
            Os recursos de bem-estar digital e controle
            parental são ferramentas auxiliares e não
            substituem a supervisão e as decisões dos pais
            ou responsáveis sobre o tempo de tela da
            criança.
          </Important>
        </Section>

        {/* ============================================================
            12
        ============================================================ */}

        <Section title="12. Controles parentais">
          <p>
            O Festa no Zoo disponibiliza recursos destinados
            ao responsável para acompanhamento e
            configuração da experiência da criança.
          </p>

          <p>
            Esses recursos poderão incluir controle do tempo
            de utilização, acompanhamento de resultados e
            progresso, gerenciamento das atividades
            disponíveis e outras configurações relacionadas
            à experiência infantil.
          </p>

          <p>
            O acesso a essas configurações poderá ser
            protegido por PIN ou mecanismo equivalente para
            reduzir o risco de alteração diretamente pela
            criança.
          </p>
        </Section>

        {/* ============================================================
            13
        ============================================================ */}

        <Section title="13. Progresso e resultados">
          <p>
            O Festa no Zoo poderá registrar informações
            sobre jogos realizados, progresso, resultados,
            tempo de utilização e outros indicadores
            relacionados às atividades.
          </p>

          <p>
            Essas informações poderão ser apresentadas ao
            responsável para acompanhamento da utilização
            do aplicativo e da evolução nas atividades.
          </p>

          <Important>
            Os indicadores apresentados pelo Festa no Zoo
            possuem finalidade informativa, educativa e
            recreativa e não constituem avaliação clínica,
            psicológica, pedagógica ou diagnóstico sobre a
            criança.
          </Important>
        </Section>

        {/* ============================================================
            14
        ============================================================ */}

        <Section title="14. Conteúdo e propriedade intelectual">
          <p>
            O Festa no Zoo, incluindo seus personagens,
            nomes, marcas, ilustrações, animações,
            interfaces, jogos, atividades, textos, sons,
            músicas, elementos gráficos, códigos, conceitos
            visuais e demais conteúdos originais, é
            protegido pela legislação aplicável de
            propriedade intelectual.
          </p>

          <p>
            Salvo quando expressamente indicado de forma
            diferente, esses elementos pertencem à NapaTech
            ou são utilizados mediante autorização ou
            licença adequada.
          </p>

          <p>
            A disponibilização do aplicativo não transfere
            ao usuário qualquer direito de propriedade
            sobre esses elementos.
          </p>
        </Section>

        {/* ============================================================
            15
        ============================================================ */}

        <Section title="15. Uso permitido">
          <p>
            O responsável recebe uma licença pessoal,
            limitada, revogável, não exclusiva e não
            transferível para utilização do Festa no Zoo
            para fins pessoais e familiares, conforme estes
            Termos.
          </p>

          <p>Não é permitido, entre outras condutas:</p>

          <List
            items={[
              "copiar ou redistribuir comercialmente conteúdos do aplicativo;",
              "tentar acessar áreas, informações ou sistemas não autorizados;",
              "interferir no funcionamento ou na segurança do serviço;",
              "utilizar mecanismos destinados a contornar limitações de acesso;",
              "modificar, desmontar ou explorar indevidamente o aplicativo, ressalvadas as hipóteses permitidas pela legislação;",
              "utilizar personagens, marcas ou conteúdos do Festa no Zoo comercialmente sem autorização.",
            ]}
          />
        </Section>

        {/* ============================================================
            16
        ============================================================ */}

        <Section title="16. Atualizações e alterações do aplicativo">
          <p>
            A NapaTech poderá atualizar, modificar,
            adicionar ou remover funcionalidades e conteúdos
            do Festa no Zoo com o objetivo de melhorar o
            serviço, corrigir problemas, atender requisitos
            técnicos ou legais ou desenvolver novas
            experiências.
          </p>

          <p>
            Jogos, atividades, interfaces e funcionalidades
            poderão ser modificados ao longo do tempo.
          </p>
        </Section>

        {/* ============================================================
            17
        ============================================================ */}

        <Section title="17. Disponibilidade">
          <p>
            A NapaTech busca manter o Festa no Zoo
            disponível e funcionando adequadamente, mas não
            garante funcionamento ininterrupto ou livre de
            falhas.
          </p>

          <p>
            O serviço poderá ficar temporariamente
            indisponível em razão de manutenção,
            atualizações, falhas técnicas, problemas de
            terceiros ou circunstâncias fora do controle
            razoável da NapaTech.
          </p>
        </Section>

        {/* ============================================================
            18
        ============================================================ */}

        <Section title="18. Serviços de terceiros">
          <p>
            Algumas funcionalidades do Festa no Zoo dependem
            de serviços fornecidos por terceiros, incluindo
            infraestrutura tecnológica, lojas de
            aplicativos e sistemas de gerenciamento de
            assinaturas.
          </p>

          <Provider
            name="Google Firebase"
            description="Utilizado em recursos de infraestrutura, autenticação ou verificação, armazenamento, sincronização, segurança e funcionamento do aplicativo."
          />

          <Provider
            name="RevenueCat"
            description="Utilizado para gerenciamento e validação de assinaturas e compras."
          />

          <Provider
            name="Apple App Store e Google Play"
            description="Responsáveis pelo processamento e gerenciamento das compras e assinaturas realizadas em suas respectivas plataformas."
          />

          <p>
            A disponibilidade de determinadas
            funcionalidades poderá depender do funcionamento
            e das regras desses prestadores.
          </p>
        </Section>

        {/* ============================================================
            19
        ============================================================ */}

        <Section title="19. Exclusão da conta">
          <p>
            O responsável poderá solicitar a exclusão da
            conta conforme as opções disponibilizadas no
            aplicativo ou entrando em contato com a
            NapaTech.
          </p>

          <p>
            A exclusão poderá resultar na perda de
            informações associadas à conta, incluindo
            configurações, progresso e histórico que não
            possam ou não devam ser preservados.
          </p>

          <Important>
            A exclusão da conta não substitui o
            procedimento de cancelamento de uma assinatura
            junto à Apple App Store ou Google Play.
          </Important>
        </Section>

        {/* ============================================================
            20
        ============================================================ */}

        <Section title="20. Limitação de responsabilidade">
          <p>
            O Festa no Zoo é disponibilizado como ferramenta
            educativa e recreativa.
          </p>

          <p>
            Na extensão permitida pela legislação
            aplicável, a NapaTech não será responsável por
            danos decorrentes de utilização inadequada do
            aplicativo, indisponibilidade causada por
            terceiros, incompatibilidades de dispositivos
            ou circunstâncias fora de seu controle
            razoável.
          </p>

          <p>
            Nada nestes Termos exclui ou limita direitos
            assegurados ao consumidor ou outras
            responsabilidades que não possam ser legalmente
            excluídas ou limitadas.
          </p>
        </Section>

        {/* ============================================================
            21
        ============================================================ */}

        <Section title="21. Privacidade">
          <p>
            O tratamento de dados pessoais relacionado à
            utilização do Festa no Zoo é regido pela{" "}
            <a
              href="/festa-no-zoo/privacy"
              style={{
                color: "#365c3a",
                fontWeight: 800,
                textDecoration: "underline",
              }}
            >
              Política de Privacidade do Festa no Zoo
            </a>
            , que integra estes Termos.
          </p>
        </Section>

        {/* ============================================================
            22
        ============================================================ */}

        <Section title="22. Alterações destes Termos">
          <p>
            Estes Termos poderão ser atualizados para
            refletir alterações no aplicativo, em suas
            funcionalidades, nos serviços utilizados ou na
            legislação aplicável.
          </p>

          <p>
            A versão vigente e sua data de atualização serão
            disponibilizadas publicamente.
          </p>

          <p>
            Quando necessário, alterações relevantes
            poderão ser comunicadas ao responsável.
          </p>
        </Section>

        {/* ============================================================
            23
        ============================================================ */}

        <Section title="23. Legislação aplicável">
          <p>
            Estes Termos serão interpretados de acordo com a
            legislação brasileira, incluindo as normas
            aplicáveis de proteção ao consumidor, proteção
            de dados pessoais e proteção de crianças e
            adolescentes no ambiente digital.
          </p>

          <p>
            Nenhuma disposição destes Termos limita direitos
            assegurados por legislação de aplicação
            obrigatória.
          </p>
        </Section>

        {/* ============================================================
            24
        ============================================================ */}

        <Section title="24. Contato">
          <p>
            Para dúvidas, solicitações ou informações
            relacionadas ao Festa no Zoo:
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