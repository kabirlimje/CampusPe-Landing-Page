import campusPeLogo from "../assets/CampusPe.png";

const iconPaths = {
  arrow: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
  "arrow-ur": <><path d="M7 7h10v10"/><path d="M7 17 17 7"/></>,
  check: <path d="m20 6-11 11-5-5"/>, sparkle: <path d="m12 3 2 6 6 3-6 2-2 7-2-7-6-2 6-3 2-6Z"/>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M10 21h4"/></>,
  cap: <><path d="m2 10 10-5 10 5-10 5-10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></>,
  building: <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4"/>,
  briefcase: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 12h20"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
  file: <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 13h8M8 17h8"/></>,
  search: <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-9 6a2 2 0 0 1-2 0L2 7"/></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>,
  upload: <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>,
  laptop: <><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/></>,
  play: <path d="m6 4 14 8-14 8V4Z"/>, menu: <path d="M4 6h16M4 12h16M4 18h16"/>, close: <path d="m18 6-12 12M6 6l12 12"/>,
};

export function Icon({ name, className = "" }) {
  return <svg className={`ico ${className}`} aria-hidden="true"><use href={`#i-${name}`} /></svg>;
}

export function IconSprite() {
  return <svg className="icon-sprite" aria-hidden="true">{Object.entries(iconPaths).map(([id, path]) => <symbol key={id} id={`i-${id}`} viewBox="0 0 24 24">{path}</symbol>)}</svg>;
}

export function Logo({ large = false }) {
  return <a className={`logo ${large ? "logo--large" : ""}`} href="#top" aria-label="CampusPe home"><img className="logo__image" src={campusPeLogo} alt="CampusPe" /></a>;
}

export function Eyebrow({ children }) {
  return <div className="eyebrow"><i className="eyebrow__dot" />{children}</div>;
}
