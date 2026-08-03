import Image from "next/image";
import Link from "next/link";
import ImageLightbox from "@/components/ImageLightbox";

const workflow = [
  {
    number: "01",
    title: "Data Research",
    korean: "제품 데이터 조사",
    description:
      "Excel 자료와 제품 정보를 대조하여 규격, 재질, 사용처 등 콘텐츠에 필요한 기초 데이터를 정리했습니다.",
  },
  {
    number: "02",
    title: "Content Architecture",
    korean: "콘텐츠 구조 설계",
    description:
      "글로벌 바이어가 제품의 특징과 규격을 빠르게 비교할 수 있도록 정보의 계층과 페이지 흐름을 설계했습니다.",
  },
  {
    number: "03",
    title: "English Copy",
    korean: "영문 콘텐츠 작성",
    description:
      "AI를 활용해 초안을 작성한 뒤, 기술 용어와 수치를 다시 검토하여 이해하기 쉽고 정확한 영문 콘텐츠로 다듬었습니다.",
  },
  {
    number: "04",
    title: "HTML / CSS",
    korean: "웹 화면 구현",
    description:
      "WordPress 환경에서 커스텀 HTML과 CSS를 활용해 반응형 규격표와 제품 콘텐츠 레이아웃을 직접 구현했습니다.",
  },
  {
    number: "05",
    title: "Quality Check",
    korean: "최적화 및 검수",
    description:
      "화면 크기별 가독성, 이미지 비율, 표의 정렬과 정보 누락 여부를 확인하며 최종 품질을 점검했습니다.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Technical Accuracy",
    text: "제품 수치와 기술 정보를 여러 자료와 대조하여 콘텐츠의 신뢰도를 확보했습니다.",
  },
  {
    number: "02",
    title: "Visual Hierarchy",
    text: "복잡한 규격 정보를 표와 구획으로 나누어 핵심 정보를 빠르게 찾도록 설계했습니다.",
  },
  {
    number: "03",
    title: "Tool Agility",
    text: "익숙하지 않았던 WordPress, HTML/CSS와 AI 도구를 빠르게 학습해 실무에 적용했습니다.",
  },
];

