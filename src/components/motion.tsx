"use client";
import { useEffect } from "react";
import Lenis from "lenis";
export function Motion() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    let frame = 0;
    const clamp = (value: number) => Math.max(0, Math.min(1, value));
    const range = (value: number, start: number, end: number) =>
      clamp((value - start) / (end - start));
    const scenes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-scene]"),
    );
    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-item]"),
    );

    const renderMotion = () => {
      frame = 0;
      const viewport = window.innerHeight;

      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const travel = Math.max(1, rect.height - viewport);
        const progress = clamp(-rect.top / travel);
        scene.style.setProperty("--scene-progress", progress.toFixed(4));

        if (scene.dataset.scrollScene === "hero") {
          scene.style.setProperty(
            "--hero-copy-opacity",
            (1 - range(progress, 0.12, 0.34)).toFixed(4),
          );
          scene.style.setProperty(
            "--hero-cars-opacity",
            (1 - range(progress, 0.5, 0.72)).toFixed(4),
          );
          const transitionIn = range(progress, 0.42, 0.63);
          const transitionOut = 1 - range(progress, 0.84, 1);
          scene.style.setProperty(
            "--hero-transition-opacity",
            (transitionIn * transitionOut).toFixed(4),
          );
        }

        if (scene.dataset.scrollScene === "approach") {
          scene.style.setProperty(
            "--approach-heading-opacity",
            (1 - range(progress, 0.16, 0.38)).toFixed(4),
          );
          scene.style.setProperty(
            "--approach-image-progress",
            range(progress, 0.12, 0.66).toFixed(4),
          );
          scene.style.setProperty(
            "--approach-copy-progress",
            range(progress, 0.58, 0.82).toFixed(4),
          );
        }

        if (scene.dataset.scrollScene === "statement") {
          scene.style.setProperty(
            "--statement-progress",
            range(progress, 0.08, 0.82).toFixed(4),
          );
        }
      });

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const progress = clamp(
          (viewport * 0.92 - rect.top) / (viewport * 0.72),
        );
        item.style.setProperty("--item-progress", progress.toFixed(4));
      });

      const total = document.documentElement.scrollHeight - viewport;
      const progress = document.querySelector<HTMLElement>(".scroll-progress");
      if (progress) {
        progress.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`;
      }
    };

    const scheduleMotion = () => {
      if (!frame) frame = requestAnimationFrame(renderMotion);
    };

    const configure = () => {
      lenis?.destroy();
      [...scenes, ...items].forEach((target) =>
        target.removeAttribute("style"),
      );

      if (media.matches) {
        lenis = undefined;
        return;
      }

      lenis = new Lenis({
        autoRaf: true,
        duration: 1.25,
        anchors: { offset: -80 },
        lerp: 0.075,
        wheelMultiplier: 0.82,
      });
      lenis.on("scroll", scheduleMotion);
      scheduleMotion();
    };
    configure();
    media.addEventListener("change", configure);
    window.addEventListener("resize", scheduleMotion, { passive: true });
    window.addEventListener("scroll", scheduleMotion, { passive: true });
    return () => {
      lenis?.destroy();
      cancelAnimationFrame(frame);
      media.removeEventListener("change", configure);
      window.removeEventListener("resize", scheduleMotion);
      window.removeEventListener("scroll", scheduleMotion);
    };
  }, []);
  return <div className="scroll-progress" aria-hidden="true" />;
}
