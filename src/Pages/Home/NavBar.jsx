import {useState, useEffect} from "react";
import {Link} from "react-scroll";

function NavBar(){
    const [navActive, setNavActive] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const email = "contact@segundoparra.com";

    const toggleNavActive = () => {
        setNavActive(!navActive);
    }
    const closeMenu = () => {
        setNavActive(false);
    }
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500){
                closeMenu();
            }
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200){
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src="./img/logo-name.png" style={{maxHeight: "50px", width: "auto"}}/>
            </div>
            <a className={`nav_hamburger ${navActive ? "active" : ""}`} onClick={toggleNavActive}>
                <span className="nav_hamburger_line"></span>
                <span className="nav_hamburger_line"></span>
                <span className="nav_hamburger_line"></span>
            </a>
            <div className={`navbar-items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link
                        onClick={closeMenu}
                        activeClass="navbar-active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="heroSection"
                        className="navbar-content"
                        >
                        Home</Link>
                    </li>
                    <li>
                        <Link
                        onClick={closeMenu}
                        activeClass="navbar-active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="mySkills"
                        className="navbar-content"
                        >
                        My Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                        onClick={closeMenu}
                        activeClass="navbar-active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="myPortfolio"
                        className="navbar-content"
                        >
                        Portfolio</Link>
                    </li>
                </ul>
            </div>
            <a
                href={`mailto:${email}`}
                onClick={closeMenu}
                className="btn btn-outline-primary btn-contact"
                title={email}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ fontSize: isHovered ? '14px' : '16px' }}
            >
                {isHovered ? email : "Contact Me"}
            </a>
        </nav>
    )
}

export default NavBar;