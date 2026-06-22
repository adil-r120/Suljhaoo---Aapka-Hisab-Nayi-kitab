import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface Message {
  id: string;
  sender: 'Apka Sathi' | 'user';
  text: string;
  timestamp: Date;
}

const quickReplies = [
  { text: 'What is Suljhaoo?', reply: 'Suljhaoo is a complete Store Platform that replaces traditional registers (Khata book) with simple billing, stock management, and automatic WhatsApp updates for customers.' },
  { text: 'Does it work offline?', reply: 'Yes! Suljhaoo works 100% offline. Your data is saved locally on your device, and syncs automatically with the cloud once you get internet connection.' },
  { text: 'Is it free?', reply: 'We offer a Free Forever plan with basic billing. For scaling stores, we have paid plans starting at just a few rupees a day with advanced analytics and stock alerts.' },
];

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBadge, setHasBadge] = useState(true);
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: '1',
      sender: 'Apka Sathi',
      text: '👋 Namaste! I am your Suljhaoo Assistant. How can I help you manage your shop today?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // User message
    const userMsg: Message = {
      id: crypto.randomUUID(),
      sender: 'user',
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate Bot Response
    setTimeout(() => {
      let botText = "Thank you for reaching out! A member of our support team will get in touch with you shortly. You can also download our app to start tracking bills instantly.";
      
      // Match quick reply if possible
      const match = quickReplies.find(qr => qr.text.toLowerCase() === text.toLowerCase());
      if (match) {
        botText = match.reply;
      } else if (text.toLowerCase().includes('billing') || text.toLowerCase().includes('invoice')) {
        botText = "Suljhaoo generates beautiful GST & non-GST professional invoices that you can share with clients directly via WhatsApp in one tap.";
      } else if (text.toLowerCase().includes('stock') || text.toLowerCase().includes('inventory')) {
        botText = "Our stock module alerts you when items are running low and updates automatically with every sale or purchase.";
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'Apka Sathi',
        text: botText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setHasBadge(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-[360px] sm:w-[380px] h-[500px] rounded-2xl bg-white shadow-2xl border border-brand-purple/10 overflow-hidden flex flex-col mb-4 relative"
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="bg-gradient-brand px-5 py-4 flex items-center justify-between text-white relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg border border-white/10">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-sm leading-tight">Suljhaoo Assistant</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-white/80">Online & Ready</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-brand-purple text-white rounded-tr-none'
                        : 'bg-white text-gray-800 border border-brand-purple/5 rounded-tl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                    <span
                      className={`text-[10px] block mt-1 text-right ${
                        msg.sender === 'user' ? 'text-white/70' : 'text-gray-400'
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-brand-purple/5 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 py-2 border-t border-gray-100 flex flex-wrap gap-1.5 bg-white">
                {quickReplies.map((qr, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => handleSendMessage(qr.text)}
                    className="text-xs text-brand-purple bg-brand-purple/5 border border-brand-purple/10 hover:bg-brand-purple hover:text-white px-2.5 py-1.5 rounded-full transition-all duration-200"
                  >
                    {qr.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t border-gray-100 bg-white flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Suljhaoo..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-purple transition-all"
              />
              <button
                type="submit"
                className="p-2.5 rounded-full bg-brand-purple text-white hover:bg-brand-purple/90 transition-colors shadow-sm disabled:opacity-50"
                disabled={!inputValue.trim()}
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="relative mt-4">
        {/* Concentric subtle rings like the screenshot */}
        <div className="absolute inset-0 rounded-full border border-[#a855f7]/30 scale-[1.3] pointer-events-none" />
        <div className="absolute inset-0 rounded-full border border-[#a855f7]/15 scale-[1.6] pointer-events-none" />
        <div className="absolute inset-0 rounded-full bg-[#a855f7]/5 scale-[1.6] pointer-events-none -z-10" />
        
        <motion.button
          type="button"
          onClick={handleToggle}
          className="w-14 h-14 rounded-full bg-[#a855f7] text-white flex items-center justify-center shadow-lg cursor-pointer relative focus:outline-none z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          layout
        >
          {isOpen ? <X size={24} /> : (
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          )}

          {hasBadge && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white text-[8px] font-bold text-white flex items-center justify-center animate-bounce">
              1
            </span>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default ChatWidget;
