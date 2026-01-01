"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Slide {
    title?: string;
    content: string;
    image?: string;
    isLast?: boolean;
}

const slides: Slide[] = [
    {
        title: "Oi, oi, oi, Jamilly Alves 💙",
        content: `FELIZ ANO NOVO!!!`,
    },
    {
        content: `Venho te desejar um ótimo 2026, 2025 foi um ano de altos e baixos... Mas foi um bom ano. Conseguimos ter visão do futuro, e talvez construir uma ponte com ele, ponte essa para nossa independência.`,
    },
    {
        content: `Apesar de tudo que aconteceu antes, espero que consiga me perdoar pelo que fiz, ainda sim, sinto que te magoei.`,
    },
    {
        content: `Obrigado por ter a maturidade de renovar nossa amizade esse ano. Significou muito para mim, talvez tenha sido um "alívio", ainda não me perdoei por muitas coisas, mas sei que minha hora de redenção vai chegar...`,
    },
    {
        content: `E falando em chegada se bora, 2026 vai ser incrível: faculdade e mais um passo para a independência. Não vou dizer que você vai realizar seu sonho, mas vai começar a realizá-lo.`,
    },
    {
        content: `Muito obrigado pelos momentos e por me ensinar algo que só aprendi com você. Esqueça os maus momentos, vamos nos lembrar agora somente de nossa amizade!`,
    },
    {
        content: `Feliz 2026, que Deus te abençoe eternamente, hoje e sempre! Nunca se esqueça, você é amada, por tudo que você já fez em terra. Tem oportunidades, tem esperança, tem vida.`,
        isLast: true,
        image: "/images/jamilly-1.png", // GIF vertical animado para o último slide
    },
];

export const JamillyMessage = () => {
    const [lastBackground, setLastBackground] = useState(false);

    return (
        <main
            className={`relative w-screen h-screen overflow-y-scroll snap-y snap-mandatory transition-colors duration-1000 ${lastBackground
                    ? "bg-linear-to-br from-blue-900 via-blue-800 to-blue-950"
                    : "bg-linear-to-br from-blue-800 via-blue-700 to-blue-900"
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

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } });
            if (slide.isLast) setLastBackground(true);
            else setLastBackground(false);
        } else {
            controls.start({ opacity: 0, y: 50, scale: 0.95 });
            if (slide.isLast) setLastBackground(false);
        }
    }, [isInView, controls, slide, setLastBackground]);

    const isFunText = slide.content.includes("Feliz 2026");

    return (
        <section
            ref={ref}
            className="w-screen h-screen flex justify-center items-center snap-center p-6"
        >
            <motion.div
                className="w-full max-w-4xl p-6 sm:p-10 bg-white/5 backdrop-blur-md border border-blue-400/20 rounded-3xl shadow-xl flex flex-col items-center"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={controls}
            >
                {slide.image && (
                    <motion.img
                        src={slide.image}
                        alt="Foto de Jamilly e Eric"
                        className="w-auto md:w-72 lg:w-80 h-120 mb-6 object-cover rounded-3xl border-4 border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.8)]"
                        initial={{ opacity: 0, y: 50, scale: 0.85 }}
                        animate={
                            isInView
                                ? {
                                    opacity: 1,
                                    y: 0,
                                    scale: [0.85, 1.05, 1],
                                    rotate: [0, 5, -5, 0],
                                }
                                : { opacity: 0, y: 50, scale: 0.85 }
                        }
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                )}


                {slide.title && (
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold text-center text-blue-300 mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={controls}
                    >
                        {slide.title}
                    </motion.h2>
                )}

                <motion.p
                    className={`text-center leading-relaxed ${isFunText
                            ? "text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-200"
                            : "text-lg sm:text-xl md:text-2xl text-blue-100"
                        }`}
                    initial={{
                        opacity: 0,
                        y: isFunText ? -30 : 20,
                        scale: isFunText ? 0.8 : 1,
                        rotate: isFunText ? -10 : 0,
                    }}
                    animate={
                        isInView
                            ? {
                                opacity: 1,
                                y: 0,
                                scale: isFunText ? [1, 1.1, 1] : 1,
                                rotate: isFunText ? [0, 10, -10, 0] : 0,
                            }
                            : {}
                    }
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {slide.content}
                </motion.p>
            </motion.div>
        </section>
    );
};
