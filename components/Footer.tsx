"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent"></div>

            <div className="relative container mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center space-y-8"
                >
                    {/* Minimalist social links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-6"
                    >
                        <Link
                            href="https://github.com/aqwamhm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-text hover:text-primary transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/aqwam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-text hover:text-primary transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link
                            href="mailto:aqwam.hizbal@outlook.com"
                            className="text-muted-text hover:text-primary transition-colors duration-300"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    {/* Minimalist copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center space-y-2"
                    >
                        <div className="flex items-center space-x-2 text-muted-text text-sm">
                            <span>
                                &copy; {currentYear} Aqwam Hizbal Muhshiy
                            </span>
                        </div>
                    </motion.div>

                    {/* Subtle divider line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                    />
                </motion.div>
            </div>
        </footer>
    );
}
