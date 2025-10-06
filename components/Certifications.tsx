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
import { Certification, certifications } from "@/content";

export const Certifications = () => {
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
            <h1 className="text-primary-text text-center text-5xl md:text-6xl font-bold mb-12">
                Certifications
            </h1>
            <div className="relative flex flex-col items-center justify-center overflow-hidden ">
                <Marquee className="[--duration:20s]">
                    {certifications.certifications.map(
                        (certification: Certification, index: number) => {
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
                                    {certification.images &&
                                        certification.images.length > 0 && (
                                            <div className="px-3 pb-3">
                                                <ExportedImage
                                                    src={
                                                        certification.images[0]
                                                    }
                                                    alt={`${certification.title} certificate`}
                                                    className="rounded-lg w-full h-auto"
                                                    width={400}
                                                    height={200}
                                                    sizes="100vw"
                                                    style={{
                                                        width: "100%",
                                                        height: "auto",
                                                    }}
                                                />
                                            </div>
                                        )}
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
                                <DialogTitle className="text-left text-primary-text">
                                    {selectedCertification.title}
                                </DialogTitle>
                                <DialogDescription className="text-left text-secondary-text">
                                    {selectedCertification.date}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="p-4 space-y-4">
                                <p className="text-primary-text">
                                    {selectedCertification.description}
                                </p>
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
        </section>
    );
};
