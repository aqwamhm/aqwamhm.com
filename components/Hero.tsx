"use client";

import React from "react";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import ShimmerButton from "./ui/shimmer-button";
import AnimatedShinyText from "./ui/animated-shiny-text";
import Link from "next/link";
import { Container } from "./Container";
import { hero } from "@/content";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code, Zap } from "lucide-react";

export const Hero = () => {
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
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            {/* Dot Pattern */}
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
                )}
            />

            <Container className="text-center text-primary-text z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-8 flex justify-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-bg/50 backdrop-blur-sm border border-primary/20">
                            <Code className="w-4 h-4 text-primary" />
                            <span className="text-sm text-secondary-text">
                                Full-Stack Developer
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                    >
                        {hero.headline}
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <AnimatedShinyText className="text-lg md:text-2xl text-secondary-text">
                            {hero.subheadline}
                        </AnimatedShinyText>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                        }}
                        className="mb-16"
                    >
                        <Link href={hero.button.url} className="inline-block">
                            <ShimmerButton
                                className="mx-auto group px-8 py-4 text-lg"
                                shimmerColor="rgb(var(--color-primary))"
                                shimmerSize="0.1em"
                                background="rgb(var(--color-background))"
                            >
                                <span className="flex items-center gap-2">
                                    {hero.button.text}
                                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                                </span>
                            </ShimmerButton>
                        </Link>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};
