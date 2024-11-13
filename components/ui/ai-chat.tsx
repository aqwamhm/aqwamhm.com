"use client";

import * as React from "react";
import Markdown from "react-markdown";
import { Send, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import ReCAPTCHA from "react-google-recaptcha";
import { ErrorAlert } from "./error-alert";

type Message = {
    role: "user" | "assistant";
    content: string;
};

export function AiChat() {
    const [open, setOpen] = React.useState(false);
    const [messages, setMessages] = React.useState<Message[]>([]);
    const [input, setInput] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [showNotification, setShowNotification] = React.useState(false);

    const messagesEndRef = React.useRef<HTMLDivElement>(null);
    const chatContainerRef = React.useRef<HTMLDivElement>(null);
    const recaptchaRef = React.useRef<ReCAPTCHA>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async (userMessage: string) => {
        try {
            setIsLoading(true);
            setShowNotification(false);

            const recaptchaToken = await recaptchaRef.current?.executeAsync();
            recaptchaRef.current?.reset();

            const response = await fetch(
                "https://portfolio-chat.aqwamhm.com/api",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        messages: [
                            ...messages,
                            { role: "user", content: userMessage },
                        ],
                        recaptchaToken,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            setMessages((prevMessages) => [
                ...prevMessages,
                { role: "user", content: userMessage },
                { role: "assistant", content: data.message },
            ]);
        } catch {
            setShowNotification(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !isLoading) {
            sendMessage(input.trim());
            setInput("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full px-5 py-3 shadow-lg bg-gradient-to-r from-blue-400 to-emerald-400 hover:from-blue-500 hover:to-emerald-500 duration-300 z-[100] group"
                aria-label="Ask AI"
            >
                <Sparkles className="w-5 h-5 text-white" aria-hidden="true" />
                <span className="text-sm font-semibold text-white tracking-wide">
                    Ask AI
                </span>
            </button>
            {showNotification && (
                <ErrorAlert
                    message="Failed to send message. Please try again."
                    onClose={() => setShowNotification(false)}
                />
            )}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-3xl max-h-[80vh] h-[600px] flex flex-col bg-accent/15 backdrop-blur-lg">
                    <DialogHeader className="px-4 py-2">
                        <DialogTitle>AqwamHM.com AI </DialogTitle>
                    </DialogHeader>

                    <div
                        ref={chatContainerRef}
                        className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
                    >
                        <div className="justify-start">
                            <div className="rounded-lg px-4 py-2 max-w-[80%] bg-neutral-700 text-white">
                                Welcome to Aqwam Hizbal Muhshiy&apos;s portfolio
                                website! I&apos;m here to help you explore his
                                skills, projects, certifications, achievements,
                                or anything else related to his portfolio. Feel
                                free to ask, and I&apos;ll assist you in any way
                                I can!
                            </div>
                        </div>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${
                                    message.role === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >
                                <div
                                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                                        message.role === "user"
                                            ? "bg-secondary text-white"
                                            : "bg-neutral-700 text-white"
                                    }`}
                                >
                                    <Markdown>{message.content}</Markdown>
                                    {message.role === "assistant" && (
                                        <small className="text-xs mt-5 text-white/50">
                                            This response is generated by AI and
                                            may contain inaccuracies or
                                            incorrect information.
                                        </small>
                                    )}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="rounded-lg px-4 py-2 bg-neutral-700 text-white">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSubmit} className="px-3">
                        <div className="flex gap-2">
                            <Input
                                placeholder="Type your question here..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                disabled={isLoading}
                                className="text-background flex-1"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                disabled={isLoading || !input.trim()}
                            >
                                {isLoading ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    <Send className="w-4 h-4" />
                                )}
                                <span className="sr-only">Send message</span>
                            </Button>
                        </div>
                        <p className="text-center text-white text-xs pt-3">
                            <small>
                                This site is protected by reCAPTCHA and the
                                Google{" "}
                                <a href="https://policies.google.com/privacy">
                                    Privacy Policy
                                </a>{" "}
                                and{" "}
                                <a href="https://policies.google.com/terms">
                                    Terms of Service
                                </a>{" "}
                                apply.
                            </small>
                        </p>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LdP_3sqAAAAAMPKZaSVSaZMIDdMoQt1Nvfm1xZx"
                            size="invisible"
                            className="hidden"
                        />
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}
