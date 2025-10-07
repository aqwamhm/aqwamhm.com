"use client";

import React from "react";
import { SocialIcons } from "./SocialIcons";
import { aboutMe } from "@/content";
import { MagicCard } from "./ui/magic-card";
import { motion } from "framer-motion";

export const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <section
            id="about"
            className="min-h-screen py-16 pt-36 relative overflow-hidden flex items-center"
        >
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-3 gap-12 items-center"
                >
                    {/* Main Content */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="space-y-6">
                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                            >
                                {aboutMe.headline}
                            </motion.h1>

                            <motion.div
                                variants={itemVariants}
                                className="space-y-4"
                            >
                                <span className="text-lg text-secondary-text">
                                    Salaam 👋
                                </span>

                                <motion.p
                                    variants={itemVariants}
                                    className="text-secondary-text text-lg md:text-xl leading-relaxed text-left"
                                >
                                    {aboutMe.paragraph}
                                </motion.p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Social Icons Section */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-1 flex flex-col items-center justify-center"
                    >
                        <MagicCard
                            className="p-8 w-full bg-card-bg/50 backdrop-blur-sm border border-primary/20"
                            gradientColor="rgb(var(--color-secondary))"
                            gradientOpacity={0.3}
                        >
                            <div className="text-center space-y-6">
                                <motion.h3
                                    variants={itemVariants}
                                    className="text-xl font-semibold text-primary-text mb-4"
                                >
                                    Connect With Me
                                </motion.h3>

                                <motion.div
                                    variants={itemVariants}
                                    className="flex justify-center"
                                >
                                    <SocialIcons />
                                </motion.div>
                            </div>
                        </MagicCard>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
