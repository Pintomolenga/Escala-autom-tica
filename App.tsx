import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { FaqItem, Feature, Testimonial } from './types';
import {
  AIIcon,
  CheckmarkIcon,
  ChevronDownIcon,
  GuaranteeSealIcon,
  LessonsIcon,
  ProductIcon,
  ScheduleIcon,
  StarIcon,
  StrategyIcon,
  VideoIcon,
} from './components/icons';

const CHECKOUT_URL = "https://pay.kirvano.com/281dae7e-8b46-48a6-b255-8d7d726dc012";

// Helper Component: Animated Section Wrapper
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; animation?: 'fade-in' | 'slide-up' }> = ({ children, className = '', animation = 'slide-up' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const animationClass = {
        'fade-in': 'animate-fade-in',
        'slide-up': 'animate-slide-up',
    }[animation];
    
    return (
        <div ref={ref} className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}>
            {children}
        </div>
    );
};


// Component: CTA Button
const CTAButton: React.FC<{ children: React.ReactNode; className?: string; isPulsing?: boolean }> = ({ children, className = '', isPulsing = false }) => (
    <a href={CHECKOUT_URL}
       className={`inline-block px-10 py-4 font-display text-lg font-bold text-black-main bg-gold-main rounded-lg shadow-lg shadow-gold-main/20 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-gold-main/40 ${isPulsing ? 'animate-subtle-pulse' : ''} ${className}`}
    >
        {children}
    </a>
);

// Component: Countdown Timer
const CountdownTimer: React.FC = () => {
    const calculateTimeLeft = useCallback(() => {
        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        const difference = midnight.getTime() - now.getTime();
        
        let timeLeft = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }, []);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const TimerBox = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-bold font-display text-gold-main bg-gray-dark/50 rounded-md px-3 py-1">{String(value).padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-widest mt-1">{label}</div>
        </div>
    );

    return (
        <div className="flex items-center space-x-3 md:space-x-4">
            <TimerBox value={timeLeft.hours} label="Horas" />
            <span className="text-3xl font-bold text-gold-main">:</span>
            <TimerBox value={timeLeft.minutes} label="Min" />
            <span className="text-3xl font-bold text-gold-main">:</span>
            <TimerBox value={timeLeft.seconds} label="Seg" />
        </div>
    );
};

// Component: Header Bar
const Header: React.FC = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-main/80 backdrop-blur-sm border-b border-gray-dark/50 shadow-lg">
        <div className="container mx-auto px-6 py-2 flex justify-center items-center text-center">
            <div className="flex items-center space-x-4 text-sm md:text-base">
                <p className="hidden sm:block">Essa oferta vai sumir em...</p>
                <p className="block sm:hidden">Oferta acaba em...</p>
                <CountdownTimer />
            </div>
        </div>
    </header>
);

// Component: Hero Section
const HeroSection: React.FC = () => (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-dark/20 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gold-main/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-neon/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
            <div className="animate-fade-in">
                <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
                    Receba <span className="text-gold-main">10.000 produtos</span> prontos, vídeos virais e uma estratégia completa pra vender todos os dias
                </h1>
                <p className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto mt-2">— mesmo começando do zero.</p>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6 text-white/80">
                    Aplique tudo. Se não vender, além do reembolso, <span className="font-bold text-white">eu te dou R$200</span>.
                </p>
                <div className="mt-10">
                    <CTAButton isPulsing>Quero começar agora por R$47,90</CTAButton>
                </div>
            </div>
            
            <div className="mt-16 animate-float">
                <div className="relative mx-auto w-full max-w-4xl h-auto aspect-[16/9] bg-gray-dark/50 rounded-2xl border border-gray-dark shadow-2xl p-4">
                  <div className="absolute top-2 left-2 flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center bg-black-main rounded-lg">
                    <div className="grid grid-cols-3 gap-4 text-blue-neon/70">
                        <ProductIcon className="w-16 h-16 opacity-50"/>
                        <VideoIcon className="w-16 h-16 opacity-80"/>
                        <LessonsIcon className="w-16 h-16 opacity-60"/>
                        <StrategyIcon className="w-16 h-16 opacity-70"/>
                        <AIIcon className="w-16 h-16 opacity-90"/>
                        <ScheduleIcon className="w-16 h-16 opacity-50"/>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
);

