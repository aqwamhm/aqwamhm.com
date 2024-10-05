import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Container = ({
    children,
    className,
    ...props
}: ContainerProps) => {
    return (
        <div
            className={cn(
                "container mx-auto px-4 sm:px-6 lg:px-8",
                "max-w-7xl", // Set a max-width for larger screens
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
