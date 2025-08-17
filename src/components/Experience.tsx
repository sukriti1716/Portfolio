import React, { useState, type CSSProperties, type FC } from "react";
import Footer from "./Footer";

type ExperienceItem = {
  title: string;
  dates: string;
  bullets: string[];
};

const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Software Development Engineer Intern at ZopSmart",
    dates: "06 Jan 2025 – 06 Jul 2025",
    bullets: [
      "Frontend development using React (Pagination, Modals, UI Responsiveness)",
      "Backend development in custom Java framework Rocket",
      "SurrealDB support (Vanilla + Repository Pattern, Docker Integration, Prometheus Metrics/Tracing)",
      "Upgraded gRPC and Protobuf dependencies",
      "Kafka security (SSL, SASL_SSL, SASL_PLAINTEXT with SCRAM mechanisms)",
      "CosmosDB migration support (Rollbacks, Locks)",
      "OpenTSDB repository support",
      "Native image compatibility testing (Neo4j, OpenTSDB)",
    ],
  },
  {
    title: "MERN Stack Intern at National Informatics Centre",
    dates: "01 May 2024 – 14 Jun 2024",
    bullets: [
      "Worked on the e-Jagriti Platform",
      "Authentication, Authorization & validation",
      "React Router Authorization",
      "Outlets",
      "JWT Authentication",
      "GeoLocation addition",
      "Handling Multi Session",
    ],
  },
  {
    title: "Android Developer Intern at Diginique Techlabs",
    dates: "12 Jun 2023 – 26 Jul 2023",
    bullets: [
      "Basic Calculator app development",
      "Implicit and Explicit Intent",
      "Different Views",
      "Constraint and Linear Layout",
      "Lifecycle implementation",
      "Creating APK",
      "Installing APK and running app on phone",
    ],
  },
];

const tokens = {
  bg: "#DFF5FF",
  panel: "#153448",
  card: "#3C5B6F",
  ink: "#ffffff",
  rim: "rgba(255,255,255,.75)",
  max: 1100,
} as const;

const sectionStyle: CSSProperties = {
  backgroundColor: tokens.bg,
  minHeight: "90dvh",
  display: "grid",
  placeItems: "center",
  padding: "1.25rem"
};

const containerStyle: CSSProperties = {
  width: "100%",
  maxWidth: `${tokens.max}px`,
  backgroundColor: tokens.panel,
  color: tokens.ink,
  borderRadius: 8,
  padding: "1.25rem",
  boxShadow: "0 6px 24px rgba(0,0,0,.15)",
};

const lightFrameStyle: CSSProperties = {
  backgroundColor: "rgba(223,245,255,.6)",
  borderRadius: 6,
  padding: "1rem",
  marginBottom: "1rem",
};

const headerStyle: CSSProperties = {
  textAlign: "center",
  marginBottom: "1rem",
  textTransform: "uppercase",
  letterSpacing: ".04em",
};

const gridStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  alignItems: "stretch",
  justifyContent: "center",
};

const titleStyle: CSSProperties = {
  textAlign: "center",
  margin: 0,
  fontSize: "1.25rem",
};

const datesStyle: CSSProperties = {
  textAlign: "center",
  margin: 0,
  fontWeight: 600,
};

const listStyle: CSSProperties = {
  margin: 0,
  paddingLeft: "1.15rem",
  lineHeight: 1.35,
  display: "grid",
  gap: ".35rem",
};

const makeCardStyle = (hover: boolean): CSSProperties => ({
  backgroundColor: tokens.card,
  color: tokens.ink,
  border: `1px solid ${tokens.rim}`,
  borderRadius: 8,
  padding: "1.1rem",
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  transition: "transform .15s ease, box-shadow .15s ease",
  transform: hover ? "translateY(-2px)" : undefined,
  boxShadow: hover ? "0 8px 22px rgba(0,0,0,.18)" : undefined,
  // Responsive wrapping without media queries:
  flex: "1 1 300px",
  maxWidth: "100%",
});

const Card: FC<{ job: ExperienceItem }> = ({ job }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <article
      role="listitem"
      style={makeCardStyle(hover)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2 style={titleStyle}>{job.title}</h2>
      <p style={datesStyle}>
        <strong>Duration:</strong> {job.dates}
      </p>
      <ul style={listStyle}>
        {job.bullets.map((b, i) => (
          <li key={`${job.title}-${i}`}>{b}</li>
        ))}
      </ul>
    </article>
  );
};

const Experience: FC = () => {
  return (
    <>
      <section style={sectionStyle} aria-labelledby="exp-heading">
        <div style={containerStyle}>
          <div style={lightFrameStyle}>
            <header style={headerStyle}>
              <h1 id="exp-heading" style={{ margin: 0, fontSize: "1.9rem" }}>
                Work Experience
              </h1>
            </header>

            <div role="list" style={gridStyle}>
              {EXPERIENCES.map((job) => (
                <Card key={job.title} job={job} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Experience;
