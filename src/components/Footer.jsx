import { Icon, Logo } from "./ui.jsx";
import socialFrame from "../assets/frameLogo.png";

const linkGroups = [
  ["For Students", "Explore Colleges", "Find Opportunities", "Internships", "Full-time Jobs", "Part-time & Gig"],
  ["For Colleges", "List Your College", "Admissions", "Placements"],
  ["For Employers", "Post a Job", "Find Talent", "Campus Hiring"],
  ["Company", "About Us", "Contact Us", "Blogs", "Careers"],
  ["Legal & Policies", "Privacy Policy", "Terms & Conditions", "Cookie Policy", "Grievance Redressal"],
];

export default function Footer() {
  return <footer className="footer" id="blogs"><div className="wrap"><section className="banner"><div><h2>Ready for what’s next?</h2><p>Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.</p></div><div className="banner__btns"><a className="btn btn--bsolid" href="#colleges">Explore Colleges <Icon name="arrow"/></a><a className="btn btn--bsolid" href="#jobs">Find Opportunities <Icon name="arrow"/></a><a className="btn btn--bline" href="#colleges">List Your College <Icon name="arrow"/></a><a className="btn btn--bline" href="#employers">Post a Job <Icon name="arrow"/></a></div></section><div className="footer__cols"><div className="fcol fcol--brand"><Logo large/><p>From choosing a college to finding your next opportunity. CampusPe connects students, colleges and employers in one place.</p></div>{linkGroups.map(([heading, ...links]) => <nav className="fcol" aria-label={heading} key={heading}><h3>{heading}</h3>{links.map((label) => <a href="#contact" key={label}>{label}</a>)}</nav>)}</div><div className="subbar"><ul className="contact"><li><a href="mailto:contactus@campuspe.com"><Icon name="mail"/>contactus@campuspe.com</a></li><li><a href="tel:+916362606464"><Icon name="phone"/>+91 6362606464</a></li></ul><p>Students · Colleges · Employers</p></div><div className="subbar subbar--copy"><p>© 2026 CampusPe Technologies Pvt. Ltd. <a href="#contact">Privacy</a> <a href="#contact">Terms</a> <a href="#contact">Grievance</a></p><div className="social"><a href="#blogs" aria-label="CampusPe social media"><img src={socialFrame} alt="LinkedIn, Instagram, Facebook, WhatsApp and YouTube" /></a></div></div></div></footer>;
}
