import { Brand } from "./header";
import { navigation } from "@/content/site";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#home" aria-label="wrapNshine home">
          <Brand />
        </a>
        <a className="line-link" href="#home">
          BACK TO TOP ↑
        </a>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} wrapNshine</p>
        <nav aria-label="Footer">
          {navigation.slice(1).map((n) => (
            <a href={n.href} key={n.label}>
              {n.label}
            </a>
          ))}
        </nav>
        <p>Made for the details.</p>
      </div>
    </footer>
  );
}
