export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-4 mt-auto border-t border-text-muted/25 pb-20">
            <div className="container mx-auto px-4">
                <p className="text-center text-muted-text text-sm text-muted-foreground">
                    &copy; {currentYear} Aqwam Hizbal Muhshiy. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}
