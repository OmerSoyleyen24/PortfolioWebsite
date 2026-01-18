import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header id="header">
      <div className="container header-inner">
        <div className="logo">Ömer Söyleyen</div>

        {/* DESKTOP NAV */}
        <nav className="nav-desktop">
          <a href="#header">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* MOBILE ICON */}
        <button className="burger" onClick={() => setOpen(true)}>
          <i className="bi bi-list"></i>
        </button>

        {/* MOBILE NAV */}
        <nav className={`nav-mobile ${open ? "open" : ""}`}>
          <button className="close" onClick={() => setOpen(false)}>
            <i className="bi bi-x-lg"></i>
          </button>

          <a onClick={() => setOpen(false)} href="#header">Home</a>
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#projects">Projects</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
