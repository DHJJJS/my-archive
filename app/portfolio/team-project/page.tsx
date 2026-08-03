import Image from "next/image";
import Link from "next/link";

const roles = [
  {
    number: "01",
    title: "Tool Adaptation",
    korean: "새로운 도구의 실무 적용",
    text: "익숙하지 않았던 Unreal Engine의 필요한 기능을 찾아 익히고, 실제 맵 제작에 적용했습니다.",
  },
  {
    number: "02",
    title: "Environment Design",
    korean: "공간과 동선 구성",
    text: "전투 구역, 이동 경로와 점령 지점이 자연스럽게 연결되도록 맵을 구성했습니다.",
  },
  {
    number: "03",
    title: "Experience Check",
    korean: "전체 플레이 흐름 확인",
    text: "팀원이 구현한 전투·스킬·점령 기능이 실제 공간 안에서 자연스럽게 작동하는지 확인했습니다.",
  },
  {
    number: "04",
    title: "Team Coordination",
    korean: "진행 상황 조율",
    text: "역할이 다른 팀원의 작업 상태와 변경 사항을 공유하고, 맵과 기능의 일정이 어긋나지 않도록 조정했습니다.",
  },
];

const process = [
  {
    number: "01",
    label: "LEARN",
    title: "필요한 기능부터 찾아 익혔습니다.",
    text: "프로그램 전체를 먼저 공부하기보다, 맵 제작에 필요한 기능을 찾고 직접 적용하며 사용법을 익혔습니다.",
  },
  {
    number: "02",
    label: "DESIGN",
    title: "전투와 이동이 이어지는 공간을 구성했습니다.",
    text: "이동 경로, 교전 구역과 점령 지점이 하나의 흐름으로 연결되도록 맵을 제작했습니다.",
  },
  {
    number: "03",
    label: "CHECK",
    title: "맵과 기능이 실제 플레이에서 맞물리는지 확인했습니다.",
    text: "팀원이 구현한 전투·스킬·점령 기능을 맵 안에서 확인하고 필요한 변경 사항을 공유했습니다.",
  },
  {
    number: "04",
    label: "CONNECT",
    title: "서로 다른 작업을 하나의 일정과 결과물로 연결했습니다.",
    text: "진행 상황과 수정 내용을 정리하고, 역할별 작업이 충돌하지 않도록 순서와 일정을 조율했습니다.",
  },
];

const takeaways = [
  {
    number: "01",
    title: "Tool Adaptation",
    text: "처음 사용하는 도구도 목적에 필요한 기능을 찾아 실제 결과물에 적용했습니다.",
  },
  {
    number: "02",
    title: "Whole-View Thinking",
    text: "개별 작업뿐 아니라 기능, 공간과 사용자 흐름이 어떻게 연결되는지 확인했습니다.",
  },
  {
    number: "03",
    title: "Cross-Role Communication",
    text: "역할이 다른 팀원과 진행 상황과 변경 사항을 공유하며 하나의 결과물로 조율했습니다.",
  },
];

