"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Slide {
  title: string;
  content: string;
  image?: string;
  isLastSlide?: boolean;
}

export const JuliaMessage = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (currentSlide === slides.length - 1) {
      const timer = setTimeout(() => {
        setShowTyping(true);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setShowTyping(false);
    }
  }, [currentSlide]);

  const slides: Slide[] = [
    {
      title: "Para Júlia 💙",
      content:
        "Ao escrever essa pequena carta, me lembro dos momentos em que a gente brigava e eu vinha com uma redação preparada.",
      image: "/images/julia-1.jpeg",
    },
    {
      title: "Uma irmãzinha(mais nova) hehehehe",
      content:
        "Você me ensinou o que é ser um ser humano, um exemplo de coragem, curiosidade e dedicação; Eu não aguentaria fazer um estudo orientado sozinho se eu não tivesse alguém pra me espelhar, e você, foi a pessoa com quem mais aprendi na Dom Marcelo.",
    },
    {
      title: "",
      content:
        "Você é realmente a cara da MIL, se fossem todas Maria Júlia seriam uma equipe dos sonhos. Falando em MIL, aquele trote foi engraçado(tá, as pistas Richarlyson vacilou) mas se lembra da cara que a gente ficou no final? tava tudo verde kakakakka e quando todo mundo entrou com a cara de Valter... Duvido você não ter rido.",
      image: "/images/julia-3.jpeg",
    },
    {
      title: '"Melhores Amigos Pra Sempre"',
      content:
        'No começo do ano eu me questionei quando ficamos tão próximos... Se lembra do desfile da taça das casas? a gente tirou uma foto junto lá kakakksk e nesse dia, postei nos meus storys: "Melhores amigos pra sempre", sem perceber o peso que essas palavras simbolizavam. Hoje, percebo que a palavra: "Pra sempre", tem um significado realmente eterno.',
      image: "/images/julia-5.jpeg",
    },
    {
      title: "",
      content:
        'E também percebo, que a palavra "amigos", é alguém com quem se pode contar para sorrir, chorar, brigar, bagunçar e viver... E aprendi isso com algumas pessoas da minha vida; Agora "melhores amigos", tem um som de "Júlia e Gustavo", pessoas que me encontraram em um momento que talvez nem sabia quem eu era.',
      image: "/images/julia-4.jpeg",
    },
    {
      title: "Melhorou né",
      content:
        "E nesse ano, brigamos? sim, muito? batemos a meta né... Mas nesse próximo ano não quero atingir nenhuma delas. Não quero parar de falar com você sendo motivo besta, ou motivo grande, pois consegui maturidade o suficiente pra entender que nenhum motivo é maior que sua companhia, o que pra mim, já é muito.",
    },
    {
      title: "Foi Super Legal!",
      content:
        "Viajamos esse ano, Rio tinto, campina... E como eu disse: cada momento juntos, para mim, é especial. Vamos para a universidade e deixar um pouco da gente lá também, e nos divertir um bocado mesmo.",
      image: "/images/julia-6.png",
    },
    {
      title: "Eu realmente espero isso",
      content:
        "Um dia, seremos professores, desenvolvedores... sei lá, mas me pego sonhando acordado algumas vezes, como seria da hora a gente se encontrando como profissionais em sala de aula, e se lembrar dos tempos de monitoria ou outras aventuras que ainda iremos descobrir. Mas até lá, acho que você vai ter que me aturar por mais um ano no mínimo.",
      image: "/images/julia-7.jpeg",
    },
    {
      title: "Super hiper obrigado",
      content:
        "Muito obrigado por ser não apenas a minha amiga, mas minha melhor amiga, e esse lugar em meu coração, ninguém vai tirar de você, pois é seu. Agradeço pelos momentos felizes, e até os tristes, pelos puxões de orelha e pela chatice crônica... hahaha! Pois isso faz parte de nossa caminhada e cada pedacinho disso demostra o quanto és especial para mim.",
    },
    {
      title: "Feliz 2026 ✨",
      content:
        "Feliz 2026, minha irmã! Que Deus te abençõe ainda mais com pessoas e com habilidades incríveis. E já te dou um spoiler desse ano: você vai brilhar ainda mais",
      isLastSlide: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: (i * 7.3 + 13) % 100,
    top: (i * 11.7 + 23) % 100,
    delay: (i % 20) * 0.1,
    duration: 2 + (i % 3),
  }));

  // Componente do último slide com animações
  const LastSlideContent = () => {
    const [typedText, setTypedText] = useState("");
    const fullText = "você vai brilhar ainda mais";

    useEffect(() => {
      if (!showTyping) return;

      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80);

      return () => clearInterval(typingInterval);
    }, [showTyping]);

    return (
      <div className="text-center">
        <motion.div
          className="flex justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-8 h-8 text-yellow-300" />
          <Heart className="w-10 h-10 text-pink-400 fill-pink-400" />
          <Sparkles className="w-8 h-8 text-yellow-300" />
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-pink-300"
          initial={{ opacity: 0, y: -40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: [1.05, 0.95, 1] }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Feliz 2026 ✨
        </motion.h2>



        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-blue-50 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Feliz 2026, minha irmã! Que Deus te abençõe ainda mais com pessoas e
          com habilidades incríveis. E já te dou um spoiler desse ano:{" "}
        </motion.p>

        <div className="text-lg sm:text-xl md:text-2xl min-h-[2em] mb-8">
          {showTyping && (
            <motion.span
              className="inline-block font-bold relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-pink-300 to-purple-300">
                {typedText}
              </span>
              {typedText.length < fullText.length && (
                <motion.span
                  className="inline-block w-0.5 h-6 bg-pink-300 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
              {typedText.length === fullText.length && (
                <motion.span
                  className="absolute -inset-1 bg-linear-to-r from-yellow-400/30 via-pink-400/30 to-purple-400/30 blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.span>
          )}
        </div>

        <motion.p
          className="text-pink-200 mt-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Com carinho, Eric 💙
        </motion.p>
      </div>
    );
  };

  return (
    <main className="relative min-h-screen bg-linear-to-br from-indigo-950 via-purple-900 to-pink-900 overflow-hidden">
      {/* Botão Voltar */}
      <motion.button
        onClick={() => window.history.back()}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-sm"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </motion.button>

      {/* Indicador de slide */}
      <div className="fixed top-4 right-4 z-50 text-white/70 text-sm">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Estrelas de fundo */}
      {isClient && (
        <div className="absolute inset-0">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10"
            >
              {/* Último slide com layout especial */}
              {slides[currentSlide].isLastSlide ? (
                <LastSlideContent />
              ) : (
                <>
                  {/* Slides normais */}
                  {slides[currentSlide].image && (
                    <motion.div
                      className="relative w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden mb-6 border border-white/20"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <img
                        src={slides[currentSlide].image}
                        alt="Imagem do slide"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}

                  <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-linear-to-r from-pink-200 via-purple-200 to-indigo-200">
                    {slides[currentSlide].title}
                  </motion.h2>

                  <div className="w-24 h-1 bg-linear-to-r from-transparent via-pink-400 to-transparent mx-auto mb-6" />

                  <p className="text-base sm:text-lg md:text-xl text-blue-50 text-center leading-relaxed">
                    {slides[currentSlide].content}
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navegação */}
          <div className="flex justify-between mt-6">
            <motion.button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-full text-white text-sm sm:text-base"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Anterior
            </motion.button>

            <motion.button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-full text-white text-sm sm:text-base"
            >
              Próximo
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}