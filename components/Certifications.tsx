"use client";
import React, { useState } from "react";
import { MagicCard } from "./ui/magic-card";
import AnimatedShinyText from "./ui/animated-shiny-text";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import ExportedImage from "next-image-export-optimizer";
import { Certification, certifications } from "@/content";
import { motion } from "framer-motion";
import { CalendarDays, Award } from "lucide-react";

export const Certifications = () => {
    const [selectedCertification, setSelectedCertification] =
        useState<Certification | null>(null);

    const openModal = (certification: Certification) => {
        console.log("Opening modal for:", certification);
        setSelectedCertification(certification);
    };

    const closeModal = () => {
        setSelectedCertification(null);
    };

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
            id="certifications"
            className="min-h-screen py-16 pt-36 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {certifications.headline}
                    </h1>
                    <div className="flex justify-center">
                        <AnimatedShinyText className="text-lg text-secondary-text">
                            Professional certifications that validate my
                            expertise.
                        </AnimatedShinyText>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {certifications.certifications
                        .sort(
                            (a, b) =>
                                new Date(b.date).getTime() -
                                new Date(a.date).getTime()
                        )
                        .map((certification: Certification, index: number) => {
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 17,
                                    }}
                                    onClick={() => openModal(certification)}
                                    className="cursor-pointer"
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                        ) {
                                            openModal(certification);
                                        }
                                    }}
                                >
                                    <MagicCard
                                        className="h-full bg-card-bg/50 backdrop-blur-sm border border-primary/20 group pointer-events-none"
                                        gradientColor="#a855f7"
                                        gradientOpacity={0.3}
                                    >
                                        <div className="p-6 h-full flex flex-col pointer-events-none">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                                    <Award className="w-6 h-6 text-primary" />
                                                </div>
                                                <div className="flex items-center gap-1 text-xs text-muted-text">
                                                    <CalendarDays className="w-3 h-3" />
                                                    <span>
                                                        {
                                                            certification.date.split(
                                                                ","
                                                            )[0]
                                                        }
                                                    </span>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-primary-text mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                                                {certification.title}
                                            </h3>

                                            <p className="text-sm text-secondary-text mb-4 line-clamp-3 flex-grow">
                                                {certification.description.substring(
                                                    0,
                                                    150
                                                )}
                                                ...
                                            </p>

                                            {certification.images &&
                                                certification.images.length >
                                                    0 && (
                                                    <div className="relative overflow-hidden rounded-lg mb-4">
                                                        <ExportedImage
                                                            src={
                                                                certification
                                                                    .images[0]
                                                            }
                                                            alt={`${certification.title} certificate`}
                                                            className="rounded-lg w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                                            width={400}
                                                            height={200}
                                                            sizes="100vw"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-card-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    </div>
                                                )}
                                        </div>
                                    </MagicCard>
                                </motion.div>
                            );
                        })}
                </motion.div>
            </div>

            <Dialog
                open={selectedCertification !== null}
                onOpenChange={closeModal}
            >
                {selectedCertification && (
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card-bg/95 backdrop-blur-md border border-primary/20">
                        <DialogHeader>
                            <DialogTitle className="text-left text-primary-text text-2xl">
                                {selectedCertification.title}
                            </DialogTitle>
                            <DialogDescription className="text-left text-secondary-text flex items-center gap-2">
                                <CalendarDays className="w-4 h-4" />
                                {selectedCertification.date}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6">
                            <p className="text-primary-text leading-relaxed">
                                {selectedCertification.description}
                            </p>

                            {selectedCertification.images &&
                                selectedCertification.images.length > 0 && (
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-primary-text">
                                            Certificate Images
                                        </h4>
                                        <div className="grid grid-cols-1 gap-4">
                                            {selectedCertification.images.map(
                                                (image, index) => (
                                                    <div
                                                        key={index}
                                                        className="relative group"
                                                    >
                                                        <ExportedImage
                                                            src={image}
                                                            alt={`Certification image ${
                                                                index + 1
                                                            }`}
                                                            className="rounded-lg w-full h-auto border border-primary/10 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg"
                                                            width={1000}
                                                            height={500}
                                                            sizes="100vw"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-card-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </DialogContent>
                )}
            </Dialog>
        </section>
    );
};
