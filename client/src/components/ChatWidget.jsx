import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import "../styles/ChatWidget.css";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "bot", text: "Hi! I'm AccessGuard AI. Ask me anything about web accessibility." }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages(prev => [...prev, { role: "user", text: userMsg }]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await axios.post("http://localhost:8080/api/chat", { message: userMsg });
            setMessages(prev => [...prev, { role: "bot", text: response.data.reply }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, { role: "bot", text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chat-widget-container">
            {/* Chat Window */}
            <div className={`chat-window ${isOpen ? 'open' : ''}`}>
                {/* Header */}
                <div className="chat-header">
                    <div className="chat-header-title">
                        <div className="bot-avatar-sm">
                            <Bot size={20} />
                        </div>
                        <span>AccessGuard AI</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="chat-close-btn">
                        <X size={20} />
                    </button>
                </div>

                {/* Messages */}
                <div className="chat-messages">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message-row ${msg.role}`}>
                            {msg.role === "bot" && (
                                <div className="bot-avatar-xs">
                                    <Bot size={14} />
                                </div>
                            )}
                            <div className={`message-bubble ${msg.role}-bubble`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message-row bot">
                            <div className="bot-avatar-xs">
                                <Bot size={14} />
                            </div>
                            <div className="message-bubble bot-bubble typing">
                                <Loader2 size={16} className="animate-spin" />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="chat-input-area">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about accessibility..."
                        className="chat-input"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="chat-send-btn"
                    >
                        <Send size={16} />
                    </button>
                </form>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`chat-toggle-btn ${isOpen ? 'hidden' : ''}`}
            >
                <MessageSquare size={28} />
            </button>
        </div>
    );
}
