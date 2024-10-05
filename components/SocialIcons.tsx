import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const socials = [
    { link: "", icon: FaInstagram },
    { link: "", icon: FaLinkedin },
    { link: "", icon: FaGithub },
    { link: "", icon: FaWhatsapp },
];

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
                        className="p-6 outline outline-1 outline-white rounded-xl hover:bg-primary/20 hover:outline-primary flex items-center justify-center transition-all duration-200"
                    >
                        <IconComponent className="text-white text-4xl" />
                    </Link>
                );
            })}
        </div>
    );
};
