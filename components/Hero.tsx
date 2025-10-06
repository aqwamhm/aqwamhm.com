import React from "react";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import ShimmerButton from "./ui/shimmer-button";
import Link from "next/link";
import { Container } from "./Container";
import { hero } from "@/content";

export const Hero = () => {
    return (
        <section
            id="hero"
            className="bg-gradient-to-b from-primary/15 via-background via-25% to-background text-center flex items-center justify-center min-h-screen"
        >
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(275px_circle_at_center,white,transparent)]"
                )}
            />
            <Container className="text-center text-primary-text z-10">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                    {hero.headline}
                </h1>
                <h2 className="text-lg md:text-2xl mb-7">{hero.subheadline}</h2>
                <Link href={hero.button.url} className="inline-block">
                    <ShimmerButton
                        className="mx-auto"
                        shimmerColor="rgb(var(--color-primary))"
                        shimmerSize="0.1em"
                        background="rgb(var(--color-background))"
                    >
                        {hero.button.text}
                    </ShimmerButton>
                </Link>
            </Container>
        </section>
    );
};
