import { useState } from "react";
import { Sparkles, Calculator, ClipboardList, Target } from "lucide-react";

interface ContextOption {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  content: {
    heading: string;
    subheading: string;
    points: string[];
    result: string;
  };
}

const contextOptions: ContextOption[] = [
  {
    id: "turma-agitada",
    icon: <Sparkles className="w-8 h-8" />,
    title: "🎪 Turma Agitada",
    subtitle: "Preciso de algo que prenda a atenção",
    content: {
      heading: "✅ Perfeito! As Cartelas Mágicas de Matemática foram feitas para você.",
      subheading: "Como a \"mágica\" funciona com turma agitada:",
      points: [
        "🎯 **Transforme a energia em foco:** O formato de jogo canaliza a agitação para a competição saudável",
        "🎯 **Engajamento imediato:** Em 2 minutos, toda a turma está participando ativamente",
        "🎯 **Controle natural:** As regras do jogo criam disciplina sem você precisar \"brigar\""
      ],
      result: "**A transformação parece mágica:** Professores relatam que turmas que não paravam de conversar ficaram **100% focadas** durante o jogo."
    }
  },
  {
    id: "dificuldade-operacoes",
    icon: <Calculator className="w-8 h-8" />,
    title: "🧮 Dificuldade em Operações",
    subtitle: "Meus alunos travam nas contas básicas",
    content: {
      heading: "✅ Esse é o ponto onde a mágica mais acontece!",
      subheading: "Como as Cartelas Mágicas de Matemática fixam operações:",
      points: [
        "🎯 **Repetição sem tédio:** Os alunos praticam dezenas de operações sem perceber que estão \"estudando\"",
        "🎯 **Aprendizado ativo:** Eles precisam **pensar** para encontrar a resposta, não só copiar",
        "🎯 **Confiança progressiva:** A cada acerto, o aluno ganha segurança nas operações"
      ],
      result: "**O resultado parece mágica:** Alunos que erravam contas básicas começam a resolver mentalmente após 3 sessões."
    }
  },
  {
    id: "revisao-prova",
    icon: <ClipboardList className="w-8 h-8" />,
    title: "📝 Revisão Pré-Prova",
    subtitle: "Preciso revisar todo o conteúdo rápido",
    content: {
      heading: "✅ Você vai economizar HORAS de preparação!",
      subheading: "Como usar as Cartelas Mágicas de Matemática para revisão:",
      points: [
        "🎯 **Cobertura completa:** As 5 cartelas abrangem todos os conceitos do Ensino Fundamental",
        "🎯 **Diagnóstico rápido:** Você identifica na hora quem domina e quem precisa de reforço",
        "🎯 **Revisão divertida:** Os alunos **pedem** para revisar (sim, essa é a mágica!)"
      ],
      result: "**Resultado transformador:** Uma sessão de 40 minutos com as Cartelas Mágicas de Matemática substitui 3 aulas tradicionais de revisão."
    }
  }
];

const ContextSelector = () => {
  const [activeContext, setActiveContext] = useState<string | null>(null);

  const activeOption = contextOptions.find(opt => opt.id === activeContext);

  const formatText = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {contextOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setActiveContext(activeContext === option.id ? null : option.id)}
            className={`
              card-interactive p-6 text-left transition-all duration-300
              ${activeContext === option.id ? "card-interactive-active" : ""}
            `}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`
                p-2 rounded-xl transition-colors
                ${activeContext === option.id 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary/20 text-secondary"
                }
              `}>
                <Target className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-bold text-lg text-foreground mb-1">{option.title}</h3>
            <p className="text-sm text-muted-foreground">{option.subtitle}</p>
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      {activeOption && (
        <div className="animate-slide-in-bottom bg-gradient-to-br from-success/5 to-success/10 rounded-2xl p-6 md:p-8 border-2 border-success/30">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            {activeOption.content.heading}
          </h3>
          <h4 className="text-lg text-muted-foreground mb-6">
            {activeOption.content.subheading}
          </h4>
          
          <ul className="space-y-4 mb-6">
            {activeOption.content.points.map((point, index) => (
              <li 
                key={index} 
                className="text-foreground"
                dangerouslySetInnerHTML={{ __html: formatText(point) }}
              />
            ))}
          </ul>

          <div className="bg-card rounded-xl p-4 border border-accent/30">
            <p 
              className="text-foreground"
              dangerouslySetInnerHTML={{ __html: formatText(activeOption.content.result) }}
            />
          </div>
        </div>
      )}

      {!activeContext && (
        <div className="bg-muted/50 rounded-2xl p-6 border border-border text-center">
          <p className="text-muted-foreground">
            👆 Selecione um desafio acima para ver como as Cartelas Mágicas de Matemática podem ajudar
          </p>
        </div>
      )}
    </div>
  );
};

export default ContextSelector;