export default function TeamProjectPage() {
  return (
    <main className="team-case">
      <header className="team-header">
        <Link href="/portfolio" className="team-brand">
          CORE IS SINCERITY
        </Link>

        <nav className="team-nav" aria-label="팀 프로젝트 메뉴">
          <Link href="/portfolio">INDEX</Link>
          <a href="#role">ROLE</a>
          <a href="#process">PROCESS</a>
        </nav>
      </header>

      <section className="team-hero">
        <div className="team-hero-index" aria-hidden="true">
          <span>CASE 04</span>
          <span>TEAM PROJECT</span>
        </div>

        <div className="team-hero-copy">
          <p className="team-kicker">
            TOOL ADAPTATION · MAP DESIGN · TEAM COORDINATION
          </p>

          <h1>
            Different roles.
            <br />
            One shared
            <br />
            <em>experience.</em>
          </h1>

          <p className="team-hero-description">
            익숙하지 않았던 Unreal Engine을 프로젝트 안에서 익혀 맵을 구성하고,
            <br />
            역할이 다른 팀원의 작업이 하나의 플레이 경험으로 이어지도록 조율했습니다.
          </p>
        </div>

        <div className="team-hero-outline" aria-hidden="true">
          연결
        </div>

        <div className="team-hero-meta" aria-hidden="true">
          <span>2025.03—04</span>
          <span>TEAM PROJECT</span>
        </div>
      </section>

      <section className="team-overview">
        <div className="team-section-index">
          <span>01</span>
          <p>OVERVIEW</p>
        </div>

        <div className="team-overview-copy">
          <h2>
            My role was
            <br />
            to learn,
            <br />
            shape and connect.
          </h2>

          <p className="team-overview-lead">
            새로운 도구를 빠르게 익혀 맡은 작업을 수행하고,
            <br />
            <strong>그 결과가 팀 전체의 흐름과 연결되는 지점을 확인했습니다.</strong>
          </p>

          <p className="team-overview-body">
            Unreal Engine을 처음 사용하는 단계에서 필요한 기능을 직접 찾아가며
            전투 공간과 이동 동선을 구성했습니다. 동시에 팀원의 기능 개발 진행
            상황을 공유받아 맵과 기능이 맞물리는 지점을 확인하고, 팀장으로서
            일정과 변경 사항을 조율했습니다. 기능 구현은 일부 수정과 지원
            범위에서 참여했습니다.
          </p>
        </div>

        <dl className="team-meta">
          <div>
            <dt>PROJECT</dt>
            <dd>UNDERGROUND · 3:3 FPS 점령전</dd>
          </div>

          <div>
            <dt>PERIOD</dt>
            <dd>2025.03 — 2025.04</dd>
          </div>

          <div>
            <dt>PRIMARY ROLE</dt>
            <dd>맵 디자인·팀 조율</dd>
          </div>

          <div>
            <dt>TOOLS</dt>
            <dd>Unreal Engine · GitHub · Notion</dd>
          </div>
        </dl>
      </section>

      <section id="role" className="team-role">
        <div className="team-role-heading">
          <p>MY ROLE</p>

          <h2>
            What I
            <br />
            actually did.
          </h2>
        </div>

        <div className="team-role-list">
          {roles.map((role) => (
            <article key={role.number}>
              <span className="team-role-number">{role.number}</span>

              <div className="team-role-title">
                <p>{role.title}</p>
                <h3>{role.korean}</h3>
              </div>

              <p className="team-role-text">{role.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="team-project-structure">
        <div className="team-structure-heading">
          <p>WHAT WE BUILT</p>

          <h2>
            One game,
            <br />
            several systems.
          </h2>
        </div>

        <div className="team-structure-grid">
          <article>
            <span>01</span>
            <strong>3 Roles</strong>
            <p>탱커·딜러·힐러 역할과 고유 능력</p>
          </article>

          <article>
            <span>02</span>
            <strong>AI Support</strong>
            <p>적 탐지와 아군 지원 행동</p>
          </article>

          <article>
            <span>03</span>
            <strong>Capture Mode</strong>
            <p>점령 게이지와 승리 조건</p>
          </article>

          <article>
            <span>04</span>
            <strong>Realtime UI</strong>
            <p>체력·탄창·스킬·점령 진행률 표시</p>
          </article>
        </div>

        <p className="team-structure-note">
          위 기능은 팀 전체가 함께 제작한 결과이며, 개인 구현 범위와는 구분해 소개합니다.
        </p>
      </section>

      <section className="team-statement">
        <p>PROJECT APPROACH</p>

        <blockquote>
          Learning the tool
          <br />
          was only the start.
          <br />
          <em>The work had to connect.</em>
        </blockquote>

        <div className="team-statement-note">
          <span>WORKING METHOD</span>
          <p>LEARN · DESIGN · CHECK · COORDINATE</p>
        </div>
      </section>

      <section id="process" className="team-process">
        <div className="team-section-index">
          <span>02</span>
          <p>PROCESS</p>
        </div>

        <div className="team-process-heading">
          <h2>
            From a new tool
            <br />
            to one shared
            <br />
            experience.
          </h2>

          <p>
            필요한 기능을 찾아 익히는 것에서 시작해, 실제 공간을 만들고,
            팀원이 구현한 기능과 연결하며 하나의 결과물로 완성했습니다.
          </p>
        </div>

        <div className="team-process-list">
          {process.map((item) => (
            <article key={item.number}>
              <span className="team-process-number">{item.number}</span>

              <div className="team-process-label">
                <p>{item.label}</p>
                <span />
              </div>

              <div className="team-process-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="team-output">
        <div className="team-section-index">
          <span>03</span>
          <p>OUTPUT</p>
        </div>

        <div className="team-output-heading">
          <h2>
            Space,
            <br />
            play and
            <br />
            planning.
          </h2>

          <p>
            전체 맵 캡처 대신 공간의 구조를 단순화한 다이어그램과 실제 플레이
            화면, 프로젝트 문서를 함께 배치해 설계와 결과를 보여줍니다.
          </p>
        </div>

        <div className="team-level-diagram" aria-label="게임 맵 동선 개념도">
          <div className="team-level-diagram-head">
            <span>LEVEL FLOW DIAGRAM</span>
            <span>SIMPLIFIED VIEW</span>
          </div>

          <div className="team-level-map">
            <div className="team-map-node team-map-spawn team-map-spawn-a">
              <span>ALLY SPAWN</span>
              <small>PLAYER + AI TEAM</small>
            </div>

            <div className="team-map-route team-map-route-a">
              <span>MOVEMENT ROUTE</span>
            </div>

            <div className="team-map-node team-map-center">
              <span>CAPTURE POINT</span>
              <small>MAIN COMBAT AREA</small>
            </div>

            <div className="team-map-route team-map-route-b">
              <span>MOVEMENT ROUTE</span>
            </div>

            <div className="team-map-node team-map-spawn team-map-spawn-b">
              <span>ENEMY SPAWN</span>
              <small>AI TEAM</small>
            </div>

            <div className="team-map-side team-map-side-a">
              <span>SIDE ROUTE</span>
            </div>

            <div className="team-map-side team-map-side-b">
              <span>SIDE ROUTE</span>
            </div>
          </div>

          <p className="team-level-caption">
            실제 맵의 정확한 평면도가 아니라, 양쪽 진영에서 중앙 점령 구역으로
            이동하는 플레이 흐름을 단순화한 개념도입니다.
          </p>
        </div>

        <div className="team-output-gallery team-output-gallery-real">
          <figure className="team-output-main">
            <div className="team-output-image-frame team-output-gameplay-main">
              <Image
                src="/images/team/gameplay-main.png"
                alt="UNDERGROUND 게임의 전투 공간과 팀 플레이 장면"
                fill
                priority
                sizes="(max-width: 850px) 100vw, 90vw"
                className="team-output-image"
              />
              <span className="team-output-image-number">01</span>
            </div>

            <figcaption>
              <strong>Gameplay</strong>
              <span>직접 구성한 공간에서 전투와 이동이 이루어지는 장면</span>
            </figcaption>
          </figure>

          <figure>
            <div className="team-output-image-frame team-output-gameplay-alt">
              <Image
                src="/images/team/gameplay-alt.png"
                alt="UNDERGROUND 게임 맵의 다른 구역과 플레이 화면"
                fill
                sizes="(max-width: 850px) 100vw, 45vw"
                className="team-output-image"
              />
              <span className="team-output-image-number">02</span>
            </div>

            <figcaption>
              <strong>Level View</strong>
              <span>다른 구역에서 확인한 공간의 규모와 이동 흐름</span>
            </figcaption>
          </figure>

          <figure>
            <div className="team-output-image-frame team-output-document">
              <Image
                src="/images/team/game-design-document.png"
                alt="UNDERGROUND 게임 개요와 직업 시스템을 정리한 프로젝트 문서"
                fill
                sizes="(max-width: 850px) 100vw, 45vw"
                className="team-output-image team-output-image-contain"
              />
              <span className="team-output-image-number">03</span>
            </div>

            <figcaption>
              <strong>Game Design Document</strong>
              <span>게임 구조와 직업 시스템을 정리한 프로젝트 문서</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="team-learning">
        <div className="team-learning-heading">
          <p>WHAT THIS PROJECT SHOWS</p>

          <h2>
            Learn,
            <br />
            see the whole,
            <br />
            connect.
          </h2>
        </div>

        <div className="team-learning-list">
          {takeaways.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="team-reflection">
        <div className="team-reflection-index">
          <span>04</span>
          <p>REFLECTION</p>
        </div>

        <div className="team-reflection-copy">
          <p>WHAT I LEARNED</p>

          <blockquote>
            새로운 도구를 익히는 것만으로는 충분하지 않았습니다.
            <br />
            <em>각자의 작업이 하나의 흐름으로 연결되어야 했습니다.</em>
          </blockquote>

          <div className="team-reflection-note">
            <span>ADAPT AND CONNECT</span>

            <p>
              이 경험을 통해 필요한 도구를 빠르게 익히는 능력과, 역할이 다른
              사람의 작업을 전체 결과물 안에서 조율하는 능력을 함께 배웠습니다.
            </p>
          </div>
        </div>
      </section>

      <nav className="team-pagination" aria-label="프로젝트 이동">
        <Link
          href="/portfolio/freelance-content"
          className="team-pagination-item"
        >
          <span>←</span>

          <div>
            <small>PREVIOUS CASE</small>
            <strong>FREELANCE CONTENT</strong>
          </div>
        </Link>

<Link href="/portfolio/contact" className="team-pagination-item">
  <div>
    <small>FINAL PAGE</small>
    <strong>CONTACT</strong>
  </div>

  <span>→</span>
</Link>
      </nav>
    </main>
  );
}
