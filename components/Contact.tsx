"use client";

import React from "react";
import { GlowingButton } from "./ui/GlowingButton";
import AnimatedShinyText from "./ui/animated-shiny-text";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Contact = () => {
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
            id="contact"
            className="min-h-screen py-16 pt-36 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="space-y-6 mb-16"
                    >
                        <div className="flex justify-center">
                            <AnimatedShinyText className="text-lg text-secondary-text">
                                <span className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    Have an Exciting Idea?
                                </span>
                            </AnimatedShinyText>
                        </div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent leading-tight pb-2"
                        >
                            Let's Build Something Incredible Together!
                        </motion.h1>
                    </motion.div>
                    <Link
                        href="mailto:aqwam.hizbal@outlook.com"
                        className="inline-block"
                    >
                        <GlowingButton className="mt-50">
                            Get in touch
                        </GlowingButton>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
