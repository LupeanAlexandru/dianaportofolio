import { useState } from 'react';
import './Header.css'; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Header = () => {

        const [isOpen, setIsOpen] = useState(false); 
      
        const toggleMenu = () => {
          setIsOpen(!isOpen); 
        };

    return (
        <nav className="navbar">
      <div className="logo">DianaTinMakeUp</div>
      {isOpen ? (
                <CloseIcon className="menu-icon" onClick={toggleMenu} />
            ) : (
                <MenuIcon className="menu-icon" onClick={toggleMenu} />
            )}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#portofolio" onClick={toggleMenu}>Portfolio</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
    )
}