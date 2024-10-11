import { useState, useEffect } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.offsetTop;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="logo">DianaTinMakeUp</div>
      {isOpen ? (
        <CloseIcon className="menu-icon" onClick={toggleMenu} />
      ) : (
        <MenuIcon className="menu-icon" onClick={toggleMenu} />
      )}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portofolio"
            onClick={(e) => scrollToSection(e, "portofolio")}
            className={activeSection === "portofolio" ? "active" : ""}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
