import { useState, useEffect } from "react";
import "../cssStyling/navbar.css";

const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Contacts", id: "contacts" }
];

function Navbar() {
    const [activeSection, setActiveSection] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            // track active section
            const sections = document.querySelectorAll("section");
            const scrollPos = window.scrollY + 200;
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);

        }
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setMenuOpen(false);
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-brand">Effie<span>.</span></div>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, item.id)}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>

        </nav>
    )
}
export default Navbar;