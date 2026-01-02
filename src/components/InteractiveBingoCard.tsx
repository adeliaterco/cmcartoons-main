import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface BingoQuestion {
  term: string;
  question: string;
  answer: string;
}

const bingoData: BingoQuestion[] = [
  { term: "Adição", question: "Qual operação matemática usamos para juntar duas quantidades?", answer: "Adição" },
  { term: "Subtração", question: "Qual operação matemática usamos para retirar uma quantidade de outra?", answer: "Subtração" },
  { term: "Multiplicação", question: "Qual operação usamos para somar um mesmo número várias vezes?", answer: "Multiplicação" },
  { term: "Divisão", question: "Qual operação usamos para repartir uma quantidade em partes iguais?", answer: "Divisão" },
  { term: "Dados", question: "Informações numéricas coletadas para análise são chamadas de?", answer: "Dados" },
  { term: "Triplo", question: "Como chamamos o resultado quando multiplicamos um número por 3?", answer: "Triplo" },
  { term: "Metade", question: "Quando dividimos algo em duas partes iguais, cada parte é a?", answer: "Metade" },
  { term: "Adicionador", question: "Como podemos chamar um número que é somado a outro?", answer: "Adicionador" },
  { term: "Subtraidor", question: "Como chamamos o número que é retirado em uma subtração?", answer: "Subtraidor" },
  { term: "Igualdade", question: "Quando dois lados de uma expressão têm o mesmo valor, temos uma?", answer: "Igualdade" },
  { term: "Maior que", question: "Qual símbolo usamos para mostrar que um número é superior a outro? (>)", answer: "Maior que" },
  { term: "Menor que", question: "Qual símbolo indica que um número é inferior a outro? (<)", answer: "Menor que" },
  { term: "LMFE", question: "Qual sigla representa a ordem correta das operações: Leitura, Multiplicação, Fração, Escrita?", answer: "LMFE" },
  { term: "Número natural", question: "Números inteiros positivos começando do zero são chamados de?", answer: "Número natural" },
  { term: "Par", question: "Números divisíveis por 2 são chamados de?", answer: "Par" },
  { term: "Ímpar", question: "Números que NÃO são divisíveis por 2 são chamados de?", answer: "Ímpar" },
  { term: "Decimal", question: "Números com vírgula que representam partes de um inteiro são?", answer: "Decimal" },
  { term: "Unidade", question: "Cada algarismo de 0 a 9 representa uma?", answer: "Unidade" },
  { term: "Centena", question: "Conjunto de 100 unidades forma uma?", answer: "Centena" },
  { term: "Resultado", question: "O valor final de uma operação matemática é chamado de?", answer: "Resultado" },
  { term: "Problema matemático", question: "Situação que exige raciocínio e cálculos para ser resolvida é um?", answer: "Problema matemático" },
  { term: "Cálculo mental", question: "Fazer contas de cabeça, sem usar papel ou calculadora, é?", answer: "Cálculo mental" },
  { term: "Potência", question: "Multiplicar um número por ele mesmo várias vezes é elevar à?", answer: "Potência" },
  { term: "Algoritmo", question: "Sequência de passos para resolver um problema é chamada de?", answer: "Algoritmo" },
  { term: "Forma", question: "O contorno ou figura geométrica de um objeto é sua?", answer: "Forma" },
];

const InteractiveBingoCard = () => {
  const [selectedCell, setSelectedCell] = useState<BingoQuestion | null>(null);

  const handleCellClick = (item: BingoQuestion) => {
    setSelectedCell(selectedCell?.term === item.term ? null : item);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Bingo Grid */}
      <div className="grid grid-cols-5 gap-2 sm:gap-3 p-4 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl border-2 border-secondary/30">
        {bingoData.map((item, index) => (
          <button
            key={index}
            onClick={() => handleCellClick(item)}
            className={`
              bingo-cell
              ${selectedCell?.term === item.term ? "bingo-cell-selected" : ""}
            `}
            style={{
              aspectRatio: '1 / 1'
            }}
          >
            {item.term}
          </button>
        ))}
      </div>

      {/* Feedback Area */}
      <div className="mt-6 min-h-[120px]">
        {selectedCell ? (
          <div className="animate-fade-in bg-card rounded-2xl p-6 shadow-lg border-2 border-success/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📌</span>
              <div>
                <h4 className="font-bold text-foreground mb-2">PERGUNTA CORRESPONDENTE:</h4>
                <p className="text-muted-foreground text-lg mb-4">"{selectedCell.question}"</p>
                <div className="flex items-center gap-2 text-success font-bold">
                  <span>Resposta: {selectedCell.answer}</span>
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-muted/50 rounded-2xl p-6 border border-border text-center">
            <p className="text-muted-foreground">
              👆 Clique em qualquer termo acima para ver a pergunta correspondente
            </p>
          </div>
        )}
      </div>

      {/* Magic Feedback */}
      <div className="mt-6 text-center p-4 bg-gradient-to-r from-accent/20 via-math-orange/20 to-primary/20 rounded-xl">
        <p className="text-lg font-semibold text-foreground">
          ✨ Percebeu a mágica? Cada termo da cartela tem uma pergunta clara e direta. 
          O aprendizado acontece naturalmente, sem esforço. Seus alunos vão adorar!
        </p>
      </div>
    </div>
  );
};

export default InteractiveBingoCard;