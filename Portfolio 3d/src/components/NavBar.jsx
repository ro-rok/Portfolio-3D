import React, {useEffect} from 'react'
import {navLinks} from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setScroll] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScroll(isScrolled);
        }

        window.addEventListener('scrolled', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Rohan K
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map((link, name) => (
                            <li key={name} className="group">
                                <a href ={link}></a>
                                <span>{name}</span>
                                <span className="underline" />
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}
export default NavBar
