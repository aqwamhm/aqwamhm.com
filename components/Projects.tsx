import React from "react";
import { MagicCard } from "./ui/magic-card";
import ExportedImage from "next-image-export-optimizer";
import { projects } from "@/content";
import Link from "next/link";

export const Projects = () => {
    return (
        <section id="projects" className="pt-16">
            <h1 className="text-white text-5xl md:text-6xl text-center font-bold mb-5">
                {projects.headline}
            </h1>
            <h2 className="text-white text-center text-lg md:text-xl mb-12">
                {projects.subheadline}
            </h2>
            <div className="flex flex-wrap justify-around items-stretch">
                {projects.projectCards.map((card, index) => (
                    <MagicCard
                        key={index}
                        className="p-5 w-full md:w-[calc(100%/2-calc(2em/2*1))] my-2"
                        gradientColor="rgb(var(--color-primary))"
                        gradientOpacity={0.4}
                    >
                        <ExportedImage
                            src={card.imageSrc}
                            alt={card.title}
                            width={800}
                            height={400}
                            className="rounded-lg"
                        />
                        <div className="mt-4">
                            <h3 className="text-xl text-white font-bold">
                                {card.title}
                            </h3>
                            <p className="text-gray-400 mt-2">
                                {card.description}
                            </p>
                            <div className="flex space-x-3 mt-4">
                                {card.tools.map((ToolIcon, toolIndex) => (
                                    <ToolIcon
                                        key={toolIndex}
                                        color="white"
                                        size={20}
                                    />
                                ))}
                            </div>
                            <div className="flex mt-8 text-primary">
                                {card.liveLink && (
                                    <Link
                                        href={card.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block mr-6 hover:underline"
                                    >
                                        Live Site
                                    </Link>
                                )}
                                {card.githubLink && (
                                    <Link
                                        href={card.githubLink}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="block mr-6 hover:underline"
                                    >
                                        GitHub Repo
                                    </Link>
                                )}
                            </div>
                        </div>
                    </MagicCard>
                ))}
            </div>
        </section>
    );
};
