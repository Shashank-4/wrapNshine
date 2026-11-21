"use client";
import { useState } from "react";
import { services } from "@/content/site";
import { Media } from "./media";
export function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="services section-pad">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">03 / THE POSSIBILITIES</p>
        <h2>
          A new look.
          <br />
          <em>The same soul.</em>
        </h2>
        <p className="body-copy">
          Transform the way it looks. Preserve the way it feels. A considered
          collection of treatments, tailored to your car.
        </p>
      </div>
      <div className="service-story">
        {services.map((service, i) => (
          <article
            className={`service-scene ${i % 2 ? "service-scene-reverse" : ""}`}
            data-scroll-item
            key={service.id}
          >
            <div className="service-scene-copy">
              <p className="eyebrow">SERVICE / 0{i + 1}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a className="line-link" href="#contact">
                START YOUR PROJECT <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="service-scene-image">
              <Media asset={service.image} sizes="60vw" />
              <div className="image-caption">
                <span className="eyebrow">{service.subtitle}</span>
                <span className="eyebrow">0{i + 1} / 05</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="service-layout service-mobile">
        <div className="service-list">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`service-item ${active === i ? "active" : ""}`}
            >
              <h3>
                <button
                  id={`service-${service.id}`}
                  aria-expanded={active === i}
                  aria-controls={`panel-${service.id}`}
                  onClick={() => setActive(i)}
                >
                  <span className="eyebrow">0{i + 1}</span>
                  {service.title}
                  <span className="service-symbol" aria-hidden="true">
                    {active === i ? "−" : "+"}
                  </span>
                </button>
              </h3>
              <div
                id={`panel-${service.id}`}
                role="region"
                aria-labelledby={`service-${service.id}`}
                hidden={active !== i}
              >
                <p>{service.description}</p>
                <a className="line-link" href={`#contact`}>
                  LET’S TALK ABOUT YOUR CAR <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="service-image">
          <Media
            key={services[active].id}
            asset={services[active].image}
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <div className="image-caption">
            <span className="eyebrow">{services[active].subtitle}</span>
            <span className="eyebrow">0{active + 1} / 05</span>
          </div>
        </div>
      </div>
    </section>
  );
}
