import React from "react";
import { GlowingButton } from "./ui/GlowingButton";
import Link from "next/link";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="py-36 max-w-6xl mx-auto text-center flex items-center justify-center flex-col"
        >
            <h2 className="text-center text-secondary-text text-lg md:text-2xl mb-5">
                Have an Exciting Idea?
            </h2>
            <h1 className="text-center text-primary-text text-5xl md:text-6xl lg:text-7xl font-bold">
                Let’s Build Something Incredible Together!
            </h1>
            <Link href="mailto:aqwam.hizbal@outlook.com">
                <GlowingButton className="mt-10">Get in touch</GlowingButton>
            </Link>
        </section>
    );
};
