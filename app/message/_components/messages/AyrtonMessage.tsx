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
    title: "Opa, professor Ayrton!",
    content: `Feliz ano novo cara!`,
    image: "/images/ayrton.gif",
  },
  {
    title: "2025 foi incrível",
    content: `Agradeço por ser uma das pessoas a animar meu 2025. Cada momento de brincadeira, cada aula, foi uma formação para um novo Eric. E tenho orgulho de dizer que fui aluno dessa base técnica, que o senhor faz parte, você é o cara.`,
  },
  {
    title: "Momentos de resenha e seriedade",
    content: `Teve momentos de resenha, teve momentos de coisas séria... Mas conseguimos chegar até aqui.`,
    image: "/images/ayrton-3.png"
  },
  {
    title: "A vontade que deu... Não tá escrito",
    content: `A vontade do senhor colocar a senha e ter uma página em HTML com o nome Ayrton foi grande. Tive que resistir a tentação.`,
    image: "/images/ayrton-2.png"
  },
  {
    title: "Mas sem mais delongas...",
    content: `...`,
  },
  {
    title: "Feliz 2026 Ayrton!!!",
    content: `Que Deus abençoe imensamente o senhor e toda sua família! Que seja um ano de glória, honra, paciência, aprendizados e muitas conquistas! Que o senhor continue sempre ganhando o que deseja.`,
    image: "/images/ayrton-1.png",
    isLast: true,
  },
];

export const AyrtonMessage = () => {
  const [lastBackground, setLastBackground] = useState(false);
  const [typedText, setTypedText] = useState("");

  return (
    <main
      className={`relative w-screen h-screen overflow-y-scroll snap-y snap-mandatory transition-colors duration-1000 ${
        lastBackground
          ? "bg-linear-to-br from-blue-800 via-indigo-700 to-purple-700"
          : "bg-linear-to-br from-blue-950 via-indigo-900 to-purple-900"
      }`}
    >
      {slides.map((slide, index) => (
        <SlideCard
          key={index}
          slide={slide}
          setLastBackground={setLastBackground}
          typedText={typedText}
          setTypedText={setTypedText}
        />
      ))}
    </main>
  );
};

const SlideCard = ({
  slide,
  setLastBackground,
  typedText,
  setTypedText,
}: {
  slide: Slide;
  setLastBackground: (val: boolean) => void;
  typedText: string;
  setTypedText: (val: string) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const controls = useAnimation();

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

        const textToType = "Feliz 2026 Ayrton!!!";
        let i = 0;
        setTypedText("");

        const typeNext = () => {
          setTypedText(textToType.slice(0, i + 1));
          i++;
          if (i < textToType.length) {
            setTimeout(typeNext, 100);
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
  }, [isInView, controls, slide, setLastBackground, setTypedText]);

  return (
    <section
      ref={ref}
      className="w-screen h-screen flex justify-center items-center snap-center p-6"
    >
      <motion.div
        className="w-full max-w-5xl p-6 sm:p-10 bg-white/5 backdrop-blur-md border border-blue-500/20 rounded-3xl shadow-xl flex flex-col items-center"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={controls}
      >
        {slide.image && (
          <motion.img
            src={slide.image}
            alt={slide.title}
            className="w-full max-w-2xl h-80 md:h-150 rounded-2xl object-cover object-top mb-6 border border-blue-500/30 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={controls}
          />
        )}

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-pink-300 to-purple-300 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
        >
          {slide.isLast ? typedText : slide.title}
        </motion.h2>

        {!slide.isLast && (
          <motion.p
            className="text-lg md:text-2xl text-center text-blue-100 leading-relaxed whitespace-pre-line"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            {slide.content}
          </motion.p>
        )}

        {slide.isLast && (
          <motion.p
            className="text-lg md:text-2xl text-center text-blue-100 mt-6 leading-relaxed whitespace-pre-line"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: typedText.length === "Feliz 2026 Ayrton!!!".length ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            {slide.content}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};
