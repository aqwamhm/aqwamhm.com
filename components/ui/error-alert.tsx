"use client";

import { useEffect, useState } from "react";

export function ErrorAlert({
    message = "An error occurred. Please try again.",
    onClose,
}: {
    message?: string;
    onClose: () => void;
}) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-[100]">
            <div
                className={`bg-red-500 text-primary-text px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 transition-opacity duration-300 ease-in-out ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                <span>{message}</span>
            </div>
        </div>
    );
}
