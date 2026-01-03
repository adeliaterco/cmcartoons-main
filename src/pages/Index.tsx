import React from 'react';
import logo from '@/assets/logo.png';
import productImage from '@/assets/product-image.png';
import InteractiveBingoCard from '@/components/InteractiveBingoCard';
import ContextSelector from '@/components/ContextSelector';
import CTAButton from '@/components/CTAButton';
import FAQSection from '@/components/FAQSection';
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
    Sparkles,
} from 'lucide-react';

/* util: scroll suave para a cartela */
const scrollToCalculadora = (): void => {
    document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
};

const Index: React.FC = () => (
    <div className="min-h-screen bg-background">

        {/* SEÇÃO 1 — HERO */}
        <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-secondary/10" />
            <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />

            <div className="section-container relative">
                <div className="flex justify-center mb-6">
                    <img src={logo} alt="CMCartoons Logo" className="h-20 sm:h-24 w-auto animate-fade-in" />
                </div>

                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 animate-fade-in">
                        <span className="bg-gradient-to-r from-accent via-math-orange to-primary bg-clip-text text-transparent">
                            ✨ Cartelas Mágicas de Matemática ✨
                        </span>
                    </h1>

                    <h2
                        className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-6 animate-fade-in"
                        style={{ animationDelay: '0.1s' }}
                    >
                        Transforme o Ensino Fundamental!
                    </h2>

                    <div className="space-y-3 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <p className="text-lg sm:text-xl text-foreground flex items-center justify-center gap-2">
                            <span className="text-2xl">🧮</span>
                            <span>O bingo que ensina matemática brincando</span>
                        </p>
                        <p className="text-base sm:text-lg text-muted-foreground italic">
                            Seus alunos vão aprender sem perceber que estão estudando
                        </p>
                    </div>

                    <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <CTAButton
                            text="Quero as Cartelas Mágicas de Matemática Agora"
                            variant="primary"
                            onClick={scrollToCalculadora}
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* SEÇÃO 2 — IMAGEM DO PRODUTO (mantida) */}
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

        {/* SEÇÃO 3 — CARTELA INTERATIVA (agora logo após a imagem) */}
        <section id="calculadora" className="py-12 sm:py-16">
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

        {/* SEÇÃO 4 — COMO JOGAR */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-secondary/10 to-accent/10">
            <div className="section-container">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">🎲 Como jogar?</h2>
                <p className="text-lg text-muted-foreground text-center mb-10">
                    O jogo é simples, intuitivo e fácil de aplicar.
                </p>

                <div className="max-w-3xl mx-auto">
                    <div className="grid gap-4 mb-8">
                        {[
                            'O professor distribui as cartelas de bingo aos alunos;',
                            'Lê as perguntas matemáticas do material;',
                            'O aluno identifica a resposta correta em sua cartela;',
                            'Ganha quem completar linha, coluna ou cartela cheia (conforme regra definida).',
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

        {/* SEÇÃO 5 — SELETOR DE CONTEXTO */}
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

        {/* SEÇÃO 6 — O QUE VOCÊ VAI RECEBER */}
        {/* ...mantenha todo o conteúdo original inalterado... */}

        {/* SEÇÃO 7 — PARA QUEM É */}
        {/* ...conteúdo original... */}

        {/* SEÇÃO 8 — INVESTIMENTO */}
        {/* ...conteúdo original... */}

        {/* SEÇÃO 9 — ENTREGA E ACESSO */}
        {/* ...conteúdo original... */}

        {/* SEÇÃO 10 — GARANTIA */}
        {/* ...conteúdo original... */}

        {/* SEÇÃO 11 — FAQ */}
        <section className="py-12 sm:py-16">
            <div className="section-container">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">❓ Perguntas Frequentes</h2>
                <FAQSection />
            </div>
        </section>

        {/* SEÇÃO 12 — RODAPÉ */}
        {/* ...rodapé original... */}
    </div>
);

export default Index;