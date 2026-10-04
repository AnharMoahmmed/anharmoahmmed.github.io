import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { askAssistant } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi, I'm Anhar's AI assistant. Ask me about her projects, technical stack, or availability!", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput("");
    setIsLoading(true);

    const botResponse = await askAssistant(userMsg);
    setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="bg-[#0B0F17]/95 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-[90vw] sm:w-[400px] flex flex-col border border-white/10 h-[600px] mb-6 overflow-hidden"
          >
            {/* Console Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#161B22]/50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-[#00C4CC] rounded-full shadow-[0_0_10px_#00C4CC]"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-[#00C4CC] rounded-full animate-ping"></div>
                </div>
                <div>
                  <h3 className="text-white font-black text-sm tracking-widest uppercase">Ai Assistant </h3>
                  <p className="text-[10px] text-[#00C4CC] font-mono leading-none">v1.0.4 - ACTIVE</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Message Feed */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[#0B0F17]/20">
              {messages.map((m, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    m.isBot
                      ? 'bg-[#161B22] text-gray-300 border border-white/5 shadow-sm rounded-tl-none'
                      : 'bg-[#00C4CC] text-[#0B0F17] font-bold shadow-[0_10px_20px_-5px_rgba(0,196,204,0.3)] rounded-tr-none'
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#161B22] p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-1.5">
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-[#00C4CC] rounded-full"></motion.span>
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#00C4CC] rounded-full"></motion.span>
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#00C4CC] rounded-full"></motion.span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Console */}
            <div className="p-6 bg-[#161B22]/50 border-t border-white/5">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Query system..."
                  className="w-full bg-[#0B0F17] border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-sm text-white placeholder-gray-600 focus:border-[#00C4CC]/50 focus:ring-1 focus:ring-[#00C4CC]/30 outline-none transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 bg-[#00C4CC] text-[#0B0F17] rounded-lg hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 transition-all shadow-lg"
                >
                  <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9-7-9-7v14z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

     {/* Launcher Button */}
     {!isOpen && (
        <motion.button
          initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center gap-4 pl-4 pr-6 py-3 bg-[#161B22]/80 backdrop-blur-xl border border-[#00C4CC]/30 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all overflow-visible"
        >
          {/* External Pulsing Ring */}
          <div className="absolute inset-0 rounded-2xl border border-[#00C4CC]/50 animate-ping opacity-20 pointer-events-none" />

          {/* Icon Container with Rotating Effect */}
          <div className="relative w-12 h-12 bg-[#00C4CC] rounded-xl flex items-center justify-center text-[#0B0F17] shadow-[0_0_20px_rgba(0,196,204,0.4)] group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>

            {/* Online Indicator Dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#161B22] rounded-full"></div>
          </div>

          {/* Text Content */}
          <div className="text-left hidden sm:block">
            <p className="text-[10px] font-black text-[#00C4CC] uppercase tracking-[0.2em] leading-none mb-1">AI Assistant</p>
            <p className="text-sm font-bold text-white tracking-tight">Ask Anhar</p>
          </div>

          {/* Subtle Internal Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00C4CC]/0 via-[#00C4CC]/5 to-[#00C4CC]/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
        </motion.button>
      )}
    </div>
  );
};

export default ChatBot;