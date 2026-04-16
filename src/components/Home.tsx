import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { SUBJECTS } from '../data/content';

interface HomeProps {
  onNavigate: (subjectId: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // Boutons principaux
  const buttons = [
    { label: "Stratégie de com", id: "bloc1", icon: "📐", color: "bg-accent", textColor: "text-black" },
    { label: "Cultures de la Com", id: "culture", icon: "🎨", color: "bg-purple-500", textColor: "text-white" },
    { label: "CEJM", id: "cejm", icon: "⚖️", color: "bg-blue-500", textColor: "text-white" }
  ];

  return (
    <div className="flex-1 bg-[#050505] text-white font-sans flex flex-col pb-10 px-4">
      
      {/* Container Principal: centré et format mobile */}
      <div className="w-full max-w-md mx-auto flex flex-col flex-1">

        {/* Espace Animation Lottie */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mt-2 mb-2 flex items-center justify-center"
        >
          <DotLottieReact
            src="https://lottie.host/d4eadce2-a738-4f03-86d7-6c655288b5aa/bt50OB3IhZ.lottie"
            loop
            autoplay
            className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] mx-auto"
          />
        </motion.div>

        {/* Textes d'accueil */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center -mt-8 mb-8 relative z-10"
        >
          <h1 className="text-4xl font-black tracking-tighter mb-4 text-white">
            Bienvenue !
          </h1>
          <p className="text-base text-[#888888] font-medium px-4">
            Tu veux réviser quoi aujourd'hui ?
          </p>
        </motion.div>

        {/* Boutons d'Action */}
        <div className="space-y-4 flex-1">
          {buttons.map((btn, index) => (
            <motion.button
              key={btn.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
              onClick={() => onNavigate(btn.id)}
              className="w-full p-4 md:p-5 bg-[#141414] border border-[#262626] hover:border-white transition-all duration-300 rounded-[2rem] flex items-center justify-between group cursor-pointer shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-inner ${btn.color} ${btn.textColor}`}>
                  {btn.icon}
                </div>
                <span className="text-lg font-bold text-left tracking-tight">{btn.label}</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-[#262626] bg-[#050505] flex items-center justify-center group-hover:bg-white group-hover:block transition-colors mr-1">
                <ArrowRight size={18} className="text-[#888888] group-hover:text-black" />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Footer Contact */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center bg-[#141414] p-6 text-sm rounded-[2rem] border border-[#262626] shadow-md"
        >
          <p className="text-[#888888] font-bold mb-5 tracking-tight">
            T'as des questions ? Pose-les moi ici :
          </p>
          <div className="flex flex-col gap-3">
            <a href="mailto:Tharsananarul@gmail.com" className="flex items-center justify-center gap-3 text-white font-bold hover:text-[#E6FF00] transition-colors bg-[#050505] p-4 rounded-2xl border border-[#262626]">
              <Mail size={18} /> Tharsananarul@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/tharsanan-arulananthaselvam/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-white font-bold hover:text-[#E6FF00] transition-colors bg-[#050505] p-4 rounded-2xl border border-[#262626]">
              <Linkedin size={18} /> Mon Profil LinkedIn
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
