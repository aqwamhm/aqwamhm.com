"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { navbar } from "@/content";

export function NavbarComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const [isLogoOnHover, setIsLogoOnHover] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(
                prevScrollPos > currentScrollPos || currentScrollPos < 10
            );
            setPrevScrollPos(currentScrollPos);
            setIsAtTop(currentScrollPos === 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <nav
            className={`fixed w-full z-20 transition-transform duration-300 ease-in-out ${
                visible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div
                className={`transition-colors duration-300 ${
                    isAtTop && !isOpen
                        ? "bg-background/0"
                        : "bg-background/15 backdrop-blur-md"
                } shadow text-primary-text`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <TooltipProvider delayDuration={0}>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Link
                                            href="#"
                                            className="relative flex items-center group"
                                            onMouseEnter={() =>
                                                setIsLogoOnHover(true)
                                            }
                                            onMouseLeave={() =>
                                                setIsLogoOnHover(false)
                                            }
                                        >
                                            <div className="relative">
                                                <ExportedImage
                                                    src="/images/logo/aqwamhm-logo.svg"
                                                    alt="AqwamHM Logo"
                                                    width={30}
                                                    height={30}
                                                    className={`transition-opacity duration-300 ${
                                                        isLogoOnHover
                                                            ? "opacity-0"
                                                            : "opacity-100"
                                                    }`}
                                                />
                                                <ExportedImage
                                                    src="/images/logo/aqwamhm-palestine-logo.svg"
                                                    alt="AqwamHM Palestine Logo"
                                                    width={30}
                                                    height={30}
                                                    className={`absolute top-0 left-0 transition-opacity duration-300 ${
                                                        isLogoOnHover
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    }`}
                                                />
                                                <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-[-1]"></div>
                                            </div>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        side="bottom"
                                        sideOffset={5}
                                        className="bg-secondary/25 z-30 mt-3 text-primary-text px-3 py-2 rounded-md shadow-lg text-sm"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <p>I stand with Palestine</p>
                                            <span
                                                role="img"
                                                aria-label="Palestine Flag"
                                            >
                                                🇵🇸
                                            </span>
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navbar.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.url}
                                        className="text-primary-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        {item.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-secondary transition-colors duration-200 text-primary-text"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <X className="block h-6 w-6" />
                                ) : (
                                    <Menu className="block h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navbar.items.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.url}
                                    className="text-primary-text hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
