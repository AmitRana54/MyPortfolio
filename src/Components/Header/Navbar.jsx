import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <header className=" text-white">
      <nav className="container mx-auto flex items-center justify-between h-24 px-4 md:px-8">
        <div className="flex items-center">
          <Link className="text-3xl md:text-4xl" to="/">
            <h1 className="font-bold">
              Amit <span className="text-slate-400">Rana</span>
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-4 font-semibold">
            <NavItem to="/about">About</NavItem>
            <NavItem to="/skills">Skills</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/contact">Contact Me</NavItem>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <SocialLink href="https://www.instagram.com" icon={faInstagram} />
          <SocialLink href="https://www.github.com" icon={faGithub} />
          <SocialLink href="https://www.linkedin.com" icon={faLinkedin} />
          <SocialLink href="https://www.whatsapp.com" icon={faWhatsapp} />
        </div>
      </nav>
    </header>
  );
}

const NavItem = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="transition duration-300 ease-in-out hover:text-gray-300"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, icon }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-300"
    >
      <FontAwesomeIcon icon={icon} size="lg" />
    </a>
  </li>
);

export default Navbar;
