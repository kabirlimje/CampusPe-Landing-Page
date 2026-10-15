import { useState } from "react";
import { opportunities, opportunityFilters } from "../data.js";
import { Eyebrow, Icon } from "./ui.jsx";
import lightningBadge from "../assets/Lightning Badge.png";
import iimLogo from "../assets/IIM Banglore.png";
import googleLogo from "../assets/google.png";
import notionLogo from "../assets/Notion.png";

const opportunityLogos = {
  college: iimLogo,
  internship: googleLogo,
  freelance: notionLogo,
};

const steps = [["01", "Set your preferences", "Tell us what you want, from colleges and courses to jobs, internships and gigs.", "Takes 1 min"], ["02", "Discover relevant opportunities", "Explore opportunities matched to your profile, interests and goals.", "Automatic"], ["03", "Get notified when something fits", "Get notified when a relevant college or opportunity is found, so you can act early.", "Real-time"]];

export default function OpportunityDiscovery() {
  const [filter, setFilter] = useState("all");
  const filtered = opportunities.filter((item) => filter === "all" || item.type === filter);
  return <section className="discover" id="jobs"><div className="wrap discover__grid"><div className="discover__left reveal"><Eyebrow>01 · OPPORTUNITY DISCOVERY</Eyebrow><h2 className="h-xl">Stop searching. Start getting matched.</h2><p className="lead">Tell CampusPe your skills, preferences and goals. We monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.</p><ol className="steps">{steps.map(([number, title, text, badge]) => <li key={number}><b>{number}</b><div><h3>{title}</h3><p>{text}</p></div><span>{badge}</span></li>)}</ol><a className="btn btn--pill" href="#resume">Explore opportunities <Icon name="arrow"/></a></div><div className="discover__right reveal"><div className="feed"><header className="feed__head"><div><span className="feed__bolt"><img src={lightningBadge} alt="" /></span><div><h3>CampusPe Opportunity Feed</h3><p>Colleges &amp; opportunities matched to you</p></div></div><span className="count-pill">● 12 new matches today</span></header><div className="feed__tabs" role="tablist" aria-label="Filter opportunities">{opportunityFilters.map((item) => <button className={`tab ${filter === item ? "is-active" : ""}`} type="button" role="tab" aria-selected={filter === item} key={item} onClick={() => setFilter(item)}>{item === "all" ? "All" : item[0].toUpperCase() + item.slice(1)}</button>)}</div><div className="feed__list">{filtered.map((item) => <article className="feed-item" key={item.title}><div className="feed-item__top"><div className="feed-item__who"><span className={`mono mono--${item.type} mono--image`}><img src={opportunityLogos[item.type]} alt="" /></span><div><div className="feed-item__name"><h4>{item.title}</h4><span className="tag">{item.tag}</span></div><div className="meta"><span><Icon name="pin"/>{item.detail}</span><b>{item.pay}</b></div></div></div><a className="btn btn--sm" href="#resume">{item.action}</a></div><p>{item.description}</p></article>)}{filtered.length === 0 && <p className="feed__empty">No matches in this category yet — check back soon.</p>}</div><footer className="feed__foot"><a href="#resume">View all matched opportunities <Icon name="arrow"/></a><span>Curated for you · Updated daily</span></footer></div><p className="note">A mix of colleges, jobs, internships and gigs — all in one place.</p></div></div></section>;
}
