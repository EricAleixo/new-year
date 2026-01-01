"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Slide {
    title: string;
    content: string;
    image?: string;
    isLast?: boolean;
}

const slides: Slide[] = [
    {
        title: "Para Gustavo",
        content: `É incrível como a Dom Marcelo abriu portas, nunca imaginaria que eu escreveria cartas para esse tanto de pessoas no final no ano...`,
        image: "/images/julia-1.jpeg",
    },
    {
        title: "É complicado bicho...",
        content: `É difícil escrever uma carta pra você, se for pra elogiar uma qualidade, uma redação faria mais sentido, mas como é final de ano, vou ser(quis dizer tentar ser) breve.`,
        image: "/images/gustavo-1.png"
    },
    {
        title: "Tudo na vida tem um significado",
        content: `Muitas vezes quando vou dormir, penso no meu mais íntimo pensamento: "O que aconteceria se eu não tivesse feito isso? O que aconteceria se eu não tivesse conhecido tal pessoa?", depois de um tempo é uma loucura, cara.`,
    },
    {
        title: "E por mais que as vezes não pareça, eu aprendi",
        content: `Sabe quando eu penso no que é ser "homem"? Você é a primeira pessoa que eu penso, você tenta resolver problemas, conseguindo ou não você dá o seu máximo para isso, e você realmente ajuda.`,
        image: "/images/gustavo-2.png"
    },
    {
        title: "Você é fera",
        content: `Digo isso quando você se presta pra ajudar colegas em atividades que você sabe, e até as que não sabe, mas está para aprender junto e somar.

Acho que essa é uma das virtudes de masculinidade que mais admiro, a parte de ser prestativo sem dar desculpas, sem reclamar, só executar. A maneira que trata seus entes queridos é um reflexo de sua alma. Tenho sorte por ter te conhecido, sem brincadeira alguma.`,
    },
    {
        title: "Provavelmente você não se lembra",
        content: `No primeiro ano a gente tinha conversa de "gente" só no final do ano; Já no segundo, logo no comecinho, você morria de rir com o que eu falava, ou eu reclamava de alguma aula ou professor: "Pelo amor de Cristo, Gilliane aqui de novo cara!? isso é imoral".`,
        image: "/images/gustavo-3.png"
    },
    {
        title: "Só entendi a graça agora... hahaha!",
        content: `Quando eu perguntei o motivo de você sorrir, você me respondeu: "Torna mais engraçado pois eu não esperava isso de você".`,
        image: "/images/gustavo-4.png"
    },
    {
        title: "Reflexão",
        content: `E tendo essa lembrança hoje, vejo que você está certo, pois nem eu esperava isso de mim mesmo... E não foi algo ruim, passei minha vida querendo ser o que as pessoas pensavam que eu era. Mas foi nesses últimos anos que decidi ser quem eu sou. E pode apostar, para isso eu tive muitas inspirações.`,
    },
    {
        title: "Futuro",
        content: `Você ainda vai crescer ainda mais, terá uma linda família e espero poder te visitar assim que puder, para falarmos desses bons tempos e sorrir no final da tarde, enquanto somos acompanhados por uma boa xícara de café(espero que goste).`,
        image: "/images/gustavo-5.png"
    },
    {
        title: "Feliz 2026 ✨",
        content: `Bem, Gugas... Esse ano iremos para universidade, e será um passo mais próximo pra nossos objetivos. Agradeço por ser amigo, e um irmão na minha vida. Você é uma pessoa única para professores e família. E infelizmente, terá que me aturar por mais um ano, hahahaha! Feliz festas!!!`,
        image: "/images/gustavo-6.png",
        isLast: true,
    },
];

export const GustavoMessage = () => {
    const [lastBackground, setLastBackground] = useState(false);

    return (
        <main
            className={`relative w-screen h-screen overflow-y-scroll snap-y snap-mandatory transition-colors duration-1000 ${lastBackground
                    ? "bg-linear-to-br from-blue-800 via-sky-700 to-indigo-700"
                    : "bg-linear-to-br from-blue-950 via-sky-900 to-indigo-900"
                }`}
        >
            {slides.map((slide, index) => (
                <SlideCard
                    key={index}
                    slide={slide}
                    setLastBackground={setLastBackground}
                />
            ))}
        </main>
    );
};

const SlideCard = ({
    slide,
    setLastBackground,
}: {
    slide: Slide;
    setLastBackground: (val: boolean) => void;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
    const controls = useAnimation();
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        if (isInView) {
            controls.start({
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6 },
            });

            if (slide.isLast) {
                setLastBackground(true);

                const textToType = "FELIZ 2026 ✨";
                let i = 0;

                const typeNext = () => {
                    setTypedText(textToType.slice(0, i + 1));
                    i++;
                    if (i < textToType.length) {
                        const delay = Math.random() * 70 + 80;
                        setTimeout(typeNext, delay);
                    }
                };

                typeNext();

                return () => setTypedText("");
            } else {
                setLastBackground(false);
                setTypedText("");
            }
        } else {
            controls.start({ opacity: 0, y: 50, scale: 0.95 });
            if (slide.isLast) setTypedText("");
        }
    }, [isInView, controls, slide, setLastBackground]);

    return (
        <section
            ref={ref}
            className="w-screen h-screen flex justify-center items-center snap-center p-6"
        >
            <motion.div
                className="w-full max-w-4xl md:max-w-5xl p-6 sm:p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg flex flex-col items-center relative"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={controls}
            >
                {slide.image && (
                    <motion.img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full max-w-lg md:max-w-2xl h-64 sm:h-80 md:h-96 lg:h-128 rounded-2xl object-cover mb-6 border border-white/20 shadow-xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={controls}
                    />
                )}

                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-sky-200 via-blue-200 to-indigo-200 mb-4 relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={controls}
                >
                    {slide.isLast ? (
                        <span id="fireworks-container" className="relative">
                            {typedText.split("").map((char, index) =>
                                char === "✨" ? (
                                    <span
                                        key={index}
                                        className="text-yellow-400 animate-pulse-glow inline-block"
                                    >
                                        ✨
                                    </span>
                                ) : (
                                    <span key={index}>{char}</span>
                                )
                            )}
                        </span>
                    ) : (
                        slide.title
                    )}
                </motion.h2>

                {/* Texto do último slide aparecendo suavemente */}
                {slide.isLast && (
                    <motion.p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-blue-100 leading-relaxed whitespace-pre-line mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity:
                                typedText.length === "FELIZ 2026 ✨".length ? 1 : 0,
                            y:
                                typedText.length === "FELIZ 2026 ✨".length
                                    ? 0
                                    : 20,
                        }}
                        transition={{ duration: 1 }}
                    >
                        Bem, Gugas... Esse ano iremos para universidade, e será um
                        passo mais próximo pra nossos objetivos. Agradeço por ser
                        amigo, e um irmão na minha vida. Você é uma pessoa única
                        para professores e família. E infelizmente, terá que me
                        aturar por mais um ano, hahahaha! Feliz festas!!!
                    </motion.p>
                )}

                {!slide.isLast && (
                    <motion.p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-blue-100 leading-relaxed whitespace-pre-line"
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                    >
                        {slide.content}
                    </motion.p>
                )}

                {slide.isLast && (
                    <script src="https://cdn.jsdelivr.net/npm/fireworks-js@2.1.0/dist/fireworks.js"></script>
                )}
            </motion.div>
        </section>
    );
};
