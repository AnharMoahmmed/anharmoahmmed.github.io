
import React, { useState, useRef, useEffect } from 'react';
import { askAssistant } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi! I'm Anhar's AI assistant. Ask me anything about her skills or experience!", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-[#1E2430] rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col border border-[#283141] h-[500px] overflow-hidden">
          <div className="p-4 bg-gradient-to-r from-[#00C4CC] to-teal-400 text-[#171C24] flex justify-between items-center shadow-lg">
            <h3 className="font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#171C24] rounded-full animate-pulse"></span>
              Ask AI
            </h3>
            <button onClick={() => setIsOpen(false)} className="hover:text-slate-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#171C24]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.isBot
                    ? 'bg-[#1E2430] text-[#9EA8B6] shadow-sm border border-[#283141]'
                    : 'bg-[#00C4CC] text-[#171C24] font-bold shadow-md'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1E2430] text-[#9EA8B6] p-3 rounded-2xl text-sm shadow-sm border border-[#283141] flex gap-1">
                  <span className="w-1.5 h-1.5 bg-[#00C4CC] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#00C4CC] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#00C4CC] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-[#1E2430] border-t border-[#283141] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 bg-[#171C24] border border-[#283141] rounded-lg px-4 py-2 text-sm text-white focus:ring-2 focus:ring-[#00C4CC] transition-all outline-none"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-[#00C4CC] text-[#171C24] p-2 rounded-lg hover:bg-[#1AD1D9] transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#00C4CC] hover:bg-[#1AD1D9] text-[#171C24] p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center gap-2 font-bold"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="hidden sm:inline">Ask Anhar</span>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
