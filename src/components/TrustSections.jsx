import { Icon } from "./ui.jsx";
import gnservLogo from "../assets/2172309c15214160504e8198b07d1be50d00d07a.png";
import talentSpotifyLogo from "../assets/236fe24f4d06ce7212ccb78dd073110bb774d696.png";
import dpiitLogo from "../assets/27d954c5a021cc9dd377f3e41542e0cc8ba8d508.png";
import radiantLogo from "../assets/39593d30307452110d6086ef6f594668f9246d54.jpg";
import vtuLogo from "../assets/ad47b637590505bbf20ff1429a263b1ebb4b7ea4.png";
import startupKarnatakaLogo from "../assets/e6500a19dff57619d170ffb96d52a97536b61ee2.png";

const partnerLogos = [
  { name: "GNSERV Nurturing Ventures", src: gnservLogo, width: 250, height: 79 },
  { name: "TalentSpotify", src: talentSpotifyLogo, width: 131, height: 110 },
  { name: "DPIIT Startup India", src: dpiitLogo, width: 290, height: 104 },
  { name: "Radiant Info", src: radiantLogo, width: 115, height: 115 },
  { name: "Background-removed partner logo", src: vtuLogo, width: 81, height: 109 },
  { name: "Startup Karnataka", src: startupKarnatakaLogo, width: 364, height: 80 },
];

export function Stats() {
  const stats = [
    ["users", "800+", "Students"],
    ["building", "130+", "Colleges"],
    ["briefcase", "100+", "Jobs & internships"],
    ["shield", "100%", "Safe & Trusted"],
  ];
  return (
    <section className="stats" aria-label="CampusPe at a glance">
      <div className="wrap stats__row">
        {stats.map(([icon, number, label]) => (
          <div className="stat" key={label}>
            <Icon name={icon} />
            <b>{number}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section className="partners">
      <h2>Trusted by partners across India</h2>
      <div className="marquee">
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <div className="marquee__set" key={copy} aria-hidden={copy === 1}>
              {partnerLogos.map(({ name, src, width, height }) => (
                <span
                  className="logo-tile logo-tile--image"
                  key={`${copy}-${name}`}
                  style={{ "--logo-width": `${width}px`, "--logo-height": `${height}px` }}
                >
                  <img
                    className="partner-logo"
                    src={src}
                    alt={copy === 0 ? name : ""}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
