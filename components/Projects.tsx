"use client";

import React from "react";
import { MagicCard } from "./ui/magic-card";
import AnimatedShinyText from "./ui/animated-shiny-text";
import ExportedImage from "next-image-export-optimizer";
import { projects } from "@/content";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section
            id="projects"
            className="min-h-screen py-16 pt-36 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                        {projects.headline}
                    </h1>
                    <div className="flex justify-center">
                        <AnimatedShinyText className="text-lg text-secondary-text">
                            {projects.subheadline}
                        </AnimatedShinyText>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.projectCards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 17,
                            }}
                        >
                            <MagicCard
                                className="h-full bg-card-bg/50 backdrop-blur-sm border border-secondary/20 group"
                                gradientColor="rgb(var(--color-primary))"
                                gradientOpacity={0.3}
                            >
                                <div className="p-6 h-full flex flex-col">
                                    {/* Project Image */}
                                    <div className="relative overflow-hidden rounded-lg mb-6">
                                        <ExportedImage
                                            src={card.imageSrc}
                                            alt={card.title}
                                            width={800}
                                            height={400}
                                            className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Overlay icons on hover */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                                            {card.liveLink && (
                                                <Link
                                                    href={card.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 bg-primary/80 rounded-full text-white hover:bg-primary transition-colors duration-300"
                                                    aria-label="View live site"
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </Link>
                                            )}
                                            {card.githubLink && (
                                                <Link
                                                    href={card.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 bg-primary/80 rounded-full text-white hover:bg-primary transition-colors duration-300"
                                                    aria-label="View GitHub repository"
                                                >
                                                    <FaGithub className="w-5 h-5" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-primary-text mb-3 group-hover:text-primary transition-colors duration-300">
                                            {card.title}
                                        </h3>

                                        <p className="text-secondary-text mb-6">
                                            {card.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="mb-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Code2 className="w-4 h-4 text-secondary" />
                                                <span className="text-sm font-medium text-secondary-text">
                                                    Tech Stack
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {card.tools.map(
                                                    (ToolIcon, toolIndex) => (
                                                        <div
                                                            key={toolIndex}
                                                            className="p-2 rounded-lg bg-card-bg border border-secondary/20 group-hover:border-secondary/40 transition-colors duration-300"
                                                        >
                                                            <ToolIcon
                                                                color="white"
                                                                size={20}
                                                            />
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4 pt-4 border-t border-secondary/10">
                                        {card.liveLink && (
                                            <Link
                                                href={card.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span className="text-sm font-medium">
                                                    Live Site
                                                </span>
                                            </Link>
                                        )}
                                        {card.githubLink && (
                                            <Link
                                                href={card.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300"
                                            >
                                                <FaGithub className="w-4 h-4" />
                                                <span className="text-sm font-medium">
                                                    GitHub
                                                </span>
                                            </Link>
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
