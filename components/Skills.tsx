"use client";
import React from "react";
import { skills } from "@/content";
import { MagicCard } from "@/components/ui/magic-card";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { motion } from "framer-motion";
export const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };
    return (
        <section className="min-h-screen py-16 text-primary-text flex flex-col justify-center pt-36 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {skills.headline}
                    </h2>
                    <div className="flex justify-center">
                        <AnimatedShinyText className="text-lg text-secondary-text">
                            Technologies I work with to bring ideas to life.
                        </AnimatedShinyText>
                    </div>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skills.skillList.map((category) => (
                        <motion.div
                            key={category.category}
                            variants={itemVariants}
                            className="space-y-6"
                        >
                            <MagicCard
                                className="p-6 h-full bg-card-bg/50 backdrop-blur-sm border border-primary/20"
                                gradientColor="rgb(var(--color-primary))"
                                gradientOpacity={0.3}
                            >
                                <div className="space-y-6">
                                    <div className="relative">
                                        <h3 className="text-xl font-bold text-primary-text flex items-center gap-2">
                                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                            {category.category}
                                        </h3>
                                        <div className="h-0.5 bg-gradient-to-r from-primary/50 to-transparent mt-2"></div>
                                    </div>
                                    <div className="space-y-4">
                                        {category.items.map(
                                            ({ name, icon: Icon, color }) => (
                                                <motion.div
                                                    key={name}
                                                    className="flex items-center gap-3 p-3 -mx-3 rounded-lg transition-all duration-300 hover:bg-primary/10 group"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 400,
                                                        damping: 17,
                                                    }}
                                                >
                                                    <div className="relative p-2 rounded-lg bg-card-bg transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                                                        <Icon
                                                            className="text-2xl transition-all duration-300"
                                                            style={{ color }}
                                                        />
                                                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                                    </div>
                                                    <span className="text-primary-text font-medium transition-all duration-300 group-hover:text-primary">
                                                        {name}
                                                    </span>
                                                </motion.div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </MagicCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
