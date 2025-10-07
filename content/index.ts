import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
    SiBootstrap,
    SiCodeigniter,
    SiCodeigniterHex,
    SiExpress,
    SiExpressHex,
    SiJavascript,
    SiJavascriptHex,
    SiJquery,
    SiJqueryHex,
    SiLaravel,
    SiLaravelHex,
    SiLivewire,
    SiMysql,
    SiMysqlHex,
    SiNextdotjs,
    SiNextdotjsHex,
    SiNodedotjs,
    SiNodedotjsHex,
    SiNuxtdotjs,
    SiNuxtdotjsHex,
    SiPhp,
    SiPhpHex,
    SiPostgresql,
    SiPostgresqlHex,
    SiPrisma,
    SiPwa,
    SiReact,
    SiReactHex,
    SiRedis,
    SiRedisHex,
    SiShadcnui,
    SiTypescript,
    SiTypescriptHex,
    SiVuedotjs,
    SiVuedotjsHex,
    SiVuetify,
} from "@icons-pack/react-simple-icons";

interface NavbarItem {
    text: string;
    url: string;
}

interface Button {
    text: string;
    url: string;
}

interface Hero {
    headline: string;
    subheadline: string;
    button: Button;
}

interface AboutMe {
    headline: string;
    paragraph: string;
}

interface ProjectCard {
    title: string;
    description: string;
    imageSrc: string;
    tools: React.ElementType[];
    liveLink: string;
    githubLink: string;
}

interface Certifications {
    headline: string;
    subheadline: string;
    certifications: Certification[];
}

export interface Certification {
    title: string;
    date: string;
    description: string;
    images: string[];
}

export interface Award {
    title: string;
    date: string;
}

interface Contact {
    subheadline: string;
    headline: string;
    button: Button;
}

export const navbar = {
    items: [
        { text: "About Me", url: "#about" },
        { text: "Projects", url: "#projects" },
        { text: "Certifications", url: "#certifications" },
        { text: "Contact", url: "#contact" },
    ] as NavbarItem[],
};

export const hero: Hero = {
    headline: "Turning Ideas into Interactive Digital Experiences",
    subheadline:
        "I’m Aqwam, a Full-stack Web Developer based in Depok, West Java, Indonesia.",
    button: {
        text: "See my works",
        url: "#projects",
    },
};

export const aboutMe: AboutMe = {
    headline: "A Little Bit About Me",
    paragraph:
        "My name is Aqwam Hizbal Muhshiy, and I’m a full-stack developer as well as an Information Technology student at the International Open University. With a strong foundation in web development, I’ve built dynamic applications that solve real-world problems. I’m always commited to learn and push my skills further, whether through formal education, certifications, or hands-on projects. My goal is to build impactful, user-focused solutions that make a difference.",
};

export const socials = [
    {
        name: "Instagram",
        link: "https://instagram.com/aqwamhm",
        icon: FaInstagram,
    },
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/aqwam",
        icon: FaLinkedin,
    },
    { name: "Github", link: "https://github.com/aqwamhm", icon: FaGithub },
    {
        name: "Youtube",
        link: "https://www.youtube.com/@AqwamHizbalMuhshiy",
        icon: FaYoutube,
    },
];

export const skills = {
    headline: "Tech Stack",
    skillList: [
        {
            category: "Languages",
            items: [
                { name: "PHP", icon: SiPhp, color: SiPhpHex },
                {
                    name: "JavaScript",
                    icon: SiJavascript,
                    color: SiJavascriptHex,
                },
                {
                    name: "TypeScript",
                    icon: SiTypescript,
                    color: SiTypescriptHex,
                },
            ],
        },
        {
            category: "Front-end",
            items: [
                { name: "ReactJS", icon: SiReact, color: SiReactHex },
                { name: "NextJS", icon: SiNextdotjs, color: SiNextdotjsHex },
                { name: "VueJS", icon: SiVuedotjs, color: SiVuedotjsHex },
                { name: "NuxtJS", icon: SiNuxtdotjs, color: SiNuxtdotjsHex },
                { name: "jQuery", icon: SiJquery, color: SiJqueryHex },
            ],
        },
        {
            category: "Back-end",
            items: [
                { name: "NodeJS", icon: SiNodedotjs, color: SiNodedotjsHex },
                { name: "ExpressJS", icon: SiExpress, color: SiExpressHex },
                { name: "Laravel", icon: SiLaravel, color: SiLaravelHex },
                {
                    name: "CodeIgniter",
                    icon: SiCodeigniter,
                    color: SiCodeigniterHex,
                },
            ],
        },
        {
            category: "Database",
            items: [
                { name: "MySQL", icon: SiMysql, color: SiMysqlHex },
                {
                    name: "PostgreSQL",
                    icon: SiPostgresql,
                    color: SiPostgresqlHex,
                },
                { name: "Redis", icon: SiRedis, color: SiRedisHex },
            ],
        },
    ],
};

