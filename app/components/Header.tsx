'use client'

import { useState } from 'react';
import Logo from '../../public/images/logo.svg';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="container">
      <a href="/">
        <Image src={Logo} alt="Site Logo" width={180} height={37} />
      </a>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="/">SELLERS</a>
        <a href="/about">HOW IT WORKS</a>
        <a href="/contact">FAQ</a>
        <a href="/blogs">BLOGS</a>
        <a href="/celebrities">CELEBRITIES</a>
        <a href="/forums">FORUMS</a>
      </nav>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </header>
  );
}