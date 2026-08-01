const backFragments = [
  {
    text: "기억",
    className: "fragment fragment-back fragment-memory",
  },
  {
    text: "흔적",
    className: "fragment fragment-back fragment-trace",
  },
];

const middleFragments = [
  {
    text: "진심",
    className: "fragment fragment-middle fragment-sincerity",
  },
  {
    text: "여백",
    className: "fragment fragment-middle fragment-space",
  },
];

const frontFragments = [
  {
    text: "기록",
    className: "fragment fragment-front fragment-record",
  },
];

export default function Home() {
  return (
    <main className="home">
      <div className="background-type" aria-hidden="true">
        2026
      </div>

      <div className="fragment-layer layer-back" aria-hidden="true">
        {backFragments.map((fragment) => (
          <span key={fragment.text} className={fragment.className}>
            {fragment.text}
          </span>
        ))}
      </div>

      <div className="fragment-layer layer-middle" aria-hidden="true">
        {middleFragments.map((fragment) => (
          <span key={fragment.text} className={fragment.className}>
            {fragment.text}
          </span>
        ))}

        <div className="deconstructed-word">
          <span className="deconstructed-piece piece-top">관찰</span>
          <span className="deconstructed-piece piece-center">관찰</span>
          <span className="deconstructed-piece piece-bottom">관찰</span>
        </div>
      </div>

      <div className="fragment-layer layer-front" aria-hidden="true">
        {frontFragments.map((fragment) => (
          <span key={fragment.text} className={fragment.className}>
            {fragment.text}
          </span>
        ))}

        <span className="graphic-line graphic-line-left" />
        <span className="graphic-line graphic-line-right" />
      </div>

      <section className="hero">
        <div className="hero-index" aria-hidden="true">
          <span>001</span>
          <span>PERSONAL ARCHIVE</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">PERSONAL ARCHIVE · 2026</p>

          <h1>
            <span>Core is</span>
            <span className="title-second">sincerity.</span>
          </h1>

          <a
            href="/portfolio"
            className="enter-link"
            aria-label="포트폴리오로 들어가기"
          >
            <span className="enter-label">ENTER PORTFOLIO</span>
            <span className="enter-line" aria-hidden="true" />
            <span className="enter-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>

      <div className="side-caption" aria-hidden="true">
        <span>SELECTED RECORDS</span>
        <span>THOUGHT · WORK · MEMORY</span>
      </div>

      <span className="corner corner-top-left" aria-hidden="true" />
      <span className="corner corner-top-right" aria-hidden="true" />
      <span className="corner corner-bottom-left" aria-hidden="true" />
      <span className="corner corner-bottom-right" aria-hidden="true" />
    </main>
  );
}