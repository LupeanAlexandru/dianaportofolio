import InstagramIcon from "@mui/icons-material/Instagram";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./Footer.css";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
      <div className="social-icons">
        <button className="scroll-to-top" onClick={scrollToTop}>
          <ExpandLessIcon fontSize="large" />
        </button>
        <a
          href="https://www.instagram.com/dianatinmakeup/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon fontSize="large" />
        </a>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} DianaTinMakeUp. All rights reserved.
      </p>
    </footer>
  );
};
