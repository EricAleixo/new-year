"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface ProtectedMessagePageProps {
  friendName: string;
  children: React.ReactNode;
}

export default function ProtectedMessagePage({ friendName, children }: ProtectedMessagePageProps) {
  const router = useRouter();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAccess = () => {
      try {
        // Normaliza o nome para o formato da key
        const nameKey = friendName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
        
        // Verifica se o baú foi desbloqueado no localStorage
        const isUnlockedStorage = localStorage.getItem(`unlocked:${nameKey}`);
        
        if (isUnlockedStorage === 'true') {
          setIsUnlocked(true);
        } else {
          // Se não foi desbloqueado, redireciona para a home
          setTimeout(() => {
            router.push('/');
          }, 1500);
        }
      } catch (error) {
        // Se houver erro ao verificar, redireciona para a home
        console.error('Erro ao verificar acesso:', error);
        setTimeout(() => {
          router.push('/');
        }, 1500);
      } finally {
        setIsChecking(false);
      }
    };

    checkAccess();
  }, [friendName, router]);

  // Tela de carregamento
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Verificando acesso...</p>
        </motion.div>
      </div>
    );
  }

  // Tela de acesso negado
  if (!isUnlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <svg className="w-20 h-20 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">🔒 Acesso Negado</h1>
          <p className="text-gray-300 mb-6">
            Você precisa desbloquear o baú de <span className="text-amber-400 font-semibold">{friendName}</span> primeiro!
          </p>
          <p className="text-gray-400 text-sm">
            Redirecionando para a página inicial...
          </p>
        </motion.div>
      </div>
    );
  }

  // Se passou na verificação, mostra o conteúdo
  return <>{children}</>;
}