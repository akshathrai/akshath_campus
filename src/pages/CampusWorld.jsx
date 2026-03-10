import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./CampusWorld.css";

import pythonImg from "../assets/campus/python.png";
import javaImg from "../assets/campus/java.png";
import battleImg from "../assets/campus/battle.png";
import scoreImg from "../assets/campus/scorecard.png";
import codeCoreImg from "../assets/campus/codecore.png";
import collegeImg from "../assets/campus/college.png";

export default function CampusWorld() {
  const navigate = useNavigate();
  const [activeBuilding, setActiveBuilding] = useState(null);

  const handleClick = (route, buildingName) => {
    setActiveBuilding(buildingName);

    setTimeout(() => {
      navigate(route);
    }, 500); // wait for animation
  };

  return (
    <div className="campus-container">
      <h1 className="campus-title">🏫 Campus404</h1>

      <div className="campus-map">
        <img
           src={collegeImg}
           className="building college"
           alt="College Campus"
        />
        <img
          src={codeCoreImg}
          className={`building codecore ${activeBuilding === "codecore" ? "zoom" : ""}`}
          onClick={() => handleClick("/labs/codecore", "codecore")}
          alt="CodeCore"
        />

        <img
          src={pythonImg}
          className={`building python ${activeBuilding === "python" ? "zoom" : ""}`}
          onClick={() => handleClick("/labs/python", "python")}
          alt="Python Lab"
        />

        <img
          src={javaImg}
          className={`building java ${activeBuilding === "java" ? "zoom" : ""}`}
          onClick={() => handleClick("/labs/java", "java")}
          alt="Java Lab"
        />

        <img
          src={scoreImg}
          className={`building scorecard ${activeBuilding === "scorecard" ? "zoom" : ""}`}
          onClick={() => handleClick("/dashboard", "scorecard")}
          alt="Scorecard"
        />

        <img
          src={battleImg}
          className={`building battle ${activeBuilding === "battle" ? "zoom" : ""}`}
          onClick={() => handleClick("/labs", "battle")}
          alt="Battle Arena"
        />

      </div>
    </div>
  );
}