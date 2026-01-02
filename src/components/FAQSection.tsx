import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Posso imprimir?",
    answer: "Sim, você pode imprimir ou utilizar em formato digital. A escolha é sua."
  },
  {
    question: "Quantas cartelas vou receber nas Cartelas Mágicas de Matemática?",
    answer: "Você receberá 5 cartelas exclusivas de bingo (5x5), todas diferentes, com conteúdos alinhados ao Ensino Fundamental. Cada cartela aborda conceitos essenciais como operações básicas, números, frações, geometria, medidas, tempo e dinheiro."
  },
  {
    question: "Como posso ter acesso ao produto?",
    answer: "Logo após a confirmação da compra, você recebe o acesso imediato ao arquivo PDF na plataforma de vendas. Você pode baixar o material quantas vezes quiser, com acesso vitalício."
  },
  {
    question: "E se eu me arrepender? Como posso ter meu dinheiro de volta?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito com as Cartelas Mágicas de Matemática, basta solicitar o reembolso dentro desse prazo. Sem perguntas, sem complicação."
  },
  {
    question: "As Cartelas Mágicas de Matemática funcionam para qual ano escolar?",
    answer: "O material é ideal para todo o Ensino Fundamental (1º ao 9º ano). Os conteúdos são abrangentes e podem ser adaptados conforme o nível da turma. Professores de diferentes anos relatam excelentes resultados."
  },
  {
    question: "Preciso de conhecimento técnico para usar?",
    answer: "Não! As Cartelas Mágicas de Matemática são extremamente simples de aplicar. Você recebe as cartelas prontas e uma folha com todas as perguntas correspondentes. Basta distribuir para os alunos e começar a jogar. Em 2 minutos, toda a turma está engajada."
  },
  {
    question: "Posso usar as Cartelas Mágicas de Matemática em aulas online?",
    answer: "Sim! O formato PDF permite que você compartilhe as cartelas digitalmente com seus alunos em aulas remotas. Funciona perfeitamente tanto no presencial quanto no online."
  },
  {
    question: "Qual a diferença das Cartelas Mágicas de Matemática para outros bingos de matemática?",
    answer: "A \"mágica\" está na qualidade das perguntas e na cobertura completa dos conteúdos. Cada cartela foi desenvolvida pedagogicamente para garantir que os alunos realmente aprendam, não apenas joguem. Além disso, você recebe 5 cartelas diferentes, permitindo variação e uso prolongado sem repetição."
  }
];

const FAQSection = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-3">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground py-5 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
