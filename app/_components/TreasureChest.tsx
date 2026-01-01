import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  friendName: string;
  color: 'gold' | 'silver' | 'purple';
  password: string;
  onUnlocked?: () => void;
}

const Modal = ({ isOpen, onClose, friendName, color, password, onUnlocked }: ModalProps) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const colorStyles = {
    gold: {
      body: 'from-amber-800 to-amber-950',
      lock: 'from-yellow-600 to-yellow-800',
      shadow: 'shadow-yellow-500/50',
      nameText: 'text-amber-300',
      nameBorder: 'border-amber-700',
      glowColor: 'rgba(251, 191, 36, 0.5)'
    },
    silver: {
      body: 'from-gray-700 to-gray-900',
      lock: 'from-gray-400 to-gray-600',
      shadow: 'shadow-gray-400/50',
      nameText: 'text-gray-300',
      nameBorder: 'border-gray-600',
      glowColor: 'rgba(156, 163, 175, 0.5)'
    },
    purple: {
      body: 'from-purple-800 to-purple-950',
      lock: 'from-purple-600 to-purple-800',
      shadow: 'shadow-purple-500/50',
      nameText: 'text-purple-300',
      nameBorder: 'border-purple-700',
      glowColor: 'rgba(168, 85, 247, 0.5)'
    }
  };

  const styles = colorStyles[color];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsUnlocked(false);
      setPasswordInput('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePasswordSubmit = async () => {
    try {
      const response = await fetch('/api/validate-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          friendName: friendName,
          password: passwordInput,
        }),
      });

      // Verifica se a resposta é JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error('Resposta não é JSON:', await response.text());
        // Fallback: validar localmente se a API não estiver disponível
        if (passwordInput === password) {
          setIsUnlocked(true);
          setShowError(false);
          // Salva no storage que esse amigo foi desbloqueado
          saveUnlockedFriend(friendName);
          if (onUnlocked) {
            onUnlocked();
          }
        } else {
          setShowError(true);
          setTimeout(() => setShowError(false), 2000);
        }
        return;
      }

      const data = await response.json();

      if (data.success) {
        setIsUnlocked(true);
        setShowError(false);
        // Salva no storage que esse amigo foi desbloqueado
        saveUnlockedFriend(friendName);
        if (onUnlocked) {
          onUnlocked();
        }
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 2000);
      }
    } catch (error) {
      console.error('Erro ao validar senha:', error);
      // Fallback: validar localmente se houver erro
      if (passwordInput === password) {
        setIsUnlocked(true);
        setShowError(false);
        // Salva no storage que esse amigo foi desbloqueado
        saveUnlockedFriend(friendName);
        if (onUnlocked) {
          onUnlocked();
        }
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 2000);
      }
    }
  };

  // Função auxiliar para salvar o amigo desbloqueado
  const saveUnlockedFriend = (name: string) => {
    try {
      const nameKey = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
      localStorage.setItem(`unlocked:${nameKey}`, 'true');
    } catch (error) {
      console.error('Erro ao salvar desbloqueio:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handlePasswordSubmit();
    }
  };

  const handleShowMessage = () => {
    const confetti = (window as any).confetti;
    
    if (confetti) {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        zIndex: 99999
      };

      function fire(particleRatio: number, opts: any) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      }

      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    }
    
    setTimeout(() => {
      // Redireciona para a página de mensagem do amigo
      const nameSlug = friendName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
      router.push(`/message/${nameSlug}`);
    }, 500);
  };

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop com blur */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Container com scroll */}
          <div className="relative w-full h-full max-h-screen overflow-y-auto flex items-center justify-center py-4 sm:py-6">
            <motion.div
              className={`relative bg-linear-to-br ${styles.body} rounded-2xl w-full max-w-md border-4 ${styles.nameBorder} shadow-2xl mx-auto my-auto`}
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Conteúdo do modal com padding responsivo */}
              <div className="p-6 sm:p-8">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 z-10"
                  aria-label="Fechar"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {!isUnlocked ? (
                  <>
                    {/* Password Form */}
                    <div className="text-center mb-6">
                      <motion.div
                        className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-linear-to-br ${styles.lock} rounded-full flex items-center justify-center ${styles.shadow} shadow-lg`}
                        animate={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-amber-100" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                      <h2 className={`text-2xl sm:text-3xl font-bold ${styles.nameText} mb-2`}>
                        Baú de {friendName}
                      </h2>
                      <p className="text-gray-300 text-xs sm:text-sm px-4">
                        Digite a senha para desbloquear seu tesouro
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <input
                          type="password"
                          value={passwordInput}
                          onChange={(e) => setPasswordInput(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Digite a senha..."
                          className="w-full px-4 py-3 bg-black/30 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors text-base"
                          autoFocus
                        />
                      </div>

                      {showError && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded-lg text-sm text-center"
                        >
                          ❌ Senha incorreta! Tente novamente.
                        </motion.div>
                      )}

                      <button
                        onClick={handlePasswordSubmit}
                        disabled={!passwordInput}
                        className={`w-full bg-linear-to-r ${styles.lock} hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all transform active:scale-95 ${styles.shadow} shadow-lg text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        🗝️ Desbloquear
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Unlocked Message */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <motion.div
                        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 0.6 }}
                      >
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>

                      <h2 className={`text-2xl sm:text-3xl font-bold ${styles.nameText} mb-4`}>
                        🎉 Desbloqueado!
                      </h2>

                      <div className="bg-black/30 rounded-lg p-4 sm:p-6 mb-6 border-2 border-amber-500/30">
                        <p className="text-amber-300 text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                          🎁 Parabéns, {friendName}!
                        </p>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          Você desbloqueou seu tesouro especial! 🌟
                        </p>
                      </div>

                      <motion.button
                        onClick={handleShowMessage}
                        className={`w-full bg-linear-to-r ${styles.lock} hover:opacity-90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all mb-4 relative overflow-hidden`}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          boxShadow: [
                            `0 0 20px ${styles.glowColor}`,
                            `0 0 40px ${styles.glowColor.replace('0.5', '0.8')}`,
                            `0 0 20px ${styles.glowColor}`,
                          ]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <motion.span 
                          className="relative z-10 text-lg sm:text-2xl flex items-center justify-center gap-2"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ 
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          ✨ Ver Mensagem!!! ✨
                        </motion.span>
                        
                        <motion.div
                          className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-200%', '200%'] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </motion.button>

                      <button
                        onClick={onClose}
                        className="w-full bg-linear-to-r from-gray-600 to-gray-800 hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all transform active:scale-95 text-sm sm:text-base"
                      >
                        Fechar
                      </button>
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

