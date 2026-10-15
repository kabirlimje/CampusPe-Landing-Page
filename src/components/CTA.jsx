import { Icon } from "./ui.jsx";

export default function CTA() {
  return <section className="cta" id="contact"><div className="wrap"><div className="cta-card reveal"><h2>Still have questions?</h2><p>Our support team is here to help you succeed. Get in touch anytime.</p><div><a className="btn btn--support" href="mailto:contactus@campuspe.com">Contact Support <Icon name="arrow-ur"/></a><a className="btn btn--schedule" href="tel:+916362606464">Schedule a Call <Icon name="phone"/></a></div></div></div></section>;
}
