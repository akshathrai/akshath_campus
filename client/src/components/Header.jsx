import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthModal from "./AuthModal";
import logo from "../assets/logo.svg";

export default function Header() {
  const { pathname } = useLocation();
  const [modal, setModal] = useState(null);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">

          {/* Logo */}
          <Link to="/" className="logo-container">
            <img
              src={logo}
              alt="Campus404 Logo"
              className="logo"
            />
          </Link>

          {/* Navigation */}
          <nav className="header-nav">
            <Link
              to="/dashboard"
              className={`nav-link ${
                pathname === "/dashboard" ? "active" : ""
              }`}
            >
              Dashboard
            </Link>
          </nav>

          {/* Buttons */}
          <div className="header-actions">
            <button
              className="btn-ghost-sm"
              onClick={() => setModal("login")}
            >
              Log In
            </button>

            <button
              className="btn-orange-sm"
              onClick={() => setModal("register")}
            >
              Register
            </button>
          </div>
        </div>
      </header>

      {modal && (
        <AuthModal
          defaultTab={modal}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}