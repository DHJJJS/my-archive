import Link from "next/link";

const timeline = [
  {
    number: "01",
    phase: "INTERNSHIP",
    title: "기업 콘텐츠 운영 업무를 담당했습니다.",
    description:
      "제품과 사용 상황을 조사하고, 네이버 블로그와 영문 WordPress 콘텐츠를 기획·작성했습니다.",
  },
  {
    number: "02",
    phase: "PROCESS",
    title: "조사부터 게시 후 개선까지 작업 흐름을 정리했습니다.",
    description:
      "검색 의도, 제품 정보와 콘텐츠 구조를 함께 검토하고 게시 이후 결과도 확인했습니다.",
  },
  {
    number: "03",
    phase: "PROPOSAL",
    title: "인턴 종료 후 후속 업무를 제안받았습니다.",
    description:
      "기존 업무와 연결되는 기업 블로그 콘텐츠 제작 프로젝트를 별도로 진행하게 되었습니다.",
  },
  {
    number: "04",
    phase: "FREELANCE",
    title: "기업 블로그 콘텐츠 50건을 맡았습니다.",
    description:
      "주제 조사, 콘텐츠 기획, 원고 작성과 최종 검수를 포함한 제작 전 과정을 담당했습니다.",
  },
];

const responsibilities = [
  {
    number: "01",
    title: "Research",
    korean: "자료 조사",
    description:
      "제품 정보, 규격, 사용 환경과 관련 검색어를 확인해 콘텐츠 제작에 필요한 근거를 정리했습니다.",
  },
  {
    number: "02",
    title: "Planning",
    korean: "주제 및 구조 기획",
    description:
      "콘텐츠 간 중복을 줄이고, 사용자가 실제로 궁금해할 주제와 정보 순서를 설계했습니다.",
  },
  {
    number: "03",
    title: "Production",
    korean: "원고 제작",
    description:
      "기업의 제품과 서비스를 사용자의 관심과 연결하는 정보형 콘텐츠를 작성했습니다.",
  },
  {
    number: "04",
    title: "Review",
    korean: "품질 및 일정 관리",
    description:
      "여러 건의 콘텐츠에서도 표현과 정보 기준이 흔들리지 않도록 작업 흐름을 정리하고 검수했습니다.",
  },
];

const workflow = [
  ["INPUT", "주제·제품 자료", "제품 정보, 판매 자료와 기존 콘텐츠 확인"],
  ["RESEARCH", "검색 의도 조사", "질문, 키워드와 경쟁 콘텐츠 검토"],
  ["STRUCTURE", "정보 순서 설계", "핵심 답변과 세부 정보의 우선순위 결정"],
  ["PRODUCTION", "콘텐츠 작성", "기업 문체에 맞춘 본문과 제목 제작"],
  ["REVIEW", "정보 검수", "규격, 표현, 중복과 누락 여부 확인"],
  ["DELIVERY", "최종 전달", "일정에 맞춰 결과물 정리 및 제출"],
];

