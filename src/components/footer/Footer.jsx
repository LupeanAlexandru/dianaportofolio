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
      <p className="footer-text">
        &copy; {new Date().getFullYear()} DianaTinMakeUp. All rights reserved.
      </p>
    </footer>
  );
};
