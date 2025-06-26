
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, User, Bot } from 'lucide-react';
import LottiePlayer from './LottiePlayer';
import { LOTTIE_ANIMATIONS } from '../constants';

interface DemoModalProps {
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  isLottie?: boolean;
}

const DemoModal: React.FC<DemoModalProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello! I am ALVA, your AI assistant. How can I help you automate your business today?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const predefinedResponses: { [key: string]: string | (() => Message) } = {
    "hello": "Hi there! What business challenge can I help you explore automation for?",
    "what can you do": "I can help you understand how ALVAIO can automate e-commerce tasks, customer support, CRM workflows, and much more! For example, type 'tell me about e-commerce automation'.",
    "tell me about e-commerce automation": () => ({ id: Date.now(), text: LOTTIE_ANIMATIONS.ecommerceAiMerge, sender: 'bot', isLottie: true }),
    "how does ai chatbot work": "Our AI chatbots use Natural Language Processing to understand and respond to customer queries 24/7. They can handle FAQs, guide users, and even escalate to human agents when needed. Here's a visual:",
    "show chatbot animation": () => ({ id: Date.now(), text: LOTTIE_ANIMATIONS.chatbot, sender: 'bot', isLottie: true }),
    "bye": "Goodbye! Feel free to explore our website or contact us for more information.",
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const lowerInput = inputValue.toLowerCase();
      let botResponseText: string | (() => Message) = "I'm still learning! For a detailed demo, please contact our team. But I can tell you about e-commerce automation or show a chatbot animation.";
      
      for (const keyword in predefinedResponses) {
        if (lowerInput.includes(keyword)) {
          botResponseText = predefinedResponses[keyword];
          break;
        }
      }
      
      let botMessage: Message;
      if (typeof botResponseText === 'function') {
        botMessage = botResponseText();
      } else {
        botMessage = { id: Date.now() + 1, text: botResponseText, sender: 'bot' };
      }

      // Special handling for chatbot animation prompt
      if (lowerInput.includes("how does ai chatbot work")) {
         setMessages(prev => [...prev, 
            { id: Date.now() + 1, text: botResponseText as string, sender: 'bot' },
            { id: Date.now() + 2, text: LOTTIE_ANIMATIONS.chatbot, sender: 'bot', isLottie: true }
         ]);
      } else {
         setMessages(prev => [...prev, botMessage]);
      }


    }, 1000 + Math.random() * 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-fade-in-up animation-duration-300">
      <div className="bg-white dark:bg-dark-card rounded-xl shadow-2xl w-full max-w-lg h-[70vh] max-h-[600px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <LottiePlayer src={LOTTIE_ANIMATIONS.aiBrain} className="w-10 h-10 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">ALVAIO AI Demo</h3>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X size={24} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-grow p-4 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-3 rounded-xl ${msg.sender === 'user' ? 'bg-brand-primary text-white rounded-br-none' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}>
                {msg.sender === 'bot' && !msg.isLottie && <Bot size={16} className="inline mr-1 mb-0.5" />}
                {msg.sender === 'user' && <User size={16} className="inline mr-1 mb-0.5" />}
                {msg.isLottie ? (
                  <LottiePlayer src={msg.text} className="w-full h-48" />
                ) : (
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[70%] p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none">
                <div className="flex items-center space-x-1">
                    <Bot size={16} className="inline mr-1" />
                    <span className="text-sm">ALVA is typing</span>
                    <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about automation..."
              className="flex-grow p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={handleSend}
              disabled={isTyping}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white p-2.5 rounded-lg disabled:opacity-50 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
