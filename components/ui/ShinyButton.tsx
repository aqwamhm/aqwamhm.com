import React from "react";
import AnimatedShinyText from "./animated-shiny-text";
import { cn } from "@/lib/utils";
interface ShinyButtonProps {
    children: React.ReactNode;
}
export const ShinyButton = ({ children }: ShinyButtonProps) => {
    return (
        <div
            className={cn(
                "group rounded-full border text-base text-primary-text transition-all ease-in hover:cursor-pointer  border-text-muted/5 bg-card-bg hover:bg-secondary/20"
            )}
        >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-secondary-text">
                {children}
            </AnimatedShinyText>
        </div>
    );
};
