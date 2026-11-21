"use client";
import { useEffect, useRef, useState } from "react";
import { Brand } from "./header";
export function Intro() {
  const ref = useRef<HTMLDialogElement>(null);
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    try {
      if (!sessionStorage.getItem("wrapnshine-entered"))
        ref.current?.showModal();
    } catch {
      ref.current?.showModal();
    }
  }, []);
  function enter() {
    try {
      sessionStorage.setItem("wrapnshine-entered", "1");
    } catch {
      /* Browsing with storage disabled should still work. */
    }
    setLeaving(true);
    window.setTimeout(() => ref.current?.close(), 450);
  }
  return (
    <dialog
      ref={ref}
      className={`intro ${leaving ? "leaving" : ""}`}
      onCancel={enter}
      aria-label="Welcome to wrapNshine"
    >
      <Brand />
      <p className="eyebrow intro-statement">
        A NEW COLOUR. A DIFFERENT FEELING.
        <br />
        AN EXPRESSION THAT IS ENTIRELY YOURS.
      </p>
      <div className="intro-bottom">
        <button onClick={enter} className="intro-enter">
          Enter <span aria-hidden="true">↗</span>
        </button>
        <p className="eyebrow">
          THOUGHTFULLY TRANSFORMED. BEAUTIFULLY PROTECTED.
        </p>
      </div>
    </dialog>
  );
}
