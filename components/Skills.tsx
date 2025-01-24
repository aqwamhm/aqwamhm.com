import React from "react";
import { skills } from "@/content";

export const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col items-center justify-center py-16"
        >
            <h1 className="text-white text-5xl md:text-6xl text-center font-bold mb-20">
                {skills.headline}
            </h1>
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
                {skills.icons.map((IconComponent, index) => {
                    return (
                        <IconComponent size={48} color="white" key={index} />
                    );
                })}
            </div>
        </section>
    );
};
