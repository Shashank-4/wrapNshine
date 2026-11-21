"use client";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";
export function Brand() {
  return (
    <span className="brand">
      wrap<span className="brand-n">N</span>shine
      <span className="brand-caption">AUTOMOTIVE ATELIER</span>
    </span>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="header-note" href="#contact">
          LET’S CREATE SOMETHING
        </a>
        <a href="#home" aria-label="wrapNshine home">
          <Brand />
        </a>
        <button
          ref={trigger}
          className="menu-button"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(true)}
        >
          NAVIGATE <span className="menu-lines" aria-hidden="true" />
        </button>
      </header>
      <dialog
        ref={dialog}
        id="navigation"
        className="nav-dialog"
        data-lenis-prevent
        onCancel={close}
        aria-label="Main navigation"
      >
        <div className="nav-top">
          <Brand />
          <button className="text-button" onClick={close}>
            CLOSE <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav>
          {navigation.map((item, i) => (
            <a key={item.label} href={item.href} onClick={close}>
              <span className="eyebrow">0{i + 1}</span>
              {item.label}
              <span className="nav-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </nav>
        <p className="eyebrow">YOUR CAR. A NEW EXPRESSION.</p>
      </dialog>
    </>
  );
}
