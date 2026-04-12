import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page home-neo">
      <Header />

      {/* Background layers */}
      <div className="neo-bg" aria-hidden="true">
        <div className="neo-grid" />
        <div className="neo-orb neo-orb-a" />
        <div className="neo-orb neo-orb-b" />
        <div className="neo-scanlines" />
        <div className="neo-noise" />
      </div>

      <main className="neo-main">
        <section className="neo-hero">
          <div className="neo-badge">
            Campus404 • Level up your coding
          </div>

          <h1 className="neo-title">
            Enter the <span className="neo-title-glow">Cyber Campus</span>
          </h1>

          <p className="neo-sub">
            Learn by exploring labs, solving missions, and unlocking new modules.
            Your dashboard is the campus map.
          </p>

          <div className="neo-cta">
            <Link to="/dashboard" className="neo-btn neo-btn-primary">
              Enter Campus
            </Link>
            <Link to="/dashboard" className="neo-btn neo-btn-ghost">
              Open Dashboard
            </Link>
          </div>

          <div className="neo-kpis" aria-label="Highlights">
            <div className="neo-kpi">
              <div className="neo-kpi-val">⚡</div>
              <div className="neo-kpi-lbl">Fast challenges</div>
            </div>
            <div className="neo-kpi">
              <div className="neo-kpi-val">🧠</div>
              <div className="neo-kpi-lbl">Learn by doing</div>
            </div>
            <div className="neo-kpi">
              <div className="neo-kpi-val">🏆</div>
              <div className="neo-kpi-lbl">Track progress</div>
            </div>
          </div>
        </section>

        <section className="neo-panels" aria-label="Features">
          <article className="neo-panel">
            <div className="neo-panel-top">
              <span className="neo-chip">LABS</span>
              <span className="neo-chip neo-chip-soft">Map View</span>
            </div>
            <h2 className="neo-panel-title">Choose your lab</h2>
            <p className="neo-panel-sub">
              Click buildings on the campus map to jump into Python, Java, and more.
            </p>
          </article>

          <article className="neo-panel">
            <div className="neo-panel-top">
              <span className="neo-chip">MISSIONS</span>
              <span className="neo-chip neo-chip-soft">Unlock</span>
            </div>
            <h2 className="neo-panel-title">Progress like a game</h2>
            <p className="neo-panel-sub">
              Complete challenges and unlock the next path. Every level counts.
            </p>
          </article>

          <article className="neo-panel">
            <div className="neo-panel-top">
              <span className="neo-chip">WORKSPACE</span>
              <span className="neo-chip neo-chip-soft">Code</span>
            </div>
            <h2 className="neo-panel-title">Code in-browser</h2>
            <p className="neo-panel-sub">
              Practice in a focused editor and ship solutions faster.
            </p>
          </article>
        </section>
      </main>
    </div>
    
  );
}