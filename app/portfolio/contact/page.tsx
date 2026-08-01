import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-header">
        <Link href="/portfolio" className="contact-back">
          ← PROJECT INDEX
        </Link>

        <span>PORTFOLIO 2026</span>
      </header>

      <section className="contact-card">
        <div className="contact-name">
          <p>CONTACT</p>

          <h1>
            JU
            <br />
            DAHYE
          </h1>
        </div>

        <div className="contact-links">
          <a href="mailto:lowknjua@gmail.com">
            <span className="contact-link-label">EMAIL</span>

            <strong>lowknjua@gmail.com</strong>

            <span className="contact-link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            href="https://github.com/DHJJJS"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-link-label">GITHUB</span>

            <strong>github.com/DHJJJS</strong>

            <span className="contact-link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <a href="/files/ju-dahye-portfolio.pdf" download>
            <span className="contact-link-label">PORTFOLIO PDF</span>

            <strong>Download portfolio</strong>

            <span className="contact-link-arrow" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </section>

<footer className="contact-footer">
  <span>JU DAHYE</span>
  <span>CONTENT MARKETING</span>
  <span>PORTFOLIO 2026</span>
</footer>
    </main>
  );
}