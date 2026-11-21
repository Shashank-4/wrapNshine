import { Header } from "@/components/header";
import { Intro } from "@/components/intro";
import { Motion } from "@/components/motion";
import { Media } from "@/components/media";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { assets, principles } from "@/content/site";
export default function Home() {
  return (
    <>
      <Intro />
      <Header />
      <Motion />
      <main id="main">
        <section id="home" className="hero" data-scroll-scene="hero">
          <div className="hero-stage">
            <div className="hero-image">
              <Media asset={assets.carbon} priority />
            </div>
            <div className="hero-shade" />
            <div className="hero-lineup" aria-hidden="true">
              <div className="hero-car hero-car-left">
                <Media asset={assets.hero} priority />
              </div>
              <div className="hero-car hero-car-center">
                <Media asset={assets.dark} priority />
              </div>
              <div className="hero-car hero-car-right">
                <Media asset={assets.silver} priority />
              </div>
            </div>
            <div className="hero-copy">
              <p className="eyebrow">WRAP. PROTECT. REIMAGINE.</p>
              <h1>
                For the love
                <br />
                of <em>different.</em>
              </h1>
            </div>
            <div className="hero-transition-copy">
              <h2>
                We don’t cover cars.
                <br />
                We reveal <em>character.</em>
              </h2>
            </div>
            <div className="hero-bottom">
              <p>
                A new expression of your car.
                <br />
                Crafted with care. Finished with intent.
              </p>
              <a href="#approach" className="scroll-cue">
                <span className="eyebrow">SCROLL TO DISCOVER</span>
                <span aria-hidden="true">↓</span>
              </a>
              <p className="hero-index eyebrow">
                THE ART OF TRANSFORMATION
                <br />
                01 — 05
              </p>
            </div>
          </div>
        </section>
        <section
          id="approach"
          className="approach approach-scroll"
          data-scroll-scene="approach"
        >
          <div className="approach-stage">
            <div className="approach-heading">
              <p className="eyebrow">01 / THE WAY WE SEE IT</p>
              <h2>
                More than a finish.
                <br />
                <em>A feeling.</em>
              </h2>
            </div>
            <div className="approach-grid">
              <div className="approach-image">
                <Media asset={assets.stitch} sizes="100vw" />
                <span className="image-tag eyebrow">
                  CRAFTED IN THE DETAILS
                </span>
              </div>
              <div className="approach-copy">
                <p className="eyebrow">A PERSONAL APPROACH</p>
                <h3>
                  Good cars turn heads.
                  <br />
                  Yours should feel
                  <br />
                  <em>like you.</em>
                </h3>
                <p className="body-copy">
                  We see every vehicle as a canvas for individual expression.
                  Through colour, texture and meticulous care, we bring your
                  vision to the surface.
                </p>
                <a className="line-link" href="#contact">
                  START A CONVERSATION <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="craft-strip eyebrow">
              <span>COLOUR & CHARACTER</span>
              <span>PRECISION & CARE</span>
              <span>FORM & FINISH</span>
              <span>ALWAYS PERSONAL</span>
            </div>
          </div>
        </section>
        <section className="principles section-pad">
          <p className="eyebrow" data-reveal>
            02 / FROM IDEA TO EXPRESSION
          </p>
          {principles.map((p) => (
            <article className="principle" key={p.number} data-scroll-item>
              <div className="principle-image">
                <Media asset={p.image} sizes="(max-width: 800px) 100vw, 55vw" />
              </div>
              <div className="principle-copy">
                <p className="eyebrow">{p.number} / 03</p>
                <h2>{p.title}</h2>
                <p className="body-copy">{p.copy}</p>
                <a
                  href="#contact"
                  className="circle-link"
                  aria-label={`Discuss ${p.title.toLowerCase()}`}
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </section>
        <section className="manifesto section-pad" data-reveal>
          <p className="eyebrow">IT’S NEVER JUST A CAR.</p>
          <h2>
            It’s the way you arrive.
            <br />
            The way you leave.
            <br />
            <em>The way it makes you feel.</em>
          </h2>
        </section>
        <Services />
        <section className="statement" data-scroll-scene="statement">
          <div className="statement-stage">
            <Media asset={assets.dark} />
            <div className="statement-shade" />
            <div className="statement-copy">
              <p className="eyebrow">
                A FAMILIAR SILHOUETTE. AN ENTIRELY NEW PRESENCE.
              </p>
              <h2>
                Quietly
                <br />
                <em>unforgettable.</em>
              </h2>
            </div>
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
