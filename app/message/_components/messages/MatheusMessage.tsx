"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const MatheusMessage = () => {
    return (
        <main className="relative min-h-screen bg-linear-to-br from-amber-950 via-orange-900 to-yellow-900 flex items-center justify-center p-4 overflow-hidden">
            {/* Card único */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10 text-center"
            >
                {/* Ícones */}
                <motion.div
                    className="flex justify-center gap-4 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Sparkles className="w-8 h-8 text-amber-300" />
                    <Sparkles className="w-10 h-10 text-orange-400" />
                    <Sparkles className="w-8 h-8 text-amber-300" />
                </motion.div>

                {/* Feliz 2026 — ANIMADO */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-orange-300 to-yellow-300"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{
                        opacity: 1,
                        scale: [1.1, 0.95, 1],
                    }}
                    transition={{
                        duration: 1.2,
                        ease: "easeOut",
                    }}
                >
                    Feliz 2026 ✨
                </motion.h1>

                {/* Texto principal */}
                {/* Citação animada */}
                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-8 text-center"
                >
                    <motion.p
                        className="text-xl sm:text-2xl italic text-amber-200 relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className="text-4xl align-top text-orange-300 mr-1">“</span>
                        Ande com pessoas que são iguais ou melhores que você
                        <span className="text-4xl align-bottom text-orange-300 ml-1">”</span>
                    </motion.p>

                    <motion.span
                        className="block mt-2 text-amber-400 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        — Anael Oliveira
                    </motion.span>
                </motion.blockquote>

                <motion.p
                    className="text-base sm:text-lg md:text-xl text-amber-50 leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <br />
                    Foi o conselho que ouvi quando comecei a estagiar. O professor Anael
                    me disse que na vida eu encontraria pessoas tão incríveis que jamais
                    imaginaria e, novamente, ele tinha razão.
                    <br />
                    <br />
                    Dedicação, talento, esforço e responsabilidade são qualidades que o
                    senhor possui e que, nesse tempo, me inspiraram a tentar ser melhor.
                    E por isso, eu só tenho a agradecer.
                </motion.p>

                {/* Fechamento — ANIMADO */}
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-200 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    Muito obrigado pelos ensinamentos e pela presença, Matheus.
                </motion.p>

                <motion.p
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    Feliz 2026, com mais conquistas e mais vitórias!
                </motion.p>

                {/* Assinatura */}
                <motion.p
                    className="mt-10 text-amber-200 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    Com respeito e gratidão, Eric 💙
                </motion.p>
            </motion.div>
        </main>
    );
};