// Component: Features Section
const featuresData: Feature[] = [
    { icon: <ProductIcon className="w-10 h-10 mb-4 text-gold-main"/>, title: "10.000 Produtos Prontos", description: "Páginas de venda validadas para você apenas copiar e colar." },
    { icon: <VideoIcon className="w-10 h-10 mb-4 text-gold-main"/>, title: "5.000 Vídeos Virais", description: "Conteúdo plug-and-play para você postar e atrair clientes." },
    { icon: <StrategyIcon className="w-10 h-10 mb-4 text-gold-main"/>, title: "Estratégia da 1ª Venda", description: "O passo a passo exato para garantir sua primeira comissão." },
    { icon: <AIIcon className="w-10 h-10 mb-4 text-gold-main"/>, title: "Criação de Vídeos com IA", description: "Aprenda a criar conteúdo infinito sem precisar aparecer." },
    { icon: <ScheduleIcon className="w-10 h-10 mb-4 text-gold-main"/>, title: "Cronograma de Execução", description: "Um plano diário para você seguir e ter resultados consistentes." },
    { icon: <LessonsIcon className="w-10 h-10 mb-4 text-gold-main"/>, title: "+70 Aulas Práticas", description: "Do zero absoluto ao escalonamento das suas vendas diárias." },
];