export default function FreelanceContentPage() {
  return (
    <main className="freelance-case">
      <header className="freelance-header">
        <Link href="/portfolio" className="freelance-brand">
          CORE IS SINCERITY
        </Link>

        <nav className="freelance-nav" aria-label="프리랜서 사례 메뉴">
          <Link href="/portfolio">INDEX</Link>
          <a href="#timeline">TIMELINE</a>
          <a href="#scope">SCOPE</a>
        </nav>
      </header>

      <section className="freelance-hero">
        <div className="freelance-hero-index" aria-hidden="true">
          <span>CASE 03</span>
          <span>FREELANCE CONTENT</span>
        </div>

        <div className="freelance-hero-copy">
          <p className="freelance-kicker">
            INTERNSHIP · CONTENT OPERATION · FREELANCE
          </p>

          <h1>
            From internship
            <br />
            to continued
            <br />
            <em>collaboration.</em>
          </h1>

          <p className="freelance-hero-description">
            인턴 기간의 콘텐츠 운영 경험을 바탕으로,
            <br />
            기업 블로그 50건의 후속 프로젝트를 맡았습니다.
          </p>
        </div>

        <div className="freelance-hero-number" aria-hidden="true">
          50
        </div>

        <div className="freelance-document-mark" aria-hidden="true">
          <span>DOCUMENT 03</span>
          <span>STATUS · CONTINUED</span>
        </div>
      </section>

      <section className="freelance-overview">
        <div className="freelance-section-index">
          <span>01</span>
          <p>OVERVIEW</p>
        </div>

        <div className="freelance-overview-copy">
          <h2>
            The work continued
            <br />
            after the internship.
          </h2>

          <p>
            인턴으로 근무하며 제품 조사, 주제 기획, 원고 작성과 게시 후 개선을
            담당했습니다. 인턴 종료 후에는 동일한 기업의 블로그 콘텐츠 50건을
            별도의 프로젝트로 이어서 수행했습니다.
          </p>
        </div>

        <dl className="freelance-meta">
          <div>
            <dt>TYPE</dt>
            <dd>프리랜서 콘텐츠 프로젝트</dd>
          </div>
          <div>
            <dt>SCOPE</dt>
            <dd>기업 블로그 포스팅 50건</dd>
          </div>
          <div>
            <dt>ROLE</dt>
            <dd>조사·기획·작성·검수</dd>
          </div>
          <div>
            <dt>CHANNEL</dt>
            <dd>기업 네이버 블로그</dd>
          </div>
        </dl>
      </section>

      <section className="freelance-transition">
        <p>PROJECT TRANSITION</p>

        <div className="freelance-transition-line">
          <strong>INTERNSHIP</strong>
          <span aria-hidden="true">→</span>
          <strong>50-POST PROJECT</strong>
        </div>

        <p className="freelance-transition-note">
          기존 업무에서 사용한 콘텐츠 제작 방식이 더 큰 업무 범위로 이어졌습니다.
        </p>
      </section>

      <section id="timeline" className="freelance-timeline">
        <div className="freelance-section-index">
          <span>02</span>
          <p>TIMELINE</p>
        </div>

        <div className="freelance-section-heading">
          <h2>How the scope expanded.</h2>
          <p>
            프리랜서 프로젝트는 별개의 이야기가 아니라, 인턴 기간에 수행한
            콘텐츠 업무가 확장된 결과였습니다.
          </p>
        </div>

        <div className="freelance-timeline-list">
          {timeline.map((item) => (
            <article key={item.number} className="freelance-timeline-row">
              <span className="freelance-timeline-number">{item.number}</span>
              <p className="freelance-timeline-phase">{item.phase}</p>
              <div className="freelance-timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="freelance-number-section">
        <div className="freelance-number-copy">
          <p>PROJECT SCALE</p>
          <strong>50</strong>
          <h2>planned, written and reviewed.</h2>
        </div>

        <div className="freelance-number-notes">
          <article>
            <span>01</span>
            <p>각 주제에 필요한 제품 정보와 검색 의도를 조사했습니다.</p>
          </article>
          <article>
            <span>02</span>
            <p>콘텐츠끼리 중복되지 않도록 주제와 정보 범위를 나눴습니다.</p>
          </article>
          <article>
            <span>03</span>
            <p>원고 작성 후 수치, 표현과 정보 누락 여부를 검수했습니다.</p>
          </article>
        </div>
      </section>

      <section id="scope" className="freelance-scope">
        <div className="freelance-section-index">
          <span>03</span>
          <p>SCOPE OF WORK</p>
        </div>

        <div className="freelance-section-heading">
          <h2>More than writing.</h2>
          <p>
            주제 선정부터 자료 조사, 정보 구조 설계, 원고 작성과 최종 검수까지
            콘텐츠 제작 전 과정을 담당했습니다.
          </p>
        </div>

        <div className="freelance-scope-list">
          {responsibilities.map((item) => (
            <article key={item.number} className="freelance-scope-row">
              <span className="freelance-scope-number">{item.number}</span>
              <div className="freelance-scope-title">
                <p>{item.title}</p>
                <h3>{item.korean}</h3>
              </div>
              <p className="freelance-scope-description">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="freelance-system">
        <div className="freelance-system-heading">
          <p>WORKFLOW</p>
          <h2>How I worked.</h2>
        </div>

        <ol className="freelance-system-list">
          {workflow.map(([label, title, description], index) => (
            <li key={label}>
              <span className="freelance-system-step">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p>{label}</p>
                <h3>{title}</h3>
                <span>{description}</span>
              </div>
              {index < workflow.length - 1 && (
                <span className="freelance-system-arrow" aria-hidden="true">
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="freelance-evidence">
        <div className="freelance-section-index">
          <span>04</span>
          <p>EVIDENCE</p>
        </div>

        <div className="freelance-section-heading">
          <h2>Work records.</h2>
          <p>
            계약 내용은 개인정보와 회사 정보를 가린 뒤, 실제 작업 목록과 콘텐츠
            예시를 중심으로 추가할 예정입니다.
          </p>
        </div>

        <div className="freelance-evidence-grid">
          <figure className="freelance-evidence-item freelance-evidence-wide">
            <div className="freelance-evidence-placeholder">
              <span>01</span>
              <p>PROJECT OVERVIEW</p>
              <small>PROJECT SUMMARY</small>
            </div>
            <figcaption>인턴 종료 후 후속 프로젝트로 이어진 업무 기록</figcaption>
          </figure>

          <figure className="freelance-evidence-item">
            <div className="freelance-evidence-placeholder freelance-evidence-square">
              <span>02</span>
              <p>CONTENT SAMPLE</p>
              <small>POST EXAMPLE</small>
            </div>
            <figcaption>조사와 정보 구조화를 바탕으로 제작한 콘텐츠 예시</figcaption>
          </figure>

          <figure className="freelance-evidence-item">
            <div className="freelance-evidence-placeholder freelance-evidence-square">
              <span>03</span>
              <p>WORK LIST</p>
              <small>CONTENT MANAGEMENT</small>
            </div>
            <figcaption>주제와 진행 상태를 정리한 작업 목록</figcaption>
          </figure>
        </div>
      </section>

      <section className="freelance-reflection">
        <div className="freelance-reflection-index">
          <span>05</span>
          <p>REFLECTION</p>
        </div>

        <div className="freelance-reflection-copy">
          <p>WHAT I LEARNED</p>
          <blockquote>
            여러 건의 콘텐츠를 맡으며,
            <br />
            <em>반복 가능한 작업 방식의 필요성을 배웠습니다.</em>
          </blockquote>
          <p className="freelance-reflection-note">
            주제와 수량이 늘어나도 품질을 유지하려면 조사, 작성과 검수 기준을
            먼저 정리해야 했습니다.
          </p>
        </div>
      </section>

      <nav className="freelance-pagination" aria-label="프로젝트 이동">
        <Link
          href="/portfolio/b2b-web-content"
          className="freelance-pagination-item"
        >
          <span>←</span>
          <div>
            <small>PREVIOUS CASE</small>
            <strong>B2B WEB CONTENT</strong>
          </div>
        </Link>

        <Link href="/portfolio" className="freelance-pagination-item">
          <div>
            <small>BACK TO</small>
            <strong>PROJECT INDEX</strong>
          </div>
          <span>→</span>
        </Link>
      </nav>
    </main>
  );
}
