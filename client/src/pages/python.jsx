import { useNavigate } from "react-router-dom"

export default function PythonLab(){

const navigate = useNavigate()

const modules = [
  {
    id:1,
    title:"Python Basics – Start Coding",
    desc:"Learn variables, print statements, and basic Python syntax.",
    lessons:10,
    xp:500
  },
  {
    id:2,
    title:"Conditions & Logic",
    desc:"Master if, else, and logical operators.",
    lessons:8,
    xp:400
  },
  {
    id:3,
    title:"Loops",
    desc:"Learn for loops and while loops to automate tasks.",
    lessons:9,
    xp:450
  }
]

return(

<div className="modules-container">

<h1>Python Lab Modules</h1>

<div className="modules-grid">

{modules.map((m)=>(

<div key={m.id} className="module-card">

<div className="module-header">

<h2>{m.title}</h2>

</div>

<div className="module-body">

<p>{m.desc}</p>

<div className="module-info">

<span>{m.lessons} Lessons</span>
<span>{m.xp} XP</span>

</div>

<button
className="start-btn"
onClick={()=>navigate(`/labs/python/module/${m.id}`)}
>
Start →
</button>

</div>

</div>

))}

</div>

</div>

)

}