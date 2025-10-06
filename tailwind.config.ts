import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "rgb(var(--color-background) / <alpha-value>)",
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                secondary: "rgb(var(--color-secondary) / <alpha-value>)",
                accent: "rgb(var(--color-accent) / <alpha-value>)",
                "primary-light": "rgb(34, 211, 238 / <alpha-value>)",
                "primary-dark": "rgb(8, 145, 178 / <alpha-value>)",
                "text-primary": "rgb(248, 250, 252 / <alpha-value>)",
                "text-secondary": "rgb(203, 213, 225 / <alpha-value>)",
                "text-muted": "rgb(148, 163, 184 / <alpha-value>)",
                "card-bg": "rgb(30, 41, 59 / <alpha-value>)",
            },
            animation: {
                "shimmer-slide":
                    "shimmer-slide var(--speed) ease-in-out infinite alternate",
                "spin-around":
                    "spin-around calc(var(--speed) * 2) infinite linear",
                marquee: "marquee var(--duration) infinite linear",
                "marquee-vertical":
                    "marquee-vertical var(--duration) linear infinite",
                "shiny-text": "shiny-text 8s infinite",
            },
            keyframes: {
                "shimmer-slide": {
                    to: {
                        transform: "translate(calc(100cqw - 100%), 0)",
                    },
                },
                "spin-around": {
                    "0%": {
                        transform: "translateZ(0) rotate(0)",
                    },
                    "15%, 35%": {
                        transform: "translateZ(0) rotate(90deg)",
                    },
                    "65%, 85%": {
                        transform: "translateZ(0) rotate(270deg)",
                    },
                    "100%": {
                        transform: "translateZ(0) rotate(360deg)",
                    },
                },
                marquee: {
                    from: {
                        transform: "translateX(0)",
                    },
                    to: {
                        transform: "translateX(calc(-100% - var(--gap)))",
                    },
                },
                "marquee-vertical": {
                    from: {
                        transform: "translateY(0)",
                    },
                    to: {
                        transform: "translateY(calc(-100% - var(--gap)))",
                    },
                },
                "shiny-text": {
                    "0%, 90%, 100%": {
                        "background-position":
                            "calc(-100% - var(--shiny-width)) 0",
                    },
                    "30%, 60%": {
                        "background-position":
                            "calc(100% + var(--shiny-width)) 0",
                    },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
