import { socials } from "@/content";
import Link from "next/link";
import React from "react";

export const SocialIcons = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {socials.map((social, index) => {
                const IconComponent = social.icon;
                return (
                    <Link
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 outline outline-1 outline-text-muted rounded-xl hover:bg-primary/20 hover:outline-primary flex items-center justify-center transition-all duration-200"
                        aria-label={social.name}
                    >
                        <IconComponent className="text-primary-text text-4xl" />
                    </Link>
                );
            })}
        </div>
    );
};
