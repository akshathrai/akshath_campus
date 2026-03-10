import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./CampusWorld.css"

import pythonImg from "../assets/campus/python.png"
import javaImg from "../assets/campus/java.png"
import battleImg from "../assets/campus/battle.png"
import scoreImg from "../assets/campus/scorecard.png"
import codeCoreImg from "../assets/campus/codecore.png"
import collegeImg from "../assets/campus/college.png"

export default function Labs() {

  return (
    <div className="page">
      <Header />

      <div className="campus-container">

        <div className="campus-map">

          <Link to="/labs/codecore">
            <img
              src={codeCoreImg}
              className="building codecore"
              alt="CodeCore Lab"
            />
          </Link>

          <Link to="/labs/python">
            <img
              src={pythonImg}
              className="building python"
              alt="Python Lab"
            />
          </Link>

          <Link to="/labs/java">
            <img
              src={javaImg}
              className="building java"
              alt="Java Lab"
            />
          </Link>

          <Link to="/dashboard">
            <img
              src={scoreImg}
              className="building scorecard"
              alt="Scoreboard"
            />
          </Link>

          <Link to="/labs">
            <img
              src={battleImg}
              className="building battle"
              alt="Battle Arena"
            />
          </Link>

          <img
            src={collegeImg}
            className="building college"
            alt="College"
          />

        </div>

      </div>

      <Footer />
    </div>
  )
}