const FeaturesSection: React.FC = () => (
    <AnimatedSection className="py-20 bg-black-main">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center">O que você <span className="text-gold-main">recebe</span> ao entrar hoje</h2>
            <p className="text-lg text-white/70 text-center max-w-2xl mx-auto mt-4">Um arsenal completo para você construir sua operação de vendas online do zero, sem desculpas.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {featuresData.map((feature, index) => (
                    <div key={index} className="bg-gray-dark border border-gray-dark/50 rounded-xl p-8 text-center transition-all duration-300 hover:scale-105 hover:border-gold-main/50 hover:shadow-2xl hover:shadow-gold-main/10">
                        {feature.icon}
                        <h3 className="font-display text-2xl font-semibold mt-2">{feature.title}</h3>
                        <p className="text-white/70 mt-3">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

// Component: Value Section
const AnimatedCounter: React.FC<{ target: number }> = ({ target }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const duration = 2000;
                    const startTimestamp = performance.now();
                    
                    const step = (timestamp: number) => {
                        const progress = timestamp - startTimestamp;
                        const currentCount = Math.min(start + (target - start) * (progress / duration), target);
                        setCount(Math.floor(currentCount));
                        if (progress < duration) {
                            requestAnimationFrame(step);
                        } else {
                            setCount(target);
                        }
                    };
                    requestAnimationFrame(step);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );
        
        const currentRef = ref.current;
        if(currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if(currentRef) observer.unobserve(currentRef);
        };
    }, [target]);

    return <span ref={ref}>{count.toLocaleString('pt-BR')}</span>;
};

const ValueSection: React.FC = () => (
    <AnimatedSection className="py-20">
        <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-gray-dark border-2 border-gold-main rounded-2xl shadow-2xl shadow-gold-main/20 p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold">Todo o pacote vale mais de R$<AnimatedCounter target={2000} />, mas hoje...</h2>
                <p className="text-lg mt-4 text-white/80">Você não vai pagar nem perto disso.</p>
                <div className="my-8">
                    <p className="text-sm uppercase tracking-widest text-white/70">Acesso Imediato Por Apenas</p>
                    <p className="font-display font-bold text-7xl text-gold-main my-2">R$47,90</p>
                    <p className="text-sm text-white/70">(Pagamento único)</p>
                </div>
                <CTAButton>EU QUERO ESSE DESCONTO</CTAButton>
            </div>
        </div>
    </AnimatedSection>
);

// Component: Testimonials Section
const testimonialsData: Testimonial[] = [
    { name: "Lucas M.", role: "Iniciante em Marketing", text: "Fiz minha primeira venda em 3 dias seguindo o passo a passo. Inacreditável o tanto de conteúdo bom por esse preço.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    { name: "Juliana P.", role: "Estudante", text: "A parte de automação e os vídeos prontos me economizaram semanas de trabalho. Já estou com vendas recorrentes!", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d" },
    { name: "Fernando R.", role: "Jovem Empreendedor", text: "Isso aqui é uma máquina. Se você tá na dúvida, só vai. O suporte da comunidade também é sensacional.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d" },
];

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatedSection className="py-20 bg-gray-dark/30">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-center">A prova de que <span className="text-gold-main">funciona</span></h2>
                <div className="mt-12 max-w-2xl mx-auto relative h-64 md:h-56">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="bg-gray-dark p-8 rounded-xl text-center h-full flex flex-col justify-center">
                                <div className="flex justify-center mb-2">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-gold-main"/>)}
                                </div>
                                <p className="text-lg italic text-white/90">"{testimonial.text}"</p>
                                <div className="flex items-center justify-center mt-6">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-gold-main" />
                                    <div>
                                        <p className="font-bold font-display">{testimonial.name}</p>
                                        <p className="text-sm text-white/60">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

// Component: How It Works Section
const HowItWorksSection: React.FC = () => (
    <AnimatedSection className="py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center">Como funciona? <span className="text-gold-main">É simples.</span></h2>
            <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-4xl mx-auto">
                <div className="text-center p-6">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gray-dark border-2 border-gold-main rounded-full font-display text-4xl font-bold mb-4">1</div>
                    <h3 className="font-display text-2xl font-semibold">Acesse Agora</h3>
                    <p className="text-white/70 mt-2">Garanta seu acesso com desconto e receba tudo no seu e-mail imediatamente.</p>
                </div>
                <div className="text-center p-6">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gray-dark border-2 border-gold-main rounded-full font-display text-4xl font-bold mb-4">2</div>
                    <h3 className="font-display text-2xl font-semibold">Siga o Plano</h3>
                    <p className="text-white/70 mt-2">Assista às aulas iniciais e siga o cronograma de execução à risca.</p>
                </div>
                <div className="text-center p-6">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gray-dark border-2 border-gold-main rounded-full font-display text-4xl font-bold mb-4">3</div>
                    <h3 className="font-display text-2xl font-semibold">Venda Todos os Dias</h3>
                    <p className="text-white/70 mt-2">Aplique as estratégias, use os materiais e veja as comissões caindo.</p>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

// Component: FAQ Section
const faqData: FaqItem[] = [
    { question: "Funciona pra quem tá começando do absoluto zero?", answer: "Sim! O conteúdo foi desenhado para levar alguém do zero até as primeiras vendas e depois escalar. Não precisa de nenhuma experiência prévia." },
    { question: "Preciso investir muito dinheiro além dos R$47,90?", answer: "Não. As estratégias ensinadas utilizam majoritariamente tráfego orgânico (sem investir em anúncios). O único investimento obrigatório é o seu tempo e dedicação." },
    { question: "Preciso aparecer nas câmeras para vender?", answer: "De forma alguma. Ensinamos métodos para criar vídeos virais usando Inteligência Artificial e bancos de vídeos, permitindo que você venda sem nunca mostrar o rosto." },
    { question: "Como e quando eu recebo o conteúdo?", answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para acessar a área de membros com as aulas e os materiais." },
];

const AccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-dark">
            <button
                className="w-full flex justify-between items-center text-left py-5 px-6"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-display text-lg font-semibold">{item.question}</span>
                <ChevronDownIcon className={`w-6 h-6 text-gold-main transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-6 pb-5 text-white/80">{item.answer}</p>
            </div>
        </div>
    );
};

const FaqSection: React.FC = () => (
    <AnimatedSection className="py-20 bg-gray-dark/30">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center">Perguntas Frequentes</h2>
            <div className="max-w-3xl mx-auto mt-12 bg-gray-dark rounded-xl overflow-hidden">
                {faqData.map((item, index) => <AccordionItem key={index} item={item} />)}
            </div>
        </div>
    </AnimatedSection>
);

// Component: Guarantee Section
const GuaranteeSection: React.FC = () => (
    <AnimatedSection className="py-20">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gray-dark border-2 border-dashed border-gold-main rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center text-center md:text-left gap-8">
                <GuaranteeSealIcon className="animate-spin-slow flex-shrink-0"/>
                <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">Garantia Blindada de Risco Zero</h2>
                    <p className="text-2xl font-bold mt-4 text-gold-main">"Se aplicar tudo e não vender, devolvo seu dinheiro + R$200 no seu bolso."</p>
                    <p className="text-white/70 mt-4">É simples. Você tem 30 dias para aplicar o método. Se seguir o passo a passo e, mesmo assim, não realizar nenhuma venda, eu não só devolvo 100% do seu investimento de R$47,90, como também te envio um PIX de R$200 pelo seu tempo. O risco é todo meu.</p>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

// Component: Final Offer Section
const FinalOfferSection: React.FC = () => (
    <AnimatedSection className="py-20">
        <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold">Essa é sua <span className="text-gold-main">última chance</span></h2>
                <p className="text-lg text-white/80 mt-4">Depois que o cronômetro zerar, essa oferta com todos os bônus e a garantia dupla desaparecerá para sempre.</p>
                
                <div className="bg-gray-dark rounded-xl p-8 my-10 text-left space-y-4">
                    <p className="flex items-start"><CheckmarkIcon className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"/> <span><span className="font-bold">10.000 Produtos</span> com páginas prontas</span></p>
                    <p className="flex items-start"><CheckmarkIcon className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"/> <span><span className="font-bold">5.000 Vídeos Virais</span> plug & play</span></p>
                    <p className="flex items-start"><CheckmarkIcon className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"/> <span>Estratégia para a <span className="font-bold">Primeira Venda</span></span></p>
                    <p className="flex items-start"><CheckmarkIcon className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"/> <span>Criação de vídeos com <span className="font-bold">Inteligência Artificial</span></span></p>
                    <p className="flex items-start"><CheckmarkIcon className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"/> <span><span className="font-bold">+70 Aulas</span> para escalar do zero</span></p>
                    <p className="flex items-start"><CheckmarkIcon className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"/> <span>Garantia Incondicional <span className="font-bold">+ R$200 no seu bolso</span></span></p>
                </div>

                <CTAButton isPulsing className="w-full text-xl py-5">QUERO GARANTIR MINHA VAGA AGORA</CTAButton>
                <p className="text-sm text-white/60 mt-4">Clique no botão. Acesso imediato.</p>
            </div>
        </div>
    </AnimatedSection>
);

// Component: Footer
const Footer: React.FC = () => (
    <footer className="py-8 border-t border-gray-dark">
        <div className="container mx-auto px-6 text-center text-sm text-white/50">
            <p>Copyright © {new Date().getFullYear()} - Máquina de Vendas IA. Todos os direitos reservados.</p>
            <p className="mt-2">CNPJ Fictício: 33.041.260/0652-90</p>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="hover:text-gold-main transition-colors">Garantia de 30 dias</a>
                <span>|</span>
                <a href="#" className="hover:text-gold-main transition-colors">Contato por E-mail</a>
                <span>|</span>
                <a href="#" className="hover:text-gold-main transition-colors">Política de Reembolso</a>
            </div>
        </div>
    </footer>
);

export default function App() {
  return (
    <div className="bg-black-main text-white font-sans">
      <Header />
      <main className="pt-[60px]"> {/* Padding top to offset fixed header */}
        <HeroSection />
        <FeaturesSection />
        <ValueSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <FaqSection />
        <GuaranteeSection />
        <FinalOfferSection />
      </main>
      <Footer />
    </div>
  );
}