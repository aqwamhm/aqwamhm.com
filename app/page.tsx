import { About } from "@/components/About";
import { CertificationsAndAwards } from "@/components/CertificationsAndAwards";
import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavbarComponent } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { AiChat } from "@/components/ui/ai-chat";

export default function Home() {
    return (
        <main className="bg-background">
            <NavbarComponent />
            <Hero />
            <Container>
                <About />
                <Skills />
                <Projects />
                <CertificationsAndAwards />
                <Contact />
            </Container>
            {/* <AiChat /> */}
            <Footer />
        </main>
    );
}
