import { useState } from "react";
import { Icon, Logo } from "./ui.jsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <><a className="skip-link" href="#main">Skip to content</a><header className="site-header" id="top"><div className="wrap nav"><Logo/><nav className={`nav-links ${menuOpen ? "is-open" : ""}`} id="nav-links" aria-label="Primary">{[["Colleges", "#colleges"], ["Employers", "#employers"], ["Jobs", "#jobs"], ["Blogs", "#blogs"]].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav><div className="nav-actions"><a className="btn btn--ghost" href="#login">Login</a><a className="btn btn--cta" href="#signup">Sign up</a><button className="nav-toggle" type="button" aria-expanded={menuOpen} aria-controls="nav-links" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"}/></button></div></div></header></>;
}
