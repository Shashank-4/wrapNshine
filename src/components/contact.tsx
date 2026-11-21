"use client";
import { useState, type FormEvent } from "react";
import { services } from "@/content/site";
export function Contact() {
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setCopied(false);
    setSummary(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nVehicle: ${data.get("vehicle")}\nService: ${data.get("service")}\n\n${data.get("message")}`,
    );
  }
  return (
    <section id="contact" className="contact section-pad">
      <div data-reveal>
        <p className="eyebrow">05 / YOUR NEXT CHAPTER</p>
        <h2>
          Let’s make it
          <br />
          <em>yours.</em>
        </h2>
        <p className="body-copy">
          Tell us what you have in mind.
          <br />
          Every transformation starts with a conversation.
        </p>
        <p className="contact-note">
          Preview enquiry form. Create a brief to copy and keep; nothing is sent
          or stored.
        </p>
      </div>
      <form onSubmit={submit}>
        <div className="form-row">
          <label>
            Your name
            <input
              name="name"
              autoComplete="name"
              required
              placeholder="Alex Taylor"
              maxLength={100}
            />
          </label>
          <label>
            Email address
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              maxLength={200}
            />
          </label>
        </div>
        <label>
          Your vehicle
          <input
            name="vehicle"
            required
            placeholder="Make, model and year"
            maxLength={200}
          />
        </label>
        <label>
          What are you considering?
          <select name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.id}>{s.title}</option>
            ))}
            <option>Help me explore the options</option>
          </select>
        </label>
        <label>
          Your vision
          <textarea
            name="message"
            placeholder="A colour, a finish, a feeling…"
            rows={3}
            required
            maxLength={3000}
          />
        </label>
        <button className="line-link submit" type="submit">
          CREATE MY ENQUIRY BRIEF <span aria-hidden="true">↗</span>
        </button>
        {summary && (
          <div className="enquiry-result" role="status">
            <p>Your brief is ready. It has not been sent.</p>
            <pre>{summary}</pre>
            <button
              type="button"
              className="text-button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(summary);
                  setCopied(true);
                } catch {
                  setCopied(false);
                }
              }}
            >
              {copied ? "COPIED" : "COPY BRIEF"}
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
