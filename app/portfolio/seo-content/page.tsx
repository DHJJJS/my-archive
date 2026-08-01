import Image from "next/image";
import Link from "next/link";

const processSteps = [
  {
    number: "01",
    title: "Intent Analysis",
    korean: "검색 의도 분석",
    description:
      "사용자가 실제로 입력하는 검색어와 질문을 살펴보고, 기존 콘텐츠에서 충분히 답하지 못한 정보를 찾았습니다.",
  },
  {
    number: "02",
    title: "Information Structure",
    korean: "정보 구조 설계",
    description:
      "제품 특징을 나열하기보다 핵심 답변, 사용 상황, 규격과 선택 기준이 자연스럽게 이어지도록 정보의 우선순위를 다시 설계했습니다.",
  },
  {
    number: "03",
    title: "Content Production",
    korean: "콘텐츠 제작",
    description:
      "사용자의 질문과 제품 정보를 연결하는 제목과 본문을 작성하고, 검색 결과에서 내용을 쉽게 이해할 수 있도록 구성했습니다.",
  },
  {
    number: "04",
    title: "Iteration",
    korean: "게시 후 개선",
    description:
      "조회수와 검색 노출 결과를 확인하고, 제목·본문·내부 링크 구조를 지속적으로 조정했습니다.",
  },
];

const principles = [
  {
    number: "01",
    title: "User-First Writing",
    text: "제품이 말하고 싶은 내용보다 사용자가 먼저 알고 싶은 질문에서 출발했습니다.",
  },
  {
    number: "02",
    title: "Structure Before Volume",
    text: "정보를 많이 넣는 것보다 어떤 정보를 먼저 보여줄지 결정하는 데 집중했습니다.",
  },
  {
    number: "03",
    title: "Reason Before Result",
    text: "조회수 자체보다 어떤 변화가 검색 노출과 유입을 만들었는지 추적했습니다.",
  },
];

