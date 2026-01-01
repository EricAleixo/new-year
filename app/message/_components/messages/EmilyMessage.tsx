"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Slide {
  title: string;
  content: string;
  isLast?: boolean;
}

const slides: Slide[] = [
  {
    title: "Feliz ano novo, Emily!!! 💙",
    content: `Feliz 2026 para você!

Não podia deixar de escrever esta pequena carta, que deveria ter te entregado no EJC.`,
  },
  {
    title: "Sobre cartas e sentimentos",
    content: `Eu vi sua carta, e comecei a chorar só de ver kkkkk.
E digo isso pois, se aquele tanto de carta que eu ganhei estava ali, quer dizer que pessoas se moveram para isso, e com certeza uma delas foi você.`,
  },
  {
    title: "A melhor experiência da minha vida",
    content: `Obrigado por ter me proporcionado a melhor experiência da minha vida.
Eu pulei, dancei, brinquei e me aproximei mais de Cristo.

Minha caminhada não parou. Pelo contrário, continua ainda mais forte.`,
  },
  {
    title: "Algo mudou em mim",
    content: `Estou estudando a bíblia em casa desde então, e talvez esteja me descobrindo ainda mais.

“Ressuscitado” combinou comigo.
Depois daquelas cartas, já não sou o mesmo Eric — e isso é ótimo.`,
  },
  {
    title: "Três dias que marcaram",
    content: `Naqueles três dias, eu ressuscitei.
Obrigado por ser acolhedora, gentil e amiga.

Deus abençoou você e seus entes queridos com sua presença.`,
  },
  {
    title: "Com carinho e fé",
    content: `Desejo tudo de ótimo para você e sua família, neste ano e nos próximos.
Espero que possamos nutrir essa amizade ao longo do tempo.

Com carinho e fé,
Eric`,
  },
  {
    title: "✨",
    content: `Que a presença de Cristo nunca falte em sua casa.
Que 2026 seja um ano de luz, paz e propósito.`,
    isLast: true,
  },
];

export const EmilyMessage = () => {
  const [lastBackground, setLastBackground] = useState(false);

  return (
    <main
      className={`relative w-screen h-screen overflow-y-scroll snap-y snap-mandatory transition-colors duration-1000 ${
        lastBackground
          ? "bg-linear-to-br from-sky-400 via-blue-300 to-sky-200"
          : "bg-linear-to-br from-sky-200 via-blue-200 to-sky-300"
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
            setTimeout(typeNext, 120);
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
        className="w-full max-w-4xl p-6 sm:p-10 bg-white/40 backdrop-blur-xl border border-sky-400/40 rounded-3xl shadow-2xl flex flex-col items-center"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={controls}
      >
        {/* Título */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-sky-600 via-blue-500 to-sky-600 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
        >
          {slide.isLast ? typedText : slide.title}
        </motion.h2>

        {/* Conteúdo */}
        {!slide.isLast && (
          <motion.p
            className="text-base sm:text-lg md:text-2xl text-center text-sky-900 leading-relaxed whitespace-pre-line"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            {slide.content}
          </motion.p>
        )}

        {/* Último slide especial */}
        {slide.isLast && (
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-center text-sky-900 mt-6 leading-relaxed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: typedText.length === "FELIZ 2026 ✨".length ? 1 : 0,
              scale:
                typedText.length === "FELIZ 2026 ✨".length ? 1 : 0.95,
            }}
            transition={{ duration: 0.8 }}
          >
            {slide.content}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};
