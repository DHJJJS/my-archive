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
  },
  {
    number: "02",
    category: "B2B WEB CONTENT",
    title: "기술 정보를 신뢰로 바꾼 글로벌 웹 콘텐츠",
    description:
      "제품 규격과 기술 정보를 조사하고, 글로벌 바이어가 이해하기 쉬운 영문 콘텐츠와 반응형 표를 구축했습니다.",
    result: "WordPress · HTML/CSS · 기술 정보 구조화",
  },
  {
    number: "03",
    category: "FREELANCE",
    title: "인턴 업무에서 이어진 50건의 콘텐츠 프로젝트",
    description:
      "인턴 기간의 콘텐츠 운영 경험을 바탕으로, 기업 블로그 포스팅 50건의 후속 프로젝트를 맡았습니다.",
    result: "조사 · 기획 · 작성 · 검수",
  },
{
  number: "04",
  category: "TEAM PROJECT",
  title: "새로운 도구를 익히며 팀의 작업을 연결한 경험",
  description:
    "5인 팀의 팀장으로 Unreal Engine 맵을 구성하고, 팀원의 진행 상황과 일정을 조율하며 프로젝트를 완성했습니다.",
  result: "Map Design · Team Coordination · Git Collaboration",
},
];

const projectLinks: Record<string, string> = {
  "01": "/portfolio/seo-content",
  "02": "/portfolio/b2b-web-content",
  "03": "/portfolio/freelance-content",
  "04": "/portfolio/team-project",
};

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <header className="portfolio-header">
        <Link href="/" className="portfolio-logo">
          CORE IS SINCERITY
        </Link>

        <nav className="portfolio-nav" aria-label="포트폴리오 메뉴">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
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

        <div className="portfolio-intro-mark" aria-hidden="true">
          전략
        </div>
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
        <div className="section-heading">
          <span>01</span>
          <div>
            <p>SELECTED WORK</p>
            <h2>생각한 방식과 결과를 함께 보여줍니다.</h2>
          </div>
        </div>

        <div className="project-list">
          {projects.map((project) => {
            const content = (
              <>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-result">{project.result}</div>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </>
            );

            const href = projectLinks[project.number];

            if (href) {
              return (
                <Link
                  key={project.number}
                  href={href}
                  className="project-row project-row-link"
                  aria-label={`${project.title} 상세 사례 보기`}
                >
                  {content}
                </Link>
              );
            }

            return (
              <article key={project.number} className="project-row">
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section id="about" className="portfolio-about">
        <div className="section-heading">
          <span>02</span>
          <div>
            <p>ABOUT</p>
            <h2>결과보다 원인을 먼저 살핍니다.</h2>
          </div>
        </div>

        <div className="about-grid">
          <p className="about-lead">
            정확한 정보를 확인하고, 사용자의 질문을 이해하며, 결과의 원인을
            다음 기획에 반영합니다.
          </p>

          <div className="about-values">
            <article>
              <span>01</span>
              <h3>User-First Writing</h3>
              <p>제품 특징보다 사용자가 실제로 궁금해하는 질문에서 시작합니다.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Accuracy First</h3>
              <p>기술 정보와 수치를 대조하여 콘텐츠의 신뢰도를 지킵니다.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Root Cause Analysis</h3>
              <p>성과와 문제의 원인을 추적하여 다음 실행에 반영합니다.</p>
            </article>
          </div>
        </div>
      </section>

      <footer id="contact" className="portfolio-footer">
        <div className="portfolio-footer-heading">
          <p>CONTACT · 03</p>
          <h2>
            Thank you
            <br />
            for reading.
          </h2>
        </div>

        <div className="portfolio-contact-card">
          <div>
            <span>NAME</span>
            <strong>JU DAHYE</strong>
          </div>
          <div>
            <span>ROLE</span>
            <strong>CONTENT MARKETING</strong>
          </div>
          <div>
            <span>EMAIL</span>
            <a href="mailto:lowknjua@gmail.com">lowknjua@gmail.com ↗</a>
          </div>
        </div>

        <p className="portfolio-footer-signature">CORE IS SINCERITY.</p>
      </footer>
    </main>
  );
}