export default function B2BWebContentPage() {
  return (
    <main className="b2b-case">
      <header className="b2b-header">
        <Link href="/portfolio" className="b2b-brand">
          CORE IS SINCERITY
        </Link>

        <nav className="b2b-nav" aria-label="B2B 콘텐츠 사례 메뉴">
          <Link href="/portfolio">INDEX</Link>
          <a href="#workflow">WORKFLOW</a>
          <a href="#output">OUTPUT</a>
        </nav>
      </header>

      <section className="b2b-hero">
        <div className="b2b-hero-code" aria-hidden="true">
          <span>CASE 02</span>
          <span>B2B WEB CONTENT</span>
        </div>

        <div className="b2b-hero-copy">
          <p className="b2b-kicker">
            GLOBAL WEBSITE · TECHNICAL CONTENT · WORDPRESS
          </p>

          <h1>
            Accuracy
            <br />
            builds
            <br />
            <em>trust.</em>
          </h1>

          <p className="b2b-hero-description">
            복잡한 제품 정보와 규격을
            <br />
            글로벌 바이어가 이해하기 쉬운 웹 콘텐츠로 구조화했습니다.
          </p>
        </div>

        <div className="b2b-outline-word" aria-hidden="true">
          정확
        </div>

        <div className="b2b-coordinate" aria-hidden="true">
          <span>X 02</span>
          <span>Y 1982—2026</span>
        </div>
      </section>

      <section className="b2b-context">
        <div className="b2b-section-index">
          <span>01</span>
          <p>CONTEXT</p>
        </div>

        <div className="b2b-context-copy">
          <h2>
            Technical information
            <br />
            is part of the brand.
          </h2>

          <p>
            글로벌 B2B 홈페이지에서 제품 정보는 단순한 설명이 아니라
            기업의 전문성과 신뢰도를 판단하는 근거가 됩니다. 제품 규격과
            기술 정보를 정확히 확인하고, 사용자가 필요한 내용을 빠르게
            비교할 수 있도록 페이지 구조를 다시 설계했습니다.
          </p>
        </div>

        <dl className="b2b-meta">
          <div>
            <dt>ROLE</dt>
            <dd>콘텐츠 조사·기획·구현</dd>
          </div>

          <div>
            <dt>PLATFORM</dt>
            <dd>WordPress</dd>
          </div>

          <div>
            <dt>LANGUAGE</dt>
            <dd>English</dd>
          </div>

          <div>
            <dt>TOOLS</dt>
            <dd>Excel · AI · HTML · CSS</dd>
          </div>
        </dl>
      </section>

      <section className="b2b-problem">
        <div className="b2b-problem-copy">
          <p>THE PROBLEM</p>

          <h2>
            Data was present.
            <br />
            Understanding
            <br />
            was not.
          </h2>
        </div>

        <div className="b2b-problem-grid">
          <article>
            <span>01</span>
            <h3>Scattered Information</h3>
            <p>
              제품 규격과 특징이 여러 자료에 흩어져 있어 정보를 한눈에
              확인하기 어려웠습니다.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Complex Specifications</h3>
            <p>
              내경, 외경, 길이와 재질 등 다양한 수치를 일반 문장만으로
              전달하기에는 한계가 있었습니다.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Global Readability</h3>
            <p>
              해외 고객이 기술 정보를 오해하지 않도록 용어와 문장 구조의
              정확성이 필요했습니다.
            </p>
          </article>
        </div>
      </section>

      <section id="workflow" className="b2b-workflow">
        <div className="b2b-section-index">
          <span>02</span>
          <p>WORKFLOW</p>
        </div>

        <div className="b2b-workflow-heading">
          <h2>
            From raw data
            <br />
            to usable content.
          </h2>

          <p>
            조사, 구조화, 작성, 구현과 검수를 하나의 흐름으로 연결해
            기술적 정확성과 사용자 편의성을 함께 확보했습니다.
          </p>
        </div>

        <div className="b2b-workflow-list">
          {workflow.map((step) => (
            <article key={step.number} className="b2b-workflow-row">
              <span className="b2b-workflow-number">{step.number}</span>

              <div className="b2b-workflow-title">
                <p>{step.title}</p>
                <h3>{step.korean}</h3>
              </div>

              <p className="b2b-workflow-description">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="b2b-data-section">
        <div className="b2b-data-heading">
          <p>INFORMATION ARCHITECTURE</p>

          <h2>
            Every number
            <br />
            needs context.
          </h2>
        </div>

        <div className="b2b-specimen">
          <div className="b2b-specimen-header">
            <span>PRODUCT SPECIFICATION</span>
            <span>UNIT · MM / M</span>
          </div>

          <div className="b2b-table">
            <div className="b2b-table-row b2b-table-head">
              <span>SIZE</span>
              <span>INNER Ø</span>
              <span>OUTER Ø</span>
              <span>LENGTH</span>
              <span>APPLICATION</span>
            </div>

            <div className="b2b-table-row">
              <strong>01</strong>
              <span>13 mm</span>
              <span>18 mm</span>
              <span>50 m</span>
              <span>Agricultural spraying</span>
            </div>

            <div className="b2b-table-row">
              <strong>02</strong>
              <span>16 mm</span>
              <span>22 mm</span>
              <span>50 m</span>
              <span>Water transfer</span>
            </div>

            <div className="b2b-table-row">
              <strong>03</strong>
              <span>19 mm</span>
              <span>25 mm</span>
              <span>100 m</span>
              <span>Industrial use</span>
            </div>
          </div>

          <p className="b2b-specimen-note">
            위 표는 정보 구조와 화면 연출을 보여주기 위한 예시입니다.
            실제 공개 시에는 검수된 제품 규격으로 교체합니다.
          </p>
        </div>
      </section>

      <section className="b2b-transformation">
        <div className="b2b-transformation-title">
          <p>DESIGN DECISION</p>

          <h2>
            Not decoration.
            <br />
            <em>Navigation.</em>
          </h2>
        </div>

        <div className="b2b-decision-list">
          <article>
            <span>01</span>
            <div>
              <h3>정보를 구획으로 나눴습니다.</h3>
              <p>
                제품 소개, 특징, 규격과 활용 분야를 분리해 사용자가 원하는
                정보로 바로 이동할 수 있도록 했습니다.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>
            <div>
              <h3>비교가 필요한 정보는 표로 만들었습니다.</h3>
              <p>
                여러 규격을 문장 속에 나열하지 않고, 행과 열을 이용해 차이를
                빠르게 파악하도록 구성했습니다.
              </p>
            </div>
          </article>

          <article>
            <span>03</span>
            <div>
              <h3>모바일에서도 정보 순서를 유지했습니다.</h3>
              <p>
                작은 화면에서도 표와 본문의 우선순위가 무너지지 않도록
                반응형 레이아웃을 점검했습니다.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="output" className="b2b-output">
        <div className="b2b-section-index">
          <span>03</span>
          <p>OUTPUT</p>
        </div>

        <div className="b2b-output-heading">
          <h2>
            Designed for
            <br />
            clarity.
          </h2>

          <p>
            실제 홈페이지 화면과 규격표, 모바일 페이지 이미지를 이 영역에
            배치할 예정입니다.
          </p>
        </div>

<div className="b2b-output-gallery">
  {/* 01. 글로벌 홈페이지 */}
  <figure className="b2b-output-item b2b-output-wide">
    <div className="b2b-output-image-frame b2b-output-homepage">
      <ImageLightbox
        src="/images/b2b/global-homepage.png"
        alt="세종플렉스 글로벌 영문 홈페이지 전체 화면"
        priority
        className="global-homepage-lightbox"
      />

      <span className="b2b-output-number">01</span>
    </div>

    <figcaption className="b2b-output-caption">
      <div>
        <span>GLOBAL WEBSITE</span>
        <strong>브랜드와 제품 정보를 하나의 흐름으로 구성</strong>
      </div>

      <p>
        회사 소개, 생산 역량, 제품군과 이동 경로를 한 페이지 안에서
        자연스럽게 이해할 수 있도록 글로벌 홈페이지 구조를 설계했습니다.
      </p>
    </figcaption>
  </figure>

  {/* 02. 제품 콘텐츠 */}
  <figure className="b2b-output-item">
    <div className="b2b-output-image-frame b2b-output-product">
      <Image
        src="/images/b2b/product-content.png"
        alt="플래티넘 에어호스의 제품 특징과 핵심 정보를 구성한 영문 웹 콘텐츠"
        fill
        sizes="(max-width: 850px) 100vw, 45vw"
        className="b2b-output-image b2b-output-image-contain"
      />

      <span className="b2b-output-number">02</span>
    </div>

    <figcaption className="b2b-output-caption b2b-output-caption-small">
      <div>
        <span>PRODUCT CONTENT</span>
        <strong>제품 특징과 핵심 정보를 한 화면에 구조화</strong>
      </div>

      <p>
        제품 메시지, 사용 환경, 구조와 활용 분야를 시각적 우선순위에 따라
        배치하고, 글로벌 고객이 핵심 정보를 빠르게 이해하도록 영문 콘텐츠를
        구성했습니다.
      </p>
    </figcaption>
  </figure>

  {/* 03. 기술 규격표 */}
  <figure className="b2b-output-item">
    <div className="b2b-output-image-frame b2b-output-specification">
      <Image
        src="/images/b2b/specification-table.png"
        alt="플래티넘 에어호스 크기와 압력 정보를 정리한 영문 기술 규격표"
        fill
        sizes="(max-width: 850px) 100vw, 45vw"
        className="b2b-output-image b2b-output-image-contain"
      />

      <span className="b2b-output-number">03</span>
    </div>

    <figcaption className="b2b-output-caption b2b-output-caption-small">
      <div>
        <span>SPECIFICATION TABLE</span>
        <strong>제품 수치를 비교하기 쉬운 규격표로 구현</strong>
      </div>

      <p>
        내경, 외경, 포장 단위, 사용 압력과 파열 압력을 표로 정리하고,
        단위와 예외 사항을 함께 표시해 정보 해석의 오류를 줄였습니다.
      </p>
    </figcaption>
  </figure>
</div>
      </section>

      <section className="b2b-capabilities">
        <div className="b2b-capabilities-heading">
          <p>WHAT THIS PROJECT SHOWS</p>

          <h2>
            Accuracy,
            <br />
            structure,
            <br />
            adaptability.
          </h2>
        </div>

        <div className="b2b-capabilities-list">
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>

              <div>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="b2b-reflection">
        <div className="b2b-reflection-index">
          <span>04</span>
          <p>REFLECTION</p>
        </div>

        <div className="b2b-reflection-copy">
          <p className="b2b-reflection-label">WHAT I LEARNED</p>

          <blockquote>
            기술 콘텐츠의 신뢰는
            <br />
            전문적인 표현보다,
            <br />
            <em>검증된 정보를 이해하기 쉽게 전달하는 데서 시작됩니다.</em>
          </blockquote>

          <div className="b2b-reflection-note">
            <span>ACCURACY FIRST</span>

            <p>
              새로운 도구를 사용하는 것보다 중요한 것은, 그 도구를 통해
              전달되는 정보가 정확한지 끝까지 확인하는 태도였습니다.
            </p>
          </div>
        </div>
      </section>

      <nav className="b2b-pagination" aria-label="프로젝트 이동">
        <Link
          href="/portfolio/seo-content"
          className="b2b-pagination-item"
        >
          <span>←</span>

          <div>
            <small>PREVIOUS CASE</small>
            <strong>SEO CONTENT</strong>
          </div>
        </Link>

        <Link href="/portfolio/freelance-content" className="b2b-pagination-item">
          <div>
            <small>READ NEXT · 03</small>
            <strong>FREELANCE CONTENT</strong>
          </div>

          <span>→</span>
        </Link>
      </nav>
    </main>
  );
}