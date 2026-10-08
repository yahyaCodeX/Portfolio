import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Sparkles, ChevronDown, AlertCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  error?: boolean;
}

const SUGGESTIONS = [
  "What is his main tech stack?",
  "Show me his best projects",
  "Where did he go to university?",
  "How can I contact him?",
];

// ─── Message bubble ───────────────────────────────────────────────────────────
function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}
    >
      {!isUser && (
        <div className="w-6 h-6 rounded-md bg-[#A3E635]/20 border border-[#A3E635]/30 flex items-center justify-center mr-2 mt-0.5 shrink-0">
          <Sparkles size={11} className="text-[#0F172A]" />
        </div>
      )}
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed overflow-hidden ${
          isUser
            ? "bg-[#0F172A] text-white rounded-tr-sm font-medium shadow-md"
            : message.error
            ? "bg-white border border-red-500/30 text-red-500 rounded-tl-sm shadow-sm"
            : "bg-white border border-[#E2E8F0] text-[#475569] rounded-tl-sm shadow-sm"
        }`}
      >
        {isUser || message.error ? (
          message.content
        ) : (
          <div className="text-[13px] text-[#475569] leading-relaxed break-words space-y-2">
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold text-[#0F172A]">{children}</strong>,
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#0F172A] font-semibold hover:text-[#65a30d] underline underline-offset-2 transition-colors">
                    {children}
                  </a>
                ),
                ul: ({ children }) => <ul className="list-disc pl-4 mb-2 last:mb-0 space-y-1">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 last:mb-0 space-y-1">{children}</ol>,
                li: ({ children }) => <li className="pl-1">{children}</li>,
                h1: ({ children }) => <h1 className="font-semibold text-[#0F172A] text-[15px] mt-3 mb-1">{children}</h1>,
                h2: ({ children }) => <h2 className="font-semibold text-[#0F172A] text-[14px] mt-3 mb-1">{children}</h2>,
                h3: ({ children }) => <h3 className="font-semibold text-[#0F172A] text-[13.5px] mt-2 mb-1">{children}</h3>,
                code: ({ children }) => <code className="bg-gray-100 border border-gray-200 px-1 py-0.5 rounded text-[11.5px] text-[#0F172A] font-mono">{children}</code>,
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ─── Typing indicator ─────────────────────────────────────────────────────────
function TypingIndicator({ phase }: { phase: "searching" | "thinking" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex justify-start mb-3"
    >
      <div className="w-6 h-6 rounded-md bg-[#A3E635]/20 border border-[#A3E635]/30 flex items-center justify-center mr-2 mt-0.5 shrink-0">
        <Sparkles size={11} className="text-[#0F172A]" />
      </div>
      <div className="bg-white border border-[#E2E8F0] rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]/60 animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]/60 animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]/60 animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
          <span className="text-[11px] font-mono text-[#475569]">
            {phase === "searching" ? "Searching Yahya's portfolio..." : "Thinking..."}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Chat Widget ─────────────────────────────────────────────────────────
export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loadingPhase, setLoadingPhase] = useState<"idle" | "searching" | "thinking">("idle");
  const [showScrollDown, setShowScrollDown] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback((smooth = true) => {
    messagesEndRef.current?.scrollIntoView({ behavior: smooth ? "smooth" : "instant" });
  }, []);

  useEffect(() => {
    if (messages.length > 0 || loadingPhase !== "idle") {
      scrollToBottom();
    }
  }, [messages, loadingPhase, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
      setTimeout(() => scrollToBottom(false), 50);
    }
  }, [isOpen, scrollToBottom]);

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    setShowScrollDown(distFromBottom > 60);
  };

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loadingPhase !== "idle") return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoadingPhase("searching");

    // Brief pause → switch to "thinking"
    const thinkingTimer = setTimeout(() => setLoadingPhase("thinking"), 1800);

    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed, history }),
      });

      clearTimeout(thinkingTimer);
      const data = await res.json() as { answer?: string; error?: string };
      if (data.error) console.error("Chat API returned error:", data.error);

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.error
          ? "I'm currently receiving a high volume of requests and need a moment to catch my breath! Please try again in a few seconds, or feel free to reach out to Yahya directly."
          : (data.answer ?? "No response received."),
        error: !!data.error,
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chat fetch failed:", err);
      clearTimeout(thinkingTimer);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "I'm having trouble connecting to the server. Please try again later.",
          error: true,
        },
      ]);
    } finally {
      setLoadingPhase("idle");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, loadingPhase]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const isEmpty = messages.length === 0;

  return (
    <>
      {/* ─── Floating Trigger Button ─── */}
      <motion.button
        id="ai-chat-trigger"
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full text-[13px] font-semibold transition-all duration-300 shadow-lg ${
          isOpen ? "opacity-0 pointer-events-none scale-90" : "opacity-100 scale-100"
        }`}
        style={{
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          color: "#0F172A",
          boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
        }}
        whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(163,230,53,0.3)", borderColor: "#A3E635" }}
        whileTap={{ scale: 0.97 }}
        aria-label="Open AI Chat"
      >
        <Sparkles size={15} className="text-[#0F172A]" />
        <span>Ask Yahya AI</span>
      </motion.button>

      {/* ─── Chat Panel ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-50 flex flex-col w-[360px] sm:w-[400px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "#F4F7FB",
              border: "1px solid #E2E8F0",
              boxShadow: "0 24px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(226,232,240,0.5)",
              maxHeight: "calc(100vh - 80px)",
              height: "580px",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3.5 shrink-0"
              style={{ borderBottom: "1px solid #E2E8F0", background: "#FFFFFF" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#A3E635]/20 border border-[#A3E635]/30 flex items-center justify-center">
                  <Sparkles size={13} className="text-[#0F172A]" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#0F172A] leading-none">Yahya AI</div>
                  <div className="text-[10px] font-mono text-[#475569] mt-0.5">Portfolio Assistant</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" style={{ animation: "available-pulse 2s ease-in-out infinite" }} />
                  <span className="text-[10px] font-mono text-[#475569]">Online</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-black/5 transition-colors"
                  aria-label="Close chat"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Messages area */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto px-4 py-4 scroll-smooth"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#E2E8F0 transparent" }}
            >
              {/* Welcome state */}
              {isEmpty && (
                <div className="flex flex-col items-center text-center pt-4 pb-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#A3E635]/20 border border-[#A3E635]/30 flex items-center justify-center mb-3">
                    <Sparkles size={20} className="text-[#0F172A]" />
                  </div>
                  <p className="text-[13px] text-[#0F172A] font-medium mb-1">Hi! I'm Yahya's portfolio assistant.</p>
                  <p className="text-[12px] text-[#475569] leading-relaxed max-w-[280px] mb-5">
                    Ask me about his projects, skills, experience or education.
                  </p>
                  {/* Suggestions */}
                  <div className="flex flex-col gap-2 w-full">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="text-left px-3.5 py-2.5 rounded-xl text-[12px] text-[#475569] transition-all duration-200 border bg-white shadow-sm"
                        style={{ borderColor: "#E2E8F0" }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLButtonElement).style.borderColor = "#A3E635";
                          (e.currentTarget as HTMLButtonElement).style.color = "#0F172A";
                          (e.currentTarget as HTMLButtonElement).style.background = "rgba(163,230,53,0.05)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLButtonElement).style.borderColor = "#E2E8F0";
                          (e.currentTarget as HTMLButtonElement).style.color = "#475569";
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message list */}
              {messages.map(msg => (
                <MessageBubble key={msg.id} message={msg} />
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {loadingPhase !== "idle" && (
                  <TypingIndicator phase={loadingPhase} />
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Scroll-down button */}
            <AnimatePresence>
              {showScrollDown && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => scrollToBottom()}
                  className="absolute bottom-20 right-4 p-1.5 rounded-full text-[#475569] hover:text-[#0F172A] transition-colors bg-white shadow-md border border-[#E2E8F0]"
                >
                  <ChevronDown size={14} />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Input area */}
            <div
              className="px-4 py-3.5 shrink-0"
              style={{ borderTop: "1px solid #E2E8F0", background: "#FFFFFF" }}
            >

              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Yahya..."
                  disabled={loadingPhase !== "idle"}
                  className="flex-1 bg-transparent text-[13px] text-[#0F172A] placeholder-[#475569] outline-none disabled:opacity-50"
                  maxLength={500}
                  id="ai-chat-input"
                />
                <button
                  id="ai-chat-send"
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || loadingPhase !== "idle"}
                  className="p-2 rounded-xl transition-all duration-200 shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{
                    background: input.trim() && loadingPhase === "idle" ? "#0F172A" : "#E2E8F0",
                    color: input.trim() && loadingPhase === "idle" ? "#FFFFFF" : "#475569",
                  }}
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
