import Link from "next/link";

const highlights = [
  { value: "147%", label: "월간 조회수 성장" },
  { value: "TOP 10", label: "주요 키워드 검색 노출" },
  { value: "50", label: "기업 블로그 포스팅" },
];

const projects = [
  {
    number: "01",
    category: "SEO CONTENT",
    title: "검색 의도에서 시작한 콘텐츠 운영",
    description:
      "사용자가 실제로 검색하는 질문을 분석하고, 제품 정보의 우선순위와 콘텐츠 구조를 재설계했습니다.",
    result: "월간 조회수 147% 성장 · 주요 키워드 TOP 10",
    href: "/portfolio/seo-content",
  },
  {
    number: "02",
    category: "B2B WEB CONTENT",
    title: "기술 정보를 읽기 쉬운 웹 콘텐츠로",
    description:
      "제품 규격과 기술 정보를 조사하고, 글로벌 바이어가 이해하기 쉬운 영문 콘텐츠와 반응형 표를 구축했습니다.",
    result: "WordPress · HTML/CSS · 기술 정보 구조화",
    href: "/portfolio/b2b-web-content",
  },
  {
    number: "03",
    category: "FREELANCE CONTENT",
    title: "인턴 업무에서 이어진 50건의 콘텐츠 프로젝트",
    description:
      "조사·기획·작성·검수 기준을 정리해 여러 건의 기업 콘텐츠를 일관된 품질로 제작했습니다.",
    result: "Research · Planning · Writing · Review",
    href: "/portfolio/freelance-content",
  },
  {
    number: "04",
    category: "TEAM PROJECT",
    title: "새로운 도구를 익히고 서로 다른 작업을 연결한 경험",
    description:
      "Unreal Engine으로 맵을 구성하고, 팀원의 기능과 일정이 하나의 플레이 흐름으로 이어지도록 조율했습니다.",
    result: "Tool Adaptation · Map Design · Team Coordination",
    href: "/portfolio/team-project",
  },
];

const values = [
  {
    number: "01",
    title: "User-First Writing",
    text: "제품 특징보다 사용자가 실제로 궁금해하는 질문에서 시작합니다.",
  },
  {
    number: "02",
    title: "Accuracy First",
    text: "기술 정보와 수치를 대조해 콘텐츠의 신뢰도를 지킵니다.",
  },
  {
    number: "03",
    title: "Reason Before Result",
    text: "성과와 문제의 원인을 확인하고 다음 기획에 반영합니다.",
  },
];

export default function PortfolioPage() {
  return (
    <main id="top" className="portfolio-page portfolio-v3">
      <header className="portfolio-header">
        <Link href="/" className="portfolio-logo">
          CORE IS SINCERITY
        </Link>

        <nav className="portfolio-nav" aria-label="포트폴리오 메뉴">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <Link href="/portfolio/contact">CONTACT</Link>
        </nav>
      </header>

      <section className="portfolio-intro">
        <div className="portfolio-intro-index">
          <span>PORTFOLIO</span>
          <span>2026</span>
        </div>

        <div className="portfolio-intro-copy">
          <p className="portfolio-kicker">
            JU DAHYE · CONTENT MARKETING · SEO · B2B
          </p>

          <h1>
            Search intent
            <br />
            meets
            <br />
            product value.
          </h1>

          <p className="portfolio-description">
            고객의 검색 의도와 제품 정보를 연결하는 콘텐츠 마케터입니다.
          </p>
        </div>

        <a href="#work" className="portfolio-scroll-cue">
          VIEW SELECTED WORK <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="portfolio-highlights" aria-label="핵심 성과">
        {highlights.map((highlight) => (
          <article key={highlight.value} className="highlight-item">
            <strong>{highlight.value}</strong>
            <span>{highlight.label}</span>
          </article>
        ))}
      </section>

      <section id="work" className="selected-work">
        <div className="section-heading section-heading-compact">
          <span>01</span>
          <div>
            <p>SELECTED WORK · 04 CASES</p>
            <h2>프로젝트를 선택해 상세 내용을 확인할 수 있습니다.</h2>
          </div>
        </div>

        <div className="project-list project-list-v3">
          {projects.map((project) => (
            <Link
              key={project.number}
              href={project.href}
              className="project-row project-row-link project-card-v3"
              aria-label={`${project.title} 상세 사례 보기`}
            >
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-result">{project.result}</div>

              <div className="project-action" aria-hidden="true">
                <span>VIEW CASE</span>
                <i>↗</i>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="portfolio-about portfolio-about-v3">
        <div className="section-heading section-heading-compact">
          <span>02</span>
          <div>
            <p>ABOUT</p>
            <h2>결과보다 원인을 먼저 살핍니다.</h2>
          </div>
        </div>

        <p className="about-lead about-lead-v3">
          질문을 확인하고 정보를 검토하며, 결과의 원인을 다음 기획에 반영합니다.
        </p>

        <div className="about-values about-values-v3">
          {values.map((value) => (
            <article key={value.number}>
              <span>{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-contact-cta">
        <div>
          <p>CONTACT · 03</p>
          <h2>More about me.</h2>
        </div>

        <Link href="/portfolio/contact" className="portfolio-contact-button">
          OPEN CONTACT <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
