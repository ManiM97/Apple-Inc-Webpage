import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import "./Navbar.css"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/"><img src='https://beebom.com/wp-content/uploads/2021/08/How-to-Type-Apple-Logo-on-iPhone-iPad-and-Mac-1-e1629868886428.jpg?w=290&h=290&crop=1&quality=75' alt='' className='logo' /></Link>
            </div>
            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" className='item-active'>Home</Link>
                <Link to="/project" className='item-active'>Projects &nbsp;<img src="https://www.ibps.in/wp-content/themes/ibps/images/new.gif" border="0" alt="" /></Link>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu} style={{ fontSize: "20px" }}>
                {isMenuOpen ? <AiFillCloseCircle /> : <FaBars />}
            </div>
        </nav>
    );
}

export default Navbar;