export const projects = {
    headline: "Recent Projects",
    subheadline:
        "Every project I create is an opportunity to learn, innovate, and push the boundaries of my development skills.",
    projectCards: [
        {
            title: "QuranMuroja'ah",
            description:
                "A full-stack Quran web application that helps users identify and memorize similar verses. Built with VueJS and NuxtJS for a responsive interface, and a RESTful API using CodeIgniter and MySQL for back-end data management.",
            imageSrc: "/images/projects/quranmurojaah.jpg",
            tools: [
                SiVuedotjs,
                SiNuxtdotjs,
                SiVuetify,
                SiCodeigniter,
                SiMysql,
                SiPwa,
            ],
            liveLink: "https://quranmurojaah.aqwamhm.com/",
        },
        {
            title: "OWOJ WhatsApp Bot",
            description:
                "A WhatsApp bot that automates member reporting for the One Week One Juz community. With intuitive commands, it automatically tracks progress, generates report lists, and sends reminders to help members stay consistent in their Quran reading goals.",
            imageSrc: "/images/projects/owoj-bot.jpg",
            tools: [SiNodedotjs, SiPrisma, SiMysql],
            githubLink: "https://github.com/aqwamhm/owoj-bot",
        },
        {
            title: "My Portfolio",
            description:
                "A personal portfolio showcasing my projects and skills, developed using React and Next.js for optimal performance. Built with TypeScript for type safety and ShadCN for a sleek and modern design.",
            imageSrc: "/images/projects/aqwam-portfolio.jpg",
            tools: [SiReact, SiNextdotjs, SiTypescript, SiShadcnui],
            liveLink: "https://aqwamhm.com/",
            githubLink: "https://github.com/aqwamhm/aqwamhm.com",
        },
        {
            title: "Car Rental System",
            description:
                "A full-stack web application for managing vehicle rentals for my university capstone project, currently in development stage. Features secure customer authentication, vehicle search, and an admin dashboard for managing bookings and vehicles. Developed using Laravel with Livewire and MySQL.",
            imageSrc: "/images/projects/car-rental-system.jpg",
            tools: [SiLaravel, SiLivewire, SiBootstrap, SiMysql],
            liveLink: "",
            githubLink: "",
        },
    ] as ProjectCard[],
};

export const certifications: Certifications = {
    headline: "Certifications",
    subheadline: "",
    certifications: [
        {
            title: "Maqdis Academy Backend Developer Internship",
            date: "April 2025",
            description:
                "Completed an intensive backend development internship program working on the Hamim Web App, a Quran memorization and learning platform. Gained hands-on experience in building and maintaining RESTful APIs using Lumen, a lightweight micro-framework based on Laravel. Developed expertise in refactoring legacy codebases to improve code quality, maintainability, and performance. Strengthened collaborative skills through close work with frontend developers and UI/UX designers, ensuring seamless integration between backend services and user interfaces. Enhanced professional competencies through active participation in team discussions and project planning meetings.",
            images: [
                "/images/certifications/Maqdis Academy Backend Developer Internship.jpg",
            ],
        },
        {
            title: "Dicoding Back-End Developer Certifications",
            date: "July-August 2024",
            description:
                "Completed a learning path covering essential back-end development skills. This included mastering JavaScript, building RESTful APIs with Node.js and Hapi.js. Gained expertise in automation testing, clean architecture, CI/CD, security, and scalability.",
            images: [
                "/images/certifications/Menjadi Back-End Developer Expert.jpg",
                "/images/certifications/Belajar Fundamental Aplikasi Back-End.jpg",
                "/images/certifications/Menjadi Node.js Application Developer.jpg",
                "/images/certifications/Belajar Membuat Aplikasi Back-End untuk Pemula.jpg",
                "/images/certifications/Architecting on AWS (Membangun Arsitektur Cloud di AWS).jpg",
                "/images/certifications/Belajar Dasar Pemrograman Javascript.jpg",
            ],
        },
        {
            title: "Dumet School Web Master Certification",
            date: "February 2021",
            description:
                "Completed on-site training in full-stack web development, covering technologies like HTML, CSS, JavaScript, PHP, MySQL, and the CodeIgniter framework. Graduated with an A grade, building a solid foundation for web development.",
            images: [
                "/images/certifications/DUMET Web Master Certification Front.jpg",
                "/images/certifications/DUMET Web Master Certification Back.jpg",
            ],
        },
        {
            title: "Dicoding React Developer Certifications",
            date: "September 2024",
            description:
                "Completed comprehensive training in React development, mastering core concepts like component-based architecture, state management, and hooks, while building scalable and interactive web applications.",
            images: [
                "/images/certifications/Menjadi React Web Developer Expert.jpg",
                "/images/certifications/Belajar Fundamental Aplikasi Web dengan React.jpg",
                "/images/certifications/Belajar Membuat Aplikasi Web dengan React.jpg",
            ],
        },
        {
            title: "OpenJS NodeJS Application Developer Certification",
            date: "September 2025",
            description:
                "Passed the OpenJS NodeJS Application Developer exam by OpenJS Foundation, mastering core concepts including Buffer and Streams, Control flow, Child Processes, Diagnostics, Error Handling, Node.js CLI, Events, File System, Module system, Process/Operating System, Package.json, and Unit Testing.",
            images: [
                "/images/certifications/OpenJS NodeJS Application Developer Certification.jpg",
            ],
        },
    ],
};

export const contact: Contact = {
    subheadline: "",
    headline: "",
    button: {
        text: "Get in touch",
        url: "mailto:aqwam.hizbal@outlook.com",
    },
};
