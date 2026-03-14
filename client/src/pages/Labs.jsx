import { Link } from "react-router-dom"
import Header from "../components/Header"
import "./CampusWorld.css"
import "./Labs.css"

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

        <img src={collegeImg} className="campus-bg" alt="Campus"/>

        <Link to="/labs/codecore">
         <img src={codeCoreImg} className="building codecore" alt="CodeCore Lab"/>
         <div className="lab-label codecore">CodeCore Lab</div>
         
        </Link>

       <Link to="/labs/python">
         <img src={pythonImg} className="building python" alt="Python Lab"/>
         <div className="lab-label python">Python Lab</div>
       </Link>

      <Link to="/labs/java">
         <img src={javaImg} className="building java" alt="Java Lab"/>
         <div className="lab-label java">Java Lab</div>
      </Link>

      <Link to="/dashboard">
        <img src={scoreImg} className="building scorecard" alt="Scoreboard"/>
         <div className="lab-label scorecard">Scorecard</div>
       </Link>

     <Link to="/labs">
        <img src={battleImg} className="building battle" alt="Battle Arena"/>
        <div className="lab-label battle">Battle Arena</div>  
    </Link>

</div>

      </div>

      
    </div>
  )
  
}