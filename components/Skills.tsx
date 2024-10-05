import React from "react";
import IconCloud from "./ui/icon-cloud";
import { skills } from "@/content";

export const Skills = () => {
    const sectionStyle = {
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
    } as React.CSSProperties;

    const iconContainerStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    } as React.CSSProperties;

    const headingStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
    } as React.CSSProperties;

    return (
        <section id="skills" style={sectionStyle} className="min-h-screen">
            <div style={iconContainerStyle} className="z-10">
                <IconCloud iconSlugs={skills.icons} />
            </div>
            <h1
                style={headingStyle}
                className="text-center text-6xl text-transparent font-bold bg-gradient-to-b from-primary/75 to-accent/10 bg-clip-text"
            >
                {skills.headline}
            </h1>
        </section>
    );
};
