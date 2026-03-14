import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="page">
      <Header />

      <main className="dashboard-main">

        {/* Top bar */}
        <div className="dash-topbar">
          <div>
            <h1 className="dash-greeting">
              Welcome back, <span className="dash-username">Student</span>
            </h1>
            <p className="dash-sub">
              Pick a lab on the map or jump straight to a challenge.
            </p>
          </div>

          <div className="dash-stats">
            <div className="dash-stat">
              <span className="stat-val">—</span>
              <span className="stat-lbl">XP</span>
            </div>

            <div className="dash-stat">
              <span className="stat-val">—</span>
              <span className="stat-lbl">Levels Done</span>
            </div>

            <div className="dash-stat">
              <span className="stat-val">—</span>
              <span className="stat-lbl">Badges</span>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="map-placeholder">
          <div className="map-placeholder-inner">
            <div className="map-icon">🗺️</div>
            <h2>Isometric Map</h2>
            <p>
              The game world map is being built by the map team.<br />
              This area will be replaced with the interactive isometric renderer.
            </p>
            <div className="map-placeholder-badge">Coming Soon</div>
          </div>
        </div>

        {/* Quick shortcut */}
        <div className="dash-shortcuts">
          <Link to="/labs" className="shortcut-card">
            <span className="shortcut-icon">⚡</span>

            <div>
              <div className="shortcut-title">
                Go to Labs
              </div>

              <div className="shortcut-sub">
                Open the campus map
              </div>
            </div>

            <span className="shortcut-arrow">→</span>
          </Link>
        </div>

      </main>
    </div>
  )
}