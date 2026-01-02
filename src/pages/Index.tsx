import logo from "@/assets/logo.png";
import productImage from "@/assets/product-image.png";
import InteractiveBingoCard from "@/components/InteractiveBingoCard";
import ContextSelector from "@/components/ContextSelector";
import CTAButton from "@/components/CTAButton";
import FAQSection from "@/components/FAQSection";
import { 
  Check, 
  Package, 
  Shield, 
  Clock, 
  Download, 
  Star,
  Users,
  GraduationCap,
  Home,
  Gamepad2,
  Sparkles
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEÇÃO 1: HERO */}
      <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-secondary/10" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="section-container relative">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="CMCartoons Logo" 
              className="h-20 sm:h-24 w-auto animate-fade-in"
            />
          </div>

          {/* Main Title */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 animate-fade-in">
              <span className="bg-gradient-to-r from-accent via-math-orange to-primary bg-clip-text text-transparent">
                ✨ Cartelas Mágicas de Matemática ✨
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Transforme o Ensino Fundamental!
            </h2>

            <div className="space-y-3 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg sm:text-xl text-foreground flex items-center justify-center gap-2">
                <span className="text-2xl">🧮</span>
                <span>O bingo que ensina matemática brincando</span>
              </p>
              <p className="text-base sm:text-lg text-muted-foreground italic">
                Seus alunos vão aprender sem perceber que estão estudando
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CTAButton 
                text="Quero as Cartelas Mágicas de Matemática Agora" 
                variant="primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: IMAGEM DO PRODUTO */}
      <section className="py-8 sm:py-12">
        <div className="section-container">
          <div className="relative max-w-md mx-auto">
            <div className="animate-float">
              <img 
                src={productImage} 
                alt="Crianças jogando bingo de matemática" 
                className="w-full rounded-3xl shadow-2xl border-4 border-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: DESCRIÇÃO */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="section-container">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
            📖 DESCRIÇÃO
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/90">
            <p>
              As <strong className="text-primary">Cartelas Mágicas de Matemática</strong> são uma super ferramenta pedagógica criada para transformar o ensino da matemática no Ensino Fundamental em uma experiência lúdica, envolvente e extremamente eficaz.
            </p>
            <p>
              A "mágica" acontece quando o formato de jogo remove a resistência natural que os alunos têm com números e cálculos. Por meio das cartelas, eles revisam e fixam conteúdos essenciais como <strong>operações básicas, números, frações, geometria, medidas, tempo e dinheiro</strong> — tudo de forma leve e participativa.
            </p>
            <p>
              É o recurso ideal para professores que desejam aumentar o engajamento da turma, estimular o raciocínio lógico e tornar a matemática mais acessível e <strong className="text-success">divertida</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: CARTELA INTERATIVA */}
      <section className="py-12 sm:py-16">
        <div className="section-container">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              ✨ Veja a mágica acontecendo na prática:
            </h2>
            <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
              <span className="text-xl">💡</span>
              Clique em qualquer termo da cartela abaixo para ver a pergunta correspondente
            </p>
          </div>
          
          <InteractiveBingoCard />
        </div>
      </section>

      {/* SEÇÃO 5: COMO JOGAR */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="section-container">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
            🎲 Como jogar?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10">
            O jogo é simples, intuitivo e fácil de aplicar.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4 mb-8">
              {[
                "O professor distribui as cartelas de bingo aos alunos;",
                "Lê as perguntas matemáticas do material;",
                "O aluno identifica a resposta correta em sua cartela;",
                "Ganha quem completar linha, coluna ou cartela cheia (conforme regra definida)."
              ].map((step, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-card p-4 rounded-xl shadow-sm border border-border"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <p className="text-foreground font-medium pt-1">{step}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full font-semibold">
                <Check className="w-5 h-5" />
                <span>Pode ser usado individualmente ou em grupo</span>
              </div>
              <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full font-semibold">
                <Check className="w-5 h-5" />
                <span>Ideal para revisão, reforço ou aula dinâmica</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: SELETOR DE CONTEXTO */}
      <section className="py-12 sm:py-16">
        <div className="section-container">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              🎯 Qual é o seu maior desafio em sala de aula?
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha uma opção abaixo para ver como as Cartelas Mágicas de Matemática resolvem seu problema específico
            </p>
          </div>
          
          <ContextSelector />

          {/* Mini product image */}
          <div className="flex justify-center mt-10">
            <img 
              src={productImage} 
              alt="Cartelas Mágicas de Matemática" 
              className="w-32 h-auto rounded-xl shadow-lg"
            />
          </div>

          <div className="text-center mt-8">
            <CTAButton 
              text="Quero garantir que meus alunos aprendam com as Cartelas Mágicas" 
              variant="secondary"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: O QUE VOCÊ VAI RECEBER */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="section-container">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
            📦 O que você vai receber?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10">
            Ao adquirir <strong className="text-foreground">as Cartelas Mágicas de Matemática</strong>, você recebe:
          </p>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { icon: Package, text: "5 cartelas exclusivas de bingo (5x5), todas diferentes" },
              { icon: GraduationCap, text: "Conteúdos alinhados ao Ensino Fundamental" },
              { icon: Check, text: "Folha separada com as perguntas correspondentes a todas as respostas" },
              { icon: Download, text: "Arquivo em PDF, pronto para imprimir ou usar no digital" },
              { icon: Star, text: "Material organizado e de fácil aplicação" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-background p-4 rounded-xl border border-border"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-secondary/20 text-secondary rounded-full flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-foreground font-medium">
                  <span className="text-primary font-bold">{index + 1}.</span> {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Bonus */}
          <div className="max-w-2xl mx-auto mt-8 p-6 bg-gradient-to-r from-accent/20 via-math-orange/20 to-primary/20 rounded-2xl border-2 border-accent/30">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-6 h-6 text-accent" />
              <span className="font-bold text-lg text-foreground">Bônus Especial:</span>
            </div>
            <p className="text-foreground">
              Guia rápido "Como aplicar as Cartelas Mágicas de Matemática em 3 contextos diferentes"
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8: PARA QUEM É */}
      <section className="py-12 sm:py-16">
        <div className="section-container">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
            ❤️ Para quem são as Cartelas Mágicas de Matemática?
          </h2>

          <div className="max-w-xl mx-auto grid gap-3">
            {[
              { icon: GraduationCap, text: "Professores do Ensino Fundamental" },
              { icon: Star, text: "Professores de Matemática" },
              { icon: Users, text: "Reforço escolar" },
              { icon: Home, text: "Pais e educadores domiciliares" },
              { icon: Gamepad2, text: "Alunos que aprendem melhor jogando" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-card p-4 rounded-xl shadow-sm border border-success/30"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                  <p className="text-foreground font-semibold">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 9: INVESTIMENTO */}
      <section id="comprar" className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="section-container">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-6">
            💰 Investimento acessível:
          </h2>

          <div className="max-w-lg mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Baixo custo, alto impacto pedagógico e engajamento garantido.
            </p>
            <p className="text-xl font-semibold text-foreground mb-8">
              ✨ <strong>Menos que um lanche, mais que uma solução mágica para suas aulas.</strong>
            </p>

            {/* Discount Banner */}
            <div className="bg-primary text-primary-foreground rounded-3xl p-6 sm:p-8 shadow-cta mb-8 transform -rotate-1">
              <p className="text-lg font-bold mb-2">DESCONTO ESPECIAL</p>
              <p className="text-xl line-through opacity-70 mb-1">DE: R$ 29,00</p>
              <p className="text-4xl sm:text-5xl font-black">POR: R$ 10,00</p>
            </div>

            <CTAButton 
              text="Quero ofertar dinamismo ao aprendizado dos alunos" 
              variant="dark"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 10: ENTREGA E ACESSO */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="section-container">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border">
              <Package className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Receba seu produto logo após a compra:</h3>
                <p className="text-muted-foreground">
                  Seu produto estará disponível na plataforma de vendas logo após a confirmação da compra.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border">
              <Clock className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">⚡ Acesso vitalício:</h3>
                <p className="text-muted-foreground">
                  Veja a base e faça o download quantas vezes você precisar.
                </p>
              </div>
            </div>

            <div className="text-center py-6">
              <p className="text-2xl font-bold text-foreground mb-2">Menos que um lanche</p>
              <p className="text-muted-foreground mb-6">
                Essa é sua oportunidade de melhorar o aprendizado dos seus alunos por muito menos do que você gasta durante o dia com alimentação.
              </p>
              
              <p className="text-lg text-muted-foreground mb-2">Tudo isso por apenas:</p>
              <p className="text-5xl sm:text-6xl font-black text-primary mb-8">R$ 10,00</p>

              <CTAButton 
                text="Quero garantir minhas Cartelas Mágicas de Matemática" 
                variant="primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 11: GARANTIA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-success/10 to-success/5">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-success text-success-foreground rounded-full mb-6">
              <Shield className="w-10 h-10" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              100% LIVRE DE RISCOS: 7 DIAS DE GARANTIA
            </h2>
            
            <p className="text-xl font-bold text-success mb-6">
              REPETINDO: SÃO 7 DIAS DE GARANTIA
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Caso, por alguma razão, o produto não lhe agrade, você pode solicitar o reembolso dentro de 7 dias. Sem perguntas. Sem complicação.
            </p>

            <CTAButton 
              text="Quero minhas Cartelas Mágicas com 7 dias de garantia" 
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 12: FAQ */}
      <section className="py-12 sm:py-16">
        <div className="section-container">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
            ❓ Perguntas Frequentes
          </h2>
          
          <FAQSection />
        </div>
      </section>

      {/* SEÇÃO 13: RODAPÉ */}
      <footer className="py-10 bg-foreground text-background">
        <div className="section-container">
          <div className="flex flex-col items-center text-center">
            <img 
              src={logo} 
              alt="CMCartoons Logo" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            
            <p className="text-lg font-semibold mb-2">
              ✨ Cartelas Mágicas de Matemática - O bingo que ensina matemática brincando
            </p>
            
            <p className="text-sm text-background/70 mb-6">
              © 2025 CMCARTOONS - Todos os direitos reservados
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="hover:text-accent transition-colors">Contato</a>
              <span className="text-background/50">|</span>
              <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
              <span className="text-background/50">|</span>
              <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
