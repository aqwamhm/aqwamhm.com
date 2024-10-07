"use client";
import React, { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Marquee from "./ui/marquee";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import ExportedImage from "next-image-export-optimizer";
import { Certification, certificationsAndAwards } from "@/content";

export const CertificationsAndAwards = () => {
    const [selectedCertification, setSelectedCertification] =
        useState<Certification | null>(null);

    const openModal = (certification: Certification) => {
        setSelectedCertification(certification);
    };

    const closeModal = () => {
        setSelectedCertification(null);
    };

    return (
        <section id="certifications" className="pt-36">
            <h1 className="text-white text-center text-5xl md:text-6xl font-bold mb-12">
                Certifications and Awards
            </h1>
            <div className="relative flex flex-col items-center justify-center overflow-hidden ">
                <Marquee className="[--duration:20s]">
                    {certificationsAndAwards.certifications.map(
                        (certification, index) => {
                            return (
                                <Card
                                    className="w-96 hover:bg-secondary/15 hover:cursor-pointer hover:border-primary transition-colors duration-200"
                                    key={index}
                                    onClick={() => openModal(certification)}
                                >
                                    <CardHeader>
                                        <CardTitle>
                                            {certification.title}
                                        </CardTitle>
                                        <CardDescription>
                                            {certification.date}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            );
                        }
                    )}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                <Dialog
                    open={selectedCertification !== null}
                    onOpenChange={closeModal}
                >
                    {selectedCertification && (
                        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-scroll bg-accent/15 backdrop-blur-sm">
                            <DialogHeader>
                                <DialogTitle className="text-left">
                                    {selectedCertification.title}
                                </DialogTitle>
                                <DialogDescription className="text-left">
                                    {selectedCertification.date}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="p-4 space-y-4">
                                <p>{selectedCertification.description}</p>
                                <div
                                    className={`flex ${
                                        selectedCertification.images.length > 1
                                            ? "flex-wrap"
                                            : ""
                                    } justify-center gap-4`}
                                >
                                    {selectedCertification.images.map(
                                        (image, index) => (
                                            <ExportedImage
                                                src={image}
                                                alt={`Certification image ${
                                                    index + 1
                                                }`}
                                                className="rounded-lg"
                                                width={1000}
                                                height={500}
                                                sizes="100vw"
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                }}
                                                key={index}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </DialogContent>
                    )}
                </Dialog>
            </div>
            <div className="relative flex flex-col items-center justify-center overflow-hidden ">
                <Marquee className="[--duration:20s]" reverse>
                    {certificationsAndAwards.awards.map((award, index) => {
                        return (
                            <Card
                                className="w-96 hover:bg-secondary/15 hover:border-primary transition-colors duration-200"
                                key={index}
                            >
                                <CardHeader>
                                    <CardTitle>{award.title}</CardTitle>
                                    <CardDescription>
                                        {award.date}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        );
                    })}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
        </section>
    );
};
