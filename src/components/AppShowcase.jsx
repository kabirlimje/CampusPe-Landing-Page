import mobileShowcase from "../assets/Mobile.png";
import downloadPhones from "../assets/iPhone 12 Pro (1).png";
import googlePlayBadge from "../assets/google play.png";
import appStoreBadge from "../assets/Appstore.png";

export default function AppShowcase() {
  return (
    <section className="app" id="app">
      <div className="wrap">
        <header className="app__head reveal">
          <h2>Check Out Our App Interface</h2>
          <p>
            Experience the power of a unified campus ecosystem. Students explore
            trending courses, colleges showcase campus life and companies
            connect with qualified candidates.
          </p>
        </header>
        <div className="phones reveal">
          <img
            className="app-showcase-image"
            src={mobileShowcase}
            alt="CampusPe app screens for students, job seekers, colleges, and employers"
          />
        </div>
        <div className="download">
          <div className="reveal">
            <h2>Download App Now</h2>
            <p>
              CampusPe bridges the gap between education and industry. Whether
              you are seeking your next internship, empowering your college
              cohort or scouting for talent, your career starts here.
            </p>
            <div className="stores">
              <a href="#app" className="store" aria-label="Get it on Google Play">
                <img src={googlePlayBadge} alt="Get it on Google Play" />
              </a>
              <a href="#app" className="store" aria-label="Download on the App Store">
                <img src={appStoreBadge} alt="Download on the App Store" />
              </a>
            </div>
          </div>
          <img
            className="download-art"
            src={downloadPhones}
            alt="CampusPe app displayed on two iPhone screens"
          />
        </div>
      </div>
    </section>
  );
}
