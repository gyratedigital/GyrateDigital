"use client";

import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [typingMessage, setTypingMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0 && !isTyping && !typingMessage) {
      const welcomeMessage = 'Hello! 👋 Welcome to Gyrate Digital - your all-in-one trusted Digital Agency.\nI\'m here to help you learn about our services, answer your questions, or assist with scheduling a consultation. How can I help you today?';
      // Show typing animation for welcome message
      typeMessage(welcomeMessage, () => {
        setMessages([
          {
            role: 'assistant',
            content: welcomeMessage,
          },
        ]);
        setTypingMessage('');
      });
    }
  }, [isOpen, messages.length, isTyping, typingMessage]);


  useEffect(() => {
    scrollToBottom();
  }, [messages, typingMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpen = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
    setInput('');
    setTypingMessage('');
    setIsTyping(false);
  };

  const typeMessage = (text: string, onComplete: () => void) => {
    setIsTyping(true);
    setTypingMessage('');
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypingMessage(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        onComplete();
      }
    }, 15); // Fast typing speed (15ms per character)
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          history: messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      // Add user message to history
      const updatedMessages = [...messages, { role: 'user' as const, content: userMessage }];
      
      // Type out the assistant response
      typeMessage(data.message, () => {
        setMessages([...updatedMessages, { role: 'assistant', content: data.message }]);
        setTypingMessage('');
      });
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again later.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const currentTheme = theme || resolvedTheme;
  const isDark = currentTheme === 'dark';

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={handleOpen}
        className="fixed cursor-pointer bottom-6 right-6 z-[10000] w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
        aria-label="Open chatbot"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Backdrop - invisible but blocks interactions */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9998]"
          onClick={handleClose}
          aria-hidden="true"
        />
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div
          className="fixed bottom-16 right-6 z-[9999] w-[400px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                <Image
                  src="/gyrate-monogram.png"
                  alt="Gyrate Digital"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold">Gyrate Digital</h3>
                <p className="text-xs opacity-90">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="hover:bg-primary-foreground/20 rounded-full p-1 transition-colors"
              aria-label="Close chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div 
            className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0"
            onWheel={(e) => {
              e.stopPropagation();
            }}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/gyrate-monogram.png"
                      alt="Assistant"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && typingMessage && (
              <div className="flex items-start gap-2 justify-start">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/gyrate-monogram.png"
                    alt="Assistant"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-muted text-foreground">
                  <p className="text-sm whitespace-pre-wrap">{typingMessage}</p>
                  <span className="inline-block w-2 h-4 bg-foreground ml-1 animate-pulse" />
                </div>
              </div>
            )}

            {isLoading && !isTyping && (
              <div className="flex items-start gap-2 justify-start">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/gyrate-monogram.png"
                    alt="Assistant"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-muted text-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-foreground rounded-full animate-bounce delay-75" />
                    <div className="w-2 h-2 bg-foreground rounded-full animate-bounce delay-150" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-muted text-foreground px-4 py-2 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
