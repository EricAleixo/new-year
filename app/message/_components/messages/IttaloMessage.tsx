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
    title: "Para Professor Ittalo",
    content: `É curioso como, no fim do ano, a gente percebe que algumas pessoas não entram na nossa vida só para ensinar um conteúdo, mas para ensinar um jeito de ser.`,
    image: "/images/ittalo-1.gif",
  },
  {
    title: "E sobre ensinar o jeito de ser...",
    content: `Escrever uma carta para você não é tão simples quanto eu achava, porque qualquer elogio direto parece pouco diante do impacto real que o senhor teve em minha formação. Digo como aluno, profissional e pessoa.`,
    image: "/images/ittalo-2.png",
  },
  {
    title: '"De sala de aula para vida"',
    content: `E não falo só de Java, POO, estrutura de dados ou banco de dados. Falo do que se aprende observando, convivendo, trabalhando perto.`,
  },
  {
    title: "Pro flamenguista mais abusado que eu conheço",
    content: `Às vezes me pergunto: “E se eu não tivesse tido essa referência?” e isso muda completamente a forma como vejo o futuro e o presente. Cada pessoa que eu encontrei, formou uma parte de mim atualmente.`,
    image: "/images/ittalo-3.png",
  },
  {
    title: "Eu te prometo uma coisa: isso muda o mundo",
    content: `Muitas das coisas que aprendi com você não vieram de uma aula direta, mas do exemplo. Da forma como explica, corrige, cobra e respeita. E, em minha nada humilde opinião, acredito que isso muda muita coisa, o exemplo é a melhor forma de transmitir conhecimento humano.`,
  },
  {
    title: "E olha só, eu tenho amigos!",
    content: `Trabalhar com você e fazer parte desse trio, eu, Gustavo e Júlia, é algo que levo com orgulho. A confiança que você deposita cria vontade genuína de fazer melhor, dia após dia.`,
    image: "/images/julia-6.png",
  },
  {
    title: "E isso é o reflexo do que eu quero ser",
    content: `Quando penso no profissional que quero ser no futuro, você aparece como uma referência clara. Não inalcançável, mas possível.`,
  },
  {
    title: "E por mais que seja pouco... Obrigado!",
    content: `Obrigado por ensinar, confiar, ter paciência e ser, acima de tudo, uma pessoa respeitável. Aprendi muito e continuo aprendendo. Espero que ainda possamos fortalecer nossos lados independente da distância.`,
  },
  {
    title: "Feliz 2026 ✨",
    content: `Professor Ittalo, desejo um Feliz 2026, com ainda mais conquistas, saúde e sucesso. Sou grato por tudo que aprendi e levarei comigo daqui pra frente.`,
    image: "/images/ittalo-5.png",
    isLast: true,
  },
];

export const IttaloMessage = () => {
  const [lastBackground, setLastBackground] = useState(false);

  return (
    <main
      className={`relative w-screen h-screen overflow-y-scroll snap-y snap-mandatory transition-colors duration-1000 ${
        lastBackground
          ? "bg-linear-to-br from-red-900 via-black to-zinc-900"
          : "bg-linear-to-br from-black via-zinc-900 to-red-950"
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

        const textToType = 'puts "FELIZ 2026 ✨"';
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
        className="w-full max-w-5xl p-6 sm:p-10 bg-white/5 backdrop-blur-md border border-red-500/20 rounded-3xl shadow-xl flex flex-col items-center"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={controls}
      >
        {slide.image && (
          <motion.img
            src={slide.image}
            alt={slide.title}
            className="w-full max-w-2xl h-80 rounded-2xl object-cover mb-6 border border-red-500/30 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={controls}
          />
        )}

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-red-300 via-red-400 to-red-200 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
        >
          {slide.isLast ? typedText : slide.title}
        </motion.h2>

        {!slide.isLast && (
          <motion.p
            className="text-lg md:text-2xl text-center text-zinc-200 leading-relaxed whitespace-pre-line"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            {slide.content}
          </motion.p>
        )}

        {slide.isLast && (
          <motion.p
            className="text-lg md:text-2xl text-center text-zinc-200 mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: typedText.length === 'puts "FELIZ 2026 ✨"'.length ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            {slide.content}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};
