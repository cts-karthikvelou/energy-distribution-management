import { useMemo } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import heroImage from "../assets/Energy1.jpg";
import renewableImage from "../assets/Renewable.jpg";
import nonRenewableImage from "../assets/NonRenewable.jpg";
import hydroImage from "../assets/Hydro_Energy.jpg"
import biomassImage from "../assets/Biomass_Energy.jpg"
import geothermalImage from "../assets/geothermal.jpg"
import windImage from "../assets/Wind_Energy.jpg"
import nuclearImage from "../assets/Nuclear_Energy.jpg"
import energyEfficiencyImage from "../assets/NonRenewable1.jpg"
import oceanImage from "../assets/Ocean_Energy.jpg"
import solarRoofImage from "../assets/Solar_Energy.jpg"
import coalImage from "../assets/Coal.jpg"
import gasImage from "../assets/Gas.jpg"
import mineralImage from "../assets/Minerals.jpg"
import oilImage from "../assets/Oil.jpg"
const Home = () => {
  const marqueeStatements = useMemo(
    () => [
      "🌞 Solar energy ",
      "💨 Wind energy ",
      "💧 Hydropower",
      "🌱 Biomass fuels",
      "🛢️ Coal",
      "⚛️ Nuclear energy",
      "🪙 Uranium",
      "⛏️ Minerals",
      "🔥 Natural gas",
      "🌋 Geothermal",
      "🌊 Ocean energy",
      "🛢️ Oil",
    ],
    []
  );

  const marqueeImages = useMemo(
    () => [
      { src: heroImage, alt: "Wind turbines above the clouds" },
      { src: renewableImage, alt: "Solar array catching the morning light" },
      { src: nonRenewableImage, alt: "Coal plant releasing emissions" },
      { src: hydroImage, alt: "Hydropower dam generating electricity" },
      { src: biomassImage, alt: "Biomass fuel being processed" },
      { src: geothermalImage, alt: "Geothermal power plant in volcanic area" },
      { src: windImage, alt: "Wind turbines illuminated at night" },
      { src: nuclearImage, alt: "Nuclear power plant with cooling towers" },
      { src: energyEfficiencyImage, alt: "Smart home energy monitoring system" },
      { src: oceanImage, alt: "Tidal turbines harnessing ocean energy" },
      { src: solarRoofImage, alt: "Residential solar panels on roof" },
      { src: coalImage, alt: "Coal mine with heavy machinery" },
      { src: gasImage, alt: "Natural gas processing plant" },
      { src: mineralImage, alt: "Minerals extraction site" },
      { src: oilImage, alt: "Oil drilling rig in operation" },
    ],
    []
  );

  const energyHighlights = useMemo(
    () => [
      {
        id: "renewable",
        heading: "Renewable Energy",
        description:
          "Energy drawn from sources that naturally replenish, such as sunlight, wind, water, and biomass. These options minimize greenhouse gases and prepare grids for a resilient future.",
        examples: "Solar · Wind · Hydropower · Biomass",
        cta: { label: "Explore Renewables", type: "route", to: "/renewable" },
        image: renewableImage,
        tagLabel: "Renewable",
        tagColor: "var(--gradient-emerald)",
        stats: [
          { value: "72%", label: "Projected energy mix by 2040" },
          { value: "4x", label: "Growth in storage capacity" },
          { value: "0", label: "Fuel emissions on-site" },
        ],
      },
      {
        id: "nonrenewable",
        heading: "Non-Renewable Energy",
        description:
          "Fossil-based sources like coal, oil, and natural gas formed over millions of years. They are energy-dense yet finite, and transitioning away from them reduces climate risk.",
        examples: "Coal · Oil · Natural Gas · Nuclear",
        cta: { label: "Explore Non-Renewables", type: "route", to: "/nonrenewable" },
        image: nonRenewableImage,
        tagLabel: "Legacy",
        tagColor: "var(--gradient-amber)",
        stats: [
          { value: "2.1x", label: "Higher carbon intensity" },
          { value: "2050", label: "Net-zero milestone" },
          { value: "-35%", label: "Targeted demand reduction" },
        ],
      },
    ],
    []
  );

  const solutionCards = useMemo(
    () => [
      {
        icon: "☀️",
        title: "Solar Intelligence",
        copy: "Predictive analytics tune panel tilt and forecast supply so storage stays balanced all year round.",
         to: "/datascience",
      },
    ],
    []
  );

  const systemFacts = useMemo(
    () => [
      { value: "18%", label: "Average grid losses without monitoring" },
      { value: "92%", label: "User satisfaction after modern retrofits" },
      { value: "3.5yrs", label: "Typical payback on smart upgrades" },
    ],
    []
  );

  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero__content">
          <span className="home__hero__eyebrow">Intelligent Energy Futures</span>
          <h1 className="home__hero__title fade-in fade-in-delay-1">
      Empowering Industries With Smart, Sustainable & Data-Driven Energy Systems
          </h1>
          <p className="home__hero__text fade-in fade-in-delay-2">
      We provide AI-powered insights, predictive analytics, and intelligent control systems 
      that help industries optimize energy usage, reduce carbon emissions, improve equipment 
      reliability, and accelerate their transition toward clean and efficient operations.
          </p>
          {/* <div className="home__hero__cta">
            <a className="btn btn--primary" href="#contact">
              Start a project
            </a>
            <a className="btn btn--ghost" href="#what-is-energy">
              View capabilities
            </a>
          </div> */}
        </div>

        <div className="home__visual">
          <div className="home__visual__orb">
            <div className="home__visual__ring" aria-hidden="true" />
            <img src={heroImage} alt="Aerial view of wind turbines rising above glowing clouds" loading="lazy" />
            <div className="home__visual__badge">
              {/* <h4>Impact Snapshot</h4> */}
              {/* <div className="home__badge__stats">
                <strong>4.2M</strong>
                <span>Tonnes of CO₂ avoided</span>
              </div> */}
              {/* <p>Model predictive control keeps renewables stable even during peak demand swings.</p> */}
            </div>
          </div>
        </div>
      </section>

      <section id="what-is-energy" className="section section--energy">
        <div className="container">
          <div className="section__heading text-center">
            <h2>What is Energy?</h2>
            <p className="section__subtitle">
              Energy powers our lives, drives innovation, and shapes a sustainable future.
            </p>
          </div>

          <div className="energy-cards">
            <div className="energy-card">
              <div className="energy-card__icon">⚡</div>
              <h3>Perform Work</h3>
              <p>Energy is the ability to do work—from lighting homes to powering industries.</p>
            </div>

            <div className="energy-card">
              <div className="energy-card__icon">🌐</div>
              <h3>Digital Economy</h3>
              <p>It keeps devices, networks, and data centers running efficiently around the globe.</p>
            </div>

            <div className="energy-card">
              <div className="energy-card__icon">🌱</div>
              <h3>Low-Carbon Future</h3>
              <p>Understanding sources helps us reduce emissions and build resilient infrastructure.</p>
            </div>

            <div className="energy-card">
              <div className="energy-card__icon">🔍</div>
              <h3>Smart Management</h3>
              <p>Efficient energy use unlocks savings, reliability, and sustainability for communities.</p>
            </div>
          </div>

          {/* <div className="facts-grid mt-5">
            {systemFacts.map((fact) => (
              <article key={fact.label} className="fact-card">
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </article>
            ))}
          </div> */}
        </div>
      </section>




      <section className="section" id="renewable">
        <div className="container energy-grid ">
          <div className="section__heading">
            <h2>Types of Energy</h2>
            <p>
              Understand the mix of energy sources fueling industry today so you can prioritize investments that move
              the emissions needle fastest.
            </p>
          </div>
          <section className="marquee" aria-label="Energy innovations ticker">
            <div className="container">
              <div className="marquee__track">
                {marqueeStatements.concat(marqueeStatements).map((item, index) => (
                  <span className="marquee__item" key={`${item}-${index}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="marquee marquee--reverse" aria-hidden="true">
            <div className="container">
              <div className="marquee__track mb-5">
                {marqueeImages.concat(marqueeImages).map((asset, index) => (
                  <img key={`${asset.alt}-${index}`} src={asset.src} alt={asset.alt} loading="lazy" />
                ))}
              </div>
            </div>
          </section>
          {energyHighlights.map((highlight, index) => (
            <div
              key={highlight.id}
              className={`energy-grid__row energy-section ${index % 2 === 1 ? "energy-grid__row--reverse" : ""}`}
            >
              <figure className="energy-grid__image">
                <span className="energy-grid__tag" style={{ background: highlight.tagColor }}>
                  {highlight.tagLabel}
                </span>
                <img src={highlight.image} alt={`${highlight.heading} visual`} loading="lazy" />
              </figure>

              <div className="energy-grid__copy mb-3">
                <h3
                  style={{
                    color:
                      highlight.id === "renewable"
                        ? "rgb(0, 128, 0)"
                        : highlight.id === "nonrenewable"
                          ? "rgb(220, 0, 0)"
                          : "inherit",
                  }}
                >
                  {highlight.heading}
                </h3>

                <p>{highlight.description}</p>
                <p>
                  <strong>Examples:</strong> {highlight.examples}
                </p>

                <div className="energy-grid__facts">
                  {highlight.stats.map((stat) => (
                    <article key={stat.label} className="energy-grid__fact">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </article>
                  ))}
                </div>

                <div className="energy-grid__actions ">
                  {highlight.cta.type === "route" ? (
                    <Link className="btn btn--solid" to={highlight.cta.to}>
                      {highlight.cta.label}
                    </Link>
                  ) : (
                    <a className="btn btn--solid " href={highlight.cta.to}>
                      {highlight.cta.label}
                    </a>
                  )}
                  <a className="btn btn--outline" href="#contact">
                    Talk to experts
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--approach section--tight" aria-labelledby="about-heading">
        <div className="container split">
          <div className="section__heading">
            <h2 id="about-heading">About Our Approach</h2>
            <p>
              We modernize plants and microgrids with adaptive control, predictive maintenance, and transparent reporting
              so stakeholders can act with confidence.
            </p>
          </div>
        </div>
      </section>

<section className="section section--tight" id="solutions">
  <div
    className="container solution-grid"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
{solutionCards.map((card) => (
      <Link
        key={card.title}
        to={card.to}
        style={{ textDecoration: "none", color: "inherit" }} // keeps design clean
      >
        <article
          className="solution-grid__item"
          style={{
            maxWidth: "350px",
            cursor: "pointer",
            transition: "0.3s ease",
          }}
        >
          <span className="solution-grid__icon" aria-hidden="true">
            {card.icon}
          </span>
          <h3>{card.title}</h3>
          <p>{card.copy}</p>
        </article>
      </Link>
    ))}
  </div>
  
</section>


      <section id="contact" className="container section">
        <div className="cta">
          <h3>Let’s build a smarter, greener energy future together.</h3>
          <p>
            Share your current infrastructure and we’ll map the upgrades that cut carbon, lower costs, and keep power
            reliable.
          </p>
          <Link className="btn" to="/contact">
            Contact Us
          </Link>

        </div>
      </section>
    </div>
  );
};

export default Home; 