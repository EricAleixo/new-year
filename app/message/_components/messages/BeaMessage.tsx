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
    title: "Para Beaaa 💚",
    content: `Feliz ano novo Beaaa!`,
  },
  {
    content: `Obrigado por deixar esse ano mais leve e divertido. Nunca imaginei que teria a sua amizade, assim como também nunca imaginava seria tão boa.`,
  },
  {
    content: `Agradeço pelas brincadeiras, por coisas que hoje fazem sentido pra mim e por ser uma das pessoas que tornou esse ano mais leve.`,
  },
  {
    content: `Independente de onde vá ou esteja, em São Paulo ou até no Japão, precisando só ligar.`,
  },
  {
    content: `Que Deus te abençoe infinitamente hoje e sempre!`,
  },
  {
    content: `Feliz 2026!! Esse ano você desencalha e começa a torcer para um time melhor.`,
    isLast: true,
    image: "/images/bea.png", // imagem de fundo para o último slide
  },
];

export const BeaaaMessage = () => {
  const [lastBackground, setLastBackground] = useState(false);

  return (
    <main
      className={`relative w-screen h-screen overflow-y-scroll snap-y snap-mandatory transition-colors duration-1000 ${
        lastBackground
          ? "bg-linear-to-br from-green-900 via-green-800 to-green-950"
          : "bg-linear-to-br from-green-800 via-green-700 to-green-900"
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

  const isFunText = slide.content.includes("Feliz 2026!!");

  return (
    <section
      ref={ref}
      className="w-screen h-screen flex justify-center items-center snap-center p-6"
    >
      <motion.div
        className="w-full max-w-4xl p-6 sm:p-10 bg-white/5 backdrop-blur-md border border-green-400/20 rounded-3xl shadow-xl flex flex-col items-center"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={controls}
      >
        {slide.image && (
          <motion.img
            src={slide.image}
            alt="Imagem do slide"
            className="w-full h-80 rounded-2xl object-cover mb-6 border border-green-400/30 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={controls}
          />
        )}

        {slide.title && (
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center text-green-300 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
          >
            {slide.title}
          </motion.h2>
        )}

        <motion.p
          className={`text-center leading-relaxed ${
            isFunText
              ? "text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-200"
              : "text-lg sm:text-xl md:text-2xl text-green-100"
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
