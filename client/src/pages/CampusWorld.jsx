import { useState } from "react";
import "./CampusWorld.css";

export default function CampusWorld(){

  const [selectedLab,setSelectedLab] = useState(null);

  const labs = {
    python:{
      title:"Python Lab",
      description:"Practice Python basics, loops, data structures and algorithms.",
      projects:["Calculator","Data Annoalyzer","Mini AI Bot"]
    },

    java:{
      title:"Java Lab",
      description:"Learn OOP concepts and backend programming using Java.",
      projects:["Student Manager","Bank System","REST API"]
    },

    arena:{
      title:"Battle Arena",
      description:"Solve coding challenges and compete with others.",
      projects:["Algorithm Battles","Speed Coding","Hackathons"]
    }
  }

  return(
    <div className="campus-world">

      <img 
        src="/assets/python-lab.png"
        className="building python"
        onClick={()=>setSelectedLab(labs.python)}
      />

      <img 
        src="/assets/java-lab.png"
        className="building java"
        onClick={()=>setSelectedLab(labs.java)}
      />

      <img 
        src="/assets/battle-arena.png"
        className="building arena"
        onClick={()=>setSelectedLab(labs.arena)}
      />

      {selectedLab && (
        <div className="lab-modal">
          <div className="lab-card">

            <h2>{selectedLab.title}</h2>
            <p>{selectedLab.description}</p>

            <h4>Projects</h4>
            <ul>
              {selectedLab.projects.map((p,i)=>(
                <li key={i}>{p}</li>
              ))}
            </ul>

            <button onClick={()=>setSelectedLab(null)}>Close</button>

          </div>
        </div>
      )}

    </div>
  )
}