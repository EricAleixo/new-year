"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export const EmmanuelMessage = () => {
    return (
        <main className="relative min-h-screen bg-linear-to-br from-slate-950 via-indigo-900 to-violet-900 flex items-center justify-center p-4 overflow-hidden">
            {/* Card único */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10 text-center"
            >
                {/* Espaço para foto */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative w-full h-52 sm:h-60 md:h-64 rounded-2xl overflow-hidden mb-6 border border-white/20"
                >
                    {/* Substitua o src pela imagem desejada */}
                    <img
                        src="/images/emmanuel.png"
                        alt="Foto do Emmanuel"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "50% 15%" }}
                    />



                    {/* Glow suave */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>

                {/* Ícones */}
                <motion.div
                    className="flex justify-center gap-4 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Sparkles className="w-7 h-7 text-violet-300" />
                    <Heart className="w-9 h-9 text-indigo-400 fill-indigo-400" />
                    <Sparkles className="w-7 h-7 text-violet-300" />
                </motion.div>

                {/* Feliz 2026 — ANIMADO */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-linear-to-r from-indigo-200 via-violet-300 to-purple-300"
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
                    Feliz 2026!!!
                </motion.h1>

                {/* Texto principal */}
                <motion.p
                    className="text-base sm:text-lg md:text-xl text-indigo-50 leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Opa, <strong>Emmanuel</strong>!
                    <br />
                    <br />
                    Queria agradecer por ter ido ao meu TCC, em um primeiro ponto.
                    <br />
                    <br />
                    Desejo a vocês sucesso, paz e tranquilidade por toda a vida, que
                    persista na universidade e nos sonhos, e se especialize em buscar o
                    que realmente importa.
                </motion.p>

                {/* Frase final — ANIMADA */}
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-violet-200 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    Como diria Valter: <em>xeiro no coração</em> 💜
                </motion.p>

                {/* Assinatura */}
                <motion.p
                    className="mt-8 text-indigo-200 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    Com carinho, Eric 💙
                </motion.p>
            </motion.div>
        </main>
    );
};
