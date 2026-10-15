import { Icon } from "./ui.jsx";
import collegeLogo from "../assets/college.png";
import jobLogo from "../assets/job.png";
import matchedStudentsImage from "../assets/Container.png";
import radiantIcon from "../assets/Overlay.png";
import whatsappIcon from "../assets/whatsapp.png";
import resumeBuilderIcon from "../assets/blitz.png";
import roboIcon from "../assets/robo.png";

const roleCards = [
  {
    icon: "building",
    image: collegeLogo,
    status: "Coming Soon",
    title: "College",
    text: "Explore colleges, courses, fees, placements & more.",
    bullets: [
      "Search by course, location, fees",
      "Connect directly with colleges",
      "Compare fees & placements",
    ],
    action: "Notify Me",
    href: "#colleges",
  },
  {
    icon: "briefcase",
    image: jobLogo,
    status: "Most Popular",
    title: "I'm Looking for a Job",
    text: "Upload your resume. We'll find jobs that fit you.",
    bullets: [
      "AI-powered job matching",
      "Instant job alerts",
      "Track your applications",
    ],
    action: "Get Started",
    href: "#resume",
  },
  {
    icon: "briefcase",
    status: "Coming Soon",
    title: "I'm Hiring",
    text: "Connect with colleges and find candidates — from students to graduates.",
    bullets: [
      "Connect directly with colleges",
      "Find the right candidates",
      "Simplify your hiring",
    ],
    action: "Notify Me",
    href: "#employers",
  },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <i className="blob blob--a" />
        <i className="blob blob--b" />
        <i className="blob blob--c" />
      </div>
      <div className="wrap hero-inner">
        <div className="hero-head">
          <div className="hero-badge">
            <img src={roboIcon} alt="" />
            AI-Powered Campus Assistant
          </div>
          <h1 id="hero-title">Connect 10X Faster.</h1>
          <p className="hero-sub">
            One platform connecting students, colleges &amp; employers — faster.
          </p>
          <div className="hero-prompt">
            <Icon name="sparkle" />
            <p>What are you looking for?</p>
            <Icon name="sparkle" />
          </div>
          <div className="hero-floats" aria-hidden="true">
            <div className="float-card float-card--resume">
              <div className="resume-card__label">
                <img src={resumeBuilderIcon} alt="" />
                <b>Resume Builder</b>
              </div>
              <strong>Build Your Resume</strong>
              <span>Build a better, faster resume that gets you hired.</span>
            </div>
            <div className="float-card float-card--whatsapp">
              <div className="whatsapp-card__label">
                <img src={whatsappIcon} alt="" />
                <b>WhatsApp Alert</b>
              </div>
              <strong>Get notified on WhatsApp</strong>
              <span>Important updates, delivered instantly.</span>
            </div>
            <div className="float-card float-card--matched">
              <img className="matched-students-image" src={matchedStudentsImage} alt="" />
              <div>
                <b>🔥 142 students matched today</b>
                <span>Just now · IIT, BITS, VIT</span>
              </div>
            </div>
            <div className="float-card float-card--radiant">
              <img className="radiant-icon" src={radiantIcon} alt="" />
              <div>
                <b>Radiant Info</b>
                <span>Verified recruiter · shortlisted 8 interns</span>
              </div>
            </div>
          </div>
        </div>
        <div className="roles">
          {roleCards.map((card) => (
            <article className="role-card reveal" key={card.title}>
              <div className="role-card__head">
                <span className="role-card__icon">
                  {card.image ? (
                    <img src={card.image} alt="" />
                  ) : (
                    <Icon name={card.icon} />
                  )}
                </span>
                <span
                  className={`badge-status ${card.status === "Most Popular" ? "badge-status--live" : ""}`}
                >
                  {card.status}
                </span>
              </div>
              <div className="role-card__body">
                <h2>{card.title}</h2>
                <p>{card.text}</p>
                <ul className="checks">
                  {card.bullets.map((text) => (
                    <li key={text}>
                      <Icon name="check" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <a className="btn btn--card" href={card.href}>
                {card.action}
                <Icon name={card.action === "Notify Me" ? "bell" : "arrow"} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
