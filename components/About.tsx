import React from "react";
import { SocialIcons } from "./SocialIcons";
import { aboutMe } from "@/content";

export const About = () => {
    return (
        <section id="about" className="pt-36 flex lg:flex-row flex-col">
            <div className="basis-8/12">
                <h1 className="text-primary-text text-5xl md:text-6xl font-bold mb-3">
                    {aboutMe.headline}
                </h1>
                <p className="text-secondary-text text-lg md:text-xl">
                    <b>Salaam 👋</b>
                    <br />
                    {aboutMe.paragraph}
                </p>
            </div>
            <div className="basis-4/12 flex items-center justify-center lg:justify-end mt-16 lg:mt-0">
                <SocialIcons />
            </div>
        </section>
    );
};
