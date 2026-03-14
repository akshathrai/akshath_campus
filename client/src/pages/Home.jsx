import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home(){
  return(
    <div className="home-page">

      <Header />

      {/* HERO SECTION */}

      <section className="hero">

        <h1 className="hero-title">
          Welcome to <span>Campus404</span>
        </h1>

        <p className="hero-sub">
          Learn coding by exploring a virtual campus.
          Enter labs, solve challenges, and level up your skills.
        </p>

        <div className="hero-buttons">

          <Link to="/labs" className="btn-primary">
            Enter Campus
          </Link>

          <Link to="/dashboard" className="btn-secondary">
            View Dashboard
          </Link>

        </div>

      </section>


      {/* FEATURES */}

      <section className="features">

        <div className="feature-card">
          <h3>🐍 Python Lab</h3>
          <p>Practice Python basics, loops, and algorithms.</p>
        </div>

        <div className="feature-card">
          <h3>☕ Java Lab</h3>
          <p>Learn object-oriented programming with Java.</p>
        </div>

        <div className="feature-card">
          <h3>⚔️ Battle Arena</h3>
          <p>Compete in coding battles and solve challenges.</p>
        </div>

        <div className="feature-card">
          <h3>🏆 Scoreboard</h3>
          <p>Track XP, badges, and leaderboard ranking.</p>
        </div>

      </section>

    </div>
  )
}