interface TreasureChestProps {
  friendName: string;
  color?: 'gold' | 'silver' | 'purple';
  password: string;
  onUnlocked?: () => void;
}

const TreasureChest = ({ friendName, color = 'gold', password, onUnlocked }: TreasureChestProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const colorStyles = {
    gold: {
      glow: 'from-amber-500 via-yellow-500 to-amber-500',
      body: 'from-amber-800 to-amber-950',
      lid: 'from-amber-700 to-amber-900',
      lock: 'from-yellow-600 to-yellow-800',
      shadow: 'shadow-yellow-500/50',
      nameText: 'text-amber-300',
      nameBg: 'bg-amber-900/80',
      nameBorder: 'border-amber-700'
    },
    silver: {
      glow: 'from-gray-400 via-slate-300 to-gray-400',
      body: 'from-gray-700 to-gray-900',
      lid: 'from-gray-600 to-gray-800',
      lock: 'from-gray-400 to-gray-600',
      shadow: 'shadow-gray-400/50',
      nameText: 'text-gray-300',
      nameBg: 'bg-gray-800/80',
      nameBorder: 'border-gray-600'
    },
    purple: {
      glow: 'from-purple-500 via-violet-400 to-purple-500',
      body: 'from-purple-800 to-purple-950',
      lid: 'from-purple-700 to-purple-900',
      lock: 'from-purple-600 to-purple-800',
      shadow: 'shadow-purple-500/50',
      nameText: 'text-purple-300',
      nameBg: 'bg-purple-900/80',
      nameBorder: 'border-purple-700'
    }
  };

  const styles = colorStyles[color];

  return (
    <>
      <motion.div 
        className="relative cursor-pointer w-full max-w-xs mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Glow effect */}
        <motion.div 
          className={`absolute -inset-4 bg-linear-to-r ${styles.glow} rounded-lg blur-xl`}
          animate={{ 
            opacity: isHovered ? [0.4, 0.7, 0.4] : [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Chest container */}
        <div className="relative" style={{ perspective: '1000px' }}>
          {/* Chest lid */}
          <div className="relative" style={{ zIndex: 20 }}>
            <div className={`h-12 sm:h-16 bg-linear-to-b ${styles.lid} rounded-t-3xl border-4 border-amber-950/50 relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-30">
                <div className="h-1 bg-black/40 absolute top-3 sm:top-4 w-full" />
                <div className="h-1 bg-black/40 absolute top-6 sm:top-8 w-full" />
                <div className="h-1 bg-black/40 absolute top-9 sm:top-12 w-full" />
              </div>
              
              <div className="absolute left-1/4 top-0 bottom-0 w-2 sm:w-3 bg-linear-to-b from-yellow-700 to-yellow-900 opacity-80" />
              <div className="absolute right-1/4 top-0 bottom-0 w-2 sm:w-3 bg-linear-to-b from-yellow-700 to-yellow-900 opacity-80" />
            </div>

            {/* Lock */}
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 -bottom-6 sm:-bottom-8"
              style={{ zIndex: 30 }}
              animate={{ y: isHovered ? -20 : 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <motion.div 
                className={`w-12 h-16 sm:w-16 sm:h-20 bg-linear-to-br ${styles.lock} rounded-lg ${styles.shadow} shadow-lg flex items-center justify-center border-2 border-yellow-900/50`}
                animate={isHovered ? {
                  boxShadow: [
                    '0 10px 30px rgba(251, 191, 36, 0.3)',
                    '0 10px 50px rgba(251, 191, 36, 0.6)',
                    '0 10px 30px rgba(251, 191, 36, 0.3)',
                  ]
                } : {}}
                transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
              >
                <motion.svg 
                  className="w-6 h-6 sm:w-8 sm:h-8 text-amber-100" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  animate={isHovered ? { scale: [1, 1.15, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </motion.svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Light glow */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-12 sm:top-16 w-32 sm:w-40 h-32 sm:h-40 bg-yellow-300 rounded-full blur-3xl pointer-events-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: isHovered ? [0.4, 0.7, 0.4] : 0,
              scale: isHovered ? 1.2 : 0.5
            }}
            transition={{ 
              opacity: { 
                duration: isHovered ? 1 : 0.6,
                repeat: isHovered ? Infinity : 0,
                ease: "easeOut"
              },
              scale: { 
                duration: isHovered ? 0.4 : 0.5,
                ease: "easeOut"
              }
            }}
            style={{ zIndex: 5 }}
          />

          {/* Chest body */}
          <div className={`h-24 sm:h-32 bg-linear-to-b ${styles.body} border-4 border-amber-950/50 border-t-0 relative overflow-visible rounded-b-lg`} style={{ zIndex: 10 }}>
            <div className="absolute inset-0 opacity-30">
              <div className="h-1 bg-black/40 absolute top-6 sm:top-8 w-full" />
              <div className="h-1 bg-black/40 absolute top-12 sm:top-16 w-full" />
              <div className="h-1 bg-black/40 absolute top-18 sm:top-24 w-full" />
            </div>

            <div className="absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-t-2 border-yellow-700/80 rounded-tl" />
            <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-t-2 border-yellow-700/80 rounded-tr" />
            <div className="absolute bottom-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-b-2 border-yellow-700/80 rounded-bl" />
            <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-b-2 border-yellow-700/80 rounded-br" />

            <div className="absolute left-1/4 top-0 bottom-0 w-2 sm:w-3 bg-linear-to-b from-yellow-700 to-yellow-900 opacity-80" />
            <div className="absolute right-1/4 top-0 bottom-0 w-2 sm:w-3 bg-linear-to-b from-yellow-700 to-yellow-900 opacity-80" />
          </div>

          {/* Friend name tag */}
          <motion.div 
            className="absolute -bottom-16 sm:-bottom-20 left-1/2 -translate-x-1/2 w-full text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className={`inline-block ${styles.nameBg} backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border-2 ${styles.nameBorder}`}>
              <h3 className={`text-base sm:text-xl font-bold ${styles.nameText}`}>
                {friendName}
              </h3>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Modal usando Portal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        friendName={friendName}
        color={color}
        password={password}
        onUnlocked={onUnlocked}
      />
    </>
  );
};

export default TreasureChest;