export default function SeoContentPage() {
  return (
    <main className="case-page">
      <header className="case-header">
        <Link href="/portfolio" className="case-brand">
          CORE IS SINCERITY
        </Link>

        <nav className="case-nav" aria-label="사례 페이지 메뉴">
          <Link href="/portfolio">INDEX</Link>
          <a href="#process">PROCESS</a>
          <a href="#result">RESULT</a>
        </nav>
      </header>

      <section className="case-hero">
        <div className="case-hero-index" aria-hidden="true">
          <span>CASE 01</span>
          <span>SEO CONTENT</span>
        </div>

        <div className="case-hero-copy">
          <p className="case-kicker">
            NAVER BLOG · CONTENT STRATEGY · SEO
          </p>

          <h1>
            I don&apos;t
            <br />
            write first.
            <br />
            <em>I ask first.</em>
          </h1>

          <p className="case-hero-description">
            고객의 검색 의도를 분석하고,
            <br />
            제품 정보를 답변 중심의 콘텐츠로 재구성했습니다.
          </p>
        </div>

        <div className="case-hero-word" aria-hidden="true">
          질문
        </div>

        <div className="case-scroll-guide" aria-hidden="true">
          <span />
          SCROLL TO EXPLORE
        </div>
      </section>

      <section className="case-overview">
        <div className="case-section-label">
          <span>01</span>
          <p>OVERVIEW</p>
        </div>

        <div className="case-overview-main">
          <h2>
            제품을 설명하는 글에서,
            <br />
            질문에 답하는 콘텐츠로.
          </h2>

          <p>
            제품의 특징과 규격을 단순히 나열하는 방식으로는 사용자가 원하는
            정보를 빠르게 전달하기 어려웠습니다. 사용자가 어떤 상황에서 어떤
            질문을 검색하는지 먼저 확인하고, 그 질문에 바로 답할 수 있도록
            콘텐츠의 구조와 정보 순서를 다시 설계했습니다.
          </p>
        </div>

        <dl className="case-meta">
          <div>
            <dt>ROLE</dt>
            <dd>콘텐츠 기획·작성·운영</dd>
          </div>

          <div>
            <dt>CHANNEL</dt>
            <dd>네이버 기업 블로그</dd>
          </div>

          <div>
            <dt>FOCUS</dt>
            <dd>검색 의도·SEO·정보 구조화</dd>
          </div>

          <div>
            <dt>TOOLS</dt>
            <dd>네이버 블로그·Excel·AI</dd>
          </div>
        </dl>
      </section>

      <section className="case-question-section">
        <div className="question-statement">
          <p>THE FIRST QUESTION</p>

          <h2>
            What are
            <br />
            users actually
            <br />
            looking for?
          </h2>
        </div>

        <div className="question-list">
          <article>
            <span>01</span>
            <p>사용자는 이 제품을 어떤 상황에서 검색하는가?</p>
          </article>

          <article>
            <span>02</span>
            <p>검색 결과를 열었을 때 가장 먼저 확인하고 싶은 정보는 무엇인가?</p>
          </article>

          <article>
            <span>03</span>
            <p>기존 콘텐츠에서 충분히 설명되지 않은 부분은 무엇인가?</p>
          </article>
        </div>

        <div className="question-fragment" aria-hidden="true">
          의도
        </div>
      </section>

      <section id="process" className="case-process">
        <div className="case-section-label">
          <span>02</span>
          <p>PROCESS</p>
        </div>

        <div className="process-intro">
          <h2>
            Search intent
            <br />
            became structure.
          </h2>

          <p>
            검색어를 제목에 넣는 것만으로는 충분하지 않았습니다. 사용자가
            기대하는 답변이 제목, 도입부, 본문 구조 전체에 일관되게 이어지도록
            설계했습니다.
          </p>
        </div>

        <div className="process-list">
          {processSteps.map((step) => (
            <article key={step.number} className="process-row">
              <span className="process-number">{step.number}</span>

              <div className="process-title">
                <p>{step.title}</p>
                <h3>{step.korean}</h3>
              </div>

              <p className="process-description">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-transformation">
        <div className="transformation-heading">
          <p>CONTENT TRANSFORMATION</p>

          <h2>
            From product-first
            <br />
            to user-first.
          </h2>
        </div>

        <div className="transformation-grid">
          <article className="transformation-card">
            <div className="transformation-card-head">
              <span>BEFORE</span>
              <span>01</span>
            </div>

            <h3>제품 특징 중심</h3>

            <ul>
              <li>제품명과 규격을 먼저 설명</li>
              <li>기술 정보가 한꺼번에 제시됨</li>
              <li>사용자의 실제 질문과 연결이 약함</li>
              <li>중요한 답변을 찾기 위해 오래 읽어야 함</li>
            </ul>
          </article>

          <div className="transformation-arrow" aria-hidden="true">
            →
          </div>

          <article className="transformation-card transformation-card-after">
            <div className="transformation-card-head">
              <span>AFTER</span>
              <span>02</span>
            </div>

            <h3>검색 질문 중심</h3>

            <ul>
              <li>핵심 질문에 대한 답변을 먼저 제시</li>
              <li>사용 상황에 따라 정보를 분류</li>
              <li>선택 기준과 규격 정보를 단계적으로 설명</li>
              <li>관련 콘텐츠를 내부 링크로 연결</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="result" className="case-result">
        <div className="result-heading">
          <p>RESULT</p>

          <h2>
            The structure
            <br />
            changed.
            <br />
            <em>So did the result.</em>
          </h2>
        </div>

        <div className="result-numbers">
          <article>
            <strong>147%</strong>
            <span>월간 조회수 성장</span>
          </article>

          <article>
            <strong>TOP 10</strong>
            <span>주요 키워드 검색 노출</span>
          </article>

          <article>
            <strong>AWARD</strong>
            <span>인턴 슈퍼루키상 수상</span>
          </article>
        </div>

        <p className="result-note">
          실제 네이버 블로그 운영 데이터와 검색 결과를 기반으로 정리한
          성과입니다.
        </p>
      </section>

    <section className="evidence-section">
    <div className="case-section-label">
        <span>03</span>
        <p>EVIDENCE</p>
    </div>

    <div className="evidence-heading">
        <h2>
        The work
        <br />
        behind the numbers.
        </h2>

        <p>
        콘텐츠 발행량만 늘리는 데 그치지 않고, 검색 노출과 실제 유입 데이터를
        확인하며 제목과 정보 구조를 지속적으로 개선했습니다.
        </p>
    </div>

    <div className="evidence-gallery">
        <figure className="evidence-figure evidence-figure-featured">
        <div className="evidence-image-frame evidence-image-chart">
            <Image
            src="/images/seo/monthly-views.png"
            alt="2025년 6월부터 2026년 6월까지 네이버 블로그 월간 조회수 추이"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 90vw"
            className="evidence-image"
            />

            <span className="evidence-image-number">01</span>
        </div>

        <figcaption className="evidence-caption">
            <div>
            <span>MONTHLY VIEWS</span>
            <strong>월간 조회수 930회 기록</strong>
            </div>

            <p>
            2026년 6월 월간 조회수는 930회로 증가했습니다. 검색 의도에 맞춘
            콘텐츠와 내부 정보 구조 개선 이후 유입 변화를 지속적으로
            확인했습니다.
            </p>
        </figcaption>
        </figure>

        <div className="evidence-gallery-grid">
        <figure className="evidence-figure">
            <div className="evidence-image-frame evidence-image-mobile">
            <Image
                src="/images/seo/search-ranking.png"
                alt="농약호스 추천 검색어로 네이버 통합검색 1페이지에 노출된 세종플렉스 블로그"
                fill
                sizes="(max-width: 800px) 100vw, 45vw"
                className="evidence-image evidence-image-contain"
            />

            <span className="evidence-image-number">02</span>
            </div>

            <figcaption className="evidence-caption evidence-caption-small">
            <div>
                <span>SEARCH VISIBILITY</span>
                <strong>주요 키워드 통합검색 1페이지 노출</strong>
            </div>

            <p>
                ‘농약호스 추천’ 검색 결과에서 세종플렉스 콘텐츠가 네이버
                통합검색 첫 페이지에 노출되었습니다.
            </p>
            </figcaption>
        </figure>

        <figure className="evidence-figure">
            <div className="evidence-image-frame evidence-image-desktop">
            <Image
                src="/images/seo/post-list.png"
                alt="세종플렉스 네이버 블로그의 호스 소개 및 제품 정보 게시물 목록"
                fill
                sizes="(max-width: 800px) 100vw, 45vw"
                className="evidence-image evidence-image-contain"
            />

            <span className="evidence-image-number">03</span>
            </div>

            <figcaption className="evidence-caption evidence-caption-small">
            <div>
                <span>CONTENT OPERATION</span>
                <strong>제품·사용 상황별 콘텐츠 운영</strong>
            </div>

            <p>
                가든호스, 물호스, 제습기 배수호스, 농약호스 등 검색 목적이 다른
                주제를 분류하고 지속적으로 콘텐츠를 발행했습니다.
            </p>
            </figcaption>
        </figure>
        </div>
    </div>
    </section>
      <section className="case-principles">
        <div className="principles-heading">
          <p>WHAT THIS PROJECT SHOWS</p>

          <h2>
            Not only
            <br />
            what I made,
            <br />
            but how I think.
          </h2>
        </div>

        <div className="principles-list">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>

              <div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

        <section className="case-learning">
        <div className="learning-index">
            <span>04</span>
            <p>REFLECTION</p>
        </div>

        <div className="learning-content">
            <p className="learning-small-title">WHAT I LEARNED</p>

            <blockquote>
            좋은 콘텐츠는
            <br />
            많은 정보를 담는 글이 아니라,
            <br />
            <em>필요한 정보를 필요한 순서로 보여주는 글</em>입니다.
            </blockquote>

            <div className="learning-note">
            <span>USER-FIRST STRUCTURE</span>

            <p>
                정보의 양보다 사용자가 답을 발견하는 순서가 콘텐츠의 완성도를
                결정한다는 것을 배웠습니다.
            </p>
            </div>
        </div>
        </section>

      <nav className="case-pagination" aria-label="프로젝트 이동">
        <Link href="/portfolio" className="case-pagination-back">
          <span>←</span>
          <div>
            <small>BACK TO</small>
            <strong>PROJECT INDEX</strong>
          </div>
        </Link>

        <div className="case-pagination-next">
          <div>
            <small>NEXT CASE</small>
            <strong>B2B WEB CONTENT</strong>
          </div>
          <span>→</span>
        </div>
      </nav>
    </main>
  );
}