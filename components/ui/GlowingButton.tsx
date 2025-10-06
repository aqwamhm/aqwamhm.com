import React from "react";

export const GlowingButton = ({
    children,
    className,
}: {
    children: string;
    className: string;
}) => {
    return (
        <div className={`relative group ${className}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className="relative px-6 py-3 bg-primary text-background rounded-lg">
                {children}
            </button>
        </div>
    );
};
