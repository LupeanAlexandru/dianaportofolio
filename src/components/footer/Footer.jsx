import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
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
      <button className="scroll-to-top" onClick={scrollToTop}>
        <ExpandLessIcon fontSize="large" />
      </button>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/dianatinmakeup/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon fontSize="large" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookIcon fontSize="large" />
        </a>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} DianaTinMakeUp. All rights reserved.
      </p>
    </footer>
  